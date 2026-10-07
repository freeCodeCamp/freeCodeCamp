declare namespace getSideChannelMap {
	type Channel<K, V> = {
		assert: (key: K) => void;
		has: (key: K) => boolean;
		get: (key: K) => V | undefined;
		set: (key: K, value: V) => void;
		delete: (key: K) => boolean;
	};
}

declare function getSideChannelMap<K, V>(): getSideChannelMap.Channel<K, V>;

declare const x: false | typeof getSideChannelMap;

export = x;
