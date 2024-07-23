import '../features/e-style-server-client.js';
import '../features/e-link-server-client.js';

import { defineRoute } from '@gracile/gracile/route';
// import { html } from '@gracile/gracile/server-html';
import { html } from 'lit';

import { document } from '../document.js';

export default defineRoute({
	// prerender: true,

	// handler: {
	// 	GET: ({ url, locals }) => {
	// 		console.log({ locals });
	// 		return { query: url.searchParams.get('q'), traceId: locals.traceId };
	// 	},
	// },

	document: (context) => document({ ...context, title: 'Gracile Home' }),

	template: (/* context */) => html`
		<article>
			<fieldset class="card p-4">
				Style / Server + Client
				<e-style-server-client .animal=${'none'}></e-style-server-client>
			</fieldset>

			<fieldset class="card p-4">
				Link / Server + Client
				<e-link-server-client .animal=${'none'}></e-link-server-client>
			</fieldset>

			<fieldset class="card p-4">
				Adopted / Client
				<e-adopted-client animal=${'none'}></e-adopted-client>
			</fieldset>

			<fieldset class="card p-4">
				Link / Client
				<e-link-client animal=${'none'}></e-link-client>
			</fieldset>
		</article>
	`,
});
