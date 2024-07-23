import { helpers } from '@gracile/gracile/document';
import { html } from '@gracile/gracile/server-html';

import bootstrapStyles from 'bootstrap/scss/bootstrap.scss?url';

// <!-- Global assets -->
// <!-- <link
//   rel="stylesheet"
//   href=$ {'bootstrap/scss/bootstrap.scss'}
// /> -->
// <!-- <link
//   rel="stylesheet"
//   href=$ {new URL('./common.css', import.meta.url).pathname}
// /> -->
// <!-- <link
//   rel="stylesheet"
//   href=$ {new URL('./document.css', import.meta.url).pathname}
// /> -->

// ${Object.values(helpers.polyfills)}

export const document = (options: { url: URL; title?: string | null }) => html`
	<!doctype html>
	<html lang="en" style="color-scheme: dark" data-bs-theme="dark">
		<head>
			<link rel="preload" as="style" href=${bootstrapStyles} />

			<!-- Helpers -->
			${Object.values(helpers.dev)}
			<!--  -->
			${helpers.fullHydration}

			<!--  -->

			<link rel="stylesheet" href=${bootstrapStyles} />

			<!--  -->

			<script
				type="module"
				src=${new URL('./document.client.ts', import.meta.url).pathname}
			></script>

			<!-- Page assets -->
			${helpers.pageAssets}

			<!-- SEO and page metadata -->
			<title>${options.title}</title>
		</head>

		<body>
			<route-template-outlet></route-template-outlet>
		</body>
	</html>
`;
