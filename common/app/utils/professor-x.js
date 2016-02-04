import React, { PropTypes, createElement } from 'react';
import { Observable, CompositeDisposable } from 'rx';
import shouldComponentUpdate from 'react-pure-render/function';
import debug from 'debug';

// interface contain {
//   (options?: Object, Component: ReactComponent) => ReactComponent
//   (options?: Object) => (Component: ReactComponent) => ReactComponent
// }
//
// Action: { type: String, payload: Any, ...meta }
//
// ActionCreator(...args) => Observable
//
// interface options {
//   fetchAction?: ActionCreator,
//   getActionArgs?(props: Object, context: Object) => [],
//   isPrimed?(props: Object, context: Object) => Boolean,
//   handleError?(err) => Void
//   shouldRefetch?(
//     props: Object,
//     nextProps: Object,
//     context: Object,
//     nextContext: Object
//   ) => Boolean,
// }


const log = debug('fcc:professerx');

function getChildContext(childContextTypes, currentContext) {

  const compContext = { ...currentContext };
  // istanbul ignore else
  if (!childContextTypes || !childContextTypes.professor) {
    delete compContext.professor;
  }
  return compContext;
}

const __DEV__ = process.env.NODE_ENV !== 'production';

export default function contain(options = {}, Component) {
  /* istanbul ignore else */
  if (!Component) {
    return contain.bind(null, options);
  }

  let action;
  let isActionable = false;
  let hasRefetcher = typeof options.shouldRefetch === 'function';

  const getActionArgs = typeof options.getActionArgs === 'function' ?
    options.getActionArgs :
    (() => []);

  const isPrimed = typeof typeof options.isPrimed === 'function' ?
    options.isPrimed :
    (() => false);


  return class Container extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.__subscriptions = new CompositeDisposable();
    }

    static displayName = `Container(${Component.displayName})`;
    static propTypes = Component.propTypes;

    static contextTypes = {
      ...Component.contextTypes,
      professor: PropTypes.object
    };

    componentWillMount() {
      const { professor } = this.context;
      const { props } = this;
      if (!options.fetchAction) {
        log(`${Component.displayName} has no fetch action defined`);
        return null;
      }

      action = props[options.fetchAction];
      isActionable = typeof action === 'function';

      if (__DEV__ && typeof action !== 'function') {
        throw new Error(
          `${options.fetchAction} should return a function but got ${action}.
          Check the fetch options for ${Component.displayName}.`
        );
      }

      if (
        !professor ||
        !professor.fetchContext
      ) {
        log(
          `${Component.displayName} did not have professor defined on context`
        );
        return null;
      }


      const actionArgs = getActionArgs(
        props,
        getChildContext(Component.contextTypes, this.context)
      );

      professor.fetchContext.push({
        name: options.fetchAction,
        action,
        actionArgs,
        component: Component.displayName || 'Anon'
      });
    }

    componentDidMount() {
      if (isPrimed(this.props, this.context)) {
        log('container is primed');
        return null;
      }
      if (!isActionable) {
        log(`${Component.displayName} container is not actionable`);
        return null;
      }
      const actionArgs = getActionArgs(this.props, this.context);
      const fetch$ = action.apply(null, actionArgs);
      if (__DEV__ && !Observable.isObservable(fetch$)) {
        console.log(fetch$);
        throw new Error(
          `Action creator should return an Observable but got ${fetch$}.
          Check the action creator for fetch action ${options.fetchAction}`
        );
      }

      const subscription = fetch$.subscribe(
        () => {},
        options.handleError
      );
      this.__subscriptions.add(subscription);
    }

    componentWillReceiveProps(nextProps, nextContext) {
      if (
        !isActionable ||
        !hasRefetcher ||
        !options.shouldRefetch(
          this.props,
          nextProps,
          getChildContext(Component.contextTypes, this.context),
          getChildContext(Component.contextTypes, nextContext)
        )
      ) {
        return;
      }
      const actionArgs = getActionArgs(
        this.props,
        getChildContext(Component.contextTypes, this.context)
      );

      const fetch$ = action.apply(null, actionArgs);
      if (__DEV__ && Observable.isObservable(fetch$)) {
        throw new Error(
          'fetch action should return observable'
        );
      }

      const subscription = fetch$.subscribe(
        () => {},
        options.errorHandler
      );

      this.__subscriptions.add(subscription);
    }

    componentWillUnmount() {
      if (this.__subscriptions) {
        this.__subscriptions.dispose();
      }
    }

    shouldComponentUpdate = shouldComponentUpdate;

    render() {
      const { props } = this;

      return createElement(
        Component,
        props
      );
    }
  };
}
