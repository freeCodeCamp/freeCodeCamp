import React, { PropTypes } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import urlRegexFactory from 'url-regex';

const urlRegex = urlRegexFactory();
const defaultImage =
  'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png';

const thumbnailStyle = {
  backgroundColor: 'white',
  maxHeight: '100px',
  maxWidth: '100px'
};

function addATags(text) {
  return text.replace(urlRegex, function(match) {
    return `<a href=${match} target='_blank'>${match}</a>`;
  });
}

export default React.createClass({
  displayName: 'ShowJob',
  propTypes: {
    job: PropTypes.object,
    params: PropTypes.object,
    showApply: PropTypes.bool,
    preview: PropTypes.bool,
    message: PropTypes.string
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

  renderHowToApply(showApply, preview, message, howToApply) {
    if (!showApply) {
      return (
        <Row>
            <Col
              md={ 6 }
              mdOffset={ 3 }>
                <h4 className='bg-info text-center'>{ message }</h4>
            </Col>
        </Row>
      );
    }

    return (
        <Row>
          <hr />
          <Col
            md={ 6 }
            mdOffset={ 3 }>
            <div>
              <bold>{ preview ? 'How do I apply?' : message }</bold>
              <br />
              <br />
              <span dangerouslySetInnerHTML={{
                __html: addATags(howToApply)
              }} />
            </div>
          </Col>
        </Row>
    );
  },

  render() {
    const {
      showApply = true,
      message,
      preview = true,
      job = {}
    } = this.props;

    const {
      logo,
      position,
      city,
      company,
      state,
      locale,
      description,
      howToApply
    } = job;

    return (
      <div>
        <Row>
          <Col
            md={ 10 }
            mdOffset={ 1 }
            xs={ 12 }>
            <div>
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
              <hr />
              <div className='spacer' />
              <Row>
                <Col
                  md={ 6 }
                  mdOffset={ 3 }
                  style={{ whiteSpace: 'pre-line' }}
                  xs={ 12 }>
                  <p>{ description }</p>
                </Col>
              </Row>
              { this.renderHowToApply(showApply, preview, message, howToApply) }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
});
