var React = require('react'),
    SidePanel = require('./SidePanel'),
    Editor = require('../editor'),
    {
      Grid,
      Row,
      Col,
    } = require('react-bootstrap');

var Bonfire = React.createClass({

  render: function() {

    return (
      <Grid>
        <Row>
          <SidePanel />
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
