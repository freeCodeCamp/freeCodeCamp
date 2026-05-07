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
  'curriculum/challenges/english/blocks/workshop-side-scrolling-platformer'
);

const STEP_HEX_BASE = '66faa400000000000000';
const STEP_ID_OFFSET = 0xc3;
const TOTAL_STEPS = 55;

const stepIdHex = (n: number) =>
  `${STEP_HEX_BASE}${(STEP_ID_OFFSET + n).toString(16).padStart(4, '0')}`;

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
  `/learn/certified-game-developer-with-phaser/workshop-side-scrolling-platformer/step-${n}`;

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
        readStepJs(2).replace(
          /super\(\s*"MainScene"\s*\)/,
          'super("GameScene")'
        )
      ];
    case 2:
      return [
        readStepJs(3).replace(
          /this\.load\.spritesheet\(\s*"hero"/,
          'this.load.spritesheet("player"'
        ),
        readStepJs(3).replace(
          /frameWidth:\s*16,\s*frameHeight:\s*16/,
          'frameWidth: 32, frameHeight: 32'
        )
      ];
    case 3:
      return [
        readStepJs(4).replace(
          /this\.physics\.add\.staticGroup\(\s*\)/,
          'this.physics.add.group()'
        ),
        readStepJs(4).replace(
          /this\.add\.rectangle\(\s*240\s*,\s*120\s*,\s*64\s*,\s*16/,
          'this.add.rectangle(240, 100, 64, 16'
        )
      ];
    case 4:
      return [
        readStepJs(5).replace(
          /this\.physics\.add\.sprite\(\s*40\s*,\s*60\s*,\s*"hero"\s*,\s*12\s*\)/,
          'this.physics.add.sprite(40, 60, "hero", 0)'
        ),
        readStepJs(5).replace(
          /this\.player\.setCollideWorldBounds\(\s*true\s*\)/,
          'this.player.setCollideWorldBounds(false)'
        )
      ];
    case 5:
      return [
        readStepJs(6).replace(
          /this\.physics\.add\.collider\(\s*this\.player\s*,\s*this\.platforms\s*\)/,
          'this.physics.add.overlap(this.player, this.platforms)'
        )
      ];
    case 6:
      return [
        readStepJs(7).replace(
          /this\.cursors\s*=\s*this\.input\.keyboard\.createCursorKeys\(\s*\)/,
          'this.cursors = this.input.keyboard.addKeys("WASD")'
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

test.describe('Phaser Side-Scrolling Platformer', () => {
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

  test('walks through all 55 steps', async ({ page, browserName }) => {
    test.setTimeout(40 * 60 * 1000);
    for (let n = 1; n < TOTAL_STEPS; n++) {
      await test.step(`step ${n} → ${n + 1}`, async () => {
        await solveStep({ page, browserName, n });
      });
    }
    await test.step(`step ${TOTAL_STEPS} (final)`, async () => {
      const seed = readStepJs(TOTAL_STEPS);
      const solution = readStepSolution(TOTAL_STEPS);
      await page.goto(stepUrl(TOTAL_STEPS));
      await dismissInterruptingModals(page);

      await enterCode({ page, browserName, contents: seed });
      await assertRejected(page);

      await enterCode({ page, browserName, contents: solution });
      await assertAccepted(page);
    });
  });

  test('rejects wrong code: lessons 1-6', async ({ page, browserName }) => {
    test.setTimeout(5 * 60 * 1000);
    for (let n = 1; n <= 6; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });
});
