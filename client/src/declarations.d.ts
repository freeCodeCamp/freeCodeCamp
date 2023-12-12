declare module '@freecodecamp/react-bootstrap';
declare module '@freecodecamp/loop-protect';
declare module '@freecodecamp/strip-comments';
declare module '@types/react-redux';
declare module '@types/validator';
declare module '@types/lodash-es';
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.woff' {
  const url: string;
  export default url;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module 'sha-1' {
  export default function sha1(str: string): string;
}

// This has to be declared as var, not let or const, to be added to globalThis
// eslint-disable-next-line no-var
declare var MathJax: {
  Hub: {
    Config: (attributes: {
      tex2jax: {
        inlineMath: Array<string[]>;
        processEscapes: boolean;
        processClass: string;
      };
    }) => void;
    Queue: (attributes: unknown[]) => void;
  };
};

declare module 'monaco-editor/esm/vs/base/common/platform.js';
