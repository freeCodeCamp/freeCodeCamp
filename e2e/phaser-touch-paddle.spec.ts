import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page } from '@playwright/test';
import { clearEditor, getEditors } from './utils/editor';
import { isMacOS } from './utils/user-agent';

const RUN = process.env.SHOW_UPCOMING_CHANGES === 'true';

const BLOCK_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/workshop-touch-paddle-prototype'
);

const stepIdHex = (n: number) =>
  `66faa30000000000000000${(0xa6 + n).toString(16).padStart(2, '0')}`;

const stripMarkers = (s: string) =>
  s.replace(/--fcc-editable-region--\n?/g, '');

const extractJsBlock = (markdown: string, section: 'seed' | 'solutions') => {
  const header =
    section === 'seed' ? /^## --seed-contents--$/m : /^# --solutions--$/m;
  const segment = markdown.split(header)[1];
  if (!segment) return null;
  const sectionEnd = segment.split(/^# --/m)[0];
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
    await startCoding.click();
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
  `/learn/certified-game-developer-with-phaser/workshop-touch-paddle-prototype/step-${n}`;

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
        readStepJs(2).replace(/width:\s*480/, 'width: 320'),
        readStepJs(2).replace(
          /new\s+Phaser\.Game\(\s*config\s*\)/,
          'new Phaser.Game(cfg)'
        )
      ];
    case 2:
      return [
        readStepJs(3).replace(
          /this\.bg\s*=\s*this\.add\.rectangle\(\s*240\s*,\s*320\s*,\s*480\s*,\s*640\s*,\s*0x223344/,
          'this.bg = this.add.rectangle(240, 320, 480, 640, 0x000000'
        ),
        readStepJs(3).replace(
          /this\.paddle\s*=\s*this\.add\.rectangle\(\s*240\s*,\s*580\s*,\s*80\s*,\s*16/,
          'this.paddle = this.add.rectangle(240, 580, 80, 32'
        ),
        readStepJs(3).replace(
          /this\.paddle\.body\.setImmovable\(\s*true\s*\)/,
          'this.paddle.body.setImmovable(false)'
        )
      ];
    case 3:
      return [
        readStepJs(4).replace(
          /this\.cursors\s*=\s*this\.input\.keyboard\.createCursorKeys\(\s*\)/,
          'this.keys = this.input.keyboard.createCursorKeys()'
        ),
        readStepJs(4).replace(
          /this\.input\.keyboard\.createCursorKeys\(\s*\)/,
          'this.input.keyboard.addKeys()'
        ),
        readStepJs(4).replace(
          /this\.cursors\s*=\s*this\.input\.keyboard\.createCursorKeys\(\s*\)/,
          'this.cursors = null'
        )
      ];
    case 4:
      return [
        readStepJs(5).replace(/this\.paddle\.x\s*-=\s*4/, 'this.paddle.x -= 8'),
        readStepJs(5).replace(
          /this\.paddle\.x\s*\+=\s*4/,
          'this.paddle.x += 2'
        ),
        readStepJs(5).replace(
          /else\s+if\s*\(\s*this\.cursors\.right\.isDown/,
          'if (this.cursors.right.isDown'
        )
      ];
    case 5:
      return [
        readStepJs(6).replace(
          /Phaser\.Math\.Clamp\(\s*this\.paddle\.x\s*,\s*40\s*,\s*440\s*\)/,
          'Phaser.Math.Clamp(this.paddle.x, 0, 440)'
        ),
        readStepJs(6).replace(
          /Phaser\.Math\.Clamp\(\s*this\.paddle\.x\s*,\s*40\s*,\s*440\s*\)/,
          'Phaser.Math.Clamp(this.paddle.x, 40, 480)'
        ),
        readStepJs(6).replace(
          /this\.paddle\.x\s*=\s*Phaser\.Math\.Clamp/,
          'this.paddle.y = Phaser.Math.Clamp'
        )
      ];
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

test.describe('Phaser Touch Paddle Prototype', () => {
  test.skip(
    ({ browserName }) => !RUN || browserName !== 'chromium',
    RUN
      ? 'Only chromium supports the clipboard API used here.'
      : 'Set SHOW_UPCOMING_CHANGES=true to run this suite while the chapter is coming-soon.'
  );

  test.beforeAll(() => {
    if (!RUN) return;
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

  test('rejects wrong code: lessons 1-5', async ({ page, browserName }) => {
    test.setTimeout(5 * 60 * 1000);
    for (let n = 1; n <= 5; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });
});
