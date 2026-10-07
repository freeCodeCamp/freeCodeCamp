import { existsSync, writeFileSync, readFileSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname, relative } from 'node:path';
import { detectPackageManager, installPackage } from './index.D3XRDfWc.js';
import { p as prompt, f as findUp } from './index.X0nbfr6-.js';
import { x } from 'tinyexec';
import c from 'tinyrainbow';
import { c as configFiles } from './constants.DnKduX2e.js';
import 'node:process';
import 'node:url';
import './_commonjsHelpers.BFTU3MAI.js';
import 'readline';
import 'events';

const jsxExample = {
	name: "HelloWorld.jsx",
	js: `
export default function HelloWorld({ name }) {
  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  )
}
`,
	ts: `
export default function HelloWorld({ name }: { name: string }) {
  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  )
}
`,
	test: `
import { expect, test } from 'vitest'
import { render } from '@testing-library/jsx'
import HelloWorld from './HelloWorld.jsx'

test('renders name', async () => {
  const { getByText } = render(<HelloWorld name="Vitest" />)
  await expect.element(getByText('Hello Vitest!')).toBeInTheDocument()
})
`
};
const vueExample = {
	name: "HelloWorld.vue",
	js: `
<script setup>
defineProps({
  name: String
})
</script>

<template>
  <div>
    <h1>Hello {{ name }}!</h1>
  </div>
</template>
`,
	ts: `
<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div>
    <h1>Hello {{ name }}!</h1>
  </div>
</template>
`,
	test: `
import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'
import HelloWorld from './HelloWorld.vue'

test('renders name', async () => {
  const { getByText } = render(HelloWorld, {
    props: { name: 'Vitest' },
  })
  await expect.element(getByText('Hello Vitest!')).toBeInTheDocument()
})
`
};
const svelteExample = {
	name: "HelloWorld.svelte",
	js: `
<script>
  export let name
</script>

<h1>Hello {name}!</h1>
`,
	ts: `
<script lang="ts">
  export let name: string
</script>

<h1>Hello {name}!</h1>
`,
	test: `
import { expect, test } from 'vitest'
import { render } from 'vitest-browser-svelte'
import HelloWorld from './HelloWorld.svelte'

test('renders name', async () => {
  const { getByText } = render(HelloWorld, { name: 'Vitest' })
  await expect.element(getByText('Hello Vitest!')).toBeInTheDocument()
})
`
};
const markoExample = {
	name: "HelloWorld.marko",
	js: `
class {
  onCreate() {
    this.state = { name: null }
  }
}

<h1>Hello \${state.name}!</h1>
`,
	ts: `
export interface Input {
  name: string
}

<h1>Hello \${input.name}!</h1>
`,
	test: `
import { expect, test } from 'vitest'
import { render } from '@marko/testing-library'
import HelloWorld from './HelloWorld.svelte'

test('renders name', async () => {
  const { getByText } = await render(HelloWorld, { name: 'Vitest' })
  const element = getByText('Hello Vitest!')
  expect(element).toBeInTheDocument()
})
`
};
const litExample = {
	name: "HelloWorld.js",
	js: `
import { html, LitElement } from 'lit'

export class HelloWorld extends LitElement {
  static properties = {
    name: { type: String },
  }

  constructor() {
    super()
    this.name = 'World'
  }

  render() {
    return html\`<h1>Hello \${this.name}!</h1>\`
  }
}

customElements.define('hello-world', HelloWorld)
`,
	ts: `
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hello-world')
export class HelloWorld extends LitElement {
  @property({ type: String })
  name = 'World'

  render() {
    return html\`<h1>Hello \${this.name}!</h1>\`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hello-world': HelloWorld
  }
}
`,
	test: `
import { expect, test } from 'vitest'
import { render } from 'vitest-browser-lit'
import { html } from 'lit'
import './HelloWorld.js'

test('renders name', async () => {
  const screen = render(html\`<hello-world name="Vitest"></hello-world>\`)
  const element = screen.getByText('Hello Vitest!')
  await expect.element(element).toBeInTheDocument()
})
`
};
const vanillaExample = {
	name: "HelloWorld.js",
	js: `
export default function HelloWorld({ name }) {
  const parent = document.createElement('div')

  const h1 = document.createElement('h1')
  h1.textContent = 'Hello ' + name + '!'
  parent.appendChild(h1)

  return parent
}
`,
	ts: `
export default function HelloWorld({ name }: { name: string }): HTMLDivElement {
  const parent = document.createElement('div')

  const h1 = document.createElement('h1')
  h1.textContent = 'Hello ' + name + '!'
  parent.appendChild(h1)

  return parent
}
`,
	test: `
import { expect, test } from 'vitest'
import { getByText } from '@testing-library/dom'
import HelloWorld from './HelloWorld.js'

test('renders name', () => {
  const parent = HelloWorld({ name: 'Vitest' })
  document.body.appendChild(parent)

  const element = getByText(parent, 'Hello Vitest!')
  expect(element).toBeInTheDocument()
})
`
};
function getExampleTest(framework) {
	switch (framework) {
		case "solid": return {
			...jsxExample,
			test: jsxExample.test.replace("@testing-library/jsx", `@testing-library/${framework}`)
		};
		case "preact":
		case "react": return {
			...jsxExample,
			test: jsxExample.test.replace("@testing-library/jsx", `vitest-browser-${framework}`)
		};
		case "vue": return vueExample;
		case "svelte": return svelteExample;
		case "lit": return litExample;
		case "marko": return markoExample;
		default: return vanillaExample;
	}
}
async function generateExampleFiles(framework, lang) {
	const example = getExampleTest(framework);
	let fileName = example.name;
	const folder = resolve(process.cwd(), "vitest-example");
	const fileContent = example[lang];
	if (!existsSync(folder)) await mkdir(folder, { recursive: true });
	const isJSX = fileName.endsWith(".jsx");
	if (isJSX && lang === "ts") fileName = fileName.replace(".jsx", ".tsx");
	else if (fileName.endsWith(".js") && lang === "ts") fileName = fileName.replace(".js", ".ts");
	const filePath = resolve(folder, fileName);
	const testPath = resolve(folder, `HelloWorld.test.${isJSX ? `${lang}x` : lang}`);
	writeFileSync(filePath, fileContent.trimStart(), "utf-8");
	writeFileSync(testPath, example.test.trimStart(), "utf-8");
	return testPath;
}

// eslint-disable-next-line no-console
const log = console.log;
function getProviderOptions() {
	const providers = {
		playwright: "Playwright relies on Chrome DevTools protocol. Read more: https://playwright.dev",
		webdriverio: "WebdriverIO uses WebDriver protocol. Read more: https://webdriver.io",
		preview: "Preview is useful to quickly run your tests in the browser, but not suitable for CI."
	};
	return Object.entries(providers).map(([provider, description]) => {
		return {
			title: provider,
			description,
			value: provider
		};
	});
}
function getBrowserNames(provider) {
	switch (provider) {
		case "webdriverio": return [
			"chrome",
			"firefox",
			"edge",
			"safari"
		];
		case "playwright": return [
			"chromium",
			"firefox",
			"webkit"
		];
		case "preview": return [
			"chrome",
			"firefox",
			"safari"
		];
	}
}
function getProviderPackageNames(provider) {
	switch (provider) {
		case "webdriverio": return {
			types: "@vitest/browser/providers/webdriverio",
			pkg: "webdriverio"
		};
		case "playwright": return {
			types: "@vitest/browser/providers/playwright",
			pkg: "playwright"
		};
		case "preview": return {
			types: "@vitest/browser/matchers",
			pkg: null
		};
	}
	throw new Error(`Unsupported provider: ${provider}`);
}
function getFramework() {
	return [
		{
			title: "vanilla",
			value: "vanilla",
			description: "No framework, just plain JavaScript or TypeScript."
		},
		{
			title: "vue",
			value: "vue",
			description: "\"The Progressive JavaScript Framework\""
		},
		{
			title: "svelte",
			value: "svelte",
			description: "\"Svelte: cybernetically enhanced web apps\""
		},
		{
			title: "react",
			value: "react",
			description: "\"The library for web and native user interfaces\""
		},
		{
			title: "lit",
			value: "lit",
			description: "\"A simple library for building fast, lightweight web components.\""
		},
		{
			title: "preact",
			value: "preact",
			description: "\"Fast 3kB alternative to React with the same modern API\""
		},
		{
			title: "solid",
			value: "solid",
			description: "\"Simple and performant reactivity for building user interfaces\""
		},
		{
			title: "marko",
			value: "marko",
			description: "\"A declarative, HTML-based language that makes building web apps fun\""
		}
	];
}
function getFrameworkTestPackage(framework) {
	switch (framework) {
		case "vanilla": return null;
		case "vue": return "vitest-browser-vue";
		case "svelte": return "vitest-browser-svelte";
		case "react": return "vitest-browser-react";
		case "lit": return "vitest-browser-lit";
		case "preact": return "vitest-browser-preact";
		case "solid": return "@solidjs/testing-library";
		case "marko": return "@marko/testing-library";
	}
	throw new Error(`Unsupported framework: ${framework}`);
}
function getFrameworkPluginPackage(framework) {
	switch (framework) {
		case "vue": return "@vitejs/plugin-vue";
		case "svelte": return "@sveltejs/vite-plugin-svelte";
		case "react": return "@vitejs/plugin-react";
		case "preact": return "@preact/preset-vite";
		case "solid": return "vite-plugin-solid";
		case "marko": return "@marko/vite";
	}
	return null;
}
async function updateTsConfig(type) {
	if (type == null) return;
	const msg = `Add "${c.bold(type)}" to your tsconfig.json "${c.bold("compilerOptions.types")}" field to have better intellisense support.`;
	log();
	log(c.yellow("◼"), c.yellow(msg));
}
function getLanguageOptions() {
	return [{
		title: "TypeScript",
		description: "Use TypeScript.",
		value: "ts"
	}, {
		title: "JavaScript",
		description: "Use plain JavaScript.",
		value: "js"
	}];
}
async function installPackages(pkgManager, packages) {
	if (!packages.length) {
		log(c.green("✔"), c.bold("All packages are already installed."));
		return;
	}
	log(c.cyan("◼"), c.bold("Installing packages..."));
	log(c.cyan("◼"), packages.join(", "));
	log();
	await installPackage(packages, {
		dev: true,
		packageManager: pkgManager ?? void 0
	});
}
function readPkgJson(path) {
	if (!existsSync(path)) return null;
	const content = readFileSync(path, "utf-8");
	return JSON.parse(content);
}
function getPossibleDefaults(dependencies) {
	const provider = getPossibleProvider(dependencies);
	const framework = getPossibleFramework(dependencies);
	return {
		lang: "ts",
		provider,
		framework
	};
}
function getPossibleFramework(dependencies) {
	if (dependencies.vue || dependencies["vue-tsc"] || dependencies["@vue/reactivity"]) return "vue";
	if (dependencies.react || dependencies["react-dom"]) return "react";
	if (dependencies.svelte || dependencies["@sveltejs/kit"]) return "svelte";
	if (dependencies.lit || dependencies["lit-html"]) return "lit";
	if (dependencies.preact) return "preact";
	if (dependencies["solid-js"] || dependencies["@solidjs/start"]) return "solid";
	if (dependencies.marko) return "marko";
	return "vanilla";
}
function getPossibleProvider(dependencies) {
	if (dependencies.webdriverio || dependencies["@wdio/cli"] || dependencies["@wdio/config"]) return "webdriverio";
	// playwright is the default recommendation
	return "playwright";
}
function getProviderDocsLink(provider) {
	switch (provider) {
		case "playwright": return "https://vitest.dev/guide/browser/playwright";
		case "webdriverio": return "https://vitest.dev/guide/browser/webdriverio";
	}
}
function sort(choices, value) {
	const index = choices.findIndex((i) => i.value === value);
	if (index === -1) return choices;
	const item = choices.splice(index, 1)[0];
	return [item, ...choices];
}
function fail() {
	process.exitCode = 1;
}
async function generateFrameworkConfigFile(options) {
	const frameworkImport = options.framework === "svelte" ? `import { svelte } from '${options.frameworkPlugin}'` : `import ${options.framework} from '${options.frameworkPlugin}'`;
	const configContent = [
		`import { defineConfig } from 'vitest/config'`,
		options.frameworkPlugin ? frameworkImport : null,
		``,
		"export default defineConfig({",
		options.frameworkPlugin ? `  plugins: [${options.framework}()],` : null,
		`  test: {`,
		`    browser: {`,
		`      enabled: true,`,
		`      provider: '${options.provider}',`,
		options.provider !== "preview" && `      // ${getProviderDocsLink(options.provider)}`,
		`      instances: [`,
		...options.browsers.map((browser) => `      { browser: '${browser}' },`),
		`      ],`,
		`    },`,
		`  },`,
		`})`,
		""
	].filter((t) => typeof t === "string").join("\n");
	await writeFile(options.configPath, configContent);
}
async function updatePkgJsonScripts(pkgJsonPath, vitestScript) {
	if (!existsSync(pkgJsonPath)) {
		const pkg = { scripts: { "test:browser": vitestScript } };
		await writeFile(pkgJsonPath, `${JSON.stringify(pkg, null, 2)}\n`, "utf-8");
	} else {
		const pkg = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));
		pkg.scripts = pkg.scripts || {};
		pkg.scripts["test:browser"] = vitestScript;
		await writeFile(pkgJsonPath, `${JSON.stringify(pkg, null, 2)}\n`, "utf-8");
	}
	log(c.green("✔"), "Added \"test:browser\" script to your package.json.");
}
function getRunScript(pkgManager) {
	switch (pkgManager) {
		case "yarn@berry":
		case "yarn": return "yarn test:browser";
		case "pnpm@6":
		case "pnpm": return "pnpm test:browser";
		case "bun": return "bun test:browser";
		default: return "npm run test:browser";
	}
}
function getPlaywrightRunArgs(pkgManager) {
	switch (pkgManager) {
		case "yarn@berry":
		case "yarn": return ["yarn", "exec"];
		case "pnpm@6":
		case "pnpm": return ["pnpx"];
		case "bun": return ["bunx"];
		default: return ["npx"];
	}
}
async function create() {
	log(c.cyan("◼"), "This utility will help you set up a browser testing environment.\n");
	const pkgJsonPath = resolve(process.cwd(), "package.json");
	const pkg = readPkgJson(pkgJsonPath) || {};
	const dependencies = {
		...pkg.dependencies,
		...pkg.devDependencies
	};
	const defaults = getPossibleDefaults(dependencies);
	const { lang } = await prompt({
		type: "select",
		name: "lang",
		message: "Choose a language for your tests",
		choices: sort(getLanguageOptions(), defaults?.lang)
	});
	if (!lang) return fail();
	const { provider } = await prompt({
		type: "select",
		name: "provider",
		message: "Choose a browser provider. Vitest will use its API to control the testing environment",
		choices: sort(getProviderOptions(), defaults?.provider)
	});
	if (!provider) return fail();
	const { browsers } = await prompt({
		type: "multiselect",
		name: "browsers",
		message: "Choose a browser",
		choices: getBrowserNames(provider).map((browser) => ({
			title: browser,
			value: browser
		}))
	});
	if (!provider) return fail();
	const { framework } = await prompt({
		type: "select",
		name: "framework",
		message: "Choose your framework",
		choices: sort(getFramework(), defaults?.framework)
	});
	if (!framework) return fail();
	let installPlaywright = false;
	if (provider === "playwright") ({installPlaywright} = await prompt({
		type: "confirm",
		name: "installPlaywright",
		message: `Install Playwright browsers (can be done manually via 'pnpm exec playwright install')?`
	}));
	if (installPlaywright == null) return fail();
	const dependenciesToInstall = ["@vitest/browser"];
	const frameworkPackage = getFrameworkTestPackage(framework);
	if (frameworkPackage) dependenciesToInstall.push(frameworkPackage);
	const providerPkg = getProviderPackageNames(provider);
	if (providerPkg.pkg) dependenciesToInstall.push(providerPkg.pkg);
	const frameworkPlugin = getFrameworkPluginPackage(framework);
	if (frameworkPlugin) dependenciesToInstall.push(frameworkPlugin);
	const pkgManager = await detectPackageManager();
	log();
	await installPackages(pkgManager, dependenciesToInstall.filter((pkg) => !dependencies[pkg]));
	const rootConfig = await findUp(configFiles, { cwd: process.cwd() });
	let scriptCommand = "vitest";
	log();
	if (rootConfig) {
		const configPath = resolve(dirname(rootConfig), `vitest.browser.config.${lang}`);
		scriptCommand = `vitest --config=${relative(process.cwd(), configPath)}`;
		await generateFrameworkConfigFile({
			configPath,
			framework,
			frameworkPlugin,
			provider,
			browsers
		});
		log(
			c.green("✔"),
			"Created a new config file for browser tests:",
			c.bold(relative(process.cwd(), configPath)),
			// TODO: Can we modify the config ourselves?
			"\nSince you already have a Vitest config file, it is recommended to copy the contents of the new file ",
			"into your existing config located at ",
			c.bold(relative(process.cwd(), rootConfig))
		);
	} else {
		const configPath = resolve(process.cwd(), `vitest.config.${lang}`);
		await generateFrameworkConfigFile({
			configPath,
			framework,
			frameworkPlugin,
			provider,
			browsers
		});
		log(c.green("✔"), "Created a config file for browser tests:", c.bold(relative(process.cwd(), configPath)));
	}
	log();
	await updatePkgJsonScripts(pkgJsonPath, scriptCommand);
	if (installPlaywright) {
		log();
		const [command, ...args] = getPlaywrightRunArgs(pkgManager);
		const allArgs = [
			...args,
			"playwright",
			"install",
			"--with-deps"
		];
		log(c.cyan("◼"), `Installing Playwright dependencies with \`${c.bold(command)} ${c.bold(allArgs.join(" "))}\`...`);
		log();
		await x(command, allArgs, { nodeOptions: { stdio: [
			"pipe",
			"inherit",
			"inherit"
		] } });
	}
	// TODO: can we do this ourselves?
	if (lang === "ts") await updateTsConfig(providerPkg?.types);
	log();
	const exampleTestFile = await generateExampleFiles(framework, lang);
	log(c.green("✔"), "Created example test file in", c.bold(relative(process.cwd(), exampleTestFile)));
	log(c.dim("  You can safely delete this file once you have written your own tests."));
	log();
	log(c.cyan("◼"), "All done! Run your tests with", c.bold(getRunScript(pkgManager)));
}

export { create };
