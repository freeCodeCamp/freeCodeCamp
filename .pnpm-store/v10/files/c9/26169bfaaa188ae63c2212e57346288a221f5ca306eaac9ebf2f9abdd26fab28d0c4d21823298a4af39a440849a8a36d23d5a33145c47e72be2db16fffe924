import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "hcl",
  extensions: [".tf", ".tfvars", ".hcl"],
  aliases: ["Terraform", "tf", "HCL", "hcl"],
  loader: () => import('./hcl.js')
});
