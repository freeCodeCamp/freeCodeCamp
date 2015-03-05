var React = require('react'),
    {
      Well,
      Grid,
      Row,
      Col,
      Button,
    } = require('react-bootstrap');

var SidePanel = React.createClass({
  // props
  // difficulty - number of flames
  // brief - description
  // details - long description array of sentences
  propTypes: {
    difficulty: React.PropTypes.number,
    brief: React.PropTypes.string,
    detauls: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      difficulty: 2,
      brief: 'This is a brief description',
      details: [
        'a sentence',
        'another'
      ]
    };
  },

  getInitialState: function() {
    return {
      isMoreInfoOpen: false
    };
  },

  _handleClick: function() {
    this.setState({
      isMoreInfoOpen: !this.state.dropDownIsOpen
    });
  },

  _renderDropdown: function () {
    return (
      <div style={{ background: '#ccc' }}>
      </div>
    );
  },

  _renderHover: function() {
    return (
      <Row className='hide'>
        <Col xs={ 12 }>
          <p>Your goal is to fix the failing test.</p>
          <p>First, run all the tests by clicking 'Run code' or by pressing Control + Enter</p>
          <p>The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next Bonfire.</p>
          <p>Make this function return true no matter what.</p>
          <Button
            bsStyle='primary'
            block={ true }
            className='btn-primary-ghost'>
            <span className='ion-arrow-up-b'></span>
            Less information
          </Button>
        </Col>
      </Row>
    );
  },

  _renderFlames: function() {
    var difficulty = this.props.difficulty;

    return [1,2,3,4,5].map(num => {
      var className = 'ion-ios-flame';
      if (num > difficulty) {
        className += '-outline';
      }
      return (
        <i
          key={ num }
          className={ className } />
      );
    });
  },

  render: function() {
    var dropdown = this.state.isMoreInfoOpen ? this._renderInfo() : null;

    return (
      <Grid>
        <h1 classNameName='text-center'>Meet Bonfire</h1>
        <h2 classNameName='text-center'>
          <div classNameName='bonfire-flames'>
            Difficulty:&nbsp;
            { this._renderFlames() }
          </div>
        </h2>
        <Well>
          <Row>
            <Col xs={ 12 }>
              <div className='bonfire-instructions'>
                <p>Click the button below for further instructions.</p>
                <div>
                  { dropdown }
                  <Button
                    bsStyle='primary'
                    block={ true }
                    className='btn-primary-ghost'>
                    <span className='ion-arrow-down-b'></span>
                    More information
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Well>
      </Grid>
    );
  }
});

module.exports = SidePanel;
