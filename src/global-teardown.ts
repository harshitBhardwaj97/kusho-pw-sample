import { chromium, FullConfig } from '@playwright/test';
import { SetupUtils } from './utils';

async function globalTeardown(config: FullConfig) {
  const { storageState } = config.projects[0].use;

  // Launch browser
  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: storageState as string });
  const page = await context.newPage();

  try {
    // Perform logout
    await SetupUtils.teardown(page);
  } finally {
    await browser.close();
  }
}

export default globalTeardown;
