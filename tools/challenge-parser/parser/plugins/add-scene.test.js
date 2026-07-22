import { describe, beforeAll, beforeEach, it, expect } from 'vitest';
import parseFixture from '../__fixtures__/parse-fixture';
import addScene from './add-scene';

describe('add-scene', () => {
  let sceneAST, chineseSceneAST, chineseSceneNoPinyinAST;
  let file;

  beforeAll(async () => {
    sceneAST = await parseFixture('scene.md');
    chineseSceneAST = await parseFixture('with-chinese-scene.md');
    chineseSceneNoPinyinAST = await parseFixture(
      'with-chinese-scene-no-pinyin.md'
    );
  });

  beforeEach(() => {
    file = { data: { lang: 'en' } };
  });

  it('should add scene data to file when scene section exists', () => {
    const plugin = addScene();
    plugin(sceneAST, file);

    expect(file.data.scene).toBeDefined();
    expect(file.data.scene.setup.background).toBe('company2-center.png');
    expect(file.data.scene.commands).toHaveLength(3);
  });

  it('should preserve dialogue text for non-Chinese scenes', () => {
    const plugin = addScene();
    plugin(sceneAST, file);

    expect(file.data.scene.commands[1].dialogue.text).toBe(
      "I'm Maria, the team lead."
    );
    expect(file.data.scene.commands[1].dialogue.text).not.toContain('<ruby>');
  });

  it('should convert Chinese hanzi-pinyin pairs to ruby HTML', () => {
    file.data.lang = 'zh-CN';
    const plugin = addScene();
    plugin(chineseSceneAST, file);

    const dialogueText = file.data.scene.commands[0].dialogue.text;
    expect(dialogueText).toBe(
      '<ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>，<ruby>世界<rp>(</rp><rt>shì jiè</rt><rp>)</rp></ruby>。'
    );
  });

  it('should not convert Hanzi-only to ruby HTML', () => {
    file.data.lang = 'zh-CN';
    const plugin = addScene();
    plugin(chineseSceneNoPinyinAST, file);

    expect(file.data.scene.commands[0].dialogue.text).toBe('你好，世界。');
    expect(file.data.scene.commands[0].dialogue.text).not.toContain('<ruby>');
  });

  it('should handle commands without dialogue', () => {
    const plugin = addScene();
    plugin(sceneAST, file);

    expect(file.data.scene.commands[0].dialogue).toBeUndefined();
    expect(file.data.scene.commands[2].dialogue).toBeUndefined();
  });
});
