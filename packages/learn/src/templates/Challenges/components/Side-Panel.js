import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';

import ChallengeTitle from './Challenge-Title';
import ChallengeDescription from './Challenge-Description';
import Spacer from '../../../components/util/Spacer';

import { initConsole, openModal } from '../redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      initConsole,
      openHelpModal: () => openModal('help')
    },
    dispatch
  );

const propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  guideUrl: PropTypes.string,
  initConsole: PropTypes.func.isRequired,
  openHelpModal: PropTypes.func.isRequired,
  title: PropTypes.string
};

export class SidePanel extends PureComponent {
  constructor(props) {
    super(props);
    this.bindTopDiv = this.bindTopDiv.bind(this);
  }

  componentDidMount() {
    this.props.initConsole('');
  }

  componentDidUpdate(prevProps) {
    const { title, initConsole } = this.props;
    if (title !== prevProps.title) {
      initConsole('');
      const node = ReactDom.findDOMNode(this.descriptionTop);
      setTimeout(() => {
        node.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }

  bindTopDiv(node) {
    this.descriptionTop = node;
  }

  render() {
    const { title, description, guideUrl, openHelpModal } = this.props;
    return (
      <div className='instructions-panel' role='complementary'>
        <div ref={this.bindTopDiv} />
        <Spacer />
        <div>
          <ChallengeTitle>{title}</ChallengeTitle>
          <ChallengeDescription description={description} />
        </div>
        <Spacer />
        {guideUrl ? (
          <div>
            <Button
              block={true}
              bsStyle='primary'
              className='btn-big'
              href={guideUrl}
              target='_blank'
              >
              Get a hint
            </Button>
            <div className='button-spacer' />
          </div>
        ) : null}
        <Button
          block={true}
          bsStyle='primary'
          className='btn-big'
          onClick={openHelpModal}
          >
          Ask for help on the forum
        </Button>
      </div>
    );
  }
}

SidePanel.displayName = 'SidePanel';
SidePanel.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
