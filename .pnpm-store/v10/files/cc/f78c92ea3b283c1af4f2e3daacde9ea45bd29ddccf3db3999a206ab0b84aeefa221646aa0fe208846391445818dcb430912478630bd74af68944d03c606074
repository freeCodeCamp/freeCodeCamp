import {
  buffers, Buffer, channel, Channel, EventChannel, MulticastChannel, END,
  eventChannel, multicastChannel, stdChannel,
} from "redux-saga";

function testBuffers() {
  const b1: Buffer<{foo: string}> = buffers.none<{foo: string}>();

  const b2: Buffer<{foo: string}> = buffers.dropping<{foo: string}>();
  const b3: Buffer<{foo: string}> = buffers.dropping<{foo: string}>(42);

  const b4: Buffer<{foo: string}> = buffers.expanding<{foo: string}>();
  const b5: Buffer<{foo: string}> = buffers.expanding<{foo: string}>(42);

  const b6: Buffer<{foo: string}> = buffers.fixed<{foo: string}>();
  const b7: Buffer<{foo: string}> = buffers.fixed<{foo: string}>(42);

  const b8: Buffer<{foo: string}> = buffers.sliding<{foo: string}>();
  const b9: Buffer<{foo: string}> = buffers.sliding<{foo: string}>(42);

  const buffer = buffers.none<{foo: string}>();

  // $ExpectError
  buffer.put({bar: 'bar'});
  buffer.put({foo: 'foo'});

  const isEmpty: boolean = buffer.isEmpty();

  const item = buffer.take();

  // $ExpectError
  item.foo;  // item may be undefined

  const foo: string = item!.foo;

  if (buffer.flush)
    buffer.flush();
}

function testChannel() {
  const c1: Channel<{foo: string}> = channel<{foo: string}>();
  const c2: Channel<{foo: string}> = channel(buffers.none<{foo: string}>());

  // $ExpectError
  c1.take();
  // $ExpectError
  c1.take((message: {bar: number} | END) => {});
  c1.take((message: {foo: string} | END) => {});

  // $ExpectError
  c1.put({bar: 1});
  c1.put({foo: 'foo'});
  c1.put(END);

  // $ExpectError
  c1.flush();
  // $ExpectError
  c1.flush((messages: Array<{bar: number}> | END) => {});
  c1.flush((messages: Array<{foo: string}> | END) => {});

  c1.close();

  // Testing that we can't define channels that pass void or undefined
  // $ExpectError
  const voidChannel: Channel<void> = channel();
  // $ExpectError
  const voidChannel2 = channel<void>();
  // $ExpectError
  const undefinedChannel = channel<undefined>();
  // $ExpectError
  channel().put();
  // $ExpectError
  channel().put(undefined);

  // Testing that we can pass primitives into channels
  channel().put(42);
  channel().put('test');
  channel().put(true);
}

function testEventChannel(secs: number) {
  const subscribe = (emitter: (input: number | END) => void) => {
    const iv = setInterval(() => {
      secs -= 1
      if (secs > 0) {
        emitter(secs)
      } else {
        emitter(END)
        clearInterval(iv)
      }
    }, 1000);
    return () => {
      clearInterval(iv)
    }
  };
  const c1: EventChannel<number> = eventChannel<number>(subscribe);

  const c2: EventChannel<number> = eventChannel<number>(subscribe,
    buffers.none<string>()); // $ExpectError

  const c3: EventChannel<number> = eventChannel<number>(subscribe,
    buffers.none<number>());

  // $ExpectError
  c1.take();
  // $ExpectError
  c1.take((message: string | END) => {});
  c1.take((message: number | END) => {});

  // $ExpectError
  c1.put(1);

  // $ExpectError
  c1.flush();
  // $ExpectError
  c1.flush((messages: string[] | END) => {});
  c1.flush((messages: number[] | END) => {});

  c1.close();

  // $ExpectError
  const c4: EventChannel<void> = eventChannel(() => () => {})

  // $ExpectError
  const c5 = eventChannel<void>(emit => {
    emit()
    return () => {}
  })

  const c6 = eventChannel(emit => {
    // $ExpectError
    emit()
    return () => {}
  })
}

function testMulticastChannel() {
  const c1: MulticastChannel<{foo: string}> = multicastChannel<{foo: string}>();
  const c2: MulticastChannel<{foo: string}> = stdChannel<{foo: string}>();

  // $ExpectError
  c1.take();
  // $ExpectError
  c1.take((message: {bar: number} | END) => {});
  c1.take((message: {foo: string} | END) => {});

  // $ExpectError
  c1.put({bar: 1});
  c1.put({foo: 'foo'});
  c1.put(END);

  // $ExpectError
  c1.flush((messages: Array<{foo: string}> | END) => {});

  c1.close();

  // $ExpectError
  const c3: MulticastChannel<void> = stdChannel()
  // $ExpectError
  const c4 = multicastChannel<void>()
  // $ExpectError
  const c5 = stdChannel<void>()
}
