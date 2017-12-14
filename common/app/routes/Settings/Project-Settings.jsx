import PropTypes from 'prop-types';
import React from 'react';
import {
    Row,
    Col,
    Button,
    FormControl,
    ControlLabel
} from 'react-bootstrap';

const propTypes = {};

export default function ProjectSettings({}) {
  return (
    <div>
        <h3>Responsive Web Design Certificate</h3>
        <Row>
            <Col xs={ 8 }>
                <ControlLabel htmlFor='tributePage'>
                    Tribute Page
                </ControlLabel>
            </Col>
            <Col xs={ 4 }>
                <FormControl
                    bsSize='sm'
                    id='tributePage'
                    placeholder='URL'
                    type='input'
                    value=''
                />
            </Col>
        </Row>
        <Row>
            <Col xs={ 8 }>
                <ControlLabel htmlFor='surveyForm'>
                    Survey Form
                </ControlLabel>
            </Col>
            <Col xs={ 4 }>
                <FormControl
                    bsSize='sm'
                    id='surveyForm'
                    placeholder='URL'
                    type='input'
                    value=''
                />
            </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='productLandingPage'>
                Product Landing Page
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='productLandingPage'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='technicalDocumentationPage'>
            Technical Documentation Page
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='technicalDocumentationPage'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='personalPortfolioPage'>
            Personal Portfolio Page
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='personalPortfolioPage'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <br />
        <Button
        block={ true }
        bsSize='lg'
        bsStyle='primary'
        >
        Claim
        </Button>
        <h3>JavaScript Algorithms and Data Structures Certificate</h3>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='palindromeChecker'>
            Palindrome Checker
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='palindromeChecker'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='romanNumeralConverter'>
            Roman Numeral Converter
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='romanNumeralConverter'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='ceasarsCypher'>
            Ceasar's Cypher
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='ceasarsCypher'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='telephoneNumberValidator'>
            Telephone Number Validator
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='telephoneNumberValidator'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='cashRegister'>
            Cash Register
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='cashRegister'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <br />
        <Button
        block={ true }
        bsSize='lg'
        bsStyle='primary'
        >
        Claim
        </Button>
        <h3>Front End Libraries Certificate</h3>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='randomQuoteMachine'>
            Random Quote Machine
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='randomQuoteMachine'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='markdownPreviewer'>
            Markdown Previewer
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='markdownPreviewer'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='drumMachine'>
            Drum Machine
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='drumMachine'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='javascriptCalculator'>
            JavaScript Calculator
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='javascriptCalculator'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='pomodoroClock'>
            Pomodoro Clock
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='pomodoroClock'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <br />
        <Button
        block={ true }
        bsSize='lg'
        bsStyle='primary'
        >
        Claim
        </Button>
        <h3>Data Visualization Certificate</h3>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='visualiseBarChart'>
            Visualise Data with a Bar Chart
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='visualiseBarChart'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='visualiseScatterplotGraph'>
            Visualise Data with a Scatterplot Graph
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='visualiseScatterplotGraph'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='visualiseHeatmap'>
            Visualise Data with a Heatmap
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='visualiseHeatmap'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='visualiseChoroplethMap'>
            Visualise Data with a Choropleth Map
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='visualiseChoroplethMap'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='visualiseTreemapDiagram'>
            Visualise Data with a Treemap Diagram
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='visualiseTreemapDiagram'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <br />
        <Button
        block={ true }
        bsSize='lg'
        bsStyle='primary'
        >
        Claim
        </Button>
        <h3>Apis and Microservices Certificate</h3>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='timestampMicroservice'>
            Timestamp Microservice
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='timestampMicroservice'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='requestHeaderParserMicroservice'>
            Request Header Parser Microservice
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
            bsSize='sm'
            id='requestHeaderParserMicroservice'
            placeholder='URL'
            type='input'
            value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='urlShortnerMicroservice'>
            URL Shortener Microservice
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
                bsSize='sm'
                id='urlShortnerMicroservice'
                placeholder='URL'
                type='input'
                value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='exerciseTrackerMicroservice'>
                Exercise Tracker Microservice
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
                bsSize='sm'
                id='exerciseTrackerMicroservice'
                placeholder='URL'
                type='input'
                value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='fileMetadataMicroservice'>
                File Metadata Microservice
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
                bsSize='sm'
                id='fileMetadataMicroservice'
                placeholder='URL'
                type='input'
                value=''
            />
        </Col>
        </Row>
        <br />
        <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
        >
        Claim
        </Button>
        <h3>Information Security and Quality Assurance Certificate</h3>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='metricImperialConverter'>
                Metric-Imperial Converter
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
                bsSize='sm'
                id='metricImperialConverter'
                placeholder='URL'
                type='input'
                value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='issueTracker'>
                Issue Tracker
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
                bsSize='sm'
                id='issueTracker'
                placeholder='URL'
                type='input'
                value=''
            />
        </Col>
        </Row>
        <Row>
            <Col xs={ 8 }>
                <ControlLabel htmlFor='personalLibrary'>
                    Personal Library
                </ControlLabel>
            </Col>
            <Col xs={ 4 }>
                <FormControl
                    bsSize='sm'
                    id='personalLibrary'
                    placeholder='URL'
                    type='input'
                    value=''
                />
            </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='stockPriceChecker'>
                Stock Price Checker
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
                bsSize='sm'
                id='stockPriceChecker'
                placeholder='URL'
                type='input'
                value=''
            />
        </Col>
        </Row>
        <Row>
        <Col xs={ 8 }>
            <ControlLabel htmlFor='anonymousMessageBoard'>
                Anonymous Message Board
            </ControlLabel>
        </Col>
        <Col xs={ 4 }>
            <FormControl
                bsSize='sm'
                id='anonymousMessageBoard'
                placeholder='URL'
                type='input'
                value=''
            />
        </Col>
        </Row>
        <br />
        <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
        >
        Claim
        </Button>
    </div>
  );
}

ProjectSettings.displayName = 'ProjectSettings';
ProjectSettings.propTypes = propTypes;
