import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page } from '@playwright/test';
import { clearEditor, getEditors } from './utils/editor';
import { isMacOS } from './utils/user-agent';

const BLOCK_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/workshop-camera-playground'
);

const stepIdHex = (n: number) =>
  `66faa600000000000000${(0xa9 + n).toString(16).padStart(4, '0')}`;

const stripMarkers = (s: string) =>
  s.replace(/--fcc-editable-region--\n?/g, '');

const extractJsBlock = (markdown: string, section: 'seed' | 'solutions') => {
  const header =
    section === 'seed' ? /^## --seed-contents--$/m : /^# --solutions--$/m;
  const segment = markdown.split(header)[1];
  if (!segment) return null;
  const sectionEnd = segment.split(/^# --[^-]/m)[0];
  const blocks = Array.from(sectionEnd.matchAll(/```js\n([\s\S]*?)\n```/g));
  if (blocks.length === 0) return null;
  return blocks[blocks.length - 1][1];
};

const readStepJs = (n: number) => {
  const md = fs.readFileSync(
    path.join(BLOCK_DIR, `${stepIdHex(n)}.md`),
    'utf8'
  );
  const seed = extractJsBlock(md, 'seed');
  if (!seed) throw new Error(`step ${n} has no js seed block`);
  return stripMarkers(seed).replace(/\n+$/, '\n');
};

const readStepSolution = (n: number) => {
  const md = fs.readFileSync(
    path.join(BLOCK_DIR, `${stepIdHex(n)}.md`),
    'utf8'
  );
  const sol = extractJsBlock(md, 'solutions');
  if (!sol) throw new Error(`step ${n} has no --solutions--`);
  return sol.replace(/\n+$/, '\n');
};

const dismissInterruptingModals = async (page: Page) => {
  const askLater = page.getByRole('button', { name: 'Ask me later' });
  if (await askLater.isVisible().catch(() => false)) {
    await askLater.click();
    await expect(askLater).toBeHidden({ timeout: 5000 });
  }
  const startCoding = page.getByRole('button', { name: 'Start coding!' });
  if (await startCoding.isVisible().catch(() => false)) {
    for (let attempt = 0; attempt < 3; attempt++) {
      await startCoding
        .click({ force: true, timeout: 5000 })
        .catch(() => undefined);
      try {
        await expect(startCoding).toBeHidden({ timeout: 5000 });
        return;
      } catch {
        await page.keyboard.press('Escape').catch(() => undefined);
      }
    }
  }
};

const pasteJs = async (page: Page, contents: string) => {
  await page.evaluate(
    async text => await navigator.clipboard.writeText(text),
    contents
  );
  await page.keyboard.press(isMacOS ? 'Meta+v' : 'Control+v');
};

const stepUrl = (n: number) =>
  `/learn/certified-game-developer-with-phaser/workshop-camera-playground/step-${n}`;

const enterCode = async ({
  page,
  browserName,
  contents
}: {
  page: Page;
  browserName: string;
  contents: string;
}) => {
  await getEditors(page).waitFor();
  await page.locator('.monaco-editor').first().click();
  await clearEditor({ page, browserName });
  await pasteJs(page, contents);
  await page.waitForTimeout(500);
};

const checkButton = (page: Page) =>
  page
    .locator(
      '[data-playwright-test-label="lowerJaw-check-button"], [data-playwright-test-label="independentLowerJaw-check-button"]'
    )
    .first();

const submitVisible = (page: Page) =>
  page.evaluate(() => {
    const el = document.querySelector(
      '[data-playwright-test-label="lowerJaw-submit-button"], [data-playwright-test-label="independentLowerJaw-submit-button"]'
    );
    return !!el && el.getAttribute('aria-hidden') !== 'true';
  });

const runCheck = async (page: Page) => {
  await dismissInterruptingModals(page);
  await checkButton(page).click();
  await dismissInterruptingModals(page);
  await page.waitForTimeout(3500);
};

const assertRejected = async (page: Page) => {
  await runCheck(page);
  expect(await submitVisible(page)).toBe(false);
};

const assertAccepted = async (page: Page) => {
  await runCheck(page);
  expect(await submitVisible(page)).toBe(true);
};

const clickSubmit = (page: Page) =>
  page
    .locator(
      '[data-playwright-test-label="lowerJaw-submit-button"], [data-playwright-test-label="independentLowerJaw-submit-button"]'
    )
    .first()
    .click();

const solveStep = async ({
  page,
  browserName,
  n
}: {
  page: Page;
  browserName: string;
  n: number;
}) => {
  const seed = readStepJs(n);
  const solution = readStepJs(n + 1);
  await page.goto(stepUrl(n));
  await dismissInterruptingModals(page);

  await enterCode({ page, browserName, contents: seed });
  await assertRejected(page);

  await enterCode({ page, browserName, contents: solution });
  await assertAccepted(page);
  await clickSubmit(page);
  await expect(page).toHaveURL(new RegExp(`/step-${n + 1}/?$`), {
    timeout: 15000
  });
};

const wrongCodesForStep = (n: number): string[] => {
  switch (n) {
    case 1:
      return [
        readStepJs(2).replace(
          /class\s+MainScene\s+extends\s+Phaser\.Scene/,
          'class GameScene extends Phaser.Scene'
        ),
        readStepJs(2).replace(/super\(\s*"MainScene"\s*\)/, 'super("Main")')
      ];
    case 2:
      return [
        readStepJs(3).replace(/i\s*<\s*16/, 'i < 4'),
        readStepJs(3).replace(/120\s*\+\s*i\s*\*\s*240/, '120 + i * 50')
      ];
    case 3:
      return [
        readStepJs(4).replace(
          /this\.physics\.add\.existing\(\s*this\.player\s*\)/,
          ''
        )
      ];
    case 5:
      return [
        readStepJs(6).replace(
          /this\.cameras\.main\.startFollow\(\s*this\.player\s*\)/,
          'this.cameras.main.centerOn(this.player.x, this.player.y)'
        )
      ];
    case 7:
      return [
        readStepJs(8).replace(
          /this\.cameras\.main\.setBounds\(\s*0\s*,\s*0\s*,\s*4000\s*,\s*600\s*\)/,
          'this.cameras.main.setBounds(0, 0, 480, 320)'
        )
      ];
    case 9:
      return [
        readStepJs(10).replace(/setLerp\(\s*k\s*,\s*k\s*\)/, 'setZoom(k * 0.1)')
      ];
    case 12:
      return [
        readStepJs(13).replace(
          /this\.cameras\.main\.shake\(\s*300\s*,\s*this\.shakeIntensity\s*\)/,
          'this.cameras.main.flash(300)'
        )
      ];
    case 15:
      return [
        readStepJs(16).replace(
          /this\.cameras\.main\.fade\(\s*600/,
          'this.cameras.main.shake(600'
        )
      ];
    case 17: {
      const sol = readStepJs(18);
      return [
        sol.replace(
          /this\.tweens\.add\(\s*\{\s*targets:\s*this\.cameras\.main\s*,\s*zoom:\s*target/,
          'this.cameras.main.setZoom(target);\n      this.tweens.add({ zoom: target'
        )
      ];
    }
    case 19:
      return [
        readStepJs(20).replace(
          /this\.minimap\.setZoom\(\s*0\.06\s*\)/,
          'this.minimap.setZoom(1)'
        )
      ];
    case 23:
      return [readStepJs(24).replace(/"cam:reduce"/g, '"cam:motion"')];
    case 25: {
      const sol = readStepSolution(25);
      return [
        sol.replace(
          /Phaser\.Math\.Clamp\(\s*target\s*,\s*0\.5\s*,\s*2\s*\)/,
          'target'
        ),
        sol.replace(
          /this\.events\.on\(\s*"shutdown"\s*,\s*\(\s*\)\s*=>\s*this\.tweens\.killAll\(\s*\)\s*\)/,
          ''
        )
      ];
    }
    default:
      return [];
  }
};

const verifyWrongCodes = async ({
  page,
  browserName,
  n
}: {
  page: Page;
  browserName: string;
  n: number;
}) => {
  const variants = wrongCodesForStep(n);
  if (variants.length === 0) return;
  await page.goto(stepUrl(n));
  await dismissInterruptingModals(page);
  for (let i = 0; i < variants.length; i++) {
    await test.step(`step ${n} wrong-code variant ${i + 1}`, async () => {
      await enterCode({ page, browserName, contents: variants[i] });
      await assertRejected(page);
    });
  }
};

test.describe('Phaser Camera Playground', () => {
  test.skip(
    ({ browserName }) => browserName !== 'chromium',
    'Only chromium supports the clipboard API used here.'
  );

  test.beforeAll(() => {
    execSync(
      `docker exec mongodb mongosh freecodecamp --quiet --eval 'db.user.updateMany({email: "foo@bar.com"}, {$set: {isDonating: true}})'`,
      { stdio: 'ignore' }
    );
  });

  test.beforeEach(async ({ context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  });

  test('walks through all 25 steps', async ({ page, browserName }) => {
    test.setTimeout(20 * 60 * 1000);
    for (let n = 1; n <= 24; n++) {
      await test.step(`step ${n} → ${n + 1}`, async () => {
        await solveStep({ page, browserName, n });
      });
    }
    await test.step('step 25 (final)', async () => {
      const seed = readStepJs(25);
      const solution = readStepSolution(25);
      await page.goto(stepUrl(25));
      await dismissInterruptingModals(page);

      await enterCode({ page, browserName, contents: seed });
      await assertRejected(page);

      await enterCode({ page, browserName, contents: solution });
      await assertAccepted(page);
    });
  });

  for (const [from, to] of [
    [1, 5],
    [7, 12],
    [15, 19],
    [23, 25]
  ] as const) {
    test(`rejects wrong code: lessons ${from}-${to}`, async ({
      page,
      browserName
    }) => {
      test.setTimeout(7 * 60 * 1000);
      for (let n = from; n <= to; n++) {
        await verifyWrongCodes({ page, browserName, n });
      }
    });
  }
});
