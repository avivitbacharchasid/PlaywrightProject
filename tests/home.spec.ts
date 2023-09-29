import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';
test.describe('Home', () => {
    let homePage: HomePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        // open url 
        await homePage.navigate()


    })

    test('Open HomePage and verify title', async ({ page }) => {

        //verify title 
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.')

    })

    test('Click get stated button using CSS Selector', async ({ page }) => {

        //click the button


        await homePage.getStartedBtn.click();

        //verify url has #get-started we can do that by basicly add regs and not the entire url 
        await expect(page).toHaveURL(/.*#get-started/)

    })

    test('Verify text is visible using text selector', async ({ page }) => {


        //find the text locator 

        const headingText = await homePage.headingText

        //verify heading text is visible
        await expect(headingText).toBeVisible();

    })

    test('Verify home link is enabled using text and css selector', async ({ page }) => {


        //find the  home text locator 


        const homeText = await homePage.homeLink

        //verify home text is visible
        await expect(homeText).toBeEnabled();

    })

    test('Verify serach icon is visible using xpath selector', async ({ page }) => {


        //find the  serach icon


        const serachIcon = await homePage.searchIcon

        //verify home text is visible
        await expect(serachIcon).toBeVisible();

    })

    test('Verify text of all nav links', async ({ page }) => {


        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        // open url 



        //find the  nav links

        const navLinks = homePage.navLinks

        // print out all the links 
        for (const el of await navLinks.elementHandles()) {
            console.log(await el.textContent());
        }

        //verify home text is visible

        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);

    })


})
