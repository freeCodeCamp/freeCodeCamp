import { r as rpc } from './chunk-mocker.js';

class ModuleMockerServerInterceptor {
	async register(module) {
		await rpc("vitest:interceptor:register", module.toJSON());
	}
	async delete(id) {
		await rpc("vitest:interceptor:delete", id);
	}
	async invalidate() {
		await rpc("vitest:interceptor:invalidate");
	}
}

export { ModuleMockerServerInterceptor as M };
