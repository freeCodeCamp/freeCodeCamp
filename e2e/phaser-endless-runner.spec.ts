import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page } from '@playwright/test';
import { clearEditor, getEditors } from './utils/editor';
import { isMacOS } from './utils/user-agent';

const BLOCK_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/workshop-side-scrolling-endless-runner'
);

const stepIdHex = (n: number) =>
  `66faa600000000000000${(0xc9 + n).toString(16).padStart(4, '0')}`;

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
  `/learn/certified-game-developer-with-phaser/workshop-side-scrolling-endless-runner/step-${n}`;

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
        readStepJs(3).replace(
          /this\.load\.image\(\s*"sky"/,
          'this.load.image("SKY"'
        ),
        readStepJs(3).replace(
          /\/curriculum-assets\/phaser\/spritesheets\/parallax-sky\.png/,
          '/parallax-sky.png'
        )
      ];
    case 3:
      return [
        readStepJs(4).replace(
          /240\s*,\s*160\s*,\s*480\s*,\s*320\s*,\s*"sky"/,
          '0, 0, 480, 320, "sky"'
        ),
        readStepJs(4).replace(/this\.tickParallax\s*=\s*\(/, 'this.tick = (')
      ];
    case 9:
      return [
        readStepJs(10).replace(
          /this\.jumpKey\s*=\s*this\.input\.keyboard\.addKey\(\s*"SPACE"\s*\)/,
          'this.jumpKey = this.input.keyboard.addKey("ENTER")'
        )
      ];
    case 12:
      return [
        readStepJs(13).replace(
          /if\s*\(\s*canJump\s*&&\s*buffered\s*\)/,
          'if (canJump || buffered)'
        ),
        readStepJs(13).replace(
          /const\s+buffered\s*=\s*time\s*-\s*this\.lastJumpPressedAt\s*<\s*120/,
          'const buffered = time - this.lastJumpPressedAt > 120'
        )
      ];
    case 17:
      return [
        readStepJs(18).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.obstacles/,
          'this.physics.add.collider(this.player, this.obstacles'
        )
      ];
    case 22:
      return [
        readStepJs(23).replace(
          /localStorage\.setItem\(\s*"runner:best"/,
          'localStorage.setItem("best"'
        )
      ];
    case 25:
      return [
        readStepJs(26).replace(
          /520\s*-\s*this\.lastObstacleX\s*<\s*200/,
          '520 - this.lastObstacleX > 200'
        )
      ];
    case 29:
      return [
        readStepJs(30).replace(
          /this\.canDoubleJump\s*&&\s*!this\.didDoubleJump/,
          'this.canDoubleJump || !this.didDoubleJump'
        )
      ];
    case 33:
      return [
        readStepJs(34).replace(
          /this\.cameras\.main\.shake\(\s*220\s*,\s*0\.012\s*\)/,
          'this.cameras.main.flash(220)'
        )
      ];
    case 37:
      return [
        readStepJs(38).replace(
          /\(prefers-reduced-motion:\s*reduce\)/,
          '(prefers-reduced: reduce)'
        )
      ];
    case 41:
      return [
        readStepJs(42).replace(
          /this\.cameras\.main\.ignore\(\s*this\.hud\s*\)/,
          'this.cameras.main.setScroll(this.hud)'
        )
      ];
    case 43:
      return [
        readStepJs(44).replace(/"keydown-R"/, '"keydown-Q"'),
        readStepJs(44).replace(
          /if\s*\(\s*this\.gameOver\s*\)\s*this\.scene\.restart\(\s*\)/,
          'this.scene.restart()'
        )
      ];
    case 44:
      return [
        readStepJs(45).replace(
          /localStorage\.getItem\(\s*"runner:sessions"\s*\)/,
          'localStorage.getItem("sessions")'
        )
      ];
    case 45: {
      const sol = readStepSolution(45);
      return [
        sol.replace(/this\.sessions\s*\+=\s*1/, 'this.sessions = 1'),
        sol.replace(
          /localStorage\.setItem\(\s*"runner:sessions"\s*,\s*String\(\s*this\.sessions\s*\)\s*\)/,
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

test.describe('Phaser Endless Runner', () => {
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

  test('walks through all 45 steps', async ({ page, browserName }) => {
    test.setTimeout(30 * 60 * 1000);
    for (let n = 1; n <= 44; n++) {
      await test.step(`step ${n} → ${n + 1}`, async () => {
        await solveStep({ page, browserName, n });
      });
    }
    await test.step('step 45 (final)', async () => {
      const seed = readStepJs(45);
      const solution = readStepSolution(45);
      await page.goto(stepUrl(45));
      await dismissInterruptingModals(page);

      await enterCode({ page, browserName, contents: seed });
      await assertRejected(page);

      await enterCode({ page, browserName, contents: solution });
      await assertAccepted(page);
    });
  });

  for (const [from, to] of [
    [1, 5],
    [9, 12],
    [17, 22],
    [25, 29],
    [33, 37],
    [41, 45]
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
