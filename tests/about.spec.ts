import { test, expect } from '@playwright/test';

test.describe('About', () => {
    test('Open AboutPage and verify title', async ({ page }) => {

        await page.goto('https://practice.sdetunicorns.com/about/')

        await expect(page).toHaveTitle('About – Practice E-Commerce Site')

    })



})
