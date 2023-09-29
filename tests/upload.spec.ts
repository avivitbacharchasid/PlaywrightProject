import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
const path = require('path');

test.describe('Upload File', () => {
    let cartPage: CartPage;
    const fileName = ['big.png', 'Ph.png']

    for (const name of fileName) {
        test(`Should upload a ${name} file`, async ({ page }) => {
            cartPage = new CartPage(page);

            //open url 
            await page.goto('https://practice.sdetunicorns.com/cart/')


            //store the test file path 

            const filePath = path.join(__dirname, `../data/${name}`);

            //upload test file 

            cartPage.uploadComponent().uploadFile(filePath);



            // Wait for condition 
            // await page.locator('#wfu_messageblock_header_1_1')
            //     .waitFor({ state: 'visible', timeout: 10000 })

            // assertion with timeout till the text will be visible

            await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully', { timeout: 100000 });



        })


    }




})
