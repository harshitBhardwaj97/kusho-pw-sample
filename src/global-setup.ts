import { chromium, FullConfig } from '@playwright/test';
import { SetupUtils } from './utils';

async function globalSetup(config: FullConfig) {
  console.log("Running global Setup")

  // Launch browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Perform login
    await SetupUtils.setup(page);

    // Save authenticated state
    await page.context().storageState({ path: './auth.json' });
  } finally {
    await browser.close();
  }
}

export default globalSetup;
