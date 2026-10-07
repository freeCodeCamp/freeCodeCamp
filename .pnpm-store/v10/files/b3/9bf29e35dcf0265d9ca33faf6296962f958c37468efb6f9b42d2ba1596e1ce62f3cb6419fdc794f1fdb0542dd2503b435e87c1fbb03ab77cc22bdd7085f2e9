import * as avvio from "../../";

{
  // avvio with no argument
  const app = avvio();

  app.override = (server, fn, options) => server;

  app.use(
    (server, opts, done) => {
      server.use;
      server.after;
      server.ready;
      server.on;
      server.start;
      server.override;
      server.onClose;
      server.close;

      opts.mySuper;

      done();
    },
    { mySuper: "option" }
  );

  app.use(async (server, options) => {
    server.use;
    server.after;
    server.ready;
    server.on;
    server.start;
    server.override;
    server.onClose;
    server.close;
  });

  app.use(async (server, options) => {},
    (server) => {
      server.use;
      server.after;
      server.ready;
      server.on;
      server.start;
      server.override;
      server.onClose;
      server.close;
  });

  app.after(err => {
    if (err) throw err;
  });

  app.after((err: Error, done: Function) => {
    done();
  });

  app.after((err: Error, context: avvio.context<null>, done: Function) => {
    context.use;
    context.after;
    context.ready;
    context.on;
    context.start;
    context.override;
    context.onClose;
    context.close;

    done();
  });

  app.ready().then(context => {
    context.use;
    context.after;
    context.ready;
    context.on;
    context.start;
    context.override;
    context.onClose;
    context.close;
  });

  app.ready(err => {
    if (err) throw err;
  });

  app.ready((err: Error, done: Function) => {
    done();
  });

  app.ready((err: Error, context: avvio.context<null>, done: Function) => {
    context.use;
    context.after;
    context.ready;
    context.on;
    context.start;
    context.override;
    context.onClose;
    context.close;

    done();
  });

  app.close(err => {
    if (err) throw err;
  });

  app.close((err: Error, done: Function) => {
    done();
  });

  app.close((err: Error, context: avvio.context<null>, done: Function) => {
    context.use;
    context.after;
    context.ready;
    context.on;
    context.start;
    context.override;
    context.onClose;
    context.close;

    done();
  });

  app.onClose((context, done) => {
    context.use;
    context.after;
    context.ready;
    context.on;
    context.start;
    context.override;
    context.onClose;
    context.close;

    done();
  });
}

{
  // avvio with done
  const app = avvio(() => undefined);

  app.use(
    (server, opts, done) => {
      server.use;
      server.after;
      server.ready;
      server.on;
      server.start;
      server.override;
      server.onClose;
      server.close;

      opts.mySuper;

      done();
    },
    { mySuper: "option" }
  );

  app.use(async (server, options) => {
    server.use;
    server.after;
    server.ready;
    server.on;
    server.start;
    server.override;
    server.onClose;
    server.close;
  });

  app.use(async (server, options) => {},
    (server) => {
      server.use;
      server.after;
      server.ready;
      server.on;
      server.start;
      server.override;
      server.onClose;
      server.close;
    });

  app.after(err => {
    if (err) throw err;
  });

  app.after((err: Error, done: Function) => {
    done();
  });

  app.after((err: Error, context: avvio.context<null>, done: Function) => {
    context.use;
    context.after;
    context.ready;
    context.on;
    context.start;
    context.override;
    context.onClose;
    context.close;

    done();
  });

  app.ready().then(context => {
    context.use;
    context.after;
    context.ready;
    context.on;
    context.start;
    context.override;
    context.onClose;
    context.close;
  });

  app.ready(err => {
    if (err) throw err;
  });

  app.ready((err: Error, done: Function) => {
    done();
  });

  app.ready((err: Error, context: avvio.context<null>, done: Function) => {
    context.use;
    context.after;
    context.ready;
    context.on;
    context.start;
    context.override;
    context.onClose;
    context.close;

    done();
  });

  app.close(err => {
    if (err) throw err;
  });

  app.close((err: Error, done: Function) => {
    done();
  });

  app.close((err: Error, context: avvio.context<null>, done: Function) => {
    context.use;
    context.after;
    context.ready;
    context.on;
    context.start;
    context.override;
    context.onClose;
    context.close;

    done();
  });

  app.onClose((context, done) => {
    context.use;
    context.after;
    context.ready;
    context.on;
    context.start;
    context.override;
    context.onClose;
    context.close;

    done();
  });
}

{
  const server = { typescriptIs: "amazing" };
  // avvio with server
  const app = avvio(server);

  app.use(
    (server, opts, done) => {
      server.use;
      server.after;
      server.ready;
      server.typescriptIs;

      opts.mySuper;

      done();
    },
    { mySuper: "option" }
  );

  app.use(async (server, options) => {
    server.use;
    server.after;
    server.ready;
    server.typescriptIs;
  });

  app.use(async (server, options) => {},
   ((server) => {
      server.use;
      server.after;
      server.ready;
      server.typescriptIs;
  }));

  app.after(err => {
    if (err) throw err;
  });

  app.after((err: Error, done: Function) => {
    done();
  });

  app.after(
    (err: Error, context: avvio.context<typeof server>, done: Function) => {
      context.use;
      context.after;
      context.ready;
      context.typescriptIs;

      done();
    }
  );

  app.ready().then(context => {
    context.use;
    context.after;
    context.ready;
    context.typescriptIs;
  });

  app.ready(err => {
    if (err) throw err;
  });

  app.ready((err: Error, done: Function) => {
    done();
  });

  app.ready(
    (err: Error, context: avvio.context<typeof server>, done: Function) => {
      context.use;
      context.after;
      context.ready;
      context.close;
      context.onClose;
      context.typescriptIs;

      done();
    }
  );

  app.close(err => {
    if (err) throw err;
  });

  app.close((err: Error, done: Function) => {
    done();
  });

  app.close(
    (err: Error, context: avvio.context<typeof server>, done: Function) => {
      context.use;
      context.after;
      context.ready;
      context.close;
      context.onClose;
      context.typescriptIs;

      done();
    }
  );

  app.onClose((context, done) => {
    context.use;
    context.after;
    context.ready;
    context.close;
    context.onClose;
    context.typescriptIs;

    done();
  });
}

{
  const server = { hello: "world" };
  const options = {
    autostart: false,
    expose: { after: "after", ready: "ready", use: "use", close: "close", onClose : "onClose" },
    timeout: 50000
  };
  // avvio with server and options
  const app = avvio(server, options);
}

{
  const server = { hello: "world" };
  const options = {
    autostart: false,
    expose: { after: "after", ready: "ready", use: "use" }
  };
  // avvio with server, options and done callback
  const app = avvio(server, options, () => undefined);
}

{
  const app = avvio();
  const plugin: avvio.Plugin<any, any> = async (): Promise<void> => {};
  const promise = plugin(app, {}, undefined as any);
  (promise instanceof Promise);
}
