import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel } from 'react-bootstrap';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { FullWidthRow } from '../../../helperComponents';
import { userSelector } from '../../../redux';
import academicPolicy from '../../../../resource/academicPolicy';
import { updateUserBackend } from '../../../entities/user';

const propTypes = {
  isHonest: PropTypes.bool,
  policy: PropTypes.arrayOf(PropTypes.string),
  updateUserBackend: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(
  userSelector,
  ({ isHonest }) => ({
    policy: academicPolicy,
    isHonest
  })
);

const mapDispatchToProps = { updateUserBackend };

class Honesty extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showHonesty: false
    };

    this.handleAgreeClick = this.handleAgreeClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
  }

  handleAgreeClick() {
    this.props.updateUserBackend({ isHonest: true });
  }

  handleShowClick() {
    this.setState(state => ({
      ...state,
      showHonesty: !state.showHonesty
    }));
  }

  render() {
    const { policy, isHonest } = this.props;
    const isHonestAgreed = (
      <Panel bsStyle='info'>
        <p>
          You have already accepted our Academic Honesty Policy
        </p>
      </Panel>
    );
    const agreeButton = (
      <Button
        block={ true }
        bsStyle='primary'
        onClick={ this.handleAgreeClick }
        >
        Agree
      </Button>
    );
    return (
      <div id='honesty-policy'>
        <FullWidthRow>
          <h2>Academic Honesty Policy</h2>
          <Panel>
            {
              policy.map(
                (line, i) => (
                  <p
                  dangerouslySetInnerHTML={{ __html: line }}
                  key={ '' + i + line.slice(0, 10) }
                  />
                )
              )
            }
            <br />
            {
              isHonest ?
                isHonestAgreed :
                agreeButton
            }
          </Panel>
        </FullWidthRow>
      </div>
    );
  }
}


Honesty.displayName = 'Honesty';
Honesty.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Honesty);
