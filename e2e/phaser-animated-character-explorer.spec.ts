import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page } from '@playwright/test';
import { clearEditor, getEditors } from './utils/editor';
import { isMacOS } from './utils/user-agent';

const BLOCK_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/workshop-animated-character-explorer'
);

const LAB_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/lab-sprite-sheet-debugger'
);

const stepIdHex = (n: number) =>
  `66faa20000000000000000${(0xb1 + n).toString(16).padStart(2, '0')}`;

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
  `/learn/certified-game-developer-with-phaser/workshop-animated-character-explorer/step-${n}`;

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

const wrongCodesForStep = (n: number): string[] => {
  switch (n) {
    case 1:
      return [
        `class MyScene extends Phaser.Scene {}\n`,
        `class MainScene {}\n`
      ];
    case 2:
      return [
        `class MainScene extends Phaser.Scene {\n  constructor() {\n  }\n}\n`,
        `class MainScene extends Phaser.Scene {\n  constructor() {\n    super("Main");\n  }\n}\n`,
        `class MainScene extends Phaser.Scene {\n  constructor() {\n    super();\n  }\n}\n`
      ];
    case 3:
      return [
        readStepJs(4).replace(/\bpreload\(\)/, 'preLoad()'),
        readStepJs(4).replace(/\bcreate\(\)/, 'createScene()'),
        readStepJs(4).replace(/\bupdate\(\)/, 'update(time)')
      ];
    case 4:
      return [
        readStepJs(5).replace(/pixelArt:\s*true,?\n?/, ''),
        readStepJs(5).replace(/width:\s*480/, 'width: 800'),
        readStepJs(5).replace(/scene:\s*\[MainScene\]/, 'scene: MainScene'),
        readStepJs(5).replace(
          'const game = new Phaser.Game(config)',
          'let game = new Phaser.Game(config)'
        )
      ];
    case 5:
      return [
        readStepJs(6).replace(
          /this\.load\.spritesheet\(\s*"hero"/,
          'this.load.spritesheet("Hero"'
        ),
        readStepJs(6).replace(/frameWidth:\s*16/, 'frameWidth: 32'),
        readStepJs(6).replace(
          /\{\s*frameWidth:\s*16,\s*frameHeight:\s*16\s*\}/,
          '"flat string"'
        )
      ];
    case 6:
      return [
        readStepJs(7).replace(
          /this\.load\.spritesheet\(\s*"coin"/,
          'this.load.spritesheet("Coin"'
        ),
        readStepJs(7).replace(
          /spritesheets\/coin\.png/,
          'spritesheets/coins.png'
        ),
        readStepJs(7).replace(
          /(this\.load\.spritesheet\(\s*"coin"[\s\S]*?frameWidth:\s*16,\s*frameHeight:\s*)16/,
          '$132'
        )
      ];
    case 7:
      return [
        readStepJs(8).replace(
          /this\.load\.spritesheet\(\s*"slime"/,
          'this.load.spritesheet("Slime"'
        ),
        readStepJs(8).replace(
          /spritesheets\/slime\.png/,
          'spritesheets/slimes.png'
        ),
        readStepJs(8).replace(
          /(this\.load\.spritesheet\(\s*"slime"[\s\S]*?frameWidth:\s*)16/,
          '$132'
        )
      ];
    case 8:
      return [
        readStepJs(9).replace(
          /this\.add\.rectangle\(\s*240/,
          'this.add.rectangle(320'
        ),
        readStepJs(9).replace(
          /this\.add\.rectangle\(\s*240\s*,\s*180\s*,\s*480/,
          'this.add.rectangle(240, 180, 320'
        ),
        readStepJs(9).replace(/0x223344/, '0x000000')
      ];
    case 9:
      return [
        readStepJs(10).replace(
          'this.player = this.physics.add.sprite',
          'this.hero = this.physics.add.sprite'
        ),
        readStepJs(10).replace(
          /this\.physics\.add\.sprite\(\s*240\s*,\s*180\s*,\s*"hero"\s*,\s*0\s*\)/,
          'this.physics.add.sprite(240, 180, "hero", 1)'
        ),
        readStepJs(10).replace(/this\.physics\.add\.sprite/, 'this.add.sprite')
      ];
    case 10:
      return [
        readStepJs(11).replace(
          /setCollideWorldBounds\(\s*true\s*\)/,
          'setCollideWorldBounds(false)'
        ),
        readStepJs(11).replace(/setScale\(\s*2\s*\)/, 'setScale(1)'),
        readStepJs(11).replace(
          /\s*this\.player\.setScale\(\s*2\s*\);?\n?/,
          '\n'
        )
      ];
    case 11:
      return [
        readStepJs(12).replace(
          /this\.cursors\s*=\s*this\.input\.keyboard\.createCursorKeys/,
          'this.keys = this.input.keyboard.createCursorKeys'
        ),
        readStepJs(12).replace(
          /this\.input\.keyboard\.createCursorKeys\(\)/,
          'this.input.keyboard.addKeys()'
        ),
        readStepJs(12).replace(
          /this\.input\.keyboard\.createCursorKeys\(\)/,
          'this.input.keyboard.createCursorKey()'
        )
      ];
    case 12:
      return [
        readStepJs(13).replace(
          /(this\.anims\.create\(\s*\{\s*key:\s*)"idle"/,
          '$1"Idle"'
        ),
        readStepJs(13).replace(
          /(key:\s*"idle"[\s\S]*?\{\s*start:\s*0\s*,\s*end:\s*)0/,
          '$11'
        ),
        readStepJs(13).replace(/(key:\s*"idle"[\s\S]*?frameRate:\s*)6/, '$112')
      ];
    case 13:
      return [
        readStepJs(14).replace(
          /(this\.anims\.create\(\s*\{\s*key:\s*)"walk-down"/,
          '$1"walk-Down"'
        ),
        readStepJs(14).replace(
          /(key:\s*"walk-down"[\s\S]*?\{\s*start:\s*0\s*,\s*end:\s*)3/,
          '$12'
        ),
        readStepJs(14).replace(
          /(key:\s*"walk-down"[\s\S]*?frameRate:\s*)8/,
          '$16'
        )
      ];
    case 14:
      return [
        readStepJs(15).replace(
          /(this\.anims\.create\(\s*\{\s*key:\s*)"walk-up"/,
          '$1"walk-Up"'
        ),
        readStepJs(15).replace(
          /(key:\s*"walk-up"[\s\S]*?\{\s*start:\s*)4(\s*,\s*end:\s*7\s*\})/,
          '$10$2'
        ),
        readStepJs(15).replace(/(key:\s*"walk-up"[\s\S]*?repeat:\s*)-1/, '$10')
      ];
    case 15:
      return [
        readStepJs(16).replace(
          /(this\.anims\.create\(\s*\{\s*key:\s*)"walk-left"/,
          '$1"walk-Left"'
        ),
        readStepJs(16).replace(
          /(key:\s*"walk-left"[\s\S]*?\{\s*start:\s*)8(\s*,\s*end:\s*11\s*\})/,
          '$17$2'
        ),
        readStepJs(16).replace(
          /(key:\s*"walk-left"[\s\S]*?frameRate:\s*)8/,
          '$14'
        )
      ];
    case 16:
      return [
        readStepJs(17).replace(
          /(this\.anims\.create\(\s*\{\s*key:\s*)"walk-right"/,
          '$1"walk-Right"'
        ),
        readStepJs(17).replace(
          /(key:\s*"walk-right"[\s\S]*?\{\s*start:\s*)12(\s*,\s*end:\s*15\s*\})/,
          '$111$2'
        ),
        readStepJs(17).replace(
          /(key:\s*"walk-right"[\s\S]*?frameRate:\s*)8/,
          '$14'
        )
      ];
    case 17:
      return [
        readStepJs(18).replace(
          /this\.player\.setVelocity\(\s*0\s*\)/,
          'this.player.setVelocity(120)'
        ),
        readStepJs(18).replace(
          /this\.player\.setVelocity\(\s*0\s*\)/,
          'this.player.setVelocityX(0)'
        ),
        readStepJs(18).replace(
          /this\.player\.setVelocity\(\s*0\s*\)/,
          'player.setVelocity(0)'
        )
      ];
    case 18:
      return [
        readStepJs(19).replace(
          /this\.cursors\.left\.isDown/g,
          'this.cursors.left.isUp'
        ),
        readStepJs(19).replace(
          /this\.player\.setVelocityX\(\s*-120\s*\)/,
          'this.player.setVelocityX(120)'
        ),
        readStepJs(19).replace(
          /this\.player\.anims\.play\(\s*"walk-left"\s*,\s*true\s*\)/,
          'this.player.anims.play("walk-Left", true)'
        )
      ];
    case 19:
      return [
        readStepJs(20).replace(
          /(else\s+if\s*\(\s*)this\.cursors\.right\.isDown/,
          '$1this.cursors.right.isUp'
        ),
        readStepJs(20).replace(
          /(this\.cursors\.right\.isDown[\s\S]*?this\.player\.setVelocityX\(\s*)120/,
          '$1-120'
        ),
        readStepJs(20).replace(
          /(this\.cursors\.right\.isDown[\s\S]*?this\.player\.anims\.play\(\s*)"walk-right"/,
          '$1"walk-Right"'
        )
      ];
    case 20:
      return [
        readStepJs(21).replace(
          /(else\s+if\s*\(\s*)this\.cursors\.up\.isDown/,
          '$1this.cursors.up.isUp'
        ),
        readStepJs(21).replace(
          /(this\.cursors\.up\.isDown[\s\S]*?this\.player\.setVelocityY\(\s*)-120/,
          '$1120'
        ),
        readStepJs(21).replace(
          /(this\.cursors\.up\.isDown[\s\S]*?this\.player\.anims\.play\(\s*)"walk-up"/,
          '$1"walk-Up"'
        )
      ];
    case 21:
      return [
        readStepJs(22).replace(
          /(else\s+if\s*\(\s*)this\.cursors\.down\.isDown/,
          '$1this.cursors.down.isUp'
        ),
        readStepJs(22).replace(
          /(this\.cursors\.down\.isDown[\s\S]*?this\.player\.setVelocityY\(\s*)120/,
          '$1-120'
        ),
        readStepJs(22).replace(
          /(this\.cursors\.down\.isDown[\s\S]*?this\.player\.anims\.play\(\s*)"walk-down"/,
          '$1"walk-Down"'
        )
      ];
    case 22:
      return [
        readStepJs(23).replace(
          /\} else \{\s*\n\s*this\.player\.anims\.play\(\s*"idle"\s*,\s*true\s*\);?\s*\n\s*\}/,
          '} else if (true) {\n      this.player.anims.play("idle", true);\n    }'
        ),
        readStepJs(23).replace(
          /this\.player\.anims\.play\(\s*"idle"\s*,\s*true\s*\)/,
          'this.player.anims.play("Idle", true)'
        ),
        readStepJs(23).replace(
          /this\.player\.anims\.play\(\s*"idle"\s*,\s*true\s*\)/,
          'this.player.anims.play("idle")'
        )
      ];
    case 23:
      return [
        readStepJs(24).replace(
          /(this\.anims\.create\(\s*\{\s*key:\s*)"coin-spin"/,
          '$1"coin-Spin"'
        ),
        readStepJs(24).replace(
          /(key:\s*"coin-spin"[\s\S]*?\{\s*start:\s*0\s*,\s*end:\s*)7/,
          '$16'
        ),
        readStepJs(24).replace(
          /(key:\s*"coin-spin"[\s\S]*?frameRate:\s*)12/,
          '$18'
        )
      ];
    case 24:
      return [
        readStepJs(25).replace(
          /this\.coins\s*=\s*this\.physics\.add\.group\(\s*\)/,
          'this.coinGroup = this.physics.add.group()'
        ),
        readStepJs(25).replace(/\.forEach\(/, '.map('),
        readStepJs(25).replace(
          /this\.coins\.create\(\s*x\s*,\s*y\s*,\s*"coin"\s*\)/,
          'this.coins.create(x, y, "Coin")'
        )
      ];
    case 25:
      return [
        readStepJs(26).replace(/coin\.setScale\(\s*2\s*\)/, 'coin.setScale(1)'),
        readStepJs(26).replace(
          /coin\.anims\.play\(\s*"coin-spin"\s*\)/,
          'coin.anims.play("Coin-spin")'
        ),
        readStepJs(26).replace(/\s*coin\.setScale\(\s*2\s*\);?\n?/, '\n')
      ];
    case 26:
      return [
        readStepJs(27).replace(
          /(this\.anims\.create\(\s*\{\s*key:\s*)"slime-idle"/,
          '$1"slime-Idle"'
        ),
        readStepJs(27).replace(
          /(key:\s*"slime-idle"[\s\S]*?\{\s*start:\s*0\s*,\s*end:\s*)3/,
          '$12'
        ),
        readStepJs(27).replace(
          /(key:\s*"slime-idle"[\s\S]*?frameRate:\s*)4/,
          '$18'
        )
      ];
    case 27:
      return [
        readStepJs(28).replace(
          /this\.slime\s*=\s*this\.physics\.add\.sprite/,
          'this.enemy = this.physics.add.sprite'
        ),
        readStepJs(28).replace(
          /this\.physics\.add\.sprite\(\s*240\s*,\s*320\s*,\s*"slime"\s*\)/,
          'this.physics.add.sprite(240, 360, "slime")'
        ),
        readStepJs(28).replace(
          /this\.physics\.add\.sprite\(\s*240\s*,\s*320\s*,\s*"slime"\s*\)/,
          'this.physics.add.sprite(240, 320, "Slime")'
        )
      ];
    case 28:
      return [
        readStepJs(29).replace(
          /this\.slime\.setScale\(\s*2\s*\)/,
          'this.slime.setScale(1)'
        ),
        readStepJs(29).replace(
          /this\.slime\.setVelocityX\(\s*60\s*\)/,
          'this.slime.setVelocityX(-60)'
        ),
        readStepJs(29).replace(
          /this\.slime\.setBounce\(\s*1\s*,\s*0\s*\)/,
          'this.slime.setBounce(0, 1)'
        )
      ];
    case 29:
      return [
        readStepJs(30).replace(
          /this\.slime\.anims\.play\(\s*"slime-idle"\s*\)/,
          'this.player.anims.play("slime-idle")'
        ),
        readStepJs(30).replace(
          /this\.slime\.anims\.play\(\s*"slime-idle"\s*\)/,
          'this.slime.anims.play("Slime-idle")'
        ),
        readStepJs(30).replace(
          /this\.slime\.anims\.play\(\s*"slime-idle"\s*\)/,
          'this.slime.anims.play("slime-idle", true)'
        )
      ];
    case 30:
      return [
        readStepJs(31).replace(
          /(this\.slime\.body\.velocity\.x\s*)>(\s*0)/,
          '$1>=$2'
        ),
        readStepJs(31).replace(
          /(this\.slime\.body\.velocity\.x\s*>\s*0[\s\S]*?this\.slime\.setFlipX\()\s*true\s*(\))/,
          '$1false$2'
        ),
        readStepJs(31).replace(
          /this\.slime\.body\.velocity\.x/g,
          'this.slime.body.velocity.y'
        )
      ];
    case 31:
      return [
        readStepJs(32).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.coins/,
          'this.physics.add.collider(this.player, this.coins'
        ),
        readStepJs(32).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.coins\s*,\s*this\.collectCoin/,
          'this.physics.add.overlap(this.player, this.coins, this.collectCoins'
        ),
        readStepJs(32).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.coins\s*,\s*this\.collectCoin\s*,\s*null\s*,\s*this\s*\)/,
          'this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, null)'
        )
      ];
    case 32:
      return [
        readStepJs(33).replace(
          /collectCoin\s*\(\s*player\s*,\s*coin\s*\)/,
          'collectCoins(player, coin)'
        ),
        readStepJs(33).replace(
          /collectCoin\s*\(\s*player\s*,\s*coin\s*\)/,
          'collectCoin(p, c)'
        ),
        readStepJs(33).replace(
          /collectCoin\s*\(\s*player\s*,\s*coin\s*\)/,
          'collectCoin(coin, player)'
        )
      ];
    case 33:
      return [
        readStepJs(34).replace(/targets:\s*coin/, 'targets: this.player'),
        readStepJs(34).replace(/duration:\s*200/, 'duration: 500'),
        readStepJs(34).replace(
          /onComplete:\s*\(\)\s*=>\s*coin\.destroy\(\)/,
          'onComplete: () => coin.setVisible(false)'
        )
      ];
    case 34:
      return [
        readStepJs(35).replace(/this\.score\s*=\s*0/, 'this.score = 5'),
        readStepJs(35).replace(/"Coins:\s*0\/5"/, '"Score: 0/5"'),
        readStepJs(35).replace(/fontSize:\s*"16px"/, 'fontSize: "20px"')
      ];
    case 35:
      return [
        readStepJs(36).replace(/this\.score\s*\+=\s*1/, 'this.score += 2'),
        readStepJs(36).replace(/this\.score\s*\+=\s*1/, 'this.score = 1'),
        readStepJs(36).replace(
          /this\.scoreText\.setText\(\s*"Coins: "\s*\+\s*this\.score\s*\+\s*"\/5"\s*\)/,
          'this.scoreText.setText("Score: " + this.score + "/5")'
        )
      ];
    case 36:
      return [
        readStepJs(37).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.slime/,
          'this.physics.add.collider(this.player, this.slime'
        ),
        readStepJs(37).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.slime\s*,\s*this\.hitSlime/,
          'this.physics.add.overlap(this.player, this.slime, this.hitSlimes'
        ),
        readStepJs(37).replace(
          /this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.slime\s*,\s*this\.hitSlime\s*,\s*null\s*,\s*this\s*\)/,
          'this.physics.add.overlap(this.player, this.slime, this.hitSlime, null, null)'
        )
      ];
    case 37:
      return [
        readStepJs(38).replace(/hitSlime\s*\(\s*\)/, 'hitSlimes()'),
        readStepJs(38).replace(
          /this\.cameras\.main\.flash\(\s*150\s*,/,
          'this.cameras.main.flash(300,'
        ),
        readStepJs(38).replace(
          /this\.cameras\.main\.flash\(\s*150\s*,\s*255\s*,\s*0\s*,\s*0\s*\)/,
          'this.cameras.main.flash(150, 0, 255, 0)'
        )
      ];
    case 38:
      return [
        readStepJs(39).replace(
          /this\.cleared\s*=\s*false/,
          'this.completed = false'
        ),
        readStepJs(39).replace(
          /this\.cleared\s*=\s*false/,
          'this.cleared = true'
        ),
        readStepJs(39).replace(/this\.cleared\s*=\s*false/, 'this.cleared = 0')
      ];
    case 39:
      return [
        readStepJs(40).replace(
          /if\s*\(\s*this\.score\s*>=\s*5\s*\)/,
          'if (this.score > 5)'
        ),
        readStepJs(40).replace(/"Level Cleared!"/, '"Level Cleared"'),
        readStepJs(40).replace(/fill:\s*"#ffff00"/, 'fill: "#ffffff"')
      ];
    case 40: {
      const sol = readStepSolution(40);
      return [
        sol.replace(
          /update\(\)\s*\{\s*if\s*\(\s*this\.cleared\s*\)\s*return\s*;?/,
          'update() {\n    if (!this.cleared) return;'
        ),
        sol.replace(/if\s*\(\s*this\.cleared\s*\)\s*return\s*;?/, ''),
        sol.replace(
          /if\s*\(\s*this\.cleared\s*\)\s*return\s*;?/,
          'if (this.score >= 5) return;'
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

const LAB_URL =
  '/learn/certified-game-developer-with-phaser/lab-sprite-sheet-debugger/debug-a-broken-sprite-sheet';

const LAB_FILE = '66faa20000000000000000da.md';

const readLabSolution = () => {
  const md = fs.readFileSync(path.join(LAB_DIR, LAB_FILE), 'utf8');
  const sol = extractJsBlock(md, 'solutions');
  if (!sol) throw new Error('no lab js solution');
  return sol.replace(/\n+$/, '\n');
};

const readLabSeed = () => {
  const md = fs.readFileSync(path.join(LAB_DIR, LAB_FILE), 'utf8');
  const seed = extractJsBlock(md, 'seed');
  if (!seed) throw new Error('no lab js seed');
  return stripMarkers(seed).replace(/\n+$/, '\n');
};

test.describe('Phaser Animated Character Explorer', () => {
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
    test.setTimeout(20 * 60 * 1000);
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

  test('rejects wrong code: lessons 21-25', async ({ page, browserName }) => {
    test.setTimeout(5 * 60 * 1000);
    for (let n = 21; n <= 25; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });

  test('rejects wrong code: lessons 26-30', async ({ page, browserName }) => {
    test.setTimeout(5 * 60 * 1000);
    for (let n = 26; n <= 30; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });

  test('rejects wrong code: lessons 31-35', async ({ page, browserName }) => {
    test.setTimeout(5 * 60 * 1000);
    for (let n = 31; n <= 35; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });

  test('rejects wrong code: lessons 36-40', async ({ page, browserName }) => {
    test.setTimeout(5 * 60 * 1000);
    for (let n = 36; n <= 40; n++) {
      await verifyWrongCodes({ page, browserName, n });
    }
  });

  test('rejects the broken lab seed and accepts the reference solution', async ({
    page,
    browserName
  }) => {
    test.setTimeout(180000);
    await page.goto(LAB_URL);
    await dismissInterruptingModals(page);

    await enterCode({ page, browserName, contents: readLabSeed() });
    await assertRejected(page);

    await enterCode({ page, browserName, contents: readLabSolution() });
    await assertAccepted(page);
  });
});
