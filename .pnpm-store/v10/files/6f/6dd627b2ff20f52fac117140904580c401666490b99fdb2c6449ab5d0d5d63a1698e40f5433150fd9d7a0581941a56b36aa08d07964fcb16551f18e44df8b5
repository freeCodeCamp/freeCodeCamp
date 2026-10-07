import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "powershell",
  extensions: [".ps1", ".psm1", ".psd1"],
  aliases: ["PowerShell", "powershell", "ps", "ps1"],
  loader: () => import('./powershell.js')
});
