export function levelup(store) {
	return Object.assign(Object.create(store), {
		get(key, options, callback) {
			let result = store.get(key);
			if (typeof options == 'function')
				callback = options;
			if (callback) {
				if (result === undefined)
					callback(new NotFoundError());
				else
					callback(null, result);
			} else {
				if (result === undefined)
					return Promise.reject(new NotFoundError());
				else
					return Promise.resolve(result);
			}
		},
	});
}
class NotFoundError extends Error {
	constructor(message) {
		super(message);
		this.name = 'NotFoundError';
		this.notFound = true;
	}
}