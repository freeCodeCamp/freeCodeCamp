import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page, type Frame } from '@playwright/test';
import { clearEditor, getEditors } from './utils/editor';
import { isMacOS } from './utils/user-agent';

const BLOCK_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/workshop-arcade-brawler-with-juice'
);

const stepIdHex = (n: number) =>
  `66faa70000000000000000${(0xc0 + n).toString(16).padStart(2, '0')}`;

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
  `/learn/certified-game-developer-with-phaser/workshop-arcade-brawler-with-juice/step-${n}`;

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
          /this\.load\.spritesheet\(\s*"hero"/,
          'this.load.image("hero"'
        ),
        readStepJs(3).replace(
          /frameWidth:\s*32\s*,\s*frameHeight:\s*32/,
          'frameWidth: 16, frameHeight: 16'
        )
      ];
    case 3:
      return [
        readStepJs(4).replace(
          /this\.input\.keyboard\.addKeys\(\s*"W,A,S,D,J,K,M"\s*\)/,
          'this.input.keyboard.addKeys("W,A,S,D")'
        )
      ];
    case 4:
      return [
        readStepJs(5).replace(
          /this\.attack\s*=\s*\(\s*\)\s*=>/,
          'this.attack = (heavy) =>'
        )
      ];
    case 6:
      return [
        readStepJs(7).replace(
          /this\.physics\.add\.group\(\s*\)/,
          'this.physics.add.staticGroup()'
        )
      ];
    case 7:
      return [
        readStepJs(8).replace(
          /this\.physics\.add\.overlap\(\s*this\.hitbox\s*,\s*this\.enemies/,
          'this.physics.add.collider(this.hitbox, this.enemies'
        )
      ];
    case 11:
      return [
        readStepJs(12).replace(
          /this\.cameras\.main\.shake\(\s*80\s*,\s*0\.005\s*\)/,
          'this.cameras.main.shake(80, 0.5)'
        )
      ];
    case 12:
      return [
        readStepJs(13).replace(
          /this\.physics\.world\.pause\(\s*\)/,
          'this.physics.world.stop()'
        ),
        readStepJs(13).replace(
          /this\.time\.delayedCall\(\s*40/,
          'this.time.delayedCall(400'
        )
      ];
    case 13:
      return [readStepJs(14).replace(/this\.fx\.explode\(/, 'this.fx.emit(')];
    case 25:
      return [
        readStepJs(26).replace(
          /this\.heavyMode\s*\?\s*2\s*:\s*1/,
          'this.heavyMode ? 1 : 1'
        )
      ];
    case 32:
      return [
        readStepJs(33).replace(/localStorage\.setItem\(/, 'localStorage.set(')
      ];
    case 33:
      return [
        readStepJs(34).replace(
          /\(prefers-reduced-motion:\s*reduce\)/,
          '(prefers-reduced: reduce)'
        ),
        readStepJs(34).replace(
          /this\.juice\s*=\s*[\s\S]*?\?\s*0\.2/,
          'this.juice = 1'
        )
      ];
    case 39: {
      const sol = readStepSolution(40);
      return [
        sol.replace(
          /this\.events\.on\(\s*Phaser\.Scenes\.Events\.SHUTDOWN/,
          'this.events.once("shutdown"'
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

const getPreviewFrame = async (page: Page): Promise<Frame> => {
  const handle = await page
    .locator('iframe[title="challenge preview"]')
    .first()
    .elementHandle();
  if (!handle) throw new Error('preview iframe not found');
  const frame = await handle.contentFrame();
  if (!frame) throw new Error('preview iframe has no content frame');
  return frame;
};

const readJuice = (frame: Frame) =>
  frame.evaluate<number | null>(() => {
    const isObj = (v: unknown): v is Record<string, unknown> =>
      typeof v === 'object' && v !== null;
    const isFn = (v: unknown): v is (...args: unknown[]) => unknown =>
      typeof v === 'function';

    const phaser: unknown = Reflect.get(globalThis, 'Phaser');
    if (!isObj(phaser)) return null;
    const games = phaser.GAMES;
    if (!Array.isArray(games) || games.length === 0) return null;
    const game: unknown = games[0];
    if (!isObj(game)) return null;
    const sceneManager = game.scene;
    if (!isObj(sceneManager) || !isFn(sceneManager.getScene)) return null;
    const scene: unknown = sceneManager.getScene('MainScene');
    if (!isObj(scene)) return null;

    const onHit = scene.onHit;
    const enemiesUnknown = scene.enemies;
    if (!isFn(onHit) || !isObj(enemiesUnknown)) return null;
    const getChildren = enemiesUnknown.getChildren;
    if (!isFn(getChildren)) return null;
    const children = getChildren.call(enemiesUnknown);
    if (!Array.isArray(children) || children.length === 0) return null;
    try {
      onHit.call(scene, children[0]);
    } catch {
      // first call may have already destroyed the enemy or fired a tween
    }
    const juice = scene.juice;
    return typeof juice === 'number' ? juice : null;
  });

const renderFinalSolution = async ({
  page,
  browserName
}: {
  page: Page;
  browserName: string;
}) => {
  await page.goto(stepUrl(40));
  await dismissInterruptingModals(page);
  await enterCode({ page, browserName, contents: readStepSolution(40) });
  await runCheck(page);

  const previewFrame = page
    .frameLocator('iframe[title="challenge preview"]')
    .first();
  const canvas = previewFrame.locator('canvas');
  await expect(canvas).toBeVisible({ timeout: 30000 });
  const box = await canvas.boundingBox();
  if (!box) throw new Error('canvas has no bounding box');
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  await page.waitForTimeout(800);
};

test.describe('Phaser Arcade Brawler with Juice', () => {
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

  test('walks through all 40 steps', async ({ page, browserName }) => {
    test.setTimeout(40 * 60 * 1000);
    for (let n = 1; n <= 39; n++) {
      await test.step(`step ${n} → ${n + 1}`, async () => {
        await solveStep({ page, browserName, n });
      });
    }
    await test.step('step 40 (final)', async () => {
      const seed = readStepJs(40);
      const solution = readStepSolution(40);
      await page.goto(stepUrl(40));
      await dismissInterruptingModals(page);

      await enterCode({ page, browserName, contents: seed });
      await assertRejected(page);

      await enterCode({ page, browserName, contents: solution });
      await assertAccepted(page);
    });
  });

  test('motion-reduced flag damps juice multiplier to 0.2', async ({
    page,
    browserName
  }) => {
    test.setTimeout(3 * 60 * 1000);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await renderFinalSolution({ page, browserName });
    const frame = await getPreviewFrame(page);
    const juice = await readJuice(frame);
    expect(juice).toBe(0.2);
  });

  test('motion-default keeps juice multiplier at 1', async ({
    page,
    browserName
  }) => {
    test.setTimeout(3 * 60 * 1000);
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await renderFinalSolution({ page, browserName });
    const frame = await getPreviewFrame(page);
    const juice = await readJuice(frame);
    expect(juice).toBe(1);
  });

  for (const [from, to] of [
    [1, 4],
    [6, 7],
    [11, 13],
    [25, 25],
    [32, 33],
    [39, 39]
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
