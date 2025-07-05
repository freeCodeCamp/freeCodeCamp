function createPseudoWorker(context) {
  class PseudoWorker {
    constructor(path) {
      this.terminated = false;
      this.worker = context.evaluateHandle(path => new Worker(path), path);
      this.listenToWorker('onmessage');
      this.listenToWorker('onerror');
    }

    terminate() {
      this.terminated = true;
      this.worker.then(worker =>
        context.evaluate(worker => worker.terminate(), worker)
      );
    }

    listenToWorker(eventName) {
      this.worker.then(async worker => {
        const producer = await context.evaluateHandle(
          (worker, eventName) => {
            let callback;
            const queue = [];
            function send(event) {
              if (!queue.length && callback) {
                callback();
              }
              queue.push(event);
            }

            worker[eventName] = e => send(e);

            const resolver = resolve => (callback = resolve);
            async function* produce() {
              while (true) {
                while (queue.length) {
                  yield queue.shift();
                }
                await new Promise(resolver);
              }
            }
            return produce();
          },
          worker,
          eventName
        );
        while (!this.terminated) {
          try {
            const data = await context.evaluate(
              producer =>
                producer
                  .next()
                  .then(({ value: { data, message } }) => ({ data, message })),
              producer
            );
            if (this[eventName]) {
              this[eventName](data);
            }
          } catch {
            break;
          }
        }
      });
    }

    async postMessage(msg) {
      if (this.terminated) {
        throw new Error('Worker is terminated.');
      }
      try {
        await this.worker.then(worker =>
          // realm is a puppeteer internal that we're abusing. Fortunately, if
          // it they change it, our tests should catch it. Reason being, we have
          // tests that expect evaluate to raise errors and tests that expect it
          // not to, so any change should be detected.
          // The change was introduced in puppeteer 21.2.0 and you can see the
          // changes in https://github.com/puppeteer/puppeteer/compare/puppeteer-core-v21.1.1...puppeteer-core-v21.2.0
          worker.realm.evaluate(
            (worker, msg) => worker.postMessage(msg),
            worker,
            msg
          )
        );
      } catch (e) {
        if (this.onerror) {
          this.onerror({ message: e.message });
        }
      }
    }
  }
  return PseudoWorker;
}

module.exports = createPseudoWorker;
