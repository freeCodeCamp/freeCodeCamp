declare namespace getSideChannelList {
	type Channel<K, V> = {
		assert: (key: K) => void;
		has: (key: K) => boolean;
		get: (key: K) => V | undefined;
		set: (key: K, value: V) => void;
		delete: (key: K) => boolean;
	};
}

declare function getSideChannelList<V, K>(): getSideChannelList.Channel<K, V>;

export = getSideChannelList;
