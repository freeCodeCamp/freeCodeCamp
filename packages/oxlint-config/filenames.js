import { fixupPluginRules } from '@eslint/compat';
import filenames from 'eslint-plugin-filenames-simple';

// This plugin still uses the pre-ESLint 9 context API.
export default fixupPluginRules(filenames);
