// if changed, update also jsdocs and docs
const defaultPort = 51204;
const defaultBrowserPort = 63315;
const defaultInspectPort = 9229;
const API_PATH = "/__vitest_api__";
const CONFIG_NAMES = ["vitest.config", "vite.config"];
const CONFIG_EXTENSIONS = [
	".ts",
	".mts",
	".cts",
	".js",
	".mjs",
	".cjs"
];
const configFiles = CONFIG_NAMES.flatMap((name) => CONFIG_EXTENSIONS.map((ext) => name + ext));
const globalApis = [
	"suite",
	"test",
	"describe",
	"it",
	"chai",
	"expect",
	"assert",
	"expectTypeOf",
	"assertType",
	"vitest",
	"vi",
	"beforeAll",
	"afterAll",
	"beforeEach",
	"afterEach",
	"onTestFinished",
	"onTestFailed",
	"aroundEach",
	"aroundAll"
];

export { API_PATH as A, defaultInspectPort as a, defaultPort as b, configFiles as c, defaultBrowserPort as d, globalApis as g };
