/* eslint-disable filenames-simple/naming-convention */
require('dotenv').config({ path: '../.env' });
const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
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
      'prismjs',
      {
        languages: [
          'bash',
          'c',
          'clike',
          'cpp',
          'css',
          'csharp',
          'html',
          'javascript',
          'json',
          'jsx',
          'markup',
          'mathml',
          'pug',
          'python',
          'scss',
          'sass',
          'sql',
          'svg',
          'typescript',
          'tsx',
          'xml'
        ],
        theme: 'default',
        css: true,
        plugins: ['line-numbers']
      }
    ]
  ]
};
module.exports = config;
