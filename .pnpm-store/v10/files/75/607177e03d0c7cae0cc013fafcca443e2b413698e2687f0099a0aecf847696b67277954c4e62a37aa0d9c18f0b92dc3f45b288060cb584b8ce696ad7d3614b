export interface IGatsbyWorkerMessenger<MessagesFromParent = unknown, MessagesFromChild = MessagesFromParent> {
    onMessage: (listener: (msg: MessagesFromParent) => void) => void;
    sendMessage: (msg: MessagesFromChild) => void;
    messagingVersion: 1;
}
/**
 * Used to check wether current context is executed in worker process
 */
declare let isWorker: boolean;
declare let getMessenger: <MessagesFromParent = unknown, MessagesFromChild = MessagesFromParent>() => IGatsbyWorkerMessenger<MessagesFromParent, MessagesFromChild> | undefined;
export { isWorker, getMessenger };
