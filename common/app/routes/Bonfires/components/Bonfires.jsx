var React = require('react'),

    // ## mixins
    { ObservableStateMixin } = require('thundercats'),

    // ## components
    SidePanel = require('./SidePanel.jsx'),
    Results = require('./Results.jsx'),
    Display = require('../displayCode'),
    Editor = require('../editor'),
    { Grid, Row, Col } = require('react-bootstrap'),

    // ## flux
    BonfireActions = require('./Actions'),
    BonfireStore = require('./Store');

var Bonfire = React.createClass({

  mixins: [ObservableStateMixin],

  contextTypes: {
    makePath: React.PropTypes.func.isRequired,
    replaceWith: React.PropTypes.func.isRequired
  },

  getObservable: function() {
    return BonfireStore;
  },

  componentDidMount: function() {
    // get history object
    var his = typeof window !== 'undefined' ? window.history : null;
    // spinal-case bonfireName
    var bonfireName = this.state.name.toLowerCase().replace(/\s/g, '-');
    // create proper URI from react-router
    var path = this.context.makePath('bonfires', { bonfireName: bonfireName });

    // if html5 push state exists, update URI
    // else we are using hash location and should just cause a re render
    if (his) {
      his.replaceState({ path: path }, '', path);
    } else {
      this.context.replaceWith('bonfires', { bonfireName: bonfireName});
    }
  },

  _onTestBonfire: function() {
    BonfireActions.testUserCode({
      userCode: this.state.userCode,
      tests: this.state.tests
    });
  },

  render: function() {
    var {
      name,
      userCode,
      difficulty,
      description,
      results,
      display
    } = this.state;
    var brief = description.slice(0, 1).pop();

    // convert bonfire difficulty from floating point string
    // to integer.
    var difficultyInt = Math.floor(+difficulty);

    return (
      <Grid>
        <Row>
          <Col
            xs={ 12 }
            md={ 4 }>
            <SidePanel
              name={ name }
              brief={ brief }
              difficulty={ difficultyInt }
              onTestBonfire={ this._onTestBonfire }
              description={ description.length > 1 ? description : [] }/>
            <Display
              value={ display }/>
            <Results
              results={ results }/>
          </Col>
          <Col
            xs={ 12 }
            md={ 8 }>
            <Editor
              onValueChange={ BonfireActions.setUserCode }
              value={ userCode }/>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Bonfire;
