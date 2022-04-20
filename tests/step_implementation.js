/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    closeBrowser,
    screenshot,
} = require('taiko');
const assert = require("assert");
const obAction = require('./obAction');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

beforeScenario(async (context) => {
    obAction.settcName(context.currentScenario.name);
    console.log("current scenario: " + context.currentScenario.name);
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};
