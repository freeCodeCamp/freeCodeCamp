import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { FullWidthRow } from '../../../helperComponents';
import { Form } from '../formHelpers';
import JSAlgoAndDSForm from './JSAlgoAndDSForm.jsx';
import SectionHeader from './SectionHeader.jsx';
import { projectsSelector } from '../../../entities';
import { claimCert, updateUserBackend } from '../redux';
import { fetchChallenges, userSelector, hardGoTo } from '../../../redux';
import {
  buildUserProjectsMap,
  jsProjectSuperBlock
} from '../utils/buildUserProjectsMap';

const mapStateToProps = createSelector(
  userSelector,
  projectsSelector,
  (
    {
      challengeMap,
      isRespWebDesignCert,
      is2018DataVisCert,
      isFrontEndLibsCert,
      isJsAlgoDataStructCert,
      isApisMicroservicesCert,
      isInfosecQaCert,
      username
    },
    projects
  ) => ({
    projects,
    userProjects: projects
      .map(block => buildUserProjectsMap(block, challengeMap))
      .reduce((projects, current) => ({
        ...projects,
        ...current
      }), {}),
    blockNameIsCertMap: {
      'Applied Responsive Web Design Projects': isRespWebDesignCert,
      /* eslint-disable max-len */
      'JavaScript Algorithms and Data Structures Projects': isJsAlgoDataStructCert,
      /* eslint-enable max-len */
      'Front End Libraries Projects': isFrontEndLibsCert,
      'Data Visualization Projects': is2018DataVisCert,
      'API and Microservice Projects': isApisMicroservicesCert,
      'Information Security and Quality Assurance Projects': isInfosecQaCert
    },
    username
  })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    claimCert,
    fetchChallenges,
    hardGoTo,
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  blockNameIsCertMap: PropTypes.objectOf(PropTypes.bool),
  claimCert: PropTypes.func.isRequired,
  fetchChallenges: PropTypes.func.isRequired,
  hardGoTo: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      projectBlockName: PropTypes.string,
      challenges: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  superBlock: PropTypes.string,
  updateUserBackend: PropTypes.func.isRequired,
  userProjects: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.object
      ]
    ))
  ),
  username: PropTypes.string
};

class CertificationSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { projects } = this.props;
    if (!projects.length) {
      this.props.fetchChallenges();
    }
  }

  handleSubmit(values) {
    const { id } = values;
    const fullForm = _.values(values)
      .filter(Boolean)
      .filter(_.isString)
      // 5 projects + 1 id prop
      .length === 6;
    const valuesSaved = _.values(this.props.userProjects[id])
      .filter(Boolean)
      .filter(_.isString)
      .length === 6;
    if (fullForm && valuesSaved) {
      return this.props.claimCert(id);
    }
    const { projects } = this.props;
    const pIndex = _.findIndex(projects, p => p.superBlock === id);
    values.nameToIdMap = projects[pIndex].challengeNameIdMap;
    return this.props.updateUserBackend({
      projects: {
        [id]: values
      }
    });
  }

  render() {
    const {
      blockNameIsCertMap,
      claimCert,
      hardGoTo,
      projects,
      userProjects,
      username
    } = this.props;
    if (!projects.length) {
      return null;
    }
    return (
      <div>
        <SectionHeader>
          Certification Settings
        </SectionHeader>
        <FullWidthRow>
        <p>
          Add links to the live demos of your projects as you finish them.
          Then, once you have added all 5 projects required for a certificate,
          you can claim it.
        </p>
        </FullWidthRow>
      {
        projects.map(({
          projectBlockName,
          challenges,
          superBlock
        }) => {
          const isCertClaimed = blockNameIsCertMap[projectBlockName];
          if (superBlock === jsProjectSuperBlock) {
            return (
              <JSAlgoAndDSForm
                challenges={ challenges }
                claimCert={ claimCert }
                hardGoTo={ hardGoTo }
                isCertClaimed={ isCertClaimed }
                jsProjects={ userProjects[superBlock] }
                key={ superBlock }
                projectBlockName={ projectBlockName }
                superBlock={ superBlock }
                username={ username }
              />
            );
          }
          const options = challenges
            .reduce((options, current) => {
              options.types[current] = 'url';
              return options;
            }, { types: {} });

          options.types.id = 'hidden';
          options.placeholder = false;

          const userValues = userProjects[superBlock] || {};

          if (!userValues.id) {
            userValues.id = superBlock;
          }

          const initialValues = challenges
            .reduce((accu, current) => ({
              ...accu,
              [current]: ''
            }), {});

          const completedProjects = _.values(userValues)
            .filter(Boolean)
            .filter(_.isString)
            // minus 1 to account for the id
            .length - 1;

          const fullForm = completedProjects === challenges.length;
          return (
            <FullWidthRow key={superBlock}>
              <h3 className='project-heading'>{ projectBlockName }</h3>
              <Form
                buttonText={ fullForm ? 'Claim Certificate' : 'Save Progress' }
                enableSubmit={ fullForm }
                formFields={ challenges.concat([ 'id' ]) }
                hideButton={isCertClaimed}
                id={ superBlock }
                initialValues={{
                  ...initialValues,
                  ...userValues
                }}
                options={ options }
                submit={ this.handleSubmit }
              />
              {
                isCertClaimed ?
                  <Button
                    block={ true }
                    bsSize='lg'
                    bsStyle='primary'
                    href={ `/c/${username}/${superBlock}`}
                    >
                    Show Certificate
                  </Button> :
                  null
              }
              <hr />
            </FullWidthRow>
          );
        })
        }
      </div>
    );
  }
}

CertificationSettings.displayName = 'CertificationSettings';
CertificationSettings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CertificationSettings);
