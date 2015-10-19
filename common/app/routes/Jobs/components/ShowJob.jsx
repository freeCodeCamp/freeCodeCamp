import React, { PropTypes } from 'react';
import { Row, Col, Thumbnail, Panel } from 'react-bootstrap';

const defaultImage =
  'https://pbs.twimg.com/' +
  'profile_images/562385977390272512/AK29YaTf_400x400.png';

const thumbnailStyle = {
  backgroundColor: 'white',
  maxHeight: '100px',
  maxWidth: '100px'
};

export default React.createClass({
  displayName: 'ShowJob',
  propTypes: {
    job: PropTypes.object,
    params: PropTypes.object
  },

  renderHeader({ company, position }) {
    return (
      <div>
        <h4 style={{ display: 'inline-block' }}>{ company }</h4>
        <h5
          className='pull-right hidden-xs hidden-md'
          style={{ display: 'inline-block' }}>
          { position }
        </h5>
      </div>
    );
  },

  render() {
    const { job = {} } = this.props;
    const {
      logo,
      position,
      city,
      company,
      state,
      locale,
      email,
      phone,
      description
    } = job;

    return (
      <div>
        <Row>
          <Col
            md={ 10 }
            mdOffset={ 1 }
            xs={ 12 }>
            <Panel>
              <Row>
                <h2 className='text-center'>
                  { company }
                </h2>
              </Row>
              <div className='spacer' />
              <Row>
                <Col
                  md={ 2 }
                  mdOffset={ 3 }>
                  <Thumbnail
                    alt={ logo ? company + 'company logo' : 'stock image' }
                    src={ logo || defaultImage }
                    style={ thumbnailStyle } />
                </Col>
                <Col
                  md={ 4 }>

                  <bold>Position: </bold> { position || 'N/A' }
                  <br />
                  <bold>Location: </bold>
                  { locale ? locale : `${city}, ${state}` }
                </Col>
              </Row>
              <div className='spacer' />
              <Row>
                <Col
                  md={ 6 }
                  mdOffset={ 3 }
                  xs={ 12 }>
                  <p>{ description }</p>
                </Col>
              </Row>
              <Row>
                <Col
                  md={ 6 }
                  mdOffset={ 3 }>
                  <bold>Contact:</bold> { email || phone }
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
});
