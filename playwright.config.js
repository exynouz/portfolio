import {defineConfig} from '@playwright/test';
import {existsSync} from 'node:fs';

const localChrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

export default defineConfig({
  testDir: './tests',
  workers: 1,
  use: {
    baseURL: 'http://127.0.0.1:5173',
    viewport: {width: 1440, height: 1000},
    launchOptions: existsSync(localChrome) ? {executablePath: localChrome} : {},
  },
  webServer: {
    command: 'npm run dev -- --strictPort',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: !process.env.CI,
  },
});
