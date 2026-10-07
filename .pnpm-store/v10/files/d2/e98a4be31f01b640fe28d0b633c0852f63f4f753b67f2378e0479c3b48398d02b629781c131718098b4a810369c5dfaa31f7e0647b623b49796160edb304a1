import { spyOn } from '@vitest/spy';
import { M as ModuleMocker, r as rpc, c as createCompilerHints, h as hot } from './chunk-mocker.js';
import './index.js';
import './chunk-registry.js';
import './chunk-pathe.M-eThtNZ.js';

function registerModuleMocker(interceptor) {
	const mocker = new ModuleMocker(interceptor(__VITEST_GLOBAL_THIS_ACCESSOR__), {
		resolveId(id, importer) {
			return rpc("vitest:mocks:resolveId", {
				id,
				importer
			});
		},
		resolveMock(id, importer, options) {
			return rpc("vitest:mocks:resolveMock", {
				id,
				importer,
				options
			});
		},
		async invalidate(ids) {
			return rpc("vitest:mocks:invalidate", { ids });
		}
	}, spyOn, { root: __VITEST_MOCKER_ROOT__ });
	globalThis[__VITEST_GLOBAL_THIS_ACCESSOR__] = mocker;
	registerNativeFactoryResolver(mocker);
	return createCompilerHints({ globalThisKey: __VITEST_GLOBAL_THIS_ACCESSOR__ });
}
function registerNativeFactoryResolver(mocker) {
	hot.on("vitest:interceptor:resolve", async (url) => {
		const exports = await mocker.resolveFactoryModule(url);
		const keys = Object.keys(exports);
		hot.send("vitest:interceptor:resolved", {
			url,
			keys
		});
	});
}

export { registerModuleMocker, registerNativeFactoryResolver };
