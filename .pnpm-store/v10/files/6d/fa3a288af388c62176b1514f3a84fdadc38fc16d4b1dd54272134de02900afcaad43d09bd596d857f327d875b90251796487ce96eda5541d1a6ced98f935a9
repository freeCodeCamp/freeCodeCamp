import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "html",
  extensions: [".html", ".htm", ".shtml", ".xhtml", ".mdoc", ".jsp", ".asp", ".aspx", ".jshtm"],
  aliases: ["HTML", "htm", "html", "xhtml"],
  mimetypes: ["text/html", "text/x-jshtm", "text/template", "text/ng-template"],
  loader: () => import('./html.js')
});
