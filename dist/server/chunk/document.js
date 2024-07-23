import { h as html, p as pageAssets } from '../server.js';
import 'lit';
import 'lit/directive.js';
import 'lit/directive-helpers.js';
import 'buffer';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const bootstrapStyles = "/assets/bootstrap-C_5tx43a.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * **Defines** a route.
 *
 * See in the [documentation](https://gracile.js.org/docs/learn/usage/defining-routes/).
 */
function defineRoute(options) {
    // NOTE: We need a factory so `instanceof` will work cross-realm.
    // Otherwise it breaks. when invoked from an `ssrLoadModule` context
    // (due to JS>TS transpilation?). Hence "userland".
    return (RouteModule) => {
        const routeModule = new RouteModule(options);
        return routeModule;
    };
}
// TODO: remove this, use `Response.json instead`? Or keep for old envs?
// export function jsonResponse(data: any, init?: ResponseInit) {
//   return new Response(JSON.stringify(data), {
//     ...init,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }
// NOTE: Useful?
// export function notFound(statusText = '404 - Not found') {
// 	return new Response(null, {
// 		status: 404,
// 		statusText,
// 	});
// }

/* eslint-disable func-names */
// Taken from: https://github.com/pladaria/requestidlecallback-polyfill/blob/master/index.js
const requestIdleCallback = `
window.requestIdleCallback =
	window.requestIdleCallback ||
	function (cb) {
		const start = Date.now();
		return setTimeout(() => {
			cb({
				didTimeout: false,
				timeRemaining: () => {
					return Math.max(0, 50 - (Date.now() - start));
				},
			});
		}, 1);
	};

window.cancelIdleCallback =
	window.cancelIdleCallback ||
	function (id) {
		clearTimeout(id);
	};
`;

const errors = html`
	<script type="module">
		if (import.meta.hot) {
			import.meta.hot.on('gracile:ssr-error', (error) => {
				throw new Error(error.message);
			});
		}
	</script>
`;
const fullHydration = html`
	<script type="module">
		// HYDRATE
		import '@gracile/gracile/hydrate';
	</script>
`;
const polyfills = {
  declarativeShadowDom: html`
		<script type="module">
			// DECLARATIVE SHADOW DOM
			import '@gracile/gracile/polyfills/declarative-shadow-dom';
		</script>
	`,
  requestIdleCallback: html`
		${unsafeHTML(`
      <script>
				// REQUEST IDLE CALLBACK - POLYFILL
				${requestIdleCallback}
      </script>
			`)}
	`
};
const helpers = {
  fullHydration,
  polyfills,
  pageAssets,
  dev: {
    // NOTE: Unused for now.
    errors
  }
  // SSR_OUTLET: SSR_OUTLET_MARKER,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const document = (options) => html(_a || (_a = __template(['\n	<!doctype html>\n	<html lang="en" style="color-scheme: dark" data-bs-theme="dark">\n		<head>\n			<link rel="preload" as="style" href=', " />\n\n			<!-- Helpers -->\n			", "\n			<!--  -->\n			", '\n\n			<!--  -->\n\n			<link rel="stylesheet" href=', ' />\n\n			<!--  -->\n\n			<script\n				type="module"\n				src=', "\n			><\/script>\n\n			<!-- Page assets -->\n			", "\n\n			<!-- SEO and page metadata -->\n			<title>", "</title>\n		</head>\n\n		<body>\n			<route-template-outlet></route-template-outlet>\n		</body>\n	</html>\n"])), bootstrapStyles, Object.values(helpers.dev), helpers.fullHydration, bootstrapStyles, new URL("./document.client.ts", import.meta.url).pathname, helpers.pageAssets, options.title);

export { document as a, bootstrapStyles as b, defineRoute as d };
//# sourceMappingURL=document.js.map
