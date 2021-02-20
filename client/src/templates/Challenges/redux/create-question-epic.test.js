/* global expect */

import { transformEditorLink } from './create-question-epic';

describe('create-question-epic', () => {
  describe('transformEditorLink', () => {
    const links = [
      {
        input: 'https://some-project.camperbot.repl.co',
        expected: 'https://repl.it/@camperbot/some-project'
      },
      {
        input: 'https://some-project.glitch.me/',
        expected: 'https://glitch.com/edit/#!/some-project'
      },
      {
        input: 'https://github.com/user/repo-name',
        expected: 'https://github.com/user/repo-name'
      }
    ];
    it('should correctly transform app links to editor links', () => {
      links.forEach(link => {
        expect(transformEditorLink(link.input)).toStrictEqual(link.expected);
      });
    });
    it('should not transform editor links in GitHub submission', () => {
      links.forEach(link => {
        expect(transformEditorLink(link.expected)).toStrictEqual(link.expected);
      });
    });
  });
});
