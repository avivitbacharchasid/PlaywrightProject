import { Page, Locator } from '@playwright/test';


class ContactPage {
    page: Page;
    FirstName: Locator;
    Email: Locator;
    Phone: Locator;
    sumbitBtn: Locator;
    foramSumbit: Locator;



    constructor(page: Page) {
        this.page = page;
        this.FirstName = page.locator('//*[@id="evf-277-field_ys0GeZISRs-1"]')
        this.Email = page.locator('//*[@id="evf-277-field_LbH5NxasXM-2"]')
        this.Phone = page.locator('//*[@id="evf-277-field_66FR384cge-3"]')
        this.sumbitBtn = page.locator('#evf-submit-277')
        this.foramSumbit = page.locator('text=Thanks for contacting us! We will be in touch with you shortly')

    }

    async navigate() {
        await this.page.goto('/contact')
    }

    async sumbitForm(name, email, phone) {

        await this.FirstName.fill(name)

        await this.Email.fill(email)

        await this.Phone.fill(phone)

        await this.sumbitBtn.click()

    }


}

export default ContactPage;