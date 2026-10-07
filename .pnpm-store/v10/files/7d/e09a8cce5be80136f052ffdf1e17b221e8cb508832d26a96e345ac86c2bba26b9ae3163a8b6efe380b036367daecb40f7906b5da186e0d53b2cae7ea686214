import { TMonitorConnectionsFactory, TNativeAudioNode, TNativeAudioParam } from '../types';

export const createMonitorConnections: TMonitorConnectionsFactory = (insertElementInSet, isNativeAudioNode) => {
    return (nativeAudioNode, whenConnected, whenDisconnected) => {
        const connections = new Set<[TNativeAudioNode, number, number] | [TNativeAudioParam, number]>();

        nativeAudioNode.connect = <TNativeAudioNode['connect']>((connect) => {
            // tslint:disable-next-line:invalid-void no-inferrable-types
            return (destination: TNativeAudioNode | TNativeAudioParam, output = 0, input: number = 0): void | TNativeAudioNode => {
                const wasDisconnected = connections.size === 0;

                if (isNativeAudioNode(destination)) {
                    // @todo TypeScript cannot infer the overloaded signature with 3 arguments yet.
                    (<(destination: TNativeAudioNode, output?: number, input?: number) => TNativeAudioNode>connect).call(
                        nativeAudioNode,
                        destination,
                        output,
                        input
                    );

                    insertElementInSet(
                        connections,
                        [destination, output, input],
                        (connection) => connection[0] === destination && connection[1] === output && connection[2] === input,
                        true
                    );

                    if (wasDisconnected) {
                        whenConnected();
                    }

                    return destination;
                }

                connect.call(nativeAudioNode, destination, output);

                insertElementInSet(
                    connections,
                    [destination, output],
                    (connection) => connection[0] === destination && connection[1] === output,
                    true
                );

                if (wasDisconnected) {
                    whenConnected();
                }

                return;
            };
        })(nativeAudioNode.connect);

        nativeAudioNode.disconnect = ((disconnect) => {
            return (destinationOrOutput?: number | TNativeAudioNode | TNativeAudioParam, output?: number, input?: number): void => {
                const wasConnected = connections.size > 0;

                if (destinationOrOutput === undefined) {
                    disconnect.apply(nativeAudioNode);

                    connections.clear();
                } else if (typeof destinationOrOutput === 'number') {
                    // @todo TypeScript cannot infer the overloaded signature with 1 argument yet.
                    (<(output: number) => void>disconnect).call(nativeAudioNode, destinationOrOutput);

                    for (const connection of connections) {
                        if (connection[1] === destinationOrOutput) {
                            connections.delete(connection);
                        }
                    }
                } else {
                    if (isNativeAudioNode(destinationOrOutput)) {
                        // @todo TypeScript cannot infer the overloaded signature with 3 arguments yet.
                        (<(destination: TNativeAudioNode, output?: number, input?: number) => void>disconnect).call(
                            nativeAudioNode,
                            destinationOrOutput,
                            output,
                            input
                        );
                    } else {
                        // @todo TypeScript cannot infer the overloaded signature with 2 arguments yet.
                        (<(destination: TNativeAudioParam, output?: number) => void>disconnect).call(
                            nativeAudioNode,
                            destinationOrOutput,
                            output
                        );
                    }

                    for (const connection of connections) {
                        if (
                            connection[0] === destinationOrOutput &&
                            (output === undefined || connection[1] === output) &&
                            (input === undefined || connection[2] === input)
                        ) {
                            connections.delete(connection);
                        }
                    }
                }

                const isDisconnected = connections.size === 0;

                if (wasConnected && isDisconnected) {
                    whenDisconnected();
                }
            };
        })(nativeAudioNode.disconnect);

        return nativeAudioNode;
    };
};
