import getSideChannelList from 'side-channel-list';
import getSideChannelMap from 'side-channel-map';
import getSideChannelWeakMap from 'side-channel-weakmap';

declare namespace getSideChannel {
	type Channel<K, V> =
		| getSideChannelList.Channel<K, V>
		| ReturnType<Exclude<typeof getSideChannelMap<K, V>, false>>
		| ReturnType<Exclude<typeof getSideChannelWeakMap<K, V>, false>>;
}

declare function getSideChannel<K, V>(): getSideChannel.Channel<K, V>;

export = getSideChannel;
