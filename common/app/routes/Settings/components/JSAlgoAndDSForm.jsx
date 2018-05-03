import React, { PureComponent } from 'react';
import { kebabCase } from 'lodash';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { FullWidthRow } from '../../../helperComponents';
import { BlockSaveButton } from '../formHelpers';
import { Link } from '../../../Router';
import SolutionViewer from './SolutionViewer.jsx';

const jsFormPropTypes = {
  challenges: PropTypes.arrayOf(PropTypes.string),
  claimCert: PropTypes.func.isRequired,
  hardGoTo: PropTypes.func.isRequired,
  isCertClaimed: PropTypes.bool,
  jsProjects: PropTypes.objectOf(PropTypes.object),
  projectBlockName: PropTypes.string,
  superBlock: PropTypes.string,
  username: PropTypes.string
};

const jsProjectPath = '/challenges/javascript-algorithms-and-data-structures-' +
  'projects/';

class JSAlgoAndDSForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSolutionToggle = this.handleSolutionToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSolutionToggle(e) {
    e.persist();
    return this.setState(state => ({
      ...state,
      [e.target.id]: !state[e.target.id]
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, superBlock, isCertClaimed } = this.props;
    if (isCertClaimed) {
      return this.props.hardGoTo(`/certificates/${username}/${superBlock}`);
    }
    return this.props.claimCert(superBlock);
  }

  render() {
    const {
      projectBlockName,
      challenges = [],
      jsProjects = {},
      isCertClaimed
    } = this.props;
    const completeCount = Object.values(jsProjects)
      .filter(challengeInfo => Object.keys(challengeInfo).length !== 0)
      .length;

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
                    Object.keys(jsProjects[challenge]).length ?
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
                    <Link to={`${jsProjectPath}${kebabCase(challenge)}`}>
                      <Button
                        bsSize='lg'
                        bsStyle='primary'
                        >
                        Complete Project
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
          Object.keys(jsProjects).length === completeCount ?
          <form onSubmit={ this.handleSubmit }>
            <BlockSaveButton>
              { isCertClaimed ? 'Show' : 'Claim'} Certificate
            </BlockSaveButton>
          </form> :
          null
        }
        <hr />
      </FullWidthRow>
    );
  }
}

JSAlgoAndDSForm.displayName = 'JSAlgoAndDSForm';
JSAlgoAndDSForm.propTypes = jsFormPropTypes;

export default JSAlgoAndDSForm;
