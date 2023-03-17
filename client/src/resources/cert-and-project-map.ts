import { SuperBlocks } from '../../../config/certification-settings';
import config from '../../../config/env.json';

const { showUpcomingChanges } = config;

const responsiveWebBase =
  '/learn/responsive-web-design/responsive-web-design-projects';
const responsiveWeb22Base = '/learn/2022/responsive-web-design';
const jsAlgoBase =
  '/learn/javascript-algorithms-and-data-structures/' +
  'javascript-algorithms-and-data-structures-projects';
const jsAlgo22Base = '/learn/2022/javascript-algorithms-and-data-structures';
const feLibsBase =
  '/learn/front-end-development-libraries/front-end-development-libraries-projects';
const dataVisBase = '/learn/data-visualization/data-visualization-projects';
const relationalDatabaseBase = '/learn/relational-database';
const apiMicroBase =
  '/learn/back-end-development-and-apis/back-end-development-and-apis-projects';
const qaBase = '/learn/quality-assurance/quality-assurance-projects';
const infoSecBase = '/learn/information-security/information-security-projects';
const sciCompPyBase =
  '/learn/scientific-computing-with-python/' +
  'scientific-computing-with-python-projects';
const dataAnalysisPyBase =
  '/learn/data-analysis-with-python/data-analysis-with-python-projects';
const machineLearningPyBase =
  '/learn/machine-learning-with-python/machine-learning-with-python-projects';
const collegeAlgebraPyBase = '/learn/college-algebra-with-python';
const takeHomeBase = '/learn/coding-interview-prep/take-home-projects';
const legacyFrontEndBase = feLibsBase;
const legacyFrontEndResponsiveBase = responsiveWebBase;
const legacyFrontEndTakeHomeBase = takeHomeBase;
const legacyBackEndBase = apiMicroBase;
const legacyBackEndTakeHomeBase = takeHomeBase;
const legacyDataVisBase = dataVisBase;
const legacyDataVisFrontEndBase = feLibsBase;
const legacyDataVisTakeHomeBase = takeHomeBase;
const legacyInfosecQaQaBase = qaBase;
const legacyInfosecQaInfosecBase = infoSecBase;

// TODO: generate this automatically in a separate file
// from the md/meta.json files for each cert and projects
const certMap = [
  {
    id: '561add10cb82ac38a17513be',
    title: 'Legacy Front End',
    certSlug: 'legacy-front-end',
    flag: 'isFrontEndCert',
    projects: [
      {
        id: 'bd7158d8c242eddfaeb5bd13',
        title: 'Build a Personal Portfolio Webpage',
        link: `${legacyFrontEndResponsiveBase}/build-a-personal-portfolio-webpage`,
        certSlug: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd13',
        title: 'Build a Random Quote Machine',
        link: `${legacyFrontEndBase}/build-a-random-quote-machine`,
        certSlug: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd0f',
        title: 'Build a 25 + 5 Clock',
        link: `${legacyFrontEndBase}/build-a-25--5-clock`,
        certSlug: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd17',
        title: 'Build a JavaScript Calculator',
        link: `${legacyFrontEndBase}/build-a-javascript-calculator`,
        certSlug: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd10',
        title: 'Show the Local Weather',
        link: `${legacyFrontEndTakeHomeBase}/show-the-local-weather`,
        certSlug: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd1f',
        title: 'Use the TwitchTV JSON API',
        link: `${legacyFrontEndTakeHomeBase}/use-the-twitch-json-api`,
        certSlug: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd18',
        title: 'Build a Tribute Page',
        link: `${legacyFrontEndResponsiveBase}/build-a-tribute-page`,
        certSlug: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd19',
        title: 'Build a Wikipedia Viewer',
        link: `${legacyFrontEndTakeHomeBase}/build-a-wikipedia-viewer`,
        certSlug: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eedfaeb5bd1c',
        title: 'Build a Tic Tac Toe Game',
        link: `${legacyFrontEndTakeHomeBase}/build-a-tic-tac-toe-game`,
        certSlug: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd1c',
        title: 'Build a Simon Game',
        link: `${legacyFrontEndTakeHomeBase}/build-a-simon-game`,
        certSlug: 'legacy-front-end'
      }
    ]
  },
  {
    id: '660add10cb82ac38a17513be',
    title: 'Legacy Back End',
    certSlug: 'legacy-back-end',
    flag: 'isBackEndCert',
    projects: [
      {
        id: 'bd7158d8c443edefaeb5bdef',
        title: 'Timestamp Microservice',
        link: `${legacyBackEndBase}/timestamp-microservice`,
        certSlug: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443edefaeb5bdff',
        title: 'Request Header Parser Microservice',
        link: `${legacyBackEndBase}/request-header-parser-microservice`,
        certSlug: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443edefaeb5bd0e',
        title: 'URL Shortener Microservice',
        link: `${legacyBackEndBase}/url-shortener-microservice`,
        certSlug: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443edefaeb5bdee',
        title: 'Image Search Abstraction Layer',
        link: `${legacyBackEndTakeHomeBase}/build-an-image-search-abstraction-layer`,
        certSlug: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443edefaeb5bd0f',
        title: 'File Metadata Microservice',
        link: `${legacyBackEndBase}/file-metadata-microservice`,
        certSlug: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443eddfaeb5bdef',
        title: 'Build a Voting App',
        link: `${legacyBackEndTakeHomeBase}/build-a-voting-app`,
        certSlug: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443eddfaeb5bdff',
        title: 'Build a Nightlife Coordination App',
        link: `${legacyBackEndTakeHomeBase}/build-a-nightlife-coordination-app`,
        certSlug: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443eddfaeb5bd0e',
        title: 'Chart the Stock Market',
        link: `${legacyBackEndTakeHomeBase}/chart-the-stock-market`,
        certSlug: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443eddfaeb5bd0f',
        title: 'Manage a Book Trading Club',
        link: `${legacyBackEndTakeHomeBase}/manage-a-book-trading-club`,
        certSlug: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443eddfaeb5bdee',
        title: 'Build a Pinterest Clone',
        link: `${legacyBackEndTakeHomeBase}/build-a-pinterest-clone`,
        certSlug: 'legacy-back-end'
      }
    ]
  },
  {
    id: '561add10cb82ac38a17213bd',
    title: 'Legacy Full Stack',
    certSlug: 'full-stack',
    flag: 'isFullStackCert'
    // Requirements are other certs and is
    // handled elsewhere
  },
  {
    id: '561add10cb82ac39a17513bc',
    title: 'Legacy Data Visualization',
    certSlug: 'legacy-data-visualization',
    flag: 'isDataVisCert',
    projects: [
      {
        id: 'bd7157d8c242eddfaeb5bd13',
        title: 'Build a Markdown Previewer',
        link: `${legacyDataVisFrontEndBase}/build-a-markdown-previewer`,
        certSlug: 'legacy-data-visualization'
      },
      {
        id: 'bd7156d8c242eddfaeb5bd13',
        title: 'Build a freeCodeCamp Forum Homepage',
        link: `${legacyDataVisTakeHomeBase}/build-a-freecodecamp-forum-homepage`,
        certSlug: 'legacy-data-visualization'
      },
      {
        id: 'bd7155d8c242eddfaeb5bd13',
        title: 'Build a Recipe Box',
        link: `${legacyDataVisTakeHomeBase}/build-a-recipe-box`,
        certSlug: 'legacy-data-visualization'
      },
      {
        id: 'bd7154d8c242eddfaeb5bd13',
        title: 'Build the Game of Life',
        link: `${legacyDataVisTakeHomeBase}/build-the-game-of-life`,
        certSlug: 'legacy-data-visualization'
      },
      {
        id: 'bd7153d8c242eddfaeb5bd13',
        title: 'Build a Roguelike Dungeon Crawler Game',
        link: `${legacyDataVisTakeHomeBase}/build-a-roguelike-dungeon-crawler-game`,
        certSlug: 'legacy-data-visualization'
      },
      {
        id: 'bd7168d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Bar Chart',
        link: `${legacyDataVisBase}/visualize-data-with-a-bar-chart`,
        certSlug: 'legacy-data-visualization'
      },
      {
        id: 'bd7178d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Scatterplot Graph',
        link: `${legacyDataVisBase}/visualize-data-with-a-scatterplot-graph`,
        certSlug: 'legacy-data-visualization'
      },
      {
        id: 'bd7188d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Heat Map',
        link: `${legacyDataVisBase}/visualize-data-with-a-heat-map`,
        certSlug: 'legacy-data-visualization'
      },
      {
        id: 'bd7198d8c242eddfaeb5bd13',
        title: 'Show National Contiguity with a Force Directed Graph',
        link: `${legacyDataVisTakeHomeBase}/show-national-contiguity-with-a-force-directed-graph`,
        certSlug: 'legacy-data-visualization'
      },
      {
        id: 'bd7108d8c242eddfaeb5bd13',
        title: 'Map Data Across the Globe',
        link: `${legacyDataVisTakeHomeBase}/map-data-across-the-globe`,
        certSlug: 'legacy-data-visualization'
      }
    ]
  },
  {
    id: '561add10cb82ac38a17213bc',
    title: 'Legacy Information Security and Quality Assurance',
    // Keep this as information-security-and-quality-assurance
    certSlug: 'information-security-and-quality-assurance',
    flag: 'isInfosecQaCert',
    projects: [
      // Keep this as information-security-and-quality-assurance
      {
        id: '587d8249367417b2b2512c41',
        title: 'Metric-Imperial Converter',
        link: `${legacyInfosecQaQaBase}/metric-imperial-converter`,
        certSlug: 'information-security-and-quality-assurance'
      },
      {
        id: '587d8249367417b2b2512c42',
        title: 'Issue Tracker',
        link: `${legacyInfosecQaQaBase}/issue-tracker`,
        certSlug: 'information-security-and-quality-assurance'
      },
      {
        id: '587d824a367417b2b2512c43',
        title: 'Personal Library',
        link: `${legacyInfosecQaQaBase}/personal-library`,
        certSlug: 'information-security-and-quality-assurance'
      },
      {
        id: '587d824a367417b2b2512c44',
        title: 'Stock Price Checker',
        link: `${legacyInfosecQaInfosecBase}/stock-price-checker`,
        certSlug: 'information-security-and-quality-assurance'
      },
      {
        id: '587d824a367417b2b2512c45',
        title: 'Anonymous Message Board',
        link: `${legacyInfosecQaInfosecBase}/anonymous-message-board`,
        certSlug: 'information-security-and-quality-assurance'
      }
    ]
  },
  {
    id: '561add10cb82ac38a17513bc',
    title: 'Responsive Web Design',
    certSlug: SuperBlocks.RespWebDesign,
    flag: 'isRespWebDesignCert',
    projects: [
      {
        id: '587d78af367417b2b2512b03',
        title: 'Build a Survey Form',
        link: getResponsiveWebDesignPath('build-a-survey-form'),
        certSlug: SuperBlocks.RespWebDesign
      },
      {
        id: 'bd7158d8c442eddfaeb5bd18',
        title: 'Build a Tribute Page',
        link: getResponsiveWebDesignPath('build-a-tribute-page'),
        certSlug: SuperBlocks.RespWebDesign
      },
      {
        id: '587d78b0367417b2b2512b05',
        title: 'Build a Technical Documentation Page',
        link: getResponsiveWebDesignPath(
          'build-a-technical-documentation-page'
        ),
        certSlug: SuperBlocks.RespWebDesign
      },
      {
        id: '587d78af367417b2b2512b04',
        title: 'Build a Product Landing Page',
        link: getResponsiveWebDesignPath('build-a-product-landing-page'),
        certSlug: SuperBlocks.RespWebDesign
      },
      {
        id: 'bd7158d8c242eddfaeb5bd13',
        title: 'Build a Personal Portfolio Webpage',
        link: getResponsiveWebDesignPath('build-a-personal-portfolio-webpage'),
        certSlug: SuperBlocks.RespWebDesign
      }
    ]
  },

  {
    id: '561abd10cb81ac38a17513bc',
    title: 'JavaScript Algorithms and Data Structures',
    certSlug: SuperBlocks.JsAlgoDataStruct,
    flag: 'isJsAlgoDataStructCert',
    projects: [
      {
        id: 'aaa48de84e1ecc7c742e1124',
        title: 'Palindrome Checker',
        link: getJavaScriptAlgoPath('palindrome-checker'),
        certSlug: SuperBlocks.JsAlgoDataStruct
      },
      {
        id: 'a7f4d8f2483413a6ce226cac',
        title: 'Roman Numeral Converter',
        link: getJavaScriptAlgoPath('roman-numeral-converter'),
        certSlug: SuperBlocks.JsAlgoDataStruct
      },
      {
        id: '56533eb9ac21ba0edf2244e2',
        title: 'Caesars Cipher',
        link: getJavaScriptAlgoPath('caesars-cipher'),
        certSlug: SuperBlocks.JsAlgoDataStruct
      },
      {
        id: 'aff0395860f5d3034dc0bfc9',
        title: 'Telephone Number Validator',
        link: getJavaScriptAlgoPath('telephone-number-validator'),
        certSlug: SuperBlocks.JsAlgoDataStruct
      },
      {
        id: 'aa2e6f85cab2ab736c9a9b24',
        title: 'Cash Register',
        link: getJavaScriptAlgoPath('cash-register'),
        certSlug: SuperBlocks.JsAlgoDataStruct
      }
    ]
  },
  {
    id: '561acd10cb82ac38a17513bc',
    title: 'Front End Development Libraries',
    certSlug: SuperBlocks.FrontEndDevLibs,
    flag: 'isFrontEndLibsCert',
    projects: [
      {
        id: 'bd7158d8c442eddfaeb5bd13',
        title: 'Build a Random Quote Machine',
        link: `${feLibsBase}/build-a-random-quote-machine`,
        certSlug: SuperBlocks.FrontEndDevLibs
      },
      {
        id: 'bd7157d8c242eddfaeb5bd13',
        title: 'Build a Markdown Previewer',
        link: `${feLibsBase}/build-a-markdown-previewer`,
        certSlug: SuperBlocks.FrontEndDevLibs
      },
      {
        id: '587d7dbc367417b2b2512bae',
        title: 'Build a Drum Machine',
        link: `${feLibsBase}/build-a-drum-machine`,
        certSlug: SuperBlocks.FrontEndDevLibs
      },
      {
        id: 'bd7158d8c442eddfaeb5bd17',
        title: 'Build a JavaScript Calculator',
        link: `${feLibsBase}/build-a-javascript-calculator`,
        certSlug: SuperBlocks.FrontEndDevLibs
      },
      {
        id: 'bd7158d8c442eddfaeb5bd0f',
        title: 'Build a 25 + 5 Clock',
        link: `${feLibsBase}/build-a-25--5-clock`,
        certSlug: SuperBlocks.FrontEndDevLibs
      }
    ]
  },
  {
    id: '5a553ca864b52e1d8bceea14',
    title: 'Data Visualization',
    certSlug: SuperBlocks.DataVis,
    flag: 'is2018DataVisCert',
    projects: [
      {
        id: 'bd7168d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Bar Chart',
        link: `${dataVisBase}/visualize-data-with-a-bar-chart`,
        certSlug: SuperBlocks.DataVis
      },
      {
        id: 'bd7178d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Scatterplot Graph',
        link: `${dataVisBase}/visualize-data-with-a-scatterplot-graph`,
        certSlug: SuperBlocks.DataVis
      },
      {
        id: 'bd7188d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Heat Map',
        link: `${dataVisBase}/visualize-data-with-a-heat-map`,
        certSlug: SuperBlocks.DataVis
      },
      {
        id: '587d7fa6367417b2b2512bbf',
        title: 'Visualize Data with a Choropleth Map',
        link: `${dataVisBase}/visualize-data-with-a-choropleth-map`,
        certSlug: SuperBlocks.DataVis
      },
      {
        id: '587d7fa6367417b2b2512bc0',
        title: 'Visualize Data with a Treemap Diagram',
        link: `${dataVisBase}/visualize-data-with-a-treemap-diagram`,
        certSlug: SuperBlocks.DataVis
      }
    ]
  },
  {
    id: '606243f50267e718b1e755f4',
    title: 'Relational Database',
    certSlug: 'relational-database-v8',
    flag: 'isRelationalDatabaseCertV8',
    projects: [
      {
        id: '5f1a4ef5d5d6b5ab580fc6ae',
        title: 'Celestial Bodies Database',
        link: `${relationalDatabaseBase}/build-a-celestial-bodies-database-project/build-a-celestial-bodies-database`,
        certSlug: 'relational-database-v8'
      },
      {
        id: '5f9771307d4d22b9d2b75a94',
        title: 'World Cup Database',
        link: `${relationalDatabaseBase}/build-a-world-cup-database-project/build-a-world-cup-database`,
        certSlug: 'relational-database-v8'
      },
      {
        id: '5f87ac112ae598023a42df1a',
        title: 'Salon Appointment Scheduler',
        link: `${relationalDatabaseBase}/build-a-salon-appointment-scheduler-project/build-a-salon-appointment-scheduler`,
        certSlug: 'relational-database-v8'
      },
      {
        id: '602d9ff222201c65d2a019f2',
        title: 'Periodic Table Database',
        link: `${relationalDatabaseBase}/build-a-periodic-table-database-project/build-a-periodic-table-database`,
        certSlug: 'relational-database-v8'
      },
      {
        id: '602da04c22201c65d2a019f4',
        title: 'Number Guessing Game',
        link: `${relationalDatabaseBase}/build-a-number-guessing-game-project/build-a-number-guessing-game`,
        certSlug: 'relational-database-v8'
      }
    ]
  },
  {
    id: '561add10cb82ac38a17523bc',
    title: 'Back End Development and APIs',
    certSlug: SuperBlocks.BackEndDevApis,
    flag: 'isApisMicroservicesCert',
    projects: [
      {
        id: 'bd7158d8c443edefaeb5bdef',
        title: 'Timestamp Microservice',
        link: `${apiMicroBase}/timestamp-microservice`,
        certSlug: SuperBlocks.BackEndDevApis
      },
      {
        id: 'bd7158d8c443edefaeb5bdff',
        title: 'Request Header Parser Microservice',
        link: `${apiMicroBase}/request-header-parser-microservice`,
        certSlug: SuperBlocks.BackEndDevApis
      },
      {
        id: 'bd7158d8c443edefaeb5bd0e',
        title: 'URL Shortener Microservice',
        link: `${apiMicroBase}/url-shortener-microservice`,
        certSlug: SuperBlocks.BackEndDevApis
      },
      {
        id: '5a8b073d06fa14fcfde687aa',
        title: 'Exercise Tracker',
        link: `${apiMicroBase}/exercise-tracker`,
        certSlug: SuperBlocks.BackEndDevApis
      },
      {
        id: 'bd7158d8c443edefaeb5bd0f',
        title: 'File Metadata Microservice',
        link: `${apiMicroBase}/file-metadata-microservice`,
        certSlug: SuperBlocks.BackEndDevApis
      }
    ]
  },
  {
    id: '5e611829481575a52dc59c0e',
    title: 'Quality Assurance',
    certSlug: 'quality-assurance-v7',
    flag: 'isQaCertV7',
    projects: [
      {
        id: '587d8249367417b2b2512c41',
        title: 'Metric-Imperial Converter',
        link: `${qaBase}/metric-imperial-converter`,
        certSlug: 'quality-assurance-v7'
      },
      {
        id: '587d8249367417b2b2512c42',
        title: 'Issue Tracker',
        link: `${qaBase}/issue-tracker`,
        certSlug: 'quality-assurance-v7'
      },
      {
        id: '587d824a367417b2b2512c43',
        title: 'Personal Library',
        link: `${qaBase}/personal-library`,
        certSlug: 'quality-assurance-v7'
      },
      {
        id: '5e601bf95ac9d0ecd8b94afd',
        title: 'Sudoku Solver',
        link: `${qaBase}/sudoku-solver`,
        certSlug: 'quality-assurance-v7'
      },
      {
        id: '5e601c0d5ac9d0ecd8b94afe',
        title: 'American British Translator',
        link: `${qaBase}/american-british-translator`,
        certSlug: 'quality-assurance-v7'
      }
    ]
  },
  {
    id: '5e44431b903586ffb414c951',
    title: 'Scientific Computing with Python',
    certSlug: 'scientific-computing-with-python-v7',
    flag: 'isSciCompPyCertV7',
    projects: [
      {
        id: '5e44412c903586ffb414c94c',
        title: 'Arithmetic Formatter',
        link: `${sciCompPyBase}/arithmetic-formatter`,
        certSlug: 'scientific-computing-with-python-v7'
      },
      {
        id: '5e444136903586ffb414c94d',
        title: 'Time Calculator',
        link: `${sciCompPyBase}/time-calculator`,
        certSlug: 'scientific-computing-with-python-v7'
      },
      {
        id: '5e44413e903586ffb414c94e',
        title: 'Budget App',
        link: `${sciCompPyBase}/budget-app`,
        certSlug: 'scientific-computing-with-python-v7'
      },
      {
        id: '5e444147903586ffb414c94f',
        title: 'Polygon Area Calculator',
        link: `${sciCompPyBase}/polygon-area-calculator`,
        certSlug: 'scientific-computing-with-python-v7'
      },
      {
        id: '5e44414f903586ffb414c950',
        title: 'Probability Calculator',
        link: `${sciCompPyBase}/probability-calculator`,
        certSlug: 'scientific-computing-with-python-v7'
      }
    ]
  },
  {
    id: '5e46fc95ac417301a38fb934',
    title: 'Data Analysis with Python',
    certSlug: 'data-analysis-with-python-v7',
    flag: 'isDataAnalysisPyCertV7',
    projects: [
      {
        id: '5e46f7e5ac417301a38fb928',
        title: 'Mean-Variance-Standard Deviation Calculator',
        link: `${dataAnalysisPyBase}/mean-variance-standard-deviation-calculator`,
        certSlug: 'data-analysis-with-python-v7'
      },
      {
        id: '5e46f7e5ac417301a38fb929',
        title: 'Demographic Data Analyzer',
        link: `${dataAnalysisPyBase}/demographic-data-analyzer`,
        certSlug: 'data-analysis-with-python-v7'
      },
      {
        id: '5e46f7f8ac417301a38fb92a',
        title: 'Medical Data Visualizer',
        link: `${dataAnalysisPyBase}/medical-data-visualizer`,
        certSlug: 'data-analysis-with-python-v7'
      },
      {
        id: '5e46f802ac417301a38fb92b',
        title: 'Page View Time Series Visualizer',
        link: `${dataAnalysisPyBase}/page-view-time-series-visualizer`,
        certSlug: 'data-analysis-with-python-v7'
      },
      {
        id: '5e4f5c4b570f7e3a4949899f',
        title: 'Sea Level Predictor',
        link: `${dataAnalysisPyBase}/sea-level-predictor`,
        certSlug: 'data-analysis-with-python-v7'
      }
    ]
  },

  {
    id: '5e6021435ac9d0ecd8b94b00',
    title: 'Information Security',
    certSlug: 'information-security-v7',
    flag: 'isInfosecCertV7',
    projects: [
      {
        id: '587d824a367417b2b2512c44',
        title: 'Stock Price Checker',
        link: `${infoSecBase}/stock-price-checker`,
        certSlug: 'information-security-v7'
      },
      {
        id: '587d824a367417b2b2512c45',
        title: 'Anonymous Message Board',
        link: `${infoSecBase}/anonymous-message-board`,
        certSlug: 'information-security-v7'
      },
      {
        id: '5e46f979ac417301a38fb932',
        title: 'Port Scanner',
        link: `${infoSecBase}/port-scanner`,
        certSlug: 'information-security-v7'
      },
      {
        id: '5e46f983ac417301a38fb933',
        title: 'SHA-1 Password Cracker',
        link: `${infoSecBase}/sha-1-password-cracker`,
        certSlug: 'information-security-v7'
      },
      {
        id: '5e601c775ac9d0ecd8b94aff',
        title: 'Secure Real Time Multiplayer Game',
        link: `${infoSecBase}/secure-real-time-multiplayer-game`,
        certSlug: 'information-security-v7'
      }
    ]
  },
  {
    id: '5e46fc95ac417301a38fb935',
    title: 'Machine Learning with Python',
    certSlug: 'machine-learning-with-python-v7',
    flag: 'isMachineLearningPyCertV7',
    projects: [
      {
        id: '5e46f8d6ac417301a38fb92d',
        title: 'Rock Paper Scissors',
        link: `${machineLearningPyBase}/rock-paper-scissors`,
        certSlug: 'machine-learning-with-python-v7'
      },
      {
        id: '5e46f8dcac417301a38fb92e',
        title: 'Cat and Dog Image Classifier',
        link: `${machineLearningPyBase}/cat-and-dog-image-classifier`,
        certSlug: 'machine-learning-with-python-v7'
      },
      {
        id: '5e46f8e3ac417301a38fb92f',
        title: 'Book Recommendation Engine using KNN',
        link: `${machineLearningPyBase}/book-recommendation-engine-using-knn`,
        certSlug: 'machine-learning-with-python-v7'
      },
      {
        id: '5e46f8edac417301a38fb930',
        title: 'Linear Regression Health Costs Calculator',
        link: `${machineLearningPyBase}/linear-regression-health-costs-calculator`,
        certSlug: 'machine-learning-with-python-v7'
      },
      {
        id: '5e46f8edac417301a38fb931',
        title: 'Neural Network SMS Text Classifier',
        link: `${machineLearningPyBase}/neural-network-sms-text-classifier`,
        certSlug: 'machine-learning-with-python-v7'
      }
    ]
  },
  {
    id: '61531b20cc9dfa2741a5b800',
    title: 'College Algebra with Python',
    certSlug: 'college-algebra-with-python-v8',
    flag: 'isCollegeAlgebraPyCertV8',
    projects: [
      {
        id: '63d83ff239c73468b059cd3f',
        title: 'Multi-Function Calculator',
        link: `${collegeAlgebraPyBase}/multi-function-calculator`,
        certSlug: 'college-algebra-with-python-v8'
      },
      {
        id: '63d83ffd39c73468b059cd40',
        title: 'Graphing Calculator',
        link: `${collegeAlgebraPyBase}/graphing-calculator`,
        certSlug: 'college-algebra-with-python-v8'
      },
      {
        id: '63d8401039c73468b059cd41',
        title: 'Three Math Games',
        link: `${collegeAlgebraPyBase}/three-math-games`,
        certSlug: 'college-algebra-with-python-v8'
      },
      {
        id: '63d8401e39c73468b059cd42',
        title: 'Financial Calculator',
        link: `${collegeAlgebraPyBase}/financial-calculator`,
        certSlug: 'college-algebra-with-python-v8'
      },
      {
        id: '63d8402e39c73468b059cd43',
        title: 'Data Graph Explorer',
        link: `${collegeAlgebraPyBase}/data-graph-explorer`,
        certSlug: 'college-algebra-with-python-v8'
      }
    ]
  }
] as const;

function getResponsiveWebDesignPath(project: string) {
  return `${responsiveWeb22Base}/${project}-project/${project}`;
}

function getJavaScriptAlgoPath(project: string) {
  return showUpcomingChanges
    ? `${jsAlgo22Base}/${project}-project/${project}`
    : `${jsAlgoBase}/${project}`;
}

const titles = certMap.map(({ title }) => title);
type Title = (typeof titles)[number];
const legacyProjectMap: Partial<Record<Title, unknown>> = {};
const projectMap: Partial<Record<Title, unknown>> = {};

certMap.forEach(cert => {
  // Filter out Legacy Full Stack so inputs for project
  // URLs aren't rendered on the settings page
  if (cert.title !== 'Legacy Full Stack') {
    if (cert.title.startsWith('Legacy')) {
      legacyProjectMap[cert.title] = cert.projects;
      // temporary hiding of certs from settings page
      // should do suggestion on line 33 and use front matter to hide it
    } else if (!cert.title.startsWith('College Algebra')) {
      projectMap[cert.title] = cert.projects;
    }
  }
});

export { certMap, legacyProjectMap, projectMap };
