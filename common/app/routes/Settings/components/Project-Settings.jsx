import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { Form, FullWidthRow, BlockSaveButton } from '../../../helperComponents';
import { Link } from '../../../Router';
import SolutionViewer from '../../Profile/components/SolutionViewer.jsx';
import { projectsSelector } from '../../../entities';
import { claimCert, updateUserBackend } from '../../../entities/user';
import { fetchChallenges, userSelector } from '../../../redux';

const mapStateToProps = createSelector(
  userSelector,
  projectsSelector,
  (
    {
      projects: userProjects = {},
      isRespWebDesignCert,
      is2018DataVisCert,
      isFrontEndLibsCert,
      isJsAlgoDataStructCert,
      isApisMicroservicesCert,
      isInfosecQaCert
    },
    projects,
  ) => ({
    projects,
    userProjects,
    blockNameIsCertMap: {
      'Applied Responsive Web Design Projects': isRespWebDesignCert,
      /* eslint-disable max-len */
      'JavaScript Algorithms and Data Structures Projects': isJsAlgoDataStructCert,
      /* eslint-enable max-len */
      'Front End Libraries Projects': isFrontEndLibsCert,
      'Data Visualization Projects': is2018DataVisCert,
      'API and Microservice Projects': isApisMicroservicesCert,
      'Information Security and Quality Assurance Projects': isInfosecQaCert
    }
  })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    claimCert,
    fetchChallenges,
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  blockNameIsCertMap: PropTypes.objectOf(PropTypes.bool),
  claimCert: PropTypes.func.isRequired,
  fetchChallenges: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      projectBlockName: PropTypes.string,
      challenges: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  updateUserBackend: PropTypes.func.isRequired,
  userProjects: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.object
      ]
    ))
  )
};

const jsFormPropTypes = {
  challenges: PropTypes.arrayOf(PropTypes.string),
  isCertClaimed: PropTypes.bool,
  jsProjects: PropTypes.objectOf(PropTypes.object),
  projectBlockName: PropTypes.string
};

const jsProjectPath = '/challenges/javascript-algorithms-and-data-structures-' +
  'projects/';
const jsProjectSuperBlock = 'javascript-algorithms-and-data-structures';

class JSAlgoAndDSForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSolutionToggle = this.handleSolutionToggle.bind(this);
  }

  handleSolutionToggle(e) {
    e.persist();
    return this.setState(state => ({
      ...state,
      [e.target.id]: !state[e.target.id]
    }));
  }

  render() {
    const {
      projectBlockName,
      challenges = [],
      jsProjects = {},
      isCertClaimed
    } = this.props;

    return (
      <FullWidthRow>
        <h3 className='project-heading'>{ projectBlockName }</h3>
        <p>
          To complete this certification, you must first complete the
          JavaScript Algorithms and Data Structures project challenges
        </p>
        <ul className='solution-list'>
          {
            challenges.map(challenge => (
              <div key={ challenge }>
                <li className='solution-list-item'>
                  <p>{ challenge }</p>
                  {
                    jsProjects[challenge] ?
                    <div>
                      <Button
                        bsSize='lg'
                        bsStyle='primary'
                        id={ challenge }
                        onClick={ this.handleSolutionToggle }
                        >
                        { this.state[challenge] ? 'Hide' : 'Show' } Solution
                      </Button>
                    </div> :
                    <Link to={`${jsProjectPath}${_.kebabCase(challenge)}`}>
                      <Button
                        bsSize='lg'
                        bsStyle='primary'
                        >
                        Complete Challenge
                      </Button>
                    </Link>
                  }
                </li>
                {
                  this.state[challenge] ?
                    <SolutionViewer files={ jsProjects[challenge] } /> :
                    null
                }
              </div>
            ))
          }
        </ul>
        {
          Object.keys(jsProjects).length === 6 ?
          <form>
            <BlockSaveButton>
              { isCertClaimed ? 'Show' : 'Claim'} Certificate
            </BlockSaveButton>
          </form> :
          null
        }
      </FullWidthRow>
    );
  }
}

JSAlgoAndDSForm.displayName = 'JSAlgoAndDSForm';
JSAlgoAndDSForm.propTypes = jsFormPropTypes;

/* eslint-disable react/no-multi-comp */
class ProjectSettings extends PureComponent {
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
    // 5 projects + 1 id prop
    .filter(Boolean).length === 6;
    const valuesSaved = _.values(this.props.userProjects[id])
    .filter(Boolean).length === 6;
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
      projects,
      userProjects
    } = this.props;
    if (!projects.length) {
      return null;
    }
    return (
      <div>
        <FullWidthRow>
        <h2>Your FreeCodeCamp Projects</h2>
        <br />
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
                isCertClaimed={ isCertClaimed }
                jsProjects={ userProjects[superBlock] }
                key={ superBlock }
                projectBlockName={ projectBlockName }
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
          const fullForm = _.values(userValues)
          // minus 1 to account for the id prop
            .filter(Boolean).length - 1 === challenges.length;

          return (
            <FullWidthRow key={superBlock}>
                <h3 className='project-heading'>{ projectBlockName }</h3>
                <Form
                  buttonText={ fullForm ? 'Claim' : 'Save Progress' }
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
                    >
                    Show Certificate
                  </Button> :
                  null
                }
            </FullWidthRow>
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
