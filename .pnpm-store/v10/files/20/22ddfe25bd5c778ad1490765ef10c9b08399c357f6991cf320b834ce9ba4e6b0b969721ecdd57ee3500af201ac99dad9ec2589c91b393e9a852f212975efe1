'use strict'

const { test, expect } = require('@playwright/test')

const URL_DOCUMENTATION = '/documentation'
const URL_FAVICON = '/documentation/static/theme/favicon.svg'

test.describe('Check customizations', () => {
  test('Check JS injection', async ({ page }) => {
    await page.goto(URL_DOCUMENTATION)
    await page.waitForLoadState('networkidle')

    page.on('dialog', async dialog => {
      expect(dialog.type() === 'beforeunload').toBeTruthy()
      expect(dialog.message() === 'unloaded test-theme').toBeTruthy()
      await dialog.dismiss()
    })
    await page.close({ runBeforeUnload: true })
  })

  test('Check CSS injection', async ({ page }) => {
    await page.goto(URL_DOCUMENTATION)
    await page.waitForLoadState('networkidle')

    const element = await page.waitForSelector('button.download-url-button')
    const color = await element.evaluate(el => window.getComputedStyle(el).getPropertyValue('background-color'))
    expect(color).toBe('rgb(255, 0, 0)')
  })

  test('Check custom favicon', async ({ page }) => {
    await page.goto(URL_FAVICON)

    const faviconId = await (await page.waitForSelector('svg')).getAttribute('id')
    expect(faviconId).toBe('example-logo') // it is included in the svg file
  })

  test('Check custom logo', async ({ page }) => {
    await page.goto(URL_DOCUMENTATION)
    await page.waitForLoadState('networkidle')

    const logoSrc = await page.locator('img').first().getAttribute('src')
    await page.goto(logoSrc)

    const logoId = await (await page.waitForSelector('svg')).getAttribute('id')
    expect(logoId).toBe('example-logo') // it is included in the svg file
  })
})

test.describe('Check redirection and url handling of static assets', () => {
  test('Check static/index.html redirects', async ({ page }) => {
    const jsonResponsePromise = page.waitForResponse(/json/)
    await page.goto(`${URL_DOCUMENTATION}/static/index.html`)

    // Check if the page is redirected to /documentation
    const url = await page.url()
    expect(url).toContain(`${URL_DOCUMENTATION}`)
    expect(url).not.toContain('static/index.html')

    // Check if the page has requested the json spec, and if so has it succeeded
    const jsonResponse = await jsonResponsePromise
    expect(jsonResponse.ok()).toBe(true)
  })

  test('Check root UI without slash loads json spec', async ({ page }) => {
    const jsonResponsePromise = page.waitForResponse(/json/)
    await page.goto(`${URL_DOCUMENTATION}`)

    // Check if the page has requested the json spec, and if so has it succeeded
    const jsonResponse = await jsonResponsePromise
    expect(jsonResponse.ok()).toBe(true)
  })

  test('Check root UI with trailing slash loads json spec', async ({ page }) => {
    const jsonResponsePromise = page.waitForResponse(/json/)
    await page.goto(`${URL_DOCUMENTATION}/`)

    // Check if the page has requested the json spec, and if so has it succeeded
    const jsonResponse = await jsonResponsePromise
    expect(jsonResponse.ok()).toBe(true)
  })

  test('Check root UI with hash loads json spec', async ({ page }) => {
    const jsonResponsePromise = page.waitForResponse(/json/)
    await page.goto(`${URL_DOCUMENTATION}#default/get_example`)

    // Check if the page has requested the json spec, and if so has it succeeded
    const jsonResponse = await jsonResponsePromise
    expect(jsonResponse.ok()).toBe(true)
  })
})
