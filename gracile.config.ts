import { defineConfig } from '@gracile/gracile';

export default defineConfig({
	output: 'server',

	vite: {
		build: { target: 'esnext' },
		optimizeDeps: { include: ['@gracile/gracile/node'] },
	},
});
