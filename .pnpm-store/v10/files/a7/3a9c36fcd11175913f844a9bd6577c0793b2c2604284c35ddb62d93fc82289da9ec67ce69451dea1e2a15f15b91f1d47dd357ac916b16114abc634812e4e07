import { Parser } from 'acorn' 

declare const jsx: (options?: jsx.Options) => (BaseParser: typeof Parser) => typeof Parser;

declare namespace jsx {
  interface Options {
    allowNamespacedObjects?: boolean;
    allowNamespaces?: boolean;
  }
}

export = jsx;
