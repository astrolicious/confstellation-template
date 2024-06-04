import Confstellation from '@astrolicious/confstellation';
import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'server',
	// adapter: ADD_YOUR_ADAPTER_HERE,
	experimental: {
		actions: true,
		rewriting: true,
	},
	integrations: [
		Confstellation({
			config: {
				conferenceName: 'Template',
				conferenceSlogan: 'The best template conference',
				conferenceDate: '2025-01-01T14:00:00Z',
				nav: [
					{ label: 'Home', link: '/' },
				],
			},
		}),
	],
});
