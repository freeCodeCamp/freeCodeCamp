import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { goToStep } from '../../redux/actions';
import PureComponent from 'react-pure-render/component';
import ReactTransitionReplace from 'react-css-transition-replace';

import { Button, Col, Image, Row } from 'react-bootstrap';

const mapStateToProps = createSelector(
  state => state.challengesApp.currentStep,
  state => state.challengesApp.previousStep,
  (currentStep, previousStep) => ({
    currentStep,
    previousStep,
    isGoingForward: currentStep > previousStep
  })
);

const dispatchActions = {
  goToStep
};

const transitionTimeout = 1000;
/* eslint-disable max-len, quotes */
const challenge = {
  title: "Learn how Free Code Camp Works",
  description: [
    [
      "http://i.imgur.com/6ibIavQ.jpg",
      "A picture of Free Code Camp's 4 benefits: Get connected, Learn JavaScript, Build your Portfolio, Help nonprofits",
      "Welcome to Free Code Camp. We're an open source community of busy people who learn to code and help nonprofits.",
      "http://www.foo.com"
    ],
    [
      "http://i.imgur.com/Elb3dfj.jpg",
      "A screenshot of some of our campers coding together in Toronto.",
      "<bold>Learning to code is hard.</bold> To succeed, you'll need lots of practice and support. That's why we've created a rigorous curriculum and supportive community.",
      ""
    ],
    [
      "http://i.imgur.com/D7Y5luw.jpg",
      "A graph of the rate of job growth against growth in computer science degree graduates. There are 1.4 million jobs and only 400 thousand people to fill them.",
      "There are thousands of coding jobs currently going unfilled, and the demand for coders grows every year.",
      ""
    ],
    [
      "http://i.imgur.com/WD3STY6.jpg",
      "Photos of three campers who've gotten jobs after learning to code at Free Code Camp.",
      "Free Code Camp is a proven path to your first coding job. In fact, no one has actually completed our entire program, because campers get jobs before they're able to.",
      ""
    ],
    [
      "http://i.imgur.com/vLNso6h.jpg",
      "An illustration showing that you will learn HTML5, CSS3, JavaScript, Databases, Git, Node.js, React and D3.",
      "We have hundreds of optional coding challenges that will teach you fundamental web development technologies like HTML5, Node.js and databases.",
      ""
    ],
    [
      "http://i.imgur.com/UVB9hxp.jpg",
      "An image of a camper at a cafe building projects on Free Code Camp.",
      "We believe humans learn best by doing. So you'll spend most of your time actually building projects. We'll give you a list of specifications (agile user stories), and you'll figure out how to build apps that fulfill those specifications.",
      ""
    ],
    [
      "http://i.imgur.com/pbW7K5S.jpg",
      "An image of showing our front end, back end, and data visualization certifications (400 hours each), our nonprofit projects (800 hours), and interview prep (80 hours) for a total of 2,080 hours of coding experience.",
      "Our curriculum is divided into 4 certifications. These certifications are standardized, and instantly verifiable by your freelance clients and future employers. Like everything else at Free Code Camp, these certifications are free. We recommend doing them in order, but you are free to jump around. The first three certifications take 400 hours each, and the final certification takes 800 hours, and involves building real-life projects for nonprofits.",
      ""
    ],
    [
      "http://i.imgur.com/k8btNUB.jpg",
      "A screenshot of our Front End Development Certificate",
      "To earn our verified Front End Development Certification, you'll build 10 projects using HTML, CSS, jQuery, and JavaScript.",
      ""
    ],
    [
      "http://i.imgur.com/Et3iD74.jpg",
      "A screenshot of our Data Visualization Certificate",
      "To earn our Data Visualization Certification, you'll build 10 projects using React, Sass and D3.js.",
      ""
    ],
    [
      "http://i.imgur.com/8v3t84p.jpg",
      "A screenshot of our Back End Development Certificate",
      "To earn our Back End Development Certification, you'll build 10 projects using Node.js, Express, and MongoDB. You'll use Git and Heroku to deploy them to the cloud.",
      ""
    ],
    [
      "http://i.imgur.com/yXyxbDd.jpg",
      "A screen shot of our nonprofit project directory.",
      "After you complete all three of these certificates, you'll team up with another camper and use agile software development methodologies to build two real-life projects for nonprofits. You'll also add functionality to two legacy code nonprofit projects. By the time you finish, you'll have a portfolio of real apps that people use every day.",
      ""
    ],
    [
      "http://i.imgur.com/PDGQ9ZM.jpg",
      "An image of campers building projects together in a cafe in Seoul.",
      "If you complete all 2,080 hours worth of challenges and projects, you'll earn our Full Stack Development Certification. We'll offer you free coding interview practice. We even offer a job board where employers specifically hire campers who've earned Free Code Camp certifications.",
      "http://foo.com"
    ]
  ]
};
/* eslint-disable max-len, quotes */

export class StepChallenge extends PureComponent {
  static displayName = 'StepChallenge';
  static defaultProps = {
    currentStep: 0,
    previousStep: -1
  };

  static propTypes = {
    currentStep: PropTypes.number,
    previousStep: PropTypes.number,
    isGoingForward: PropTypes.bool,
    goToStep: PropTypes.func
  };

  renderActionButton(action) {
    if (!action) {
      return null;
    }
    return (
      <div>
        <Button
          block={ true }
          bsSize='large'
          bsStyle='primary'
          href={ action }
          target='_blank'>
          Open link in new tab (this unlocks the next step)
        </Button>
        <div className='spacer' />
      </div>
    );
  }

  renderBackButton(index) {
    const { goToStep } = this.props;
    if (index === 0) {
      return (
        <Col
          className='hidden-xs'
          md={ 4 }>
          { ' ' }
        </Col>
      );
    }
    return (
      <Button
        bsSize='large'
        bsStyle='primary'
        className='col-sm-4 col-xs-12'
        onClick={ () => goToStep(index - 1) }>
        Go to my previous step
      </Button>
    );
  }

  renderNextButton(hasAction, index, numOfSteps, isCompleted) {
    const { goToStep } = this.props;
    const isLastStep = index + 1 >= numOfSteps;
    const btnClass = classnames({
      'col-sm-4 col-xs-12': true,
      'disabled': hasAction && !isCompleted
    });
    return (
      <Button
        bsSize='large'
        bsStyle='primary'
        className={ btnClass }
        onClick={ () => !isLastStep ? goToStep(index + 1) : () => {} }>
        { isLastStep ? 'Finish challenge' : 'Go to my next step'}
      </Button>
    );
  }

  renderStep(step, currentStep, numOfSteps) {
    if (!Array.isArray(step)) {
      return null;
    }
    const [imgUrl, imgAlt, info, action] = step;
    return (
      <div
        className=''
        key={ imgUrl }>
        <a href={ imgUrl }>
          <Image
            alt={ imgAlt }
            responsive={ true }
            src={ imgUrl } />
        </a>
        <Row>
          <div className='spacer' />
          <Col
            md={ 8 }
            mdOffset={ 2 }
            sm={ 10 }
            smOffset={ 1 }
            xs={ 12 }>
            <p
              className='challenge-step-description'
              dangerouslySetInnerHTML={{ __html: info }} />
          </Col>
        </Row>
        <div className='spacer' />
        <div className='challenge-button-block'>
          { this.renderActionButton(action) }
          { this.renderBackButton(currentStep) }
          <Col
            className='challenge-step-counter large-p text-center'
            sm={ 4 }
            xs={ 12 }>
            ( { currentStep + 1 } / { numOfSteps })
          </Col>
          {
            this.renderNextButton(
              !!action,
              currentStep,
              numOfSteps,
              true
            )
          }
        </div>
        <div className='clearfix' />
      </div>
    );
  }

  renderImages(steps) {
    // will preload all the image
    if (!Array.isArray(steps)) {
      return null;
    }
    return steps.map(([imgUrl, imgAlt]) => (
      <div key={ imgUrl }>
        <Image
          alt={ imgAlt }
          responsive={ true }
          src={ imgUrl } />
      </div>
    ));
  }

  render() {
    const { currentStep, isGoingForward } = this.props;
    const numOfSteps = Array.isArray(challenge.description) ?
      challenge.description.length :
      0;
    const step = challenge.description[currentStep];
    const transitionName = 'challenge-step-' +
      (isGoingForward ? 'forward' : 'backward');

    return (
      <Col
        md={ 8 }
        mdOffset={ 2 }>
        <ReactTransitionReplace
          transitionEnterTimeout={ transitionTimeout }
          transitionLeaveTimeout={ transitionTimeout }
          transitionName={ transitionName }>
          { this.renderStep(step, currentStep, numOfSteps) }
        </ReactTransitionReplace>
        <div className='hidden'>
          { this.renderImages(challenge.description) }
        </div>
        <div className='spacer' />
      </Col>
    );
  }
}

export default connect(mapStateToProps, dispatchActions)(StepChallenge);
