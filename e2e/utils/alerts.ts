import { expect, type Page } from '@playwright/test';

export const alertToBeVisible = async (page: Page, text: string) =>
  await expect(page.getByRole('alert').filter({ hasText: text })).toBeVisible();
