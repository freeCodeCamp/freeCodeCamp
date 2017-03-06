/** @jsx React.DOM */
(function () {
	'use strict';

	// Stub for React: http://facebook.github.io/react/index.html
	var React = (function () {
		return {
			createClass: function (spec) {
				void spec;
			},

			renderComponent: function (nextComponent, container, callback) {
				void nextComponent;
				void container;
				void callback;
			}
		};
	}());

	var Qux = React.createClass({
		render: function () {
			return (
				/*jshint ignore:start */
				<div data-foo-id={this.props.foo}>
					/*some other comment*/
					<input type="text" value={this.props.bar} />
				</div>
				/*jshint ignore:end */
			);
		}
	});

	// this should trigger an error
	if (a == 0) {
		throw "why did you not lint the above line";
	}

	void Qux;
	var quxRendered = React.renderComponent(
		/*jshint ignore:start */
		<Qux foo={foo} bar={bar} />,
		$.find('[data-baz-id="' + baz + '"]')[0]
		/*jshint ignore:end */
	);

	return quxRendered;
}());
