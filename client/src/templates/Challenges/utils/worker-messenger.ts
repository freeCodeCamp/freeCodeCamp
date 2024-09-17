/**
 * Sends a message to a web worker and awaits a response.
 *
 * @template MessageOut - The type of the message being sent to the worker.
 * @template MessageIn - The type of the message expected from the worker. Must include a `type` and `value` property.
 * @template Value - The type of the value expected in the response message.
 *
 * @param {Object} params - The parameters for the function.
 * @param {Worker} params.worker - The web worker to send the message to.
 * @param {MessageOut} params.message - The message to send to the worker.
 * @param {Function} params.onMessage - A callback function to handle the response from the worker.
 * @param {MessageIn} params.onMessage.response - The response message from the worker.
 * @param {Function} params.onMessage.resolve - A function to resolve the promise with the response value.
 * @param {Function} params.onMessage.reject - A function to reject the promise with an error message.
 *
 * @returns {Promise<Value>} A promise that resolves with the response value from the worker or rejects with an error message.
 */
export function awaitResponse<
  MessageOut,
  MessageIn extends { type: string; value: Value },
  Value
>({
  worker,
  message,
  onMessage
}: {
  worker: Worker;
  message: MessageOut;
  onMessage: (
    response: MessageIn,
    resolve: (res: Value) => void,
    reject: (err: string) => void
  ) => void;
}): Promise<Value> {
  return new Promise((resolve, reject) => {
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

    worker.postMessage(message, [channel.port2]);
  });
}
