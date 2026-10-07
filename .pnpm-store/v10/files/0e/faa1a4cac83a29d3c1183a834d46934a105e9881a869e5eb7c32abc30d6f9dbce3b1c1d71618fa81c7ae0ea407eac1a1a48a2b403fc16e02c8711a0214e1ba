import {Component as ReactComponent} from 'react';
import autoBind = require('.');

/**
Same as `autoBind`, but excludes the default [React component methods](https://reactjs.org/docs/react-component.html).

@param self - Object with methods to bind.

@example
```
import autoBindReact = require('auto-bind/react');

class Foo extends React.Component {
	constructor(props) {
		super(props);
		autoBindReact(this);
	}

	// …
}
```
*/
declare function autoBindReact<SelfType extends ReactComponent>(
	self: SelfType,
	options?: autoBind.Options
): SelfType;

export = autoBindReact;
