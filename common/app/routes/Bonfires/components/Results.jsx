var React = require('react'),
    classNames = require('classnames'),
    { Grid, Row, Col } = require('react-bootstrap');

var Results = React.createClass({

  propTypes: {
    results: React.PropTypes.array
  },

  _renderText: function(text, textClass) {
    return (
      <Col
        xs={ 11 }
        className={ classNames(textClass) }>
        { text }
      </Col>
    );
  },

  _renderResult: function(results) {
    return results.map(function(result, idx) {
      var err = result.err;
      var iconClass = {
        'ion-close-circled big-error-icon': err,
        'ion-checkmark-circled big-success-icon': !err
      };
      var textClass = {
        'test-output wrappable': true,
        'test-vertical-center': !err
      };
      return (
        <div key={ idx }>
          <Row>
            <Col
              xs={ 1 }
              className='text-center'>
              <i className={ classNames(iconClass) }></i>
            </Col>
            { this._renderText(result.text, textClass) }
            { err ? this._renderText(err, textClass) : null }
          </Row>
          <div className='ten-pixel-break'></div>
        </div>
      );
    }.bind(this));
  },

  render: function() {
    var results = this.props.results;
    if (!results || results.length && results.length === 0) {
      return null;
    }
    return (
      <Grid>
        { this._renderResult(this.props.results) }
      </Grid>
    );
  }
});

module.exports = Results;
