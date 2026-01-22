export type Messenger<Message> = {
  postMessage: (message: Message, options: WindowPostMessageOptions) => void;
};

/**
 * Sends a message via a messenger (an object containing postMessage) and awaits a response.
 *
 * @template MessageOut - The type of the message being sent.
 * @template MessageIn - The type of the message expected to be returned. Must include a `type` and `value` property.
 * @template Value - The type of the value expected in the response message.
 *
 * @param {Object} params - The parameters for the function.
 * @param {Message} params.messenger - An object cabable of sending messages via postMessage.
 * @param {MessageOut} params.message - The message to send .
 * @param {Function} params.onMessage - A callback function to handle the response.
 * @param {MessageIn} params.onMessage.response - The response message.
 * @param {Function} params.onMessage.resolve - A function which, when called, resolves the promise with its argument.
 * @param {Function} params.onMessage.reject - A function which, when called, rejects the promise with its argument.
 *
 * @returns {Promise<Value>} A promise that resolves with the response value or rejects with an error message.
 */
export function awaitResponse<
  MessageOut,
  MessageIn extends { type: string; value: Value; error: string },
  Value
>({
  messenger,
  message,
  onMessage
}: {
  messenger: Messenger<MessageOut>;
  message: MessageOut;
  onMessage: (
    response: MessageIn,
    onSuccess: (res: Value) => void,
    onFailure: (err: Error) => void
  ) => void;
}): Promise<Value> {
  return new Promise(
    (resolve: (res: Value) => void, reject: (err: Error) => void) => {
      const channel = new MessageChannel();
      // TODO: Figure out how to ensure the worker is ready and/or handle when it
      // is not.
      const id = setTimeout(() => {
        channel.port1.close();
        reject(Error('No response from worker'));
      }, 5000);

      channel.port1.onmessage = (event: MessageEvent<MessageIn>) => {
        clearTimeout(id);
        channel.port1.close();
        onMessage(event.data, resolve, reject);
      };

      messenger.postMessage(message, {
        targetOrigin: '*',
        transfer: [channel.port2]
      });
    }
  );
}
