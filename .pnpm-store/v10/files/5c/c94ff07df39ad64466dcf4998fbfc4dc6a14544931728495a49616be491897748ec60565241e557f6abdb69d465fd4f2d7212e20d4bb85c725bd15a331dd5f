import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "c",
  extensions: [".c", ".h"],
  aliases: ["C", "c"],
  loader: () => import('./cpp.js')
});
registerLanguage({
  id: "cpp",
  extensions: [".cpp", ".cc", ".cxx", ".hpp", ".hh", ".hxx"],
  aliases: ["C++", "Cpp", "cpp"],
  loader: () => import('./cpp.js')
});
