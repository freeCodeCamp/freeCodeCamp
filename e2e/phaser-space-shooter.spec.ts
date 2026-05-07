import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page } from '@playwright/test';
import { clearEditor, getEditors } from './utils/editor';
import { isMacOS } from './utils/user-agent';

const BLOCK_DIR = path.resolve(
  __dirname,
  '..',
  'curriculum/challenges/english/blocks/learn-game-development-by-building-a-space-shooter-with-phaser'
);

const stepIdHex = (n: number) =>
  `66faa10000000000000000${n.toString(16).padStart(2, '0')}`;

const stripMarkers = (s: string) =>
  s.replace(/--fcc-editable-region--\n?/g, '');

const extractJsSeed = (markdown: string): string => {
  const seedSection = markdown.split(/^## --seed-contents--$/m)[1];
  if (!seedSection) throw new Error('no --seed-contents-- section');
  const sectionEnd = seedSection.split(/^# --/m)[0];
  const blocks = Array.from(sectionEnd.matchAll(/```js\n([\s\S]*?)\n```/g));
  if (blocks.length === 0) throw new Error('no js seed block found');
  const last = blocks[blocks.length - 1][1];
  return stripMarkers(last).replace(/\n+$/, '\n');
};

const readStepJs = (n: number) => {
  const file = path.join(BLOCK_DIR, `${stepIdHex(n)}.md`);
  return extractJsSeed(fs.readFileSync(file, 'utf8'));
};

const readStepSolution = (n: number): string => {
  const md = fs.readFileSync(
    path.join(BLOCK_DIR, `${stepIdHex(n)}.md`),
    'utf8'
  );
  const sol = md.split(/^# --solutions--$/m)[1];
  if (!sol) throw new Error(`step ${n} has no --solutions--`);
  const blocks = Array.from(sol.matchAll(/```js\n([\s\S]*?)\n```/g));
  if (!blocks.length) throw new Error(`step ${n} solution missing js block`);
  return blocks[0][1].replace(/\n+$/, '\n');
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
  `/learn/certified-game-developer-with-phaser/learn-game-development-by-building-a-space-shooter-with-phaser/step-${n}`;

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
        `class MainScene extends Phaser.Scene {\n  constructor() {\n    super("Main");\n  }\n}\n`
      ];
    case 3:
      return [
        readStepJs(4).replace(/preload\(\)/, 'preLoad()'),
        readStepJs(4).replace(/preload\(\)/, 'preload(x)')
      ];
    case 4:
      return [readStepJs(5).replace(/create\(\)/, 'createScene()')];
    case 5:
      return [
        readStepJs(6).replace(/update\(time\)/, 'update()'),
        readStepJs(6).replace(/update\(time\)/, 'update(t)')
      ];
    case 6:
      return [
        readStepJs(7).replace('const config', 'let config'),
        readStepJs(7).replace('const config', 'const settings')
      ];
    case 7:
      return [
        readStepJs(8).replace('Phaser.AUTO', 'Phaser.WEBGL'),
        readStepJs(8).replace('Phaser.AUTO', "'auto'")
      ];
    case 8:
      return [
        readStepJs(9).replace(/width:\s*480/, 'width: 4800'),
        readStepJs(9).replace(/width:\s*480/, 'width: 800')
      ];
    case 9:
      return [
        readStepJs(10).replace(/height:\s*640/, 'height: 6400'),
        readStepJs(10).replace(/height:\s*640/, 'height: 320')
      ];
    case 10:
      return [
        readStepJs(11).replace(
          /parent:\s*['"`]game-container['"`]/,
          'parent: "container"'
        ),
        readStepJs(11).replace(
          /parent:\s*['"`]game-container['"`]/,
          'parent: gameContainer'
        )
      ];
    case 11:
      return [
        readStepJs(12).replace(
          /backgroundColor:\s*['"`]#000033['"`]/,
          'backgroundColor: "#fff"'
        ),
        readStepJs(12).replace(
          /backgroundColor:\s*['"`]#000033['"`]/,
          'backgroundColor: 0x000033'
        )
      ];
    case 12:
      return [
        readStepJs(13).replace(
          'const game = new Phaser.Game(config)',
          'let game = new Phaser.Game(config)'
        ),
        readStepJs(13).replace(
          'const game = new Phaser.Game(config)',
          'const game = Phaser.Game(config)'
        )
      ];
    case 13:
      return [
        readStepJs(14).replace(/scene:\s*MainScene/, 'scene: mainScene'),
        readStepJs(14).replace(/scene:\s*MainScene/, "scene: 'MainScene'")
      ];
    case 14:
      return [
        readStepJs(15).replace(
          /default:\s*['"`]arcade['"`]/,
          'default: "matter"'
        ),
        readStepJs(15).replace(/physics:\s*\{[^}]*\}/, 'physics: "arcade"')
      ];
    case 15:
      return [
        readStepJs(16).replace(/y:\s*0/, 'y: 100'),
        readStepJs(16).replace(/arcade:\s*\{[^}]*\{[^}]*\}[^}]*\}/, 'arcade: 0')
      ];
    case 16:
      return [
        readStepJs(17).replace(
          /this\.load\.image\("player"/,
          'this.load.image("PLAYER"'
        ),
        readStepJs(17).replace(
          /this\.load\.image\("player",\s*"data:image[^"]+"\s*\)/,
          'this.load.image("player", "data:image/svg+xml,foo")'
        )
      ];
    case 17:
      return [
        readStepJs(18).replace(
          /this\.load\.image\("enemy"/,
          'this.load.image("ENEMY"'
        ),
        readStepJs(18).replace(
          /this\.load\.image\("enemy",\s*"data:image[^"]+"\s*\)/,
          'this.load.image("enemy", "data:image/svg+xml,foo")'
        )
      ];
    case 18:
      return [
        readStepJs(19).replace(
          /this\.load\.image\("bullet"/,
          'this.load.image("BULLET"'
        ),
        readStepJs(19).replace(
          /this\.load\.image\("bullet",\s*"data:image[^"]+"\s*\)/,
          'this.load.image("bullet", "data:image/svg+xml,foo")'
        )
      ];
    case 19:
      return [
        readStepJs(20).replace(
          /this\.load\.image\("star"/,
          'this.load.image("STAR"'
        ),
        readStepJs(20).replace(
          /this\.load\.image\("star",\s*"data:image[^"]+"\s*\)/,
          'this.load.image("star", "data:image/svg+xml,foo")'
        )
      ];
    case 20:
      return [
        readStepJs(21).replace(
          /this\.player\s*=\s*this\.physics\.add\.sprite\(240,\s*580,\s*"player"\)/,
          'this.player = this.physics.add.sprite(100, 200, "player")'
        ),
        readStepJs(21).replace(
          /this\.player\s*=\s*this\.physics\.add\.sprite\(240,\s*580,\s*"player"\)/,
          'this.player = this.physics.add.sprite(240, 580, "enemy")'
        ),
        readStepJs(21).replace(
          /this\.player\s*=\s*this\.physics\.add\.sprite\(240,\s*580,\s*"player"\)/,
          'this.player = this.add.sprite(240, 580, "player")'
        )
      ];
    case 21:
      return [
        readStepJs(22).replace(
          /this\.player\.setCollideWorldBounds\(true\)/,
          'this.player.setCollideWorldBounds(false)'
        ),
        readStepJs(22).replace(
          /this\.player\.setCollideWorldBounds\(true\)/,
          'this.player.setCollideWorldBounds()'
        )
      ];
    case 22:
      return [
        readStepJs(23).replace(
          'this.cursors = this.input.keyboard.createCursorKeys()',
          'this.cursors = this.input.keyboard.addKeys()'
        ),
        readStepJs(23).replace(
          'this.cursors = this.input.keyboard.createCursorKeys()',
          'this.keys = this.input.keyboard.createCursorKeys()'
        )
      ];
    case 23:
      return [
        readStepJs(24).replace(
          /this\.player\.setVelocityX\(-300\)/,
          'this.player.setVelocityX(-100)'
        ),
        readStepJs(24).replace(
          /this\.player\.setVelocityX\(300\)/,
          'this.player.setVelocityX(100)'
        )
      ];
    case 24:
      return [
        readStepJs(25).replace(
          /this\.player\.setVelocityY\(-300\)/,
          'this.player.setVelocityY(-100)'
        ),
        readStepJs(25).replace(
          /this\.player\.setVelocityY\(300\)/,
          'this.player.setVelocityY(100)'
        )
      ];
    case 25:
      return [
        readStepJs(26).replace(/addKey\(\s*"SPACE"\s*\)/, 'addKey("ENTER")'),
        readStepJs(26).replace(/addKey\(\s*"SPACE"\s*\)/, 'addKey(SPACE)')
      ];
    case 26:
      return [
        readStepJs(27).replace(/this\.lastFired\s*=\s*0/, 'this.lastFired = 1'),
        readStepJs(27).replace(/this\.lastFired/, 'this.firedAt')
      ];
    case 27:
      return [
        readStepJs(28).replace(
          'this.bullets = this.physics.add.group()',
          'this.bullets = this.add.group()'
        ),
        readStepJs(28).replace(
          'this.bullets = this.physics.add.group()',
          'this.bullets = []'
        )
      ];
    case 28:
      return [
        readStepJs(29).replace(/fireBullet\(\)\s*\{/, 'fireBullets() {'),
        readStepJs(29).replace(/fireBullet\(\)\s*\{/, 'shoot() {')
      ];
    case 29:
      return [
        readStepJs(30).replace(
          /const\s+bullet\s*=\s*this\.bullets\.create\([^)]*\)/,
          'const bullet = this.add.image(this.player.x, this.player.y - 30, "bullet")'
        ),
        readStepJs(30).replace(
          /bullet\.setVelocityY\(-500\)/,
          'bullet.setVelocityY(500)'
        )
      ];
    case 30:
      return [
        readStepJs(31).replace(
          /this\.fireKey\.isDown\s*&&\s*time\s*>\s*this\.lastFired/,
          'this.fireKey.isDown && time < this.lastFired'
        ),
        readStepJs(31).replace(
          /this\.fireKey\.isDown\s*&&\s*time\s*>\s*this\.lastFired/,
          'this.cursors.up.isDown && time > this.lastFired'
        )
      ];
    case 31:
      return [
        readStepJs(32).replace(
          /this\.lastFired\s*=\s*time\s*\+\s*250/,
          'this.lastFired = time + 100'
        ),
        readStepJs(32).replace(
          /this\.lastFired\s*=\s*time\s*\+\s*250/,
          'this.lastFired = 250'
        )
      ];
    case 32:
      return [
        readStepJs(33).replace(
          /this\.bullets\.children\.each\(\(bullet\)\s*=>/,
          'this.bullets.children.each((b) =>'
        ),
        readStepJs(33).replace(/bullet\.y\s*<\s*0/, 'bullet.y > 800')
      ];
    case 33:
      return [
        readStepJs(34).replace(
          'this.enemies = this.physics.add.group()',
          'this.enemies = this.add.group()'
        ),
        readStepJs(34).replace(
          'this.enemies = this.physics.add.group()',
          'this.enemies = []'
        )
      ];
    case 34:
      return [
        readStepJs(35).replace(/spawnEnemy\(\)\s*\{/, 'spawn() {'),
        readStepJs(35).replace(/spawnEnemy\(\)\s*\{/, 'spawnEnemies() {')
      ];
    case 35:
      return [
        readStepJs(36).replace(
          /Phaser\.Math\.Between\(30,\s*450\)/,
          'Phaser.Math.Between(0, 100)'
        ),
        readStepJs(36).replace(
          /this\.enemies\.create\(x,\s*-30,\s*"enemy"\)/,
          'this.enemies.create(x, 0, "player")'
        ),
        readStepJs(36).replace(
          /enemy\.setVelocityY\(150\)/,
          'enemy.setVelocityY(0)'
        )
      ];
    case 36:
      return [
        readStepJs(37).replace(/delay:\s*1000/, 'delay: 100'),
        readStepJs(37).replace(/loop:\s*true/, 'loop: false')
      ];
    case 37:
      return [
        readStepJs(38).replace(
          /this\.enemies\.children\.each\(\(enemy\)\s*=>/,
          'this.enemies.children.each((e) =>'
        ),
        readStepJs(38).replace(/enemy\.y\s*>\s*640/, 'enemy.y < 0')
      ];
    case 38:
      return [
        readStepJs(39).replace(
          /this\.physics\.add\.overlap\([^)]*\)/,
          'this.physics.add.collider(this.bullets, this.enemies, this.hitEnemy, null, this)'
        ),
        readStepJs(39).replace(/this\.hitEnemy/, 'this.hit')
      ];
    case 39:
      return [
        readStepJs(40).replace(
          /hitEnemy\(bullet,\s*enemy\)\s*\{/,
          'hitEnemy(b, e) {'
        ),
        readStepJs(40).replace(
          /hitEnemy\(bullet,\s*enemy\)\s*\{/,
          'hit(bullet, enemy) {'
        )
      ];
    case 40:
      return [
        readStepJs(41).replace(
          /hitEnemy\(bullet,\s*enemy\)\s*\{[^}]*\}/,
          'hitEnemy(bullet, enemy) {\n  }'
        ),
        readStepJs(41).replace(
          /hitEnemy\(bullet,\s*enemy\)\s*\{[^}]*\}/,
          'hitEnemy(bullet, enemy) {\n    enemy.destroy();\n  }'
        )
      ];
    case 41:
      return [
        readStepJs(42).replace(/this\.score\s*=\s*0/, 'this.score = 1'),
        readStepJs(42).replace(/this\.score\s*=\s*0/, 'this.points = 0')
      ];
    case 42:
      return [
        readStepJs(43).replace(
          /this\.add\.text\(10,\s*10/,
          'this.add.text(0, 0'
        ),
        readStepJs(43).replace(/['"`]Score: 0['"`]/, '"Points: 0"')
      ];
    case 43:
      return [
        readStepJs(44).replace(/this\.score\s*\+=\s*10/, 'this.score += 1'),
        readStepJs(44).replace(/this\.score\s*\+=\s*10/, 'this.score++')
      ];
    case 44:
      return [
        readStepJs(45).replace(
          /this\.scoreText\.setText\("Score: "\s*\+\s*this\.score\)/,
          'this.scoreText.setText("Points: " + this.score)'
        ),
        readStepJs(45).replace(
          /this\.scoreText\.setText\("Score: "\s*\+\s*this\.score\)/,
          'this.scoreText.setText("Score: " + this.points)'
        )
      ];
    case 45:
      return [
        readStepJs(46).replace(/this\.lives\s*=\s*3/, 'this.lives = 5'),
        readStepJs(46).replace(/this\.lives\s*=\s*3/, 'this.life = 3')
      ];
    case 46:
      return [
        readStepJs(47).replace(
          /this\.add\.text\(380,\s*10,\s*"Lives: 3"/,
          'this.add.text(0, 0, "Lives: 3"'
        ),
        readStepJs(47).replace(/"Lives: 3"/, '"Health: 3"')
      ];
    case 47:
      return [
        readStepJs(48).replace(
          /this\.physics\.add\.overlap\(\s*this\.player,\s*this\.enemies,\s*this\.hitPlayer,\s*null,\s*this\s*\)/,
          'this.physics.add.collider(this.player, this.enemies, this.hitPlayer, null, this)'
        ),
        readStepJs(48).replace(
          /this\.physics\.add\.overlap\(\s*this\.player,\s*this\.enemies,\s*this\.hitPlayer/,
          'this.physics.add.overlap(this.player, this.enemies, this.hit'
        )
      ];
    case 48:
      return [
        readStepJs(49).replace(
          /hitPlayer\(player,\s*enemy\)\s*\{/,
          'hitPlayer(p, e) {'
        ),
        readStepJs(49).replace(
          /hitPlayer\(player,\s*enemy\)\s*\{/,
          'hitTheGuy(player, enemy) {'
        )
      ];
    case 49:
      return [
        readStepJs(50).replace(/this\.lives\s*-=\s*1/, ''),
        readStepJs(50).replace(/this\.lives\s*-=\s*1/, 'this.lives -= 0')
      ];
    case 50:
      return [
        readStepJs(51).replace(
          /this\.livesText\.setText\("Lives: "\s*\+\s*this\.lives\)/,
          'this.livesText.setText("Health: " + this.lives)'
        ),
        readStepJs(51).replace(
          /this\.livesText\.setText\("Lives: "\s*\+\s*this\.lives\)/,
          'this.livesText.setText("Lives: " + this.life)'
        )
      ];
    case 51:
      return [
        readStepJs(52).replace(
          /class\s+GameOverScene\s+extends\s+Phaser\.Scene/,
          'class GameOver extends Phaser.Scene'
        ),
        readStepJs(52).replace(
          /class\s+GameOverScene\s+extends\s+Phaser\.Scene/,
          'class GameOverScene'
        )
      ];
    case 52:
      return [
        readStepJs(53).replace(
          /super\(['"`]GameOverScene['"`]\)/,
          'super("GameOver")'
        ),
        readStepJs(53).replace(/super\(['"`]GameOverScene['"`]\)/, 'super()')
      ];
    case 53:
      return [
        readStepJs(54).replace(
          /class\s+GameOverScene\s+extends\s+Phaser\.Scene\s*\{[\s\S]*?create\s*\(\s*data\s*\)\s*\{/,
          m => m.replace(/create\s*\(\s*data\s*\)/, 'create()')
        ),
        readStepJs(54).replace(/create\s*\(\s*data\s*\)\s*\{/g, 'create(d) {')
      ];
    case 54:
      return [
        readStepJs(55).replace(/['"`]GAME OVER['"`]/, '"Game Over"'),
        readStepJs(55).replace(
          /this\.add\.text\(\s*240\s*,\s*280/,
          'this.add.text(0, 0'
        )
      ];
    case 55:
      return [
        readStepJs(56).replace(
          /this\.add\.text\(\s*240,\s*340,\s*['"`]Score:\s*['"`]\s*\+\s*data\.score/,
          'this.add.text(240, 340, "Score: " + score'
        ),
        readStepJs(56).replace(
          /this\.add\.text\(\s*240,\s*340,\s*['"`]Score:\s*['"`]\s*\+\s*data\.score/,
          'this.add.text(0, 0, "Score: " + data.score'
        )
      ];
    case 56:
      return [
        readStepJs(57).replace(
          /['"`]Press R to restart['"`]/,
          '"Press to restart"'
        ),
        readStepJs(57).replace(
          /this\.add\.text\(\s*240,\s*400/,
          'this.add.text(0, 0'
        )
      ];
    case 57:
      return [
        readStepJs(58).replace(/['"`]keydown-R['"`]/, '"keydown-Q"'),
        readStepJs(58).replace(
          /this\.scene\.start\(['"`]MainScene['"`]\)/,
          'this.scene.start("Main")'
        )
      ];
    case 58:
      return [
        readStepJs(59).replace(
          /scene:\s*\[MainScene,\s*GameOverScene\]/,
          'scene: MainScene'
        ),
        readStepJs(59).replace(
          /scene:\s*\[MainScene,\s*GameOverScene\]/,
          'scene: [GameOverScene, MainScene]'
        )
      ];
    case 59:
      return [
        readStepJs(60).replace(/this\.lives\s*<=\s*0/, 'this.lives < -1'),
        readStepJs(60).replace(
          /this\.scene\.start\(['"`]GameOverScene['"`],\s*\{\s*score:\s*this\.score\s*\}\s*\)/,
          'this.scene.start("GameOverScene")'
        )
      ];
    case 60:
      return [
        readStepJs(61).replace(
          /this\.background\s*=\s*this\.add\.tileSprite\(240,\s*320,\s*480,\s*640,\s*['"`]star['"`]\s*\)/,
          'this.background = this.add.image(240, 320, "star")'
        ),
        readStepJs(61).replace(
          /this\.background\s*=\s*this\.add\.tileSprite\(240,\s*320,\s*480,\s*640,\s*['"`]star['"`]\s*\)/,
          'this.background = this.add.tileSprite(0, 0, 100, 100, "star")'
        )
      ];
    case 61:
      return [
        readStepJs(62).replace(
          /this\.background\.tilePositionY\s*-=\s*2/,
          'this.background.tilePositionY -= 1'
        ),
        readStepJs(62).replace(
          /this\.background\.tilePositionY\s*-=\s*2/,
          'this.background.tilePositionX -= 2'
        )
      ];
    case 62:
      return [
        readStepJs(63).replace(
          /this\.cameras\.main\.flash\(150,\s*255,\s*0,\s*0\)/,
          'this.cameras.main.flash(150, 255, 0)'
        ),
        readStepJs(63).replace(
          /this\.cameras\.main\.flash\(150,\s*255,\s*0,\s*0\)/,
          'this.cameras.main.flash(0, 0, 0, 0)'
        )
      ];
    case 63:
      return [
        readStepJs(64).replace(
          /const\s+SCORE_TO_WIN\s*=\s*100/,
          'const SCORE_TO_WIN = 50'
        ),
        readStepJs(64).replace(
          /const\s+SCORE_TO_WIN\s*=\s*100/,
          'const SCORE_LIMIT = 100'
        )
      ];
    case 64:
      return [
        readStepJs(65).replace(
          /this\.score\s*>=\s*SCORE_TO_WIN/,
          'this.score > SCORE_TO_WIN'
        ),
        readStepJs(65).replace(
          /this\.scene\.start\(['"`]GameOverScene['"`],\s*\{\s*score:\s*this\.score,\s*win:\s*true\s*\}\s*\)/,
          'this.scene.start("GameOverScene", { score: this.score })'
        )
      ];
    case 65: {
      const sol = readStepSolution(65);
      return [
        sol.replace(/['"`]YOU WIN!['"`]/, '"YOU WON!"'),
        sol.replace(/if\s*\(\s*data\.win\s*\)/, 'if (data.lose)')
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
  '/learn/certified-game-developer-with-phaser/lab-space-shooter-with-phaser/lab-space-shooter-with-phaser';

const LAB_FILE = '66faa20000000000000000ab.md';

const readLabSolution = (): string => {
  const md = fs.readFileSync(
    path.resolve(
      __dirname,
      '..',
      'curriculum/challenges/english/blocks/lab-space-shooter-with-phaser',
      LAB_FILE
    ),
    'utf8'
  );
  const sol = md.split(/^# --solutions--$/m)[1];
  if (!sol) throw new Error('no lab solution');
  const blocks = Array.from(sol.matchAll(/```js\n([\s\S]*?)\n```/g));
  if (!blocks.length) throw new Error('no js block in lab solution');
  return blocks[0][1].replace(/\n+$/, '\n');
};

test.describe('Phaser Space Shooter', () => {
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

  test('walks through all 65 steps', async ({ page, browserName }) => {
    test.setTimeout(25 * 60 * 1000);
    for (let n = 1; n <= 64; n++) {
      await test.step(`step ${n} → ${n + 1}`, async () => {
        await solveStep({ page, browserName, n });
      });
    }
    await test.step(`step 65 (final)`, async () => {
      const seed = readStepJs(65);
      const solution = readStepSolution(65);
      await page.goto(stepUrl(65));
      await dismissInterruptingModals(page);

      await enterCode({ page, browserName, contents: seed });
      await assertRejected(page);

      await enterCode({ page, browserName, contents: solution });
      await assertAccepted(page);
    });
  });

  test('completes the space-shooter lab', async ({ page, browserName }) => {
    test.setTimeout(180000);
    await page.goto(LAB_URL);
    await dismissInterruptingModals(page);

    await enterCode({
      page,
      browserName,
      contents: 'class MainScene extends Phaser.Scene {}\n'
    });
    await assertRejected(page);

    await enterCode({ page, browserName, contents: readLabSolution() });
    await assertAccepted(page);
  });

  for (const [from, to] of [
    [1, 5],
    [6, 10],
    [11, 15],
    [16, 20],
    [21, 25],
    [26, 30],
    [31, 35],
    [36, 40],
    [41, 45],
    [46, 50],
    [51, 55],
    [56, 60],
    [61, 65]
  ] as const) {
    test(`rejects wrong code: lessons ${from}-${to}`, async ({
      page,
      browserName
    }) => {
      test.setTimeout(8 * 60 * 1000);
      for (let n = from; n <= to; n++) {
        await verifyWrongCodes({ page, browserName, n });
      }
    });
  }
});
