import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';

test.describe('Blog Page', () => {
    let blogPage: BlogPage;

    test('Go to Blog page and verify the recent posts', async ({ page }) => {
        blogPage = new BlogPage(page);

        await blogPage.navigate()

        for (const el of await blogPage.RecentPosts.elementHandles()) {
            expect((await el.textContent())?.trim()?.length).toBeGreaterThan(10)

        }

        expect(await blogPage.RecentPosts.count()).toEqual(5);



















    })


})
