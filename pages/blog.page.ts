import { Page, Locator } from '@playwright/test';


class BlogPage {
    page: Page;
    RecentPosts: Locator;


    constructor(page: Page) {
        this.page = page;
        this.RecentPosts = page.locator('#recent-posts-3 li');

    }

    async navigate() {
        await this.page.goto('/blog')
    }


}



export default BlogPage;