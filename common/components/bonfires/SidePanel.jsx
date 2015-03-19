var React = require('react'),
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
    difficulty: React.PropTypes.number
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

    if (isDescription) {
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
    var isMoreInfoOpen = this.state.isMoreInfoOpen;
    var isDescription = this.props.description &&
      this.props.description.length > 1;

    return (
      <Col
        xs={ 12 }
        md={ 4 }>
        <div>
          <h1 classNameName='text-center'>{ this.props.name }</h1>
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
                  <p>{ this.props.brief }</p>
                  <div>
                    {
                      isMoreInfoOpen ?
                      this._renderMoreInfo(isDescription) :
                      null
                    }
                    { this._renderMoreInfoButton(isDescription) }
                  </div>
                </div>
              </Col>
            </Row>
          </Well>
        </div>
      </Col>
    );
  }
});

module.exports = SidePanel;
