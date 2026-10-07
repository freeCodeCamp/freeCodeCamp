import { enqueueRender } from './component';

export let i = 0;

export function createContext(defaultValue, contextId) {
	contextId = '__cC' + i++;

	const context = {
		_id: contextId,
		_defaultValue: defaultValue,
		/** @type {FunctionComponent} */
		Consumer(props, contextValue) {
			// return props.children(
			// 	context[contextId] ? context[contextId].props.value : defaultValue
			// );
			return props.children(contextValue);
		},
		/** @type {FunctionComponent} */
		Provider(props) {
			if (!this.getChildContext) {
				/** @type {Set<Component> | null} */
				let subs = new Set();
				let ctx = {};
				ctx[contextId] = this;

				this.getChildContext = () => ctx;

				this.componentWillUnmount = () => {
					subs = null;
				};

				this.shouldComponentUpdate = function (_props) {
					if (this.props.value !== _props.value) {
						subs.forEach(c => {
							c._force = true;
							enqueueRender(c);
						});
					}
				};

				this.sub = c => {
					subs.add(c);
					let old = c.componentWillUnmount;
					c.componentWillUnmount = () => {
						if (subs) {
							subs.delete(c);
						}
						if (old) old.call(c);
					};
				};
			}

			return props.children;
		}
	};

	// Devtools needs access to the context object when it
	// encounters a Provider. This is necessary to support
	// setting `displayName` on the context object instead
	// of on the component itself. See:
	// https://reactjs.org/docs/context.html#contextdisplayname

	return (context.Provider._contextRef = context.Consumer.contextType =
		context);
}
