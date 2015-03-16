var React = require('react'),
    {
      Well,
      Row,
      Col,
      Button,
    } = require('react-bootstrap');

var SidePanel = React.createClass({

  propTypes: {
    brief: React.PropTypes.string,
    description: React.PropTypes.array,
    difficulty: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      difficulty: 2,
      brief: 'This is a brief description',
      description: [
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
          className={ className } />
      );
    });
  },

  _renderMoreInfo: function() {
    var description = this.props.description.map((sentance, index) => {
      return <p key={ index }>{ sentance }</p>;
    });

    return (
      <Row>
        <Col xs={ 12 }>
          { description }
        </Col>
      </Row>
    );
  },

  render: function() {
    var isMoreInfoOpen = this.state.isMoreInfoOpen;

    return (
      <Col
        xs={ 12 }
        md={ 4 }>
        <div>
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
                  <p>{ this.props.brief }</p>
                  <div>
                    { isMoreInfoOpen ? this._renderMoreInfo() : null }
                    <Button
                      onClick={ this._toggleMoreInfo }
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
        </div>
      </Col>
    );
  }
});

module.exports = SidePanel;
