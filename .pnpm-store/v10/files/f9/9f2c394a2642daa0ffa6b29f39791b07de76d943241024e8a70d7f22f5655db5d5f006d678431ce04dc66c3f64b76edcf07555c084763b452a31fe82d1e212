import {
	Agent,
	ClientRequest,
	RequestOptions,
	AgentCallbackCallback,
	AgentCallbackPromise,
	AgentCallbackReturn
} from './index';

type LegacyCallback = (
	req: ClientRequest,
	opts: RequestOptions,
	fn: AgentCallbackCallback
) => void;

export default function promisify(fn: LegacyCallback): AgentCallbackPromise {
	return function(this: Agent, req: ClientRequest, opts: RequestOptions) {
		return new Promise((resolve, reject) => {
			fn.call(
				this,
				req,
				opts,
				(err: Error | null | undefined, rtn?: AgentCallbackReturn) => {
					if (err) {
						reject(err);
					} else {
						resolve(rtn);
					}
				}
			);
		});
	};
}
