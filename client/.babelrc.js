require('dotenv').config({ path: '../.env' });
const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        useBuiltIns: 'usage',
        corejs: 2,
        shippedProposals: true,
        targets: {
          browsers: ['>0.25%', 'not dead']
        }
      }
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
        pragma: 'React.createElement'
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    'preval',
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-macros',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: true
      }
    ],
    [
      'babel-plugin-transform-imports',
      {
        'react-bootstrap': {
          transform: 'react-bootstrap/lib/${member}',
          preventFullImport: true
        }
      }
    ],
    [
      'prismjs',
      {
        languages: [
          'clike',
          'css',
          'html',
          'javascript',
          'markup',
          'mathml',
          'pug',
          'python',
          'sql',
          'svg',
          'typescript',
          'xml'
        ],
        theme: 'default',
        css: true,
        plugins: ['line-numbers']
      }
    ]
  ]
};
if (
  process.env.FREECODECAMP_NODE_ENV === 'development' &&
  process.env.CODESEE === 'true'
) {
  config.plugins.push(['@codesee/instrument', { hosted: true }]);
}
module.exports = config;
