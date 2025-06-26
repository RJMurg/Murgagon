import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const murgID = formData.get('murgID') as string;

		const result = await prisma.murgagon.findUnique({
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
