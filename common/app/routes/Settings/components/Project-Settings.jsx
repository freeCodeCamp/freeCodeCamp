import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  Row,
  Col,
  Button,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

import { entitiesSelector, projectsSelector } from '../../../entities';
import { updateUserBackend } from '../../../entities/user';

const mapStateToProps = createSelector(
  projectsSelector,
  entitiesSelector,
  (projects, { challengeIdToName }) => ({
    challengeIdToName,
    projects
  })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      projectBlockName: PropTypes.string,
      challenges: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  updateUserBackend: PropTypes.func.isRequired
};

class ProjectSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    const { projects } = this.props;
    if (projects.length && !Object.keys(this.state).length) {
      const initialInputState = projects.reduce((accu, current) => ({
        ...accu,
        [_.kebabCase(current.projectBlockName)]:
          current.challenges.reduce((map, challenge) =>({
            ...map,
            [_.kebabCase(challenge)]: ''
          }), {})
      }), {});
      // This component will not render without this state being set
      // The conditional above is to protect against recursive rendering
      /* eslint-disable react/no-did-update-set-state */
      this.setState(initialInputState);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const solutions = this.state[e.target.id];
    console.log(solutions);
    // this.props.claimCert(block, solutions);
  }

  handleChange(blockName, kebabName) {
    return e => {
      e.persist();
      return this.setState(state => ({
        ...state,
        [blockName]: {
          ...state[blockName],
          [kebabName]: e.target.value
        }
      }));
    };
  }

  render() {
    const { projects } = this.props;
    if (!projects.length || !Object.keys(this.state).length) {
      return null;
    }
    return (
      <div>
        <h2>Your FreeCodeCamp Projects</h2>
        <br />
        <p>
          Add links to the live demos of your projects as you finish them.
          Then, once you have added all 5 projects required for a certificate,
          you can claim it.
        </p>
      {
        projects.map(block => {
          const blockName = _.kebabCase(block.projectBlockName);
          return (
          <div key={blockName}>
            <form id={ blockName } onSubmit={ this.handleSubmit }>
              <h3>{block.projectBlockName}</h3>
              {
                block.challenges
                  .map(challenge => {
                    const kebabName = _.kebabCase(challenge);
                    return (
                      <Row key={kebabName}>
                        <Col xs={8}>
                          <ControlLabel htmlFor={kebabName}>
                            {challenge}
                          </ControlLabel>
                        </Col>
                        <Col xs={4}>
                          <FormControl
                            bsSize='sm'
                            id={kebabName}
                            onChange={ this.handleChange(blockName, kebabName) }
                            placeholder='URL'
                            required={ true }
                            type='url'
                            value={ this.state[blockName][kebabName] || '' }
                          />
                        </Col>
                      </Row>
                    );
                  })
              }
              <br />
              <Button
                block={true}
                bsSize='lg'
                bsStyle='primary'
                type='submit'
                >
                Claim
              </Button>
            </form>
          </div>
          );
        })
        }
      </div>
    );
  }
}

ProjectSettings.displayName = 'ProjectSettings';
ProjectSettings.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSettings);
