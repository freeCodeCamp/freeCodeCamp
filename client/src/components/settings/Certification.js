import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { find, first } from 'lodash';
import {
  Table,
  Button,
  DropdownButton,
  MenuItem,
  Modal
} from '@freecodecamp/react-bootstrap';
import { Link, navigate } from 'gatsby';
import { createSelector } from 'reselect';

import { projectMap, legacyProjectMap } from '../../resources/certProjectMap';

import SectionHeader from './SectionHeader';
import SolutionViewer from './SolutionViewer';
import { FullWidthRow, Spacer } from '../helpers';
import { Form } from '../formHelpers';

import { maybeUrlRE } from '../../utils';

import './certification.css';

const propTypes = {
  completedChallenges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      solution: PropTypes.string,
      githubLink: PropTypes.string,
      challengeType: PropTypes.number,
      completedDate: PropTypes.number,
      files: PropTypes.array
    })
  ),
  createFlashMessage: PropTypes.func.isRequired,
  is2018DataVisCert: PropTypes.bool,
  isApisMicroservicesCert: PropTypes.bool,
  isBackEndCert: PropTypes.bool,
  isDataVisCert: PropTypes.bool,
  isFrontEndCert: PropTypes.bool,
  isFrontEndLibsCert: PropTypes.bool,
  isFullStackCert: PropTypes.bool,
  isHonest: PropTypes.bool,
  isInfosecQaCert: PropTypes.bool,
  isJsAlgoDataStructCert: PropTypes.bool,
  isRespWebDesignCert: PropTypes.bool,
  username: PropTypes.string,
  verifyCert: PropTypes.func.isRequired
};

const certifications = Object.keys(projectMap);
const legacyCertifications = Object.keys(legacyProjectMap);
const isCertSelector = ({
  is2018DataVisCert,
  isApisMicroservicesCert,
  isJsAlgoDataStructCert,
  isBackEndCert,
  isDataVisCert,
  isFrontEndCert,
  isInfosecQaCert,
  isFrontEndLibsCert,
  isFullStackCert,
  isRespWebDesignCert
}) => ({
  is2018DataVisCert,
  isApisMicroservicesCert,
  isJsAlgoDataStructCert,
  isBackEndCert,
  isDataVisCert,
  isFrontEndCert,
  isInfosecQaCert,
  isFrontEndLibsCert,
  isFullStackCert,
  isRespWebDesignCert
});

const isCertMapSelector = createSelector(
  isCertSelector,
  ({
    is2018DataVisCert,
    isApisMicroservicesCert,
    isJsAlgoDataStructCert,
    isInfosecQaCert,
    isFrontEndLibsCert,
    isRespWebDesignCert,
    isDataVisCert,
    isFrontEndCert,
    isBackEndCert
  }) => ({
    'Responsive Web Design': isRespWebDesignCert,
    'JavaScript Algorithms and Data Structures': isJsAlgoDataStructCert,
    'Front End Libraries': isFrontEndLibsCert,
    'Data Visualization': is2018DataVisCert,
    "API's and Microservices": isApisMicroservicesCert,
    'Information Security And Quality Assurance': isInfosecQaCert,
    'Legacy Front End': isFrontEndCert,
    'Legacy Data Visualization': isDataVisCert,
    'Legacy Back End': isBackEndCert
  })
);

const initialState = {
  solutionViewer: {
    projectTitle: '',
    files: null,
    solution: null,
    isOpen: false
  }
};

class CertificationSettings extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createHandleLinkButtonClick = to => e => {
    e.preventDefault();
    return navigate(to);
  };

  handleSolutionModalHide = () => this.setState({ ...initialState });

  getUserIsCertMap = () => isCertMapSelector(this.props);

  getProjectSolution = (projectId, projectTitle) => {
    const { completedChallenges } = this.props;
    const completedProject = find(
      completedChallenges,
      ({ id }) => projectId === id
    );
    if (!completedProject) {
      return null;
    }
    const { solution, githubLink, files } = completedProject;
    const onClickHandler = () =>
      this.setState({
        solutionViewer: {
          projectTitle,
          files,
          solution,
          isOpen: true
        }
      });
    if (files && files.length) {
      return (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          onClick={onClickHandler}
        >
          Show Code
        </Button>
      );
    }
    if (githubLink) {
      return (
        <div className='solutions-dropdown'>
          <DropdownButton
            block={true}
            bsStyle='primary'
            className='btn-invert'
            id={`dropdown-for-${projectId}`}
            title='Show Solutions'
          >
            <MenuItem
              bsStyle='primary'
              href={solution}
              rel='noopener noreferrer'
              target='_blank'
            >
              Front End
            </MenuItem>
            <MenuItem
              bsStyle='primary'
              href={githubLink}
              rel='noopener noreferrer'
              target='_blank'
            >
              Back End
            </MenuItem>
          </DropdownButton>
        </div>
      );
    }
    if (maybeUrlRE.test(solution)) {
      return (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          href={solution}
          rel='noopener noreferrer'
          target='_blank'
        >
          Show Solution
        </Button>
      );
    }
    return (
      <Button
        block={true}
        bsStyle='primary'
        className='btn-invert'
        onClick={onClickHandler}
      >
        Show Code
      </Button>
    );
  };

  renderCertifications = certName => (
    <FullWidthRow key={certName}>
      <Spacer />
      <h3>{certName}</h3>
      <Table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {this.renderProjectsFor(certName, this.getUserIsCertMap()[certName])}
        </tbody>
      </Table>
    </FullWidthRow>
  );

  renderProjectsFor = (certName, isCert) => {
    console.log(isCert);
    const { username, isHonest, createFlashMessage, verifyCert } = this.props;
    const { superBlock } = first(projectMap[certName]);
    const certLocation = `/certification/${username}/${superBlock}`;
    const createClickHandler = superBlock => e => {
      e.preventDefault();
      if (isCert) {
        return navigate(certLocation);
      }
      return isHonest
        ? verifyCert(superBlock)
        : createFlashMessage({
            type: 'info',
            message:
              'To claim a certification, you must first accept our academic ' +
              'honesty policy'
          });
    };
    return projectMap[certName]
      .map(({ link, title, id }) => (
        <tr className='project-row' key={id}>
          <td className='project-title col-sm-8'>
            <Link to={link}>{title}</Link>
          </td>
          <td className='project-solution col-sm-4'>
            {this.getProjectSolution(id, title)}
          </td>
        </tr>
      ))
      .concat([
        <tr key={`cert-${superBlock}-button`}>
          <td colSpan={2}>
            <Button
              block={true}
              bsStyle='primary'
              href={certLocation}
              onClick={createClickHandler(superBlock)}
            >
              {isCert ? 'Show Certification' : 'Claim Certification'}
            </Button>
          </td>
        </tr>
      ]);
  };

  // legacy projects rendering

  handleSubmit(values) {
    console.log(values);
  }

  renderLegacyCertifications = certName => {
    const { username, isHonest, createFlashMessage, verifyCert } = this.props;
    const { superBlock } = first(legacyProjectMap[certName]);
    const certLocation = `/certification/${username}/${superBlock}`;
    const challengeTitles = legacyProjectMap[certName].map(item => item.title);
    const { completedChallenges } = this.props;
    const isCertClaimed = this.getUserIsCertMap()[certName];
    const initialObject = {};
    let filledforms = 0;
    legacyProjectMap[certName].forEach(element => {
      let completedProject = find(completedChallenges, function(challenge) {
        return challenge['id'] === element['id'];
      });
      if (!completedProject) {
        initialObject[element.title] = '';
      } else {
        initialObject[element.title] = completedProject.solution;
        filledforms++;
      }
    });

    const fullForm = filledforms === challengeTitles.length;

    const createClickHandler = superBlock => e => {
      e.preventDefault();
      if (isCertClaimed) {
        return navigate(certLocation);
      }
      return isHonest
        ? verifyCert(superBlock)
        : createFlashMessage({
            type: 'info',
            message:
              'To claim a certification, you must first accept our academic ' +
              'honesty policy'
          });
    };

    const buttonStyle = {
      marginBottom: '1.45rem'
    };

    return (
      <FullWidthRow key={certName}>
        <Spacer />
        <h3>{certName}</h3>
        <Form
          buttonText={fullForm ? 'Claim Certification' : 'Save Progress'}
          enableSubmit={fullForm}
          formFields={challengeTitles}
          hideButton={isCertClaimed}
          id={certName}
          initialValues={{
            ...initialObject
          }}
          submit={this.handleSubmit}
        />
        {isCertClaimed ? (
          <div className={'col-xs-12'}>
            <Button
              bsSize='sm'
              bsStyle='primary'
              className={'col-xs-12'}
              href={certLocation}
              onClick={createClickHandler(superBlock)}
              style={buttonStyle}
              target='_blank'
            >
              Show Certification
            </Button>
          </div>
        ) : null}
      </FullWidthRow>
    );
  };

  render() {
    const {
      solutionViewer: { files, solution, isOpen, projectTitle }
    } = this.state;
    return (
      <section id='certifcation-settings'>
        <SectionHeader>Certifications</SectionHeader>
        {certifications.map(this.renderCertifications)}
        <SectionHeader>Legacy Certifications</SectionHeader>
        {legacyCertifications.map(this.renderLegacyCertifications)}
        {isOpen ? (
          <Modal
            aria-labelledby='solution-viewer-modal-title'
            bsSize='large'
            onHide={this.handleSolutionModalHide}
            show={isOpen}
          >
            <Modal.Header className='this-one?' closeButton={true}>
              <Modal.Title id='solution-viewer-modal-title'>
                Solution for {projectTitle}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SolutionViewer files={files} solution={solution} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleSolutionModalHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </section>
    );
  }
}

CertificationSettings.displayName = 'CertificationSettings';
CertificationSettings.propTypes = propTypes;

export default CertificationSettings;
