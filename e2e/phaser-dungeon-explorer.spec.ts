import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page } from '@playwright/test';
import { clearEditor, getEditors } from './utils/editor';
import { isMacOS } from './utils/user-agent';

const BLOCK_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/workshop-top-down-dungeon-explorer'
);

const stepIdHex = (n: number) =>
  `66faa500000000000000${(0xca + n).toString(16).padStart(4, '0')}`;

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
  `/learn/certified-game-developer-with-phaser/workshop-top-down-dungeon-explorer/step-${n}`;

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
          /this\.load\.image\(\s*"tiles"/,
          'this.load.image("tileset"'
        ),
        readStepJs(3).replace(
          /this\.load\.tilemapTiledJSON\(\s*"dungeon-01"/,
          'this.load.json("dungeon-01"'
        )
      ];
    case 3:
      return [
        readStepJs(4).replace(
          /this\.make\.tilemap\(\s*\{\s*key:\s*"dungeon-01"\s*\}\s*\)/,
          'this.add.tilemap({ key: "dungeon-01" })'
        ),
        readStepJs(4).replace(/key:\s*"dungeon-01"/, 'key: "dungeon"')
      ];
    case 4:
      return [
        readStepJs(5).replace(
          /map\.addTilesetImage\(\s*"dungeon"\s*,\s*"tiles"\s*\)/,
          'map.addTilesetImage("tiles", "dungeon")'
        ),
        readStepJs(5).replace(/"dungeon"/, '"floor"')
      ];
    case 5:
      return [
        readStepJs(6).replace(
          /map\.createLayer\(\s*"floor"/,
          'map.createLayer("walls"'
        ),
        readStepJs(6).replace(
          /createLayer\(\s*"floor"\s*,\s*tileset\s*,\s*0\s*,\s*0\s*\)/,
          'createLayer("floor", tileset)'
        )
      ];
    case 6:
      return [
        readStepJs(7).replace(
          /map\.createLayer\(\s*"walls"/,
          'map.createLayer("decorations"'
        ),
        readStepJs(7).replace(
          /walls\.setCollisionByProperty\(\s*\{\s*collides:\s*true\s*\}\s*\)/,
          'walls.setCollision([1, 4, 7])'
        )
      ];
    case 7:
      return [
        readStepJs(8).replace(/spawnObj\.x/, '0'),
        readStepJs(8).replace(
          /map\.findObject\(\s*"objects"/,
          'map.findObject("entities"'
        )
      ];
    case 8:
      return [
        readStepJs(9).replace(
          /this\.physics\.add\.collider\(\s*this\.player\s*,\s*walls\s*\)/,
          'this.physics.add.overlap(this.player, walls)'
        ),
        readStepJs(9).replace(
          /this\.player\.body\.setCollideWorldBounds\(\s*true\s*\)/,
          'this.player.body.setCollideWorldBounds(false)'
        )
      ];
    case 9:
      return [
        readStepJs(10).replace(/setBounds\(\s*0\s*,\s*0/, 'setBounds(8, 8'),
        readStepJs(10).replace(/setLerp\(\s*0\.1\s*\)/, 'setLerp(1)')
      ];
    case 10:
      return [
        readStepJs(11).replace(
          /this\.input\.keyboard\.createCursorKeys\(\)/,
          'this.input.keyboard.addKeys()'
        )
      ];
    case 11:
      return [
        readStepJs(12).replace(/const\s+speed\s*=\s*100/, 'const speed = 1000')
      ];
    case 12:
      return [
        readStepJs(13).replace(
          /map\.findObject\(\s*"objects"\s*,\s*\(\s*\w+\s*\)\s*=>\s*\w+\.type\s*===\s*"npc"\s*\)/,
          'map.findObject("objects", (o) => o.type === "enemy")'
        )
      ];
    case 13:
      return [readStepJs(14).replace(/addKey\(\s*"E"\s*\)/, 'addKey("F")')];
    case 14:
      return [
        readStepJs(15).replace(
          /this\.flags\s*=\s*new\s+Set\(\)/,
          'this.flags = []'
        )
      ];
    case 25:
      return [
        readStepJs(26).replace(
          /localStorage\.setItem\(\s*"dungeon-save"/,
          'localStorage.setItem("save"'
        ),
        readStepJs(26).replace(
          /this\.saveGame\s*=\s*\(\)/,
          'this.saveGame = (x)'
        )
      ];
    case 35:
      return [
        readStepJs(36).replace(/Phaser\.Math\.Distance\.Between/, 'Math.hypot'),
        readStepJs(36).replace(
          /this\.lastAttackAt\s*\+\s*350/,
          'this.lastAttackAt + 50'
        )
      ];
    case 49: {
      const sol = readStepSolution(50);
      return [
        sol.replace(
          /if\s*\(\s*time\s*<\s*this\.transitionLockedUntil\s*\)\s*\{[\s\S]*?\}/,
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

test.describe('Phaser Top-Down Dungeon Explorer', () => {
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

  test('walks through all 50 steps', async ({ page, browserName }) => {
    test.setTimeout(35 * 60 * 1000);
    for (let n = 1; n <= 49; n++) {
      await test.step(`step ${n} → ${n + 1}`, async () => {
        await solveStep({ page, browserName, n });
      });
    }
    await test.step('step 50 (final)', async () => {
      const seed = readStepJs(50);
      const solution = readStepSolution(50);
      await page.goto(stepUrl(50));
      await dismissInterruptingModals(page);

      await enterCode({ page, browserName, contents: seed });
      await assertRejected(page);

      await enterCode({ page, browserName, contents: solution });
      await assertAccepted(page);
    });
  });

  for (const [from, to] of [
    [1, 7],
    [8, 14],
    [25, 25],
    [35, 35],
    [49, 49]
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
