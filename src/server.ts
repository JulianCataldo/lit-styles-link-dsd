import { IP_LOCALHOST, PUBLIC_DIR } from '@gracile/gracile/env';
import { createHandlers, printAddressInfos } from '@gracile/gracile/node';
import express from 'express';

import { authentication } from './middlewares.js';

// --- Setup
const app = express();
const { handlers } = await createHandlers();

// --- Routes

app.use(express.static(PUBLIC_DIR));

// Separate JSON API
app.use('/api', (_req, res, _next) =>
	res.json({
		hello: `world - ${Math.random()}`,
	}),
);

// Populate locals
app.use((_req, res, next) => {
	const traceId = crypto.randomUUID();

	res.locals.traceId = traceId;

	next();
});

// Protected route with middleware
app.use('/private/', authentication);

// Static assets or pre-rendered routes

// Gracile routes
app.use(handlers);

export { app };

// --- Let's go!
const server = app.listen(3030, IP_LOCALHOST, () => {
	printAddressInfos(server);
});

// NOTE: Close Express server on Hot Module Reload
if (import.meta.hot) import.meta.hot.accept(() => server.close());
