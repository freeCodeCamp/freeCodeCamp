import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page } from '@playwright/test';
import { clearEditor, getEditors } from './utils/editor';
import { isMacOS } from './utils/user-agent';

const BLOCK_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/workshop-particle-pickup-effect'
);

const stepIdHex = (n: number) =>
  `66faa20000000000000000${(0xe0 + n).toString(16).padStart(2, '0')}`;

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
  `/learn/certified-game-developer-with-phaser/workshop-particle-pickup-effect/step-${n}`;

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
          /class\s+MainScene\s+extends\s+Phaser\.Scene/,
          'class MainScene'
        ),
        readStepJs(2).replace(/super\("MainScene"\)/, 'super("Main")')
      ];
    case 2:
      return [
        readStepJs(3).replace(
          /this\.load\.spritesheet\(\s*"hero"/,
          'this.load.spritesheet("player"'
        ),
        readStepJs(3).replace(
          /this\.load\.spritesheet\(\s*"coin"/,
          'this.load.spritesheet("gold"'
        ),
        readStepJs(3).replace(
          /frameWidth:\s*16,\s*frameHeight:\s*16/g,
          'frameWidth: 32, frameHeight: 32'
        )
      ];
    case 3:
      return [
        readStepJs(4).replace(
          /this\.bg\s*=\s*this\.add\.rectangle/,
          'this.add.rectangle'
        ),
        readStepJs(4).replace(
          /this\.physics\.add\.sprite\(\s*240\s*,\s*180\s*,\s*"hero"/,
          'this.physics.add.sprite(240, 180, "coin"'
        ),
        readStepJs(4).replace(
          /this\.player\.setScale\(\s*2\s*\)/,
          'this.player.setScale(3)'
        )
      ];
    case 4:
      return [
        readStepJs(5).replace(/key:\s*"walk-down"/, 'key: "walkDown"'),
        readStepJs(5).replace(
          /key:\s*"coin-spin",\s*frames:[\s\S]*?start:\s*0[\s\S]*?end:\s*7/,
          m => m.replace(/end:\s*7/, 'end: 5')
        ),
        readStepJs(5).replace(
          /this\.player\.anims\.play\(\s*"idle"\s*\)/,
          'this.player.anims.play("walk-down")'
        )
      ];
    case 5:
      return [
        readStepJs(6).replace(
          /this\.player\.setVelocity\(\s*0\s*\)/,
          'this.player.setVelocity(1)'
        ),
        readStepJs(6).replace(
          /this\.cursors\.left\.isDown[\s\S]*?setVelocityX\(\s*-120\s*\)/,
          m => m.replace(/setVelocityX\(\s*-120\s*\)/, 'setVelocityX(-100)')
        ),
        readStepJs(6).replace(
          /else\s*\{\s*this\.player\.anims\.play\(\s*"idle"/,
          'else { this.player.anims.play("walk-down"'
        )
      ];
    case 6:
      return [
        readStepJs(7).replace(
          /this\.coins\s*=\s*this\.physics\.add\.group\(\s*\)/,
          'this.coins = this.add.group()'
        ),
        readStepJs(7).replace(
          /this\.coins\.create\(\s*x\s*,\s*y\s*,\s*"coin"\s*\)/,
          'this.coins.create(x, y, "hero")'
        ),
        readStepJs(7).replace(/coin\.setDepth\(\s*10\s*\)/, 'coin.setDepth(5)')
      ];
    case 7:
      return [
        readStepJs(8).replace(
          /this\.bg\.setDepth\(\s*0\s*\)/,
          'this.bg.setDepth(1)'
        ),
        readStepJs(8).replace(
          /this\.player\.setDepth\(\s*10\s*\)/,
          'this.player.setDepth(5)'
        ),
        readStepJs(8).replace(
          /this\.bg\.setDepth\(\s*0\s*\)/,
          'this.background.setDepth(0)'
        )
      ];
    case 8:
      return [
        readStepJs(9).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.coins/,
          'this.physics.add.collider(this.player, this.coins'
        ),
        readStepJs(9).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.coins\s*,\s*this\.collectCoin/,
          'this.physics.add.overlap(this.player, this.coins, this.collectCoins'
        ),
        readStepJs(9).replace(
          /this\.collectCoin\s*,\s*null\s*,\s*this\s*\)/,
          'this.collectCoin, null, null)'
        )
      ];
    case 9:
      return [
        readStepJs(10).replace(
          /collectCoin\s*\(\s*player\s*,\s*coin\s*\)\s*\{/,
          'collectCoins(player, coin) {'
        ),
        readStepJs(10).replace(
          /collectCoin\s*\(\s*player\s*,\s*coin\s*\)\s*\{/,
          'collectCoin(p, c) {'
        ),
        readStepJs(10).replace(
          /coin\.setTint\(\s*0xff3366\s*\)/,
          'coin.setTint(0xffffff)'
        )
      ];
    case 10:
      return [
        readStepJs(11).replace(/targets:\s*coin/, 'targets: this.player'),
        readStepJs(11).replace(/duration:\s*200/, 'duration: 500'),
        readStepJs(11).replace(
          /onComplete:\s*\(\)\s*=>\s*coin\.destroy\(\)/,
          'onComplete: () => coin.setVisible(false)'
        )
      ];
    case 11:
      return [
        readStepJs(12).replace(
          /this\.add\.text\(\s*coin\.x\s*,\s*coin\.y\s*,\s*"\+10"/,
          'this.add.text(coin.x, coin.y, "+1"'
        ),
        readStepJs(12).replace(/\.setOrigin\(\s*0\.5\s*\)/, '.setOrigin(0)'),
        readStepJs(12).replace(/y:\s*floater\.y\s*-\s*30/, 'y: floater.y - 10')
      ];
    case 12:
      return [
        readStepJs(13).replace(
          /this\.ring\s*=\s*this\.add\.graphics\(\s*\)/,
          'this.ring = this.add.group()'
        ),
        readStepJs(13).replace(
          /this\.ring\.lineStyle\(\s*2\s*,\s*0xffffff/,
          'this.ring.lineStyle(2, 0x000000'
        ),
        readStepJs(13).replace(
          /this\.ring\.strokeCircle\(\s*0\s*,\s*0\s*,\s*24\s*\)/,
          'this.ring.strokeCircle(0, 0, 12)'
        )
      ];
    case 13:
      return [
        readStepJs(14).replace(
          /this\.ring\.setPosition\(\s*this\.player\.x\s*,\s*this\.player\.y\s*\)/g,
          'this.glow.setPosition(this.player.x, this.player.y)'
        ),
        readStepJs(14).replace(
          /this\.ring\.setPosition\(\s*this\.player\.x\s*,\s*this\.player\.y\s*\)/g,
          'this.ring.setPosition(0, 0)'
        ),
        readStepJs(14).replace(
          /this\.ring\.setPosition\(\s*this\.player\.x\s*,\s*this\.player\.y\s*\)/g,
          'this.ring.setRotation(this.player.x)'
        )
      ];
    case 14:
      return [
        readStepJs(15).replace(
          /this\.ring\.setBlendMode\(\s*Phaser\.BlendModes\.ADD\s*\)/,
          'this.ring.setBlendMode(Phaser.BlendModes.NORMAL)'
        ),
        readStepJs(15).replace(
          /this\.ring\.setBlendMode\(\s*Phaser\.BlendModes\.ADD\s*\)/,
          'this.player.setBlendMode(Phaser.BlendModes.ADD)'
        ),
        readStepJs(15).replace(
          /this\.ring\.setBlendMode\(\s*Phaser\.BlendModes\.ADD\s*\)/,
          'this.ring.setAlpha(0.5)'
        )
      ];
    case 15:
      return [
        readStepJs(16).replace(
          /targets:\s*this\.ring\s*,\s*scale:\s*1\.5/,
          'targets: this.player, scale: 1.5'
        ),
        readStepJs(16).replace(/scale:\s*1\.5/, 'scale: 2.0'),
        readStepJs(16).replace(/yoyo:\s*true/, 'yoyo: false')
      ];
    case 16:
      return [
        readStepJs(17).replace(/this\.score\s*=\s*0/, 'this.score = 50'),
        readStepJs(17).replace(
          /this\.scoreText\.setScrollFactor\(\s*0\s*\)/,
          'this.scoreText.setScrollFactor(1)'
        ),
        readStepJs(17).replace(
          /this\.scoreText\.setDepth\(\s*100\s*\)/,
          'this.scoreText.setDepth(50)'
        )
      ];
    case 17:
      return [
        readStepJs(18).replace(/this\.score\s*\+=\s*10/, 'this.score += 5'),
        readStepJs(18).replace(/this\.score\s*\+=\s*10/, 'this.score = 10'),
        readStepJs(18).replace(
          /this\.scoreText\.setText\(/,
          'this.coinText.setText('
        )
      ];
    case 18:
      return [
        readStepJs(19).replace(
          /this\.uiCamera\s*=\s*this\.cameras\.add\(/,
          'this.uiCamera = this.cameras.main; this.cameras.add('
        ),
        readStepJs(19).replace(
          /this\.cameras\.main\.ignore\(\s*this\.scoreText\s*\)/,
          'this.cameras.main.ignore(this.player)'
        ),
        readStepJs(19).replace(
          /this\.uiCamera\.ignore\(\s*\[\s*this\.bg\s*,\s*this\.player\s*,\s*this\.coins\s*,\s*this\.ring\s*\]\s*\)/,
          'this.uiCamera.ignore([this.bg, this.player, this.coins])'
        )
      ];
    case 19:
      return [
        readStepJs(20).replace(
          /targets:\s*this\.scoreText\s*,\s*scale:\s*1\.4/,
          'targets: this.player, scale: 1.4'
        ),
        readStepJs(20).replace(/scale:\s*1\.4/, 'scale: 1.0'),
        readStepJs(20).replace(/yoyo:\s*true/g, 'yoyo: false')
      ];
    case 20: {
      const sol = readStepSolution(20);
      return [
        sol.replace(
          /if\s*\(\s*this\.score\s*>=\s*50\s*\)/,
          'if (this.score > 50)'
        ),
        sol.replace(/Press\s+SPACE\s+to\s+restart/, 'Press ENTER to restart'),
        sol.replace(
          /this\.scene\.restart\(\s*\)/,
          'this.scene.start("MainScene")'
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

test.describe('Phaser Particle Pickup Effect', () => {
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
    test.setTimeout(15 * 60 * 1000);
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

  test('rejects wrong code: lessons 1-5', async ({ page, browserName }) => {
    test.setTimeout(5 * 60 * 1000);
    for (let n = 1; n <= 5; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });

  test('rejects wrong code: lessons 6-10', async ({ page, browserName }) => {
    test.setTimeout(5 * 60 * 1000);
    for (let n = 6; n <= 10; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });

  test('rejects wrong code: lessons 11-15', async ({ page, browserName }) => {
    test.setTimeout(5 * 60 * 1000);
    for (let n = 11; n <= 15; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });

  test('rejects wrong code: lessons 16-20', async ({ page, browserName }) => {
    test.setTimeout(5 * 60 * 1000);
    for (let n = 16; n <= 20; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });
});
