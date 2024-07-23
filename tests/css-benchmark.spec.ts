// example.spec.ts   It works :)

import { test, Page } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }, testInfo) => {
	page = await browser.newPage({
		recordVideo: {
			dir: testInfo.outputPath('videos'),
		},
	});
});

test.afterAll(async ({}, testInfo) => {
	const videoPath = testInfo.outputPath('my-video.webm');
	await Promise.all([page.video().saveAs(videoPath), page.close()]);
	testInfo.attachments.push({
		name: 'video',
		path: videoPath,
		contentType: 'video/webm',
	});
});

test('Login', async () => {
	await page.waitForTimeout(1200);
	// await page.goto('http://localhost:3030/');
	await page.goto('http://localhost:3000/');
	await page.waitForTimeout(1200);
	await page.reload();
	await page.waitForTimeout(1200);
	await page.reload();
	await page.waitForTimeout(1200);
	await page.reload();
	await page.waitForTimeout(1200);
});

// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
// 	await page.goto('http://localhost:3030/');
// 	await page.waitForTimeout(1000);
// 	// await page.reload()

// 	// Expect a title "to contain" a substring.
// 	// await expect(page).toHaveTitle(/Playwright/);
// });

// // test('get started link', async ({ page }) => {
// // 	await page.goto('https://localhost:3000/');

// // 	// Click the get started link.
// // 	await page.getByRole('link', { name: 'Get started' }).click();

// // 	// Expects page to have a heading with the name of Installation.
// // 	await expect(
// // 		page.getByRole('heading', { name: 'Installation' }),
// // 	).toBeVisible();
// // });
