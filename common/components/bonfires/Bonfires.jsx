var React = require('react'),

    // ## mixins
    { ObservableStateMixin } = require('thundercats'),

    // ## components
    SidePanel = require('./SidePanel.jsx'),
    Editor = require('../editor'),
    { Grid, Row, Col } = require('react-bootstrap'),

    // ## flux
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

  render: function() {
    var {
      name,
      difficulty,
      description
    } = this.state;
    var brief = description.slice(0, 1).pop();

    // convert bonfire difficulty from floating point string
    // to integer.
    var difficultyInt = Math.floor(+difficulty);

    return (
      <Grid>
        <Row>
          <SidePanel
            name={ name }
            brief={ brief }
            difficulty={ difficultyInt }
            description={ description.length > 1 ? description : [] }/>
          <Col
            xs={ 12 }
            md={ 8 }>
            <Editor value='This is code console.log(x)'/>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Bonfire;
