var React = require('react'),

    // ## components
    {
      Well,
      Row,
      Col,
      Button,
    } = require('react-bootstrap');

var SidePanel = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    brief: React.PropTypes.string,
    description: React.PropTypes.array,
    difficulty: React.PropTypes.number,
    onTestBonfire: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      name: 'Welcome to Bonfires!',
      difficulty: 5,
      brief: 'This is a brief description'
    };
  },

  getInitialState: function() {
    return {
      isMoreInfoOpen: false
    };
  },

  _toggleMoreInfo: function() {
    this.setState({
      isMoreInfoOpen: !this.state.isMoreInfoOpen
    });
  },

  _renderFlames: function() {
    var difficulty = this.props.difficulty;

    return [1, 2, 3, 4, 5].map(num => {
      var className = 'ion-ios-flame';
      if (num > difficulty) {
        className += '-outline';
      }
      return (
        <i
          key={ num }
          className={ className }/>
      );
    });
  },

  _renderMoreInfo: function(isDescription) {
    var description = this.props.description.map((sentance, index) => {
      return <p key={ index }>{ sentance }</p>;
    });

    if (isDescription && this.state.isMoreInfoOpen) {
      return (
        <Row>
          <Col xs={ 12 }>
            { description }
          </Col>
        </Row>
      );
    }
    return null;
  },

  _renderMoreInfoButton: function(isDescription) {
    if (isDescription) {
      return (
        <Button
          onClick={ this._toggleMoreInfo }
          bsStyle='primary'
          block={ true }
          className='btn-primary-ghost'>
          <span className='ion-arrow-down-b'></span>
          More information
        </Button>
      );
    }
    return null;
  },

  render: function() {
    var isDescription = this.props.description &&
      this.props.description.length > 1;

    return (
      <div>
        <h1 className='text-center'>{ this.props.name }</h1>
        <h2 className='text-center'>
          <div className='bonfire-flames'>
            Difficulty:&nbsp;
            { this._renderFlames() }
          </div>
        </h2>
        <Well>
          <Row>
            <Col xs={ 12 }>
              <div className='bonfire-instructions'>
                <p>{ this.props.brief }</p>
                <div>
                  { this._renderMoreInfo(isDescription) }
                  { this._renderMoreInfoButton(isDescription) }
                </div>
              </div>
            </Col>
          </Row>
        </Well>
        <Button
          bsStyle='primary'
          block={ true }
          className='btn-big'
          onClick={ this.props.onTestBonfire }>
          Run Code (ctrl + enter)
        </Button>
        <br />
      </div>
    );
  }
});

module.exports = SidePanel;
