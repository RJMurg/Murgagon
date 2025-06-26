import type { PageServerLoad, Actions } from './$types';
import prisma from '$lib/server/prisma';

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
	default: async ({ request }) => {
		const formData = await request.formData();
		const murgID = formData.get('murgID') as string;

		const result = await prisma.murgagon.findFirst({
			where: {
				murgId: murgID
			}
		});

		if (!result) {
			return { error: 'Murgagon not found' };
		} else {
			return { murgagon: result };
		}
	}
} satisfies Actions;
