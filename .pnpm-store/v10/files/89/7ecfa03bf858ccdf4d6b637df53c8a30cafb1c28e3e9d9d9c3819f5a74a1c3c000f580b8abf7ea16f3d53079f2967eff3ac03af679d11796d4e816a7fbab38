import { TNativeAudioNode } from '../types';

export const interceptConnections = <T extends object>(
    original: T,
    interceptor: TNativeAudioNode
): T & { connect: TNativeAudioNode['connect']; disconnect: TNativeAudioNode['disconnect'] } => {
    (<T & { connect: TNativeAudioNode['connect'] }>original).connect = interceptor.connect.bind(interceptor);

    (<T & { disconnect: TNativeAudioNode['disconnect'] }>original).disconnect = interceptor.disconnect.bind(interceptor);

    return <T & { connect: TNativeAudioNode['connect']; disconnect: TNativeAudioNode['disconnect'] }>original;
};
