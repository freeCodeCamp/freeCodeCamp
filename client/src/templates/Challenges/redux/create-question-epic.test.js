import { transformEditorLink } from '../utils';
import { insertEditableRegions } from './create-question-epic';

describe('create-question-epic', () => {
  describe('transformEditorLink', () => {
    const links = [
      {
        input: 'https://some-project.camperbot.repl.co',
        expected: 'https://replit.com/@camperbot/some-project'
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
  describe('insertEditableRegions', () => {
    const multiCertChallengeFiles = [
      {
        contents: '<h1>Hello World</h1>',
        ext: 'html',
        fileKey: 'indexhtml',
        history: ['index.html'],
        head: '',
        id: '',
        name: 'index',
        path: 'index.html',
        seed: '',
        tail: ''
      },
      {
        contents: '',
        ext: 'css',
        fileKey: 'stylescss',
        history: ['styles.css'],
        head: '',
        id: '',
        name: 'styles',
        path: 'styles.css',
        seed: '',
        tail: ''
      }
    ];
    const multiPracticeChallengeFiles = [
      {
        contents:
          '<html>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>',
        editableRegionBoundaries: [2, 4],
        ext: 'html',
        fileKey: 'indexhtml',
        history: ['index.html'],
        head: '',
        id: '',
        name: 'index',
        path: 'index.html',
        seed: '<html>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>',
        tail: ''
      }
    ];
    it('should not insert editable regions for certification projects', () => {
      const challengeFiles = insertEditableRegions(multiCertChallengeFiles);
      challengeFiles.forEach(({ contents }) => {
        expect(contents).not.toContain('User Editable Region');
      });
    });
    it('should insert editable regions for multifile practice projects', () => {
      const challengeFiles = insertEditableRegions(multiPracticeChallengeFiles);
      challengeFiles.forEach(({ contents }) => {
        expect(contents).toContain('User Editable Region');
      });
    });
    it('should not throw if editableRegionBoundaries is undefined', () => {
      expect(() =>
        insertEditableRegions(multiCertChallengeFiles)
      ).not.toThrow();
    });
  });
});
