import { d as defineRoute, a as document } from './document.js';
import { h as html } from '../server.js';
import 'lit';
import 'lit/directive.js';
import 'lit/directive-helpers.js';
import 'buffer';
import 'lit/directives/unsafe-html.js';
import 'node:stream';
import 'tty';
import 'stream';
import 'fs';
import 'url';
import 'http';
import 'util';
import 'https';
import 'zlib';
import 'crypto';
import 'querystring';
import 'stream/web';
import 'express';

const about = defineRoute({
  // prerender: true,
  document: (context) => document({ ...context, title: "Gracile About" }),
  template: () => html`
		<!--  -->
		<h1>About</h1>

		<div style="height: 140rem; background:grey;"></div>
		<!--  -->
	`
});

export { about as default };
//# sourceMappingURL=about.js.map
