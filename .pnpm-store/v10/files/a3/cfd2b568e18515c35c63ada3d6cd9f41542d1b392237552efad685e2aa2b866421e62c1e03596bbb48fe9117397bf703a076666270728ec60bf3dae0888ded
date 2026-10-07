import { getBatch } from './batch'

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

type VoidFunc = () => void

type Listener = {
  callback: VoidFunc
  next: Listener | null
  prev: Listener | null
}

function createListenerCollection() {
  const batch = getBatch()
  let first: Listener | null = null
  let last: Listener | null = null

  return {
    clear() {
      first = null
      last = null
    },

    notify() {
      batch(() => {
        let listener = first
        while (listener) {
          listener.callback()
          listener = listener.next
        }
      })
    },

    get() {
      let listeners: Listener[] = []
      let listener = first
      while (listener) {
        listeners.push(listener)
        listener = listener.next
      }
      return listeners
    },

    subscribe(callback: () => void) {
      let isSubscribed = true

      let listener: Listener = (last = {
        callback,
        next: null,
        prev: last,
      })

      if (listener.prev) {
        listener.prev.next = listener
      } else {
        first = listener
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return
        isSubscribed = false

        if (listener.next) {
          listener.next.prev = listener.prev
        } else {
          last = listener.prev
        }
        if (listener.prev) {
          listener.prev.next = listener.next
        } else {
          first = listener.next
        }
      }
    },
  }
}

type ListenerCollection = ReturnType<typeof createListenerCollection>

export interface Subscription {
  addNestedSub: (listener: VoidFunc) => VoidFunc
  notifyNestedSubs: VoidFunc
  handleChangeWrapper: VoidFunc
  isSubscribed: () => boolean
  onStateChange?: VoidFunc | null
  trySubscribe: VoidFunc
  tryUnsubscribe: VoidFunc
  getListeners: () => ListenerCollection
}

const nullListeners = {
  notify() {},
  get: () => [],
} as unknown as ListenerCollection

export function createSubscription(store: any, parentSub?: Subscription) {
  let unsubscribe: VoidFunc | undefined
  let listeners: ListenerCollection = nullListeners

  // Reasons to keep the subscription active
  let subscriptionsAmount = 0

  // Is this specific subscription subscribed (or only nested ones?)
  let selfSubscribed = false

  function addNestedSub(listener: () => void) {
    trySubscribe()

    const cleanupListener = listeners.subscribe(listener)

    // cleanup nested sub
    let removed = false
    return () => {
      if (!removed) {
        removed = true
        cleanupListener()
        tryUnsubscribe()
      }
    }
  }

  function notifyNestedSubs() {
    listeners.notify()
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange()
    }
  }

  function isSubscribed() {
    return selfSubscribed
  }

  function trySubscribe() {
    subscriptionsAmount++
    if (!unsubscribe) {
      unsubscribe = parentSub
        ? parentSub.addNestedSub(handleChangeWrapper)
        : store.subscribe(handleChangeWrapper)

      listeners = createListenerCollection()
    }
  }

  function tryUnsubscribe() {
    subscriptionsAmount--
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe()
      unsubscribe = undefined
      listeners.clear()
      listeners = nullListeners
    }
  }

  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true
      trySubscribe()
    }
  }

  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false
      tryUnsubscribe()
    }
  }

  const subscription: Subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners,
  }

  return subscription
}
