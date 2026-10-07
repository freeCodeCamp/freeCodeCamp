class Disposable {
  subscriptions = [];
  dispose() {
    let subscription;
    while (subscription = this.subscriptions.shift()) {
      subscription();
    }
  }
}
export {
  Disposable
};
//# sourceMappingURL=Disposable.mjs.map