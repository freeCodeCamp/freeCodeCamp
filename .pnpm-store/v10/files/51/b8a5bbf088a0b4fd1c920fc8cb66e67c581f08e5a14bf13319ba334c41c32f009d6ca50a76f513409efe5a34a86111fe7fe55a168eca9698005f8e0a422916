import { isNativeAudioNode } from '../guards/native-audio-node';
import { TNativeAudioNode, TNativeAudioParam } from '../types';

export const wrapAudioNodeDisconnectMethod = (nativeAudioNode: TNativeAudioNode): void => {
    const connections = new Map<TNativeAudioNode | TNativeAudioParam, { input: number; output: number }[]>();

    nativeAudioNode.connect = <TNativeAudioNode['connect']>((connect) => {
        // tslint:disable-next-line:invalid-void no-inferrable-types
        return (destination: TNativeAudioNode | TNativeAudioParam, output = 0, input: number = 0): void | TNativeAudioNode => {
            const returnValue = isNativeAudioNode(destination) ? connect(destination, output, input) : connect(destination, output);

            // Save the new connection only if the calls to connect above didn't throw an error.
            const connectionsToDestination = connections.get(destination);

            if (connectionsToDestination === undefined) {
                connections.set(destination, [{ input, output }]);
            } else {
                if (connectionsToDestination.every((connection) => connection.input !== input || connection.output !== output)) {
                    connectionsToDestination.push({ input, output });
                }
            }

            return returnValue;
        };
    })(nativeAudioNode.connect.bind(nativeAudioNode));

    nativeAudioNode.disconnect = ((disconnect) => {
        return (destinationOrOutput?: number | TNativeAudioNode | TNativeAudioParam, output?: number, input?: number): void => {
            disconnect.apply(nativeAudioNode);

            if (destinationOrOutput === undefined) {
                connections.clear();
            } else if (typeof destinationOrOutput === 'number') {
                for (const [destination, connectionsToDestination] of connections) {
                    const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== destinationOrOutput);

                    if (filteredConnections.length === 0) {
                        connections.delete(destination);
                    } else {
                        connections.set(destination, filteredConnections);
                    }
                }
            } else if (connections.has(destinationOrOutput)) {
                if (output === undefined) {
                    connections.delete(destinationOrOutput);
                } else {
                    const connectionsToDestination = connections.get(destinationOrOutput);

                    if (connectionsToDestination !== undefined) {
                        const filteredConnections = connectionsToDestination.filter(
                            (connection) => connection.output !== output && (connection.input !== input || input === undefined)
                        );

                        if (filteredConnections.length === 0) {
                            connections.delete(destinationOrOutput);
                        } else {
                            connections.set(destinationOrOutput, filteredConnections);
                        }
                    }
                }
            }

            for (const [destination, connectionsToDestination] of connections) {
                connectionsToDestination.forEach((connection) => {
                    if (isNativeAudioNode(destination)) {
                        nativeAudioNode.connect(destination, connection.output, connection.input);
                    } else {
                        nativeAudioNode.connect(destination, connection.output);
                    }
                });
            }
        };
    })(nativeAudioNode.disconnect);
};
