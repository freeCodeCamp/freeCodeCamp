var React = require('react'),
    SidePanel = require('./SidePanel.jsx'),
    Editor = require('../editor'),
    BonfireStore = require('./Store'),
    { ObservableStateMixin } = require('thundercats'),
    {
      Grid,
      Row,
      Col,
    } = require('react-bootstrap');

var Bonfire = React.createClass({

  mixins: [ObservableStateMixin],

  getObservable: function() {
    return BonfireStore;
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
    difficulty = Math.floor(+difficulty);

    return (
      <Grid>
        <Row>
          <SidePanel
            name={ name }
            brief={ brief }
            difficulty={ difficulty }
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
