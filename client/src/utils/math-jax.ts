import { scriptLoader } from './script-loaders';

export const mathJaxSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML';

export const isMathJaxAllowed = (pathname: string) =>
  [
    '/learn/javascript-algorithms-and-data-structures-v8',
    '/learn/project-euler/',
    '/learn/rosetta-code',
    '/learn/scientific-computing-with-python'
  ].some(allowedPath => pathname.includes(allowedPath));

const configure = () => {
  if (!global.MathJax) return;
  const MathJax = global.MathJax;
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)']
      ],
      processEscapes: true,
      processClass:
        'rosetta-code|project-euler|intermediate-algorithm-scripting|description-container'
    }
  });
  MathJax.Hub.Queue([
    'Typeset',
    MathJax.Hub,
    document.querySelector('.intermediate-algorithm-scripting'),
    document.querySelector('.rosetta-code'),
    document.querySelector('.project-euler'),
    document.querySelector('.description-container')
  ]);
};

export const initializeMathJax = (mathJaxChallenge = true) => {
  const mathJaxMountPoint = document.querySelector('#mathjax');
  if (global.MathJax) {
    // Configure MathJax when it's loaded and
    // users navigate from another challenge
    configure();
  } else if (!mathJaxMountPoint && mathJaxChallenge) {
    mathJaxScriptLoader();
  }
};

const mathJaxScriptLoader = () => {
  scriptLoader('mathjax', false, mathJaxSrc, configure, '');
};
