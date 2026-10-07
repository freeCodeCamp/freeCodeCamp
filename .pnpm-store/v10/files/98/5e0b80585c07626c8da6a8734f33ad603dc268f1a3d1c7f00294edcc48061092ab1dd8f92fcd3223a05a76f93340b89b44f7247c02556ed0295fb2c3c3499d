import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "typescript",
  extensions: [".ts", ".tsx", ".cts", ".mts"],
  aliases: ["TypeScript", "ts", "typescript"],
  mimetypes: ["text/typescript"],
  loader: () => {
    return import('./typescript.js');
  }
});
