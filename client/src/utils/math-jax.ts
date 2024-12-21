import { SuperBlocks } from '../../../shared/config/curriculum';
import { scriptLoader } from './script-loaders';

export const mathJaxSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML';

export const isMathJaxAllowed = (pathname: string) =>
  superBlocksWithMathJax.some(superBlock => pathname.includes(superBlock));

const superBlocksWithMathJax = [
  SuperBlocks.JsAlgoDataStructNew,
  SuperBlocks.JsAlgoDataStruct,
  SuperBlocks.ProjectEuler,
  SuperBlocks.RosettaCode,
  SuperBlocks.SciCompPy
];

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
      processClass: 'mathjax-support'
    }
  });
  MathJax.Hub.Queue([
    'Typeset',
    MathJax.Hub,
    document.querySelector('.mathjax-support')
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
