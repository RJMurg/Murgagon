import type { PageServerLoad, Actions } from './$types';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'dotenv';
import { prisma } from '$lib/server/prisma';
import process from 'process';

config();

export const load = (async ({ cookies }) => {
	const token = cookies.get('token');
	let loggedIn = false;

	const tokenFromDatabase = await prisma.logins.findFirst({
		where: {
			token: token
		}
	});

	if (tokenFromDatabase) {
		if (tokenFromDatabase.expires >= new Date()) {
			loggedIn = true;
		}
	}

	if (loggedIn) {
	}

	return {
		loggedIn
	};
}) satisfies PageServerLoad;

export const actions = {
	login: async ({ cookies, request }) => {
		const formData = await request.formData();
		const password = formData.get('password');

		console.log(password);

		if (password === process.env.ADMIN_PASSWORD) {
			const newToken = uuidv4();
			console.log(newToken);

			await prisma.logins.create({
				data: {
					token: newToken,
					expires: new Date(Date.now() + 1000 * 60 * 60)
				}
			});

			cookies.set('token', newToken, {
				maxAge: 60 * 60,
				path: '/'
			});

			return {
				attemptSuccessful: true
			};
		} else {
			return {
				attemptSuccessful: false
			};
		}
	},

	logout: async ({ cookies }) => {
		const token = cookies.get('token');

		await prisma.logins.deleteMany({
			where: {
				token: token
			}
		});

		cookies.delete('token', {
			path: '/'
		});
	},

	issue: async ({ request }) => {
		const formData = await request.formData();
		const murgID = formData.get('murgID') as string;
		const date = formData.get('date') as string;
		const owner = formData.get('owner') as string;
		const generation = formData.get('generation') as string;

		await prisma.murgagon.create({
			data: {
				murgId: murgID,
				issuedAt: new Date(date),
				owner: owner,
				generation: generation
			}
		});

		return;
	}
} satisfies Actions;
