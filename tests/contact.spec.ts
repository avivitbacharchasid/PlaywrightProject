import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';

test.describe('Contact page', () => {
    let contactPage: ContactPage;

    test('Go to Contact page and fill the fourm', async ({ page }) => {
        contactPage = new ContactPage(page);

        // open url 
        await contactPage.navigate()

        //fill out the input fields and sumbit

        await contactPage.sumbitForm(faker.person.firstName(), faker.internet.email(), faker.phone.number());


        await expect(contactPage.foramSumbit).toBeVisible();













    })


})
