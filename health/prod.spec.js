// @ts-check
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default; // 1

test.describe('Home', () => { 

  test('Headline is correct', async ({ page }) => {
    await page.goto('https://whatcompublichospital.org');
    const title = page.locator('h1');
    await expect(title).toHaveCount(1);
    await expect(title).toHaveText('Whatcom Deserves a Public Hospital');
  });

  test('Page should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://whatcompublichospital.org');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 

    expect(accessibilityScanResults.violations).toEqual([]); 
  });
});
