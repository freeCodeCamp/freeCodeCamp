import { test, expect, type Page } from '@playwright/test';

const headerComponentElements = {
    siteHeader: 'site-header',
    skipLink: 'skip-link-header',
    universalNav: 'universal-nav',
    searchBar: 'header-search-bar',
    universalNavLogo: 'universal-nav-logo',
    mainNav: 'main-nav',
    langButton: 'lang-button-nav',
    menuButton: 'exposed-button-nav',
    signUpButton: 'sign-up-cta',
} as const;

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});
