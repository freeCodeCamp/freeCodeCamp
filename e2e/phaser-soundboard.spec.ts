import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page } from '@playwright/test';
import { clearEditor, getEditors } from './utils/editor';
import { isMacOS } from './utils/user-agent';

const BLOCK_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/workshop-soundboard'
);

const stepIdHex = (n: number) =>
  `66faa70000000000000000${(0xa6 + n).toString(16).padStart(2, '0')}`;

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
  `/learn/certified-game-developer-with-phaser/workshop-soundboard/step-${n}`;

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
          /this\.load\.audio\(key,\s*\[`audio\/\$\{key\}\.ogg`,\s*`audio\/\$\{key\}\.mp3`\]\)/,
          'this.load.audio(key, `audio/${key}.ogg`)'
        ),
        readStepJs(3).replace(/"sfx-ping"/, '"sfx-pong"')
      ];
    case 3:
      return [
        readStepJs(4).replace(/0x2a3045/, '0xff0000'),
        readStepJs(4).replace(
          /key\.replace\(\s*"sfx-",\s*""\s*\)/,
          'key.replace("sfx-", "X")'
        )
      ];
    case 4:
      return [
        readStepJs(5).replace(/this\.sfxVolume\s*=\s*0\.6;\n/, ''),
        readStepJs(5).replace(
          /this\.playSfx\s*=\s*\(key\)\s*=>\s*this\.sound\.play\(key\);\n/,
          ''
        ),
        readStepJs(5).replace(
          /bg\.on\("pointerdown",\s*\(\)\s*=>\s*this\.playSfx\(key\)\)/,
          'bg.on("pointerup", () => this.playSfx(key))'
        )
      ];
    case 6:
      return [
        readStepJs(7).replace(
          /this\.input\.once\("pointerdown"/,
          'this.input.on("pointerdown"'
        ),
        readStepJs(7).replace(
          /if\s*\(this\.sound\.locked\)\s*this\.sound\.unlock\(\)/,
          ''
        )
      ];
    case 8:
      return [
        readStepJs(9).replace(
          /loop:\s*true,\s*volume:\s*this\.musicVolume/,
          'loop: false, volume: this.musicVolume'
        )
      ];
    case 9:
      return [
        readStepJs(10).replace(
          /this\.music\.isPlaying[\s\S]*?this\.music\.pause\(\)/,
          'this.music.pause()'
        )
      ];
    case 10:
      return [
        readStepJs(11).replace(
          /this\.playSfx\s*=\s*\(key\)\s*=>\s*\n\s*this\.sound\.play\(key,\s*\{\s*volume:\s*this\.sfxVolume\s*\}\)/,
          'this.playSfx = (key) => this.sound.play(key)'
        )
      ];
    case 11:
      return [readStepJs(12).replace(/this\.music\.setVolume\(v\);\n/, '')];
    case 12:
      return [
        readStepJs(13).replace(/"sb:sfxVol"/g, '"sfxVol"'),
        readStepJs(13).replace(/"sb:musicVol"/g, '"musicVol"')
      ];
    case 13:
      return [
        readStepJs(14).replace(
          /parseFloat\(\s*localStorage\.getItem\("sb:sfxVol"\)\s*\?\?\s*"0\.6"\s*\)/,
          '"0.6"'
        )
      ];
    case 14:
      return [
        readStepJs(15).replace(
          /this\.sound\.mute\s*=\s*!this\.sound\.mute/,
          'this.sound.mute = true'
        )
      ];
    case 15:
      return [
        readStepJs(16).replace(
          /this\.pingPan\s*=\s*\(v\s*-\s*0\.5\)\s*\*\s*2/,
          'this.pingPan = v'
        )
      ];
    case 16:
      return [
        readStepJs(17).replace(/this\.pingRate\s*=\s*1;\n/, ''),
        readStepJs(17).replace(/rate:\s*this\.pingRate/, 'rate: 1')
      ];
    case 17:
      return [
        readStepJs(18).replace(
          /if\s*\(!this\.music\.isPlaying\)\s*return;\n/,
          ''
        )
      ];
    case 18:
      return [
        readStepJs(19).replace(/\.filter\(\(s\)\s*=>\s*s\.isPlaying\)\n/, '')
      ];
    case 19:
      return [
        readStepJs(20).replace(
          /\(prefers-reduced-motion:\s*reduce\)/,
          '(prefers-reduced: reduce)'
        ),
        readStepJs(20).replace(
          /this\.events\.on\("shutdown",[\s\S]*?\}\);\n/,
          ''
        )
      ];
    case 20: {
      const sol = readStepSolution(20);
      return [
        sol.replace(
          /if\s*\(now\s*-\s*last\s*<\s*50\)\s*return/,
          'if (now - last < 0) return'
        ),
        sol.replace(/this\.lastPlayed\s*=\s*new\s+Map\(\);\n/, '')
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

test.describe('Phaser Soundboard', () => {
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

  test('walks through all 20 steps', async ({ page, browserName }) => {
    test.setTimeout(20 * 60 * 1000);
    for (let n = 1; n <= 19; n++) {
      await test.step(`step ${n} → ${n + 1}`, async () => {
        await solveStep({ page, browserName, n });
      });
    }
    await test.step('step 20 (final)', async () => {
      const seed = readStepJs(20);
      const solution = readStepSolution(20);
      await page.goto(stepUrl(20));
      await dismissInterruptingModals(page);

      await enterCode({ page, browserName, contents: seed });
      await assertRejected(page);

      await enterCode({ page, browserName, contents: solution });
      await assertAccepted(page);
    });
  });

  test('post-tap audio unlock flow renders the canvas and accepts the first user gesture', async ({
    page,
    browserName
  }) => {
    test.setTimeout(2 * 60 * 1000);
    await page.goto(stepUrl(20));
    await dismissInterruptingModals(page);
    await enterCode({
      page,
      browserName,
      contents: readStepSolution(20)
    });
    await runCheck(page);

    const previewFrame = page
      .frameLocator('iframe[title="challenge preview"]')
      .first();
    const canvas = previewFrame.locator('canvas');
    await expect(canvas).toBeVisible({ timeout: 30000 });

    const box = await canvas.boundingBox();
    if (!box) throw new Error('canvas has no bounding box');

    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForTimeout(400);

    await page.mouse.click(box.x + 8 + 45, box.y + 8 + 18);
    await page.waitForTimeout(400);

    await expect(canvas).toBeVisible();
  });

  for (const [from, to] of [
    [1, 4],
    [6, 9],
    [11, 15],
    [17, 20]
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
