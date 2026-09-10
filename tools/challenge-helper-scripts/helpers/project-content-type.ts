import { BlockLabel } from '@freecodecamp/shared/config/blocks';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

export const projectContentTypes = [
  'html',
  'html-css',
  'html-css-js',
  'html-css-jsx',
  'html-css-ts',
  'html-css-tsx',
  'javascript',
  'typescript',
  'python'
] as const;

export type ProjectContentType = (typeof projectContentTypes)[number];

type SeedFile = {
  contents: string;
  ext: string;
  editableRegionBoundaries?: number[];
};

type ContentTypeConfig = {
  label: string;
  labChallengeType: number;
  workshopChallengeType: number;
  getSeedFiles: (title: string) => SeedFile[];
};

const getHtml = (title: string, headContent = '', bodyContent = '') =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>${headContent}
  </head>
  <body>${bodyContent}
  </body>
</html>`;

const getReactHtml = (title: string, extension: 'jsx' | 'tsx') =>
  getHtml(
    title,
    `
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.5/babel.min.js"></script>
    <script data-plugins="transform-modules-umd" type="text/babel" src="index.${extension}"></script>`,
    `
    <div id="root"></div>
    <script data-plugins="transform-modules-umd" type="text/babel" data-presets="react" data-type="module">
      import { App } from './index.${extension}';
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>`
  );

const getReactComponent = () => `export function App() {
  return (
    <main>

    </main>
  );
}`;

const contentTypeConfigs: Record<ProjectContentType, ContentTypeConfig> = {
  html: {
    label: 'HTML',
    labChallengeType: challengeTypes.lab,
    workshopChallengeType: challengeTypes.html,
    getSeedFiles: title => [
      {
        contents: getHtml(title, '', '\n    '),
        ext: 'html',
        editableRegionBoundaries: [8, 10]
      }
    ]
  },
  'html-css': {
    label: 'HTML/CSS',
    labChallengeType: challengeTypes.lab,
    workshopChallengeType: challengeTypes.html,
    getSeedFiles: title => [
      {
        contents: getHtml(
          title,
          '\n    <link rel="stylesheet" href="styles.css" />'
        ),
        ext: 'html'
      },
      { contents: '', ext: 'css', editableRegionBoundaries: [0, 2] }
    ]
  },
  'html-css-js': {
    label: 'HTML/CSS/JS',
    labChallengeType: challengeTypes.lab,
    workshopChallengeType: challengeTypes.html,
    getSeedFiles: title => [
      {
        contents: getHtml(
          title,
          '\n    <link rel="stylesheet" href="styles.css" />',
          '\n    <script src="index.js"></script>'
        ),
        ext: 'html'
      },
      { contents: '', ext: 'css' },
      { contents: '', ext: 'js', editableRegionBoundaries: [0, 2] }
    ]
  },
  'html-css-jsx': {
    label: 'HTML/CSS/JSX',
    labChallengeType: challengeTypes.lab,
    workshopChallengeType: challengeTypes.html,
    getSeedFiles: title => [
      { contents: getReactHtml(title, 'jsx'), ext: 'html' },
      { contents: '', ext: 'css' },
      {
        contents: getReactComponent(),
        ext: 'jsx',
        editableRegionBoundaries: [3, 5]
      }
    ]
  },
  'html-css-ts': {
    label: 'HTML/CSS/TS',
    labChallengeType: challengeTypes.lab,
    workshopChallengeType: challengeTypes.html,
    getSeedFiles: title => [
      {
        contents: getHtml(
          title,
          '\n    <link rel="stylesheet" href="styles.css" />',
          '\n    <script src="index.ts" type="module"></script>'
        ),
        ext: 'html'
      },
      { contents: '', ext: 'css' },
      { contents: '', ext: 'ts', editableRegionBoundaries: [0, 2] }
    ]
  },
  'html-css-tsx': {
    label: 'HTML/CSS/TSX',
    labChallengeType: challengeTypes.lab,
    workshopChallengeType: challengeTypes.html,
    getSeedFiles: title => [
      { contents: getReactHtml(title, 'tsx'), ext: 'html' },
      { contents: '', ext: 'css' },
      {
        contents: getReactComponent(),
        ext: 'tsx',
        editableRegionBoundaries: [3, 5]
      }
    ]
  },
  javascript: {
    label: 'JavaScript',
    labChallengeType: challengeTypes.jsLab,
    workshopChallengeType: challengeTypes.js,
    getSeedFiles: () => [
      { contents: '', ext: 'js', editableRegionBoundaries: [0, 2] }
    ]
  },
  typescript: {
    label: 'TypeScript',
    labChallengeType: challengeTypes.jsLab,
    workshopChallengeType: challengeTypes.js,
    getSeedFiles: () => [
      { contents: '', ext: 'ts', editableRegionBoundaries: [0, 2] }
    ]
  },
  python: {
    label: 'Python',
    labChallengeType: challengeTypes.pyLab,
    workshopChallengeType: challengeTypes.python,
    getSeedFiles: () => [
      { contents: '', ext: 'py', editableRegionBoundaries: [0, 2] }
    ]
  }
};

export const projectContentTypeChoices = projectContentTypes.map(value => ({
  name: contentTypeConfigs[value].label,
  value
}));

export function isProjectContentType(
  value: unknown
): value is ProjectContentType {
  return (
    typeof value === 'string' &&
    projectContentTypes.includes(value as ProjectContentType)
  );
}

export function getProjectChallengeType(
  blockLabel: BlockLabel.lab | BlockLabel.workshop,
  contentType: ProjectContentType
): number {
  const config = contentTypeConfigs[contentType];
  return blockLabel === BlockLabel.lab
    ? config.labChallengeType
    : config.workshopChallengeType;
}

export function getProjectSeedFiles(
  contentType: ProjectContentType,
  title: string
): SeedFile[] {
  return contentTypeConfigs[contentType].getSeedFiles(title);
}
