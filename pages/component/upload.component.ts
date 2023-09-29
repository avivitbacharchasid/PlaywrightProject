import { Page, Locator } from '@playwright/test';

class UploadComponent {
    page: Page;
    uploadInput: string;
    sumbitBtn: Locator;
    successTxt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uploadInput = 'input#upfile_1'
        this.sumbitBtn = page.locator('#upload_1')
        this.successTxt = page.locator('#wfu_messageblock_header_1_1')



    }

    async uploadFile(filePath: string) {
        //upload test file 
        await this.page.setInputFiles(this.uploadInput, filePath);

        //click the submit button 
        await this.sumbitBtn.click();
    }


}

export default UploadComponent;