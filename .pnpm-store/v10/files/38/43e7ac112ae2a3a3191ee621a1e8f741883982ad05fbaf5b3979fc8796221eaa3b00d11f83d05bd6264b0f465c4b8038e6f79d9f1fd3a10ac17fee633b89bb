export type DisposableSubscription = () => void

export class Disposable {
  protected subscriptions: Array<DisposableSubscription> = []

  public dispose() {
    let subscription: DisposableSubscription | undefined
    while ((subscription = this.subscriptions.shift())) {
      subscription()
    }
  }
}
