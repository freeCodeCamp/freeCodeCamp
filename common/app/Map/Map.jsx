import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';
import { Col, Row } from 'react-bootstrap';
import NoSSR from 'react-no-ssr';
import Codemirror from 'react-codemirror';
import CodeMirrorSkeleton from '../routes/challenges/Code-Mirror-Skeleton.jsx';

import ns from './ns.json';
import SuperBlock from './Super-Block.jsx';
import { superBlocksSelector } from '../redux';

const mapStateToProps = state => ({
  superBlocks: superBlocksSelector(state)
});

const mapDispatchToProps = {};
const propTypes = {
  params: PropTypes.object,
  superBlocks: PropTypes.array
};
const defaultOptions = {
  lineNumbers: false,
  lineWrapping: true,
  mode: 'javascript',
  readOnly: 'nocursor',
  theme: 'monokai'
};

export class ShowMap extends PureComponent {
  renderSuperBlocks(superBlocks) {
    if (!Array.isArray(superBlocks) || !superBlocks.length) {
       return (
         <div className={ `${ns}-log` }>
          <NoSSR onSSR={ <CodeMirrorSkeleton content='Loading...' /> }>
             <Codemirror
              options={ defaultOptions }
              value='Loading...'
             />
          </NoSSR>
         </div>
        );
    }
    return superBlocks.map(dashedName => (
      <SuperBlock
        dashedName={ dashedName }
        key={ dashedName }
      />
    ));
  }

  render() {
    const { superBlocks } = this.props;
    return (
      <Row>
        <Col xs={ 12 }>
          <div className={ `${ns}-accordion center-block` }>
            { this.renderSuperBlocks(superBlocks) }
            <div className='spacer' />
          </div>
        </Col>
      </Row>
    );
  }
}

ShowMap.displayName = 'Map';
ShowMap.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowMap);
