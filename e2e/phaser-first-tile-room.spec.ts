import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page } from '@playwright/test';
import { clearEditor, getEditors } from './utils/editor';
import { isMacOS } from './utils/user-agent';

const BLOCK_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/workshop-first-tile-room'
);

const stepIdHex = (n: number) =>
  `66faa500000000000000${(0xa6 + n).toString(16).padStart(4, '0')}`;

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
  `/learn/certified-game-developer-with-phaser/workshop-first-tile-room/step-${n}`;

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
        readStepJs(2).replace(/super\(\s*"MainScene"\s*\)/, 'super("Main")'),
        readStepJs(2).replace(
          /class\s+MainScene\s+extends\s+Phaser\.Scene\s*\{/,
          'class MainScene {'
        )
      ];
    case 2:
      return [
        readStepJs(3).replace(/this\.load\.image/, 'this.load.spritesheet'),
        readStepJs(3).replace(/"tiles"/, '"tileset"'),
        readStepJs(3).replace(/tileset-dungeon\.png/, 'tileset-overworld.png')
      ];
    case 3:
      return [
        readStepJs(4).replace(/this\.load\.tilemapTiledJSON/, 'this.load.json'),
        readStepJs(4).replace(/"room1"/, '"room"'),
        readStepJs(4).replace(/room-01\.json/, 'room.json')
      ];
    case 4:
      return [
        readStepJs(5).replace(
          /this\.make\.tilemap\(\s*\{\s*key:\s*"room1"\s*\}\s*\)/,
          'this.add.tilemap({ key: "room1" })'
        ),
        readStepJs(5).replace(/key:\s*"room1"/, 'key: "room"'),
        readStepJs(5).replace(
          /const\s+map\s*=\s*this\.make\.tilemap/,
          'this.make.tilemap'
        )
      ];
    case 5:
      return [
        readStepJs(6).replace(
          /map\.addTilesetImage\(\s*"dungeon"\s*,\s*"tiles"\s*\)/,
          'map.addTilesetImage("dungeon", "dungeon")'
        ),
        readStepJs(6).replace(/"dungeon"/, '"floor"'),
        readStepJs(6).replace(
          /const\s+tileset\s*=\s*map\.addTilesetImage/,
          'map.addTilesetImage'
        )
      ];
    case 6:
      return [
        readStepJs(7).replace(
          /map\.createLayer\(\s*"floor"/,
          'map.createLayer("walls"'
        ),
        readStepJs(7).replace(
          /createLayer\(\s*"floor"\s*,\s*tileset\s*,\s*0\s*,\s*0\s*\)/,
          'createLayer("floor", tileset)'
        ),
        readStepJs(7).replace(
          /const\s+floor\s*=\s*map\.createLayer/,
          'map.createLayer'
        )
      ];
    case 7:
      return [
        readStepJs(8).replace(
          /map\.createLayer\(\s*"walls"/,
          'map.createLayer("decorations"'
        ),
        readStepJs(8).replace(
          /const\s+walls\s*=\s*map\.createLayer/,
          'map.createLayer'
        ),
        readStepJs(8).replace(
          /createLayer\(\s*"walls"\s*,\s*tileset\s*,\s*0\s*,\s*0\s*\)/,
          'createLayer("walls", "tiles", 0, 0)'
        )
      ];
    case 8:
      return [
        readStepJs(9).replace(
          /floor\.setDepth\(\s*0\s*\)/,
          'floor.setDepth(10)'
        ),
        readStepJs(9).replace(
          /walls\.setDepth\(\s*10\s*\)/,
          'walls.setDepth(0)'
        ),
        readStepJs(9).replace(
          /walls\.setDepth\(\s*10\s*\)/,
          'walls.setDepth(5)'
        )
      ];
    case 9:
      return [
        readStepJs(10).replace(
          /this\.player\s*=\s*this\.add\.rectangle/,
          'const player = this.add.rectangle'
        ),
        readStepJs(10).replace(
          /this\.physics\.add\.existing\(\s*this\.player\s*\)/,
          ''
        ),
        readStepJs(10).replace(
          /this\.cursors\s*=\s*this\.input\.keyboard\.createCursorKeys\(\s*\)/,
          'this.cursors = this.input.keyboard.addKeys("WASD")'
        )
      ];
    case 10:
      return [
        readStepJs(11).replace(
          /this\.player\.body\.setVelocity\(\s*0\s*\)/,
          ''
        ),
        readStepJs(11).replace(
          /this\.cursors\.left\.isDown/,
          'this.cursors.right.isDown'
        ),
        readStepJs(11).replace(
          /if\s*\(\s*this\.cursors\.up\.isDown\s*\)\s*\{[\s\S]*?\}\s*else\s+if\s*\(\s*this\.cursors\.down\.isDown\s*\)\s*\{[\s\S]*?\}/,
          ''
        )
      ];
    case 11:
      return [
        readStepJs(12).replace(
          /walls\.setCollisionByProperty\(\s*\{\s*collides:\s*true\s*\}\s*\)/,
          'walls.setCollisionByProperty({ collide: true })'
        ),
        readStepJs(12).replace(
          /walls\.setCollisionByProperty/,
          'floor.setCollisionByProperty'
        ),
        readStepJs(12).replace(/collides:\s*true/, 'collides: false')
      ];
    case 12:
      return [
        readStepJs(13).replace(
          /this\.physics\.add\.collider\(\s*this\.player\s*,\s*walls\s*\)/,
          'this.physics.add.overlap(this.player, walls)'
        ),
        readStepJs(13).replace(
          /this\.physics\.add\.collider\(\s*this\.player\s*,\s*walls\s*\)/,
          'this.physics.add.collider(this.player, floor)'
        ),
        readStepJs(13).replace(
          /this\.physics\.add\.collider\(\s*this\.player\s*,\s*walls\s*\)/,
          ''
        )
      ];
    case 13:
      return [
        readStepJs(14).replace(
          /this\.physics\.world\.setBounds\(\s*0\s*,\s*0\s*,\s*map\.widthInPixels\s*,\s*map\.heightInPixels\s*\)/,
          'this.physics.world.setBounds(0, 0, 240, 160)'
        ),
        readStepJs(14).replace(
          /this\.physics\.world\.setBounds/,
          'this.cameras.main.setBounds'
        ),
        readStepJs(14).replace(/map\.widthInPixels/, 'map.width')
      ];
    case 14:
      return [
        readStepJs(15).replace(
          /this\.cameras\.main\.setBounds\(\s*0\s*,\s*0\s*,\s*map\.widthInPixels\s*,\s*map\.heightInPixels\s*\)/,
          'this.cameras.main.setBounds(0, 0, 240, 160)'
        ),
        readStepJs(15).replace(
          /this\.cameras\.main\.setBounds/,
          'this.physics.world.setBounds'
        ),
        readStepJs(15).replace(
          /this\.cameras\.main\.setBounds\(\s*0\s*,\s*0\s*,\s*map\.widthInPixels\s*,\s*map\.heightInPixels\s*\)/,
          'this.cameras.main.setBounds(0, 0, map.width, map.height)'
        )
      ];
    case 15:
      return [
        readStepJs(16).replace(
          /this\.cameras\.main\.startFollow\(\s*this\.player\s*\)/,
          'this.cameras.main.centerOn(this.player.x, this.player.y)'
        ),
        readStepJs(16).replace(/startFollow/, 'follow'),
        readStepJs(16).replace(
          /this\.cameras\.main\.startFollow/,
          'this.cameras.main.startfollow'
        )
      ];
    case 16:
      return [
        readStepJs(17).replace(
          /this\.input\.keyboard\.on\(\s*"keydown-G"/,
          'this.input.keyboard.on("keydown-D"'
        ),
        readStepJs(17).replace(/walls\.renderDebug/, 'floor.renderDebug'),
        readStepJs(17)
          .replace(
            /this\.debugGfx\s*=\s*this\.add\.graphics\(\s*\)/,
            'this.debugGfx = this.add.graphics({})'
          )
          .replace(/\.setDepth\(50\)\.setVisible\(false\);/, '')
      ];
    case 17:
      return [
        readStepJs(18).replace(
          /map\.findObject\(\s*"objects"/,
          'map.findObject("walls"'
        ),
        readStepJs(18).replace(/o\.name\s*===\s*"spawn"/, 'o.name === "start"'),
        readStepJs(18).replace(
          /const\s+spawn\s*=\s*map\.findObject/,
          'map.findObject'
        )
      ];
    case 18:
      return [
        readStepJs(19).replace(
          /this\.player\.x\s*=\s*spawn\.x/,
          'this.player.x = 0'
        ),
        readStepJs(19).replace(
          /this\.player\.y\s*=\s*spawn\.y/,
          'this.player.y = 0'
        ),
        readStepJs(19).replace(
          /this\.player\.x\s*=\s*spawn\.x;\s*\n\s*this\.player\.y\s*=\s*spawn\.y;/,
          'this.player.setPosition(spawn.x, spawn.y);'
        )
      ];
    case 19:
      return [
        readStepJs(20).replace(
          /map\.findObject\(\s*"objects"\s*,\s*\(\s*o\s*\)\s*=>\s*o\.type\s*===\s*"door"\s*\)/,
          'map.findObject("objects", (o) => o.name === "door")'
        ),
        readStepJs(20).replace(
          /this\.add\.zone\(\s*doorObj\.x\s*,\s*doorObj\.y\s*,\s*16\s*,\s*16\s*\)/,
          'this.add.zone(doorObj.x, doorObj.y, 8, 8)'
        ),
        readStepJs(20).replace(
          /this\.physics\.add\.existing\(\s*this\.door\s*,\s*true\s*\)/,
          'this.physics.add.existing(this.door)'
        )
      ];
    case 20:
      return [
        readStepJs(21).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.door/,
          'this.physics.add.collider(this.player, this.door'
        ),
        readStepJs(21).replace(
          /console\.log\(\s*"next room"\s*\)/,
          'console.log("door")'
        ),
        readStepJs(21).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.door/,
          'this.physics.add.overlap(this.player, this.coins'
        )
      ];
    case 21:
      return [
        readStepJs(22).replace(
          /this\.coins\s*=\s*this\.physics\.add\.staticGroup\(\s*\)/,
          'this.coins = this.physics.add.group()'
        ),
        readStepJs(22).replace(
          /map\.filterObjects\(\s*"objects"/,
          'map.filterObjects("walls"'
        ),
        readStepJs(22).replace(/o\.type\s*===\s*"coin"/, 'o.name === "coin"')
      ];
    case 22:
      return [
        readStepJs(23).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.coins/,
          'this.physics.add.collider(this.player, this.coins'
        ),
        readStepJs(23).replace(
          /coin\.destroy\(\s*\)/,
          'coin.setVisible(false)'
        ),
        readStepJs(23).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.coins/,
          'this.physics.add.overlap(this.player, this.door'
        )
      ];
    case 23:
      return [
        readStepJs(24).replace(/this\.score\s*=\s*0/, 'this.score = 10'),
        readStepJs(24).replace(/this\.score\s*\+=\s*10/, 'this.score += 1'),
        readStepJs(24).replace(/this\.score\s*\+=\s*10/, 'this.score = 10')
      ];
    case 24:
      return [
        readStepJs(25).replace(
          /map\.properties\.find\(\s*\(\s*p\s*\)\s*=>\s*p\.name\s*===\s*"name"\s*\)\.value/,
          'map.properties.find((p) => p.name === "title").value'
        ),
        readStepJs(25).replace(
          /\.setScrollFactor\(\s*0\s*\)/,
          '.setScrollFactor(1)'
        ),
        readStepJs(25).replace(
          /this\.hud\s*=\s*this\.add/,
          'const hud = this.add'
        )
      ];
    case 25:
      return [
        readStepJs(26).replace(
          /this\.player\.setDepth\(\s*20\s*\)/,
          'this.player.setDepth(5)'
        ),
        readStepJs(26).replace(
          /this\.player\.setDepth\(\s*20\s*\)/,
          'walls.setDepth(20)'
        ),
        readStepJs(26).replace(/this\.player\.setDepth\(\s*20\s*\)/, '')
      ];
    case 26:
      return [
        readStepJs(27).replace(
          /map\.findObject\(\s*"objects"\s*,\s*\(\s*o\s*\)\s*=>\s*o\.type\s*===\s*"torch"\s*\)/,
          'map.findObject("objects", (o) => o.name === "torch")'
        ),
        readStepJs(27).replace(/this\.tweens\.add\(/, 'this.tweens.timeline('),
        readStepJs(27).replace(/yoyo:\s*true/, 'yoyo: false')
      ];
    case 27:
      return [
        readStepJs(28).replace(
          /walls\.setCollision\(\s*12\s*\)/,
          'walls.setCollision(0)'
        ),
        readStepJs(28).replace(
          /walls\.setCollision\(\s*12\s*\)/,
          'floor.setCollision(12)'
        ),
        readStepJs(28).replace(/walls\.setCollision\(\s*12\s*\)/, '')
      ];
    case 28:
      return [
        readStepJs(29).replace(
          /walls\.setCollisionBetween\(\s*13\s*,\s*23\s*\)/,
          'walls.setCollisionBetween(0, 23)'
        ),
        readStepJs(29).replace(
          /walls\.setCollisionBetween\(\s*13\s*,\s*23\s*\)/,
          'walls.setCollisionByExclusion([13, 23])'
        ),
        readStepJs(29).replace(
          /walls\.setCollisionBetween\(\s*13\s*,\s*23\s*\)/,
          ''
        )
      ];
    case 29:
      return [
        readStepJs(30).replace(
          /this\.input\.keyboard\.on\(\s*"keydown-X"/,
          'this.input.keyboard.on("keydown-Z"'
        ),
        readStepJs(30).replace(
          /walls\.removeTileAt\(\s*10\s*,\s*10\s*\)/,
          'walls.removeTile(10, 10)'
        ),
        readStepJs(30).replace(
          /walls\.removeTileAt\(\s*10\s*,\s*10\s*\)/,
          'walls.removeTileAt(0, 0)'
        )
      ];
    case 30: {
      const sol = readStepSolution(30);
      return [
        sol.replace(
          /this\.cameras\.main\.setLerp\(\s*0\.1\s*,\s*0\.1\s*\)/,
          'this.cameras.main.setLerp(1, 1)'
        ),
        sol.replace(
          /this\.player\.body\.setSize\(\s*10\s*,\s*10\s*\)/,
          'this.player.body.setSize(16, 16)'
        ),
        sol.replace(/this\.cameras\.main\.setLerp\(\s*0\.1\s*,\s*0\.1\s*\)/, '')
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

test.describe('Phaser First Tile Room', () => {
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

  test('walks through all 30 steps', async ({ page, browserName }) => {
    test.setTimeout(20 * 60 * 1000);
    for (let n = 1; n <= 29; n++) {
      await test.step(`step ${n} → ${n + 1}`, async () => {
        await solveStep({ page, browserName, n });
      });
    }
    await test.step('step 30 (final)', async () => {
      const seed = readStepJs(30);
      const solution = readStepSolution(30);
      await page.goto(stepUrl(30));
      await dismissInterruptingModals(page);

      await enterCode({ page, browserName, contents: seed });
      await assertRejected(page);

      await enterCode({ page, browserName, contents: solution });
      await assertAccepted(page);
    });
  });

  test('rejects wrong code: lessons 1-8', async ({ page, browserName }) => {
    test.setTimeout(7 * 60 * 1000);
    for (let n = 1; n <= 8; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });

  test('rejects wrong code: lessons 9-16', async ({ page, browserName }) => {
    test.setTimeout(7 * 60 * 1000);
    for (let n = 9; n <= 16; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });

  test('rejects wrong code: lessons 17-23', async ({ page, browserName }) => {
    test.setTimeout(7 * 60 * 1000);
    for (let n = 17; n <= 23; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });

  test('rejects wrong code: lessons 24-30', async ({ page, browserName }) => {
    test.setTimeout(7 * 60 * 1000);
    for (let n = 24; n <= 30; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });
});
