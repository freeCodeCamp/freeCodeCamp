const responsiveWebBase =
  '/learn/responsive-web-design/responsive-web-design-projects';
const jsAlgoBase =
  '/learn/javascript-algorithms-and-data-structures/' +
  'javascript-algorithms-and-data-structures-projects';
const feLibsBase = '/learn/front-end-libraries/front-end-libraries-projects';
const dataVisBase = '/learn/data-visualization/data-visualization-projects';
const apiMicroBase =
  '/learn/apis-and-microservices/apis-and-microservices-projects';
const qaBase = 'learn/quality-assurance/quality-assurance-projects';
const infoSecBase = '/learn/information-security/information-security-projects';
const sciCompPyBase =
  '/learn/scientific-computing-with-python/' +
  'scientific-computing-with-python-projects';
const dataAnalysisPyBase =
  '/learn/data-analysis-with-python/data-analysis-with-python-projects';
const machineLearningPyBase =
  '/learn/machine-learning-with-python/machine-learning-with-python-projects';
const legacyFrontEndBase = '';
const legacyBackEndBase = '';
const legacyDataVisBase = '';
const legacyInfosecQaBase = '';

// TODO: generate this automatically in a separate file
// from the md/meta.json files for each cert and projects
const certMap = [
  {
    id: '561add10cb82ac38a17513be',
    title: 'Legacy Front End',
    slug: 'legacy-front-end',
    flag: 'isFrontEndCert',
    projects: [
      {
        id: 'bd7158d8c242eddfaeb5bd13',
        title: 'Build a Personal Portfolio Webpage',
        link: `${legacyFrontEndBase}/build-a-personal-portfolio-webpage`,
        superBlock: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd13',
        title: 'Build a Random Quote Machine',
        link: `${legacyFrontEndBase}/build-a-random-quote-machine`,
        superBlock: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd0f',
        title: 'Build a Pomodoro Clock',
        link: `${legacyFrontEndBase}/build-a-pomodoro-clock`,
        superBlock: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd17',
        title: 'Build a JavaScript Calculator',
        link: `${legacyFrontEndBase}/build-a-javascript-calculator`,
        superBlock: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd10',
        title: 'Show the Local Weather',
        link: `${legacyFrontEndBase}/show-the-local-weather`,
        superBlock: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd1f',
        title: 'Use the TwitchTV JSON API',
        link: `${legacyFrontEndBase}/use-the-twitchtv-json-api`,
        superBlock: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd18',
        title: 'Stylize Stories on Camper News',
        link: `${legacyFrontEndBase}/stylize-stories-on-camper-news`,
        superBlock: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd19',
        title: 'Build a Wikipedia Viewer',
        link: `${legacyFrontEndBase}/build-a-wikipedia-viewer`,
        superBlock: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eedfaeb5bd1c',
        title: 'Build a Tic Tac Toe Game',
        link: `${legacyFrontEndBase}/build-a-tic-tac-toe-game`,
        superBlock: 'legacy-front-end'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd1c',
        title: 'Build a Simon Game',
        link: `${legacyFrontEndBase}/build-a-simon-game`,
        superBlock: 'legacy-front-end'
      }
    ]
  },
  {
    id: '660add10cb82ac38a17513be',
    title: 'Legacy Back End',
    slug: 'legacy-back-end',
    flag: 'isBackEndCert',
    projects: [
      {
        id: 'bd7158d8c443edefaeb5bdef',
        title: 'Timestamp Microservice',
        link: `${legacyBackEndBase}/timestamp-microservice`,
        superBlock: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443edefaeb5bdff',
        title: 'Request Header Parser Microservice',
        link: `${legacyBackEndBase}/request-header-parser-microservice`,
        superBlock: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443edefaeb5bd0e',
        title: 'URL Shortener Microservice',
        link: `${legacyBackEndBase}/url-shortener-microservice`,
        superBlock: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443edefaeb5bdee',
        title: 'Image Search Abstraction Layer',
        link: `${legacyBackEndBase}/image-search-abstraction-layer`,
        superBlock: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443edefaeb5bd0f',
        title: 'File Metadata Microservice',
        link: `${legacyBackEndBase}/file-metadata-microservice`,
        superBlock: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443eddfaeb5bdef',
        title: 'Build a Voting App',
        link: `${legacyBackEndBase}/build-a-voting-app`,
        superBlock: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443eddfaeb5bdff',
        title: 'Build a Nightlife Coordination App',
        link: `${legacyBackEndBase}/build-a-nightlife-coordination-app`,
        superBlock: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443eddfaeb5bd0e',
        title: 'Chart the Stock Market',
        link: `${legacyBackEndBase}/chart-the-stock-market`,
        superBlock: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443eddfaeb5bd0f',
        title: 'Manage a Book Trading Club',
        link: `${legacyBackEndBase}/manage-a-book-trading-club`,
        superBlock: 'legacy-back-end'
      },
      {
        id: 'bd7158d8c443eddfaeb5bdee',
        title: 'Build a Pinterest Clone',
        link: `${legacyBackEndBase}/build-a-pinterest-clone`,
        superBlock: 'legacy-back-end'
      }
    ]
  },
  {
    id: '561add10cb82ac38a17213bd',
    title: 'Legacy Full Stack',
    slug: 'full-stack',
    flag: 'isFullStackCert'
    // Requirements are other certs and is
    // handled elsewhere
  },
  {
    id: '561add10cb82ac39a17513bc',
    title: 'Legacy Data Visualization',
    slug: 'legacy-data-visualization',
    flag: 'isDataVisCert',
    projects: [
      {
        id: 'bd7157d8c242eddfaeb5bd13',
        title: 'Build a Markdown Previewer',
        link: `${legacyDataVisBase}/build-a-markdown-previewer`,
        superBlock: 'legacy-data-visualization'
      },
      {
        id: 'bd7156d8c242eddfaeb5bd13',
        title: 'Build a Camper Leaderboard',
        link: `${legacyDataVisBase}/build-a-camper-leaderboard`,
        superBlock: 'legacy-data-visualization'
      },
      {
        id: 'bd7155d8c242eddfaeb5bd13',
        title: 'Build a Recipe Box',
        link: `${legacyDataVisBase}/build-a-recipe-box`,
        superBlock: 'legacy-data-visualization'
      },
      {
        id: 'bd7154d8c242eddfaeb5bd13',
        title: 'Build the Game of Life',
        link: `${legacyDataVisBase}/build-the-game-of-life`,
        superBlock: 'legacy-data-visualization'
      },
      {
        id: 'bd7153d8c242eddfaeb5bd13',
        title: 'Build a Roguelike Dungeon Crawler Game',
        link: `${legacyDataVisBase}/build-a-roguelike-dungeon-crawler-game`,
        superBlock: 'legacy-data-visualization'
      },
      {
        id: 'bd7168d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Bar Chart',
        link: `${legacyDataVisBase}/visualize-data-with-a-bar-chart`,
        superBlock: 'legacy-data-visualization'
      },
      {
        id: 'bd7178d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Scatterplot Graph',
        link: `${legacyDataVisBase}/visualize-data-with-a-scatterplot-graph`,
        superBlock: 'legacy-data-visualization'
      },
      {
        id: 'bd7188d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Heat Map',
        link: `${legacyDataVisBase}/visualize-data-with-a-heat-map`,
        superBlock: 'legacy-data-visualization'
      },
      {
        id: 'bd7198d8c242eddfaeb5bd13',
        title: 'Show National Contiguity with a Force Directed Graph',
        link: `${legacyDataVisBase}/show-national-contiguity-with-a-force-directed-graph`,
        superBlock: 'legacy-data-visualization'
      },
      {
        id: 'bd7108d8c242eddfaeb5bd13',
        title: 'Map Data Across the Globe',
        link: `${legacyDataVisBase}/map-data-across-the-globe`,
        superBlock: 'legacy-data-visualization'
      }
    ]
  },
  {
    id: '561add10cb82ac38a17213bc',
    title: 'Legacy Information Security and Quality Assurance',
    // Keep this as information-security-and-quality-assurance
    slug: 'information-security-and-quality-assurance',
    flag: 'isInfosecQaCert',
    projects: [
      // Keep this as information-security-and-quality-assurance
      {
        id: '587d8249367417b2b2512c41',
        title: 'Metric-Imperial Converter',
        link: `${legacyInfosecQaBase}/metric-imperial-converter`,
        superBlock: 'information-security-and-quality-assurance'
      },
      {
        id: '587d8249367417b2b2512c42',
        title: 'Issue Tracker',
        link: `${legacyInfosecQaBase}/issue-tracker`,
        superBlock: 'information-security-and-quality-assurance'
      },
      {
        id: '587d824a367417b2b2512c43',
        title: 'Personal Library',
        link: `${legacyInfosecQaBase}/personal-library`,
        superBlock: 'information-security-and-quality-assurance'
      },
      {
        id: '587d824a367417b2b2512c44',
        title: 'Stock Price Checker',
        link: `${legacyInfosecQaBase}/stock-price-checker`,
        superBlock: 'information-security-and-quality-assurance'
      },
      {
        id: '587d824a367417b2b2512c45',
        title: 'Anonymous Message Board',
        link: `${legacyInfosecQaBase}/anonymous-message-board`,
        superBlock: 'information-security-and-quality-assurance'
      }
    ]
  },
  {
    id: '561add10cb82ac38a17513bc',
    title: 'Responsive Web Design',
    slug: 'responsive-web-design',
    flag: 'isRespWebDesignCert',
    projects: [
      {
        id: 'bd7158d8c442eddfaeb5bd18',
        title: 'Build a Tribute Page',
        link: `${responsiveWebBase}/build-a-tribute-page`,
        superBlock: 'responsive-web-design'
      },
      {
        id: '587d78af367417b2b2512b03',
        title: 'Build a Survey Form',
        link: `${responsiveWebBase}/build-a-survey-form`,
        superBlock: 'responsive-web-design'
      },
      {
        id: '587d78af367417b2b2512b04',
        title: 'Build a Product Landing Page',
        link: `${responsiveWebBase}/build-a-product-landing-page`,
        superBlock: 'responsive-web-design'
      },
      {
        id: '587d78b0367417b2b2512b05',
        title: 'Build a Technical Documentation Page',
        link: `${responsiveWebBase}/build-a-technical-documentation-page`,
        superBlock: 'responsive-web-design'
      },
      {
        id: 'bd7158d8c242eddfaeb5bd13',
        title: 'Build a Personal Portfolio Webpage',
        link: `${responsiveWebBase}/build-a-personal-portfolio-webpage`,
        superBlock: 'responsive-web-design'
      }
    ]
  },
  {
    id: '561abd10cb81ac38a17513bc',
    title: 'JavaScript Algorithms and Data Structures',
    slug: 'javascript-algorithms-and-data-structures',
    flag: 'isJsAlgoDataStructCert',
    projects: [
      {
        id: 'aaa48de84e1ecc7c742e1124',
        title: 'Palindrome Checker',
        link: `${jsAlgoBase}/palindrome-checker`,
        superBlock: 'javascript-algorithms-and-data-structures'
      },
      {
        id: 'a7f4d8f2483413a6ce226cac',
        title: 'Roman Numeral Converter',
        link: `${jsAlgoBase}/roman-numeral-converter`,
        superBlock: 'javascript-algorithms-and-data-structures'
      },
      {
        id: '56533eb9ac21ba0edf2244e2',
        title: 'Caesars Cipher',
        link: `${jsAlgoBase}/caesars-cipher`,
        superBlock: 'javascript-algorithms-and-data-structures'
      },
      {
        id: 'aff0395860f5d3034dc0bfc9',
        title: 'Telephone Number Validator',
        link: `${jsAlgoBase}/telephone-number-validator`,
        superBlock: 'javascript-algorithms-and-data-structures'
      },
      {
        id: 'aa2e6f85cab2ab736c9a9b24',
        title: 'Cash Register',
        link: `${jsAlgoBase}/cash-register`,
        superBlock: 'javascript-algorithms-and-data-structures'
      }
    ]
  },
  {
    id: '561acd10cb82ac38a17513bc',
    title: 'Front End Libraries',
    slug: 'front-end-libraries',
    flag: 'isFrontEndLibsCert',
    projects: [
      {
        id: 'bd7158d8c442eddfaeb5bd13',
        title: 'Build a Random Quote Machine',
        link: `${feLibsBase}/build-a-random-quote-machine`,
        superBlock: 'front-end-libraries'
      },
      {
        id: 'bd7157d8c242eddfaeb5bd13',
        title: 'Build a Markdown Previewer',
        link: `${feLibsBase}/build-a-markdown-previewer`,
        superBlock: 'front-end-libraries'
      },
      {
        id: '587d7dbc367417b2b2512bae',
        title: 'Build a Drum Machine',
        link: `${feLibsBase}/build-a-drum-machine`,
        superBlock: 'front-end-libraries'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd17',
        title: 'Build a JavaScript Calculator',
        link: `${feLibsBase}/build-a-javascript-calculator`,
        superBlock: 'front-end-libraries'
      },
      {
        id: 'bd7158d8c442eddfaeb5bd0f',
        title: 'Build a Pomodoro Clock',
        link: `${feLibsBase}/build-a-pomodoro-clock`,
        superBlock: 'front-end-libraries'
      }
    ]
  },
  {
    id: '5a553ca864b52e1d8bceea14',
    title: 'Data Visualization',
    slug: 'data-visualization',
    flag: 'is2018DataVisCert',
    projects: [
      {
        id: 'bd7168d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Bar Chart',
        link: `${dataVisBase}/visualize-data-with-a-bar-chart`,
        superBlock: 'data-visualization'
      },
      {
        id: 'bd7178d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Scatterplot Graph',
        link: `${dataVisBase}/visualize-data-with-a-scatterplot-graph`,
        superBlock: 'data-visualization'
      },
      {
        id: 'bd7188d8c242eddfaeb5bd13',
        title: 'Visualize Data with a Heat Map',
        link: `${dataVisBase}/visualize-data-with-a-heat-map`,
        superBlock: 'data-visualization'
      },
      {
        id: '587d7fa6367417b2b2512bbf',
        title: 'Visualize Data with a Choropleth Map',
        link: `${dataVisBase}/visualize-data-with-a-choropleth-map`,
        superBlock: 'data-visualization'
      },
      {
        id: '587d7fa6367417b2b2512bc0',
        title: 'Visualize Data with a Treemap Diagram',
        link: `${dataVisBase}/visualize-data-with-a-treemap-diagram`,
        superBlock: 'data-visualization'
      }
    ]
  },
  {
    id: '561add10cb82ac38a17523bc',
    title: 'APIs and Microservices',
    slug: 'apis-and-microservices',
    flag: 'isApisMicroservicesCert',
    projects: [
      {
        id: 'bd7158d8c443edefaeb5bdef',
        title: 'Timestamp Microservice',
        link: `${apiMicroBase}/timestamp-microservice`,
        superBlock: 'apis-and-microservices'
      },
      {
        id: 'bd7158d8c443edefaeb5bdff',
        title: 'Request Header Parser Microservice',
        link: `${apiMicroBase}/request-header-parser-microservice`,
        superBlock: 'apis-and-microservices'
      },
      {
        id: 'bd7158d8c443edefaeb5bd0e',
        title: 'URL Shortener Microservice',
        link: `${apiMicroBase}/url-shortener-microservice`,
        superBlock: 'apis-and-microservices'
      },
      {
        id: '5a8b073d06fa14fcfde687aa',
        title: 'Exercise Tracker',
        link: `${apiMicroBase}/exercise-tracker`,
        superBlock: 'apis-and-microservices'
      },
      {
        id: 'bd7158d8c443edefaeb5bd0f',
        title: 'File Metadata Microservice',
        link: `${apiMicroBase}/file-metadata-microservice`,
        superBlock: 'apis-and-microservices'
      }
    ]
  },
  {
    id: '5e611829481575a52dc59c0e',
    title: 'Quality Assurance',
    slug: 'quality-assurance-v7',
    flag: 'isQaCertV7',
    projects: [
      {
        id: '587d8249367417b2b2512c41',
        title: 'Metric-Imperial Converter',
        link: `${qaBase}/metric-imperial-converter`,
        superBlock: 'quality-assurance-v7'
      },
      {
        id: '587d8249367417b2b2512c42',
        title: 'Issue Tracker',
        link: `${qaBase}/issue-tracker`,
        superBlock: 'quality-assurance-v7'
      },
      {
        id: '587d824a367417b2b2512c43',
        title: 'Personal Library',
        link: `${qaBase}/personal-library`,
        superBlock: 'quality-assurance-v7'
      },
      {
        id: '5e601bf95ac9d0ecd8b94afd',
        title: 'Sudoku Solver',
        link: `${qaBase}/sudoku-solver`,
        superBlock: 'quality-assurance-v7'
      },
      {
        id: '5e601c0d5ac9d0ecd8b94afe',
        title: 'American British Translator',
        link: `${qaBase}/american-british-translator`,
        superBlock: 'quality-assurance-v7'
      }
    ]
  },
  {
    id: '5e44431b903586ffb414c951',
    title: 'Scientific Computing with Python',
    slug: 'scientific-computing-with-python-v7',
    flag: 'isSciCompPyCertV7',
    projects: [
      {
        id: '5e44412c903586ffb414c94c',
        title: 'Arithmetic Formatter',
        link: `${sciCompPyBase}/arithmetic-formatter`,
        superBlock: 'scientific-computing-with-python-v7'
      },
      {
        id: '5e444136903586ffb414c94d',
        title: 'Time Calculator',
        link: `${sciCompPyBase}/time-calculator`,
        superBlock: 'scientific-computing-with-python-v7'
      },
      {
        id: '5e44413e903586ffb414c94e',
        title: 'Budget App',
        link: `${sciCompPyBase}/budget-app`,
        superBlock: 'scientific-computing-with-python-v7'
      },
      {
        id: '5e444147903586ffb414c94f',
        title: 'Polygon Area Calculator',
        link: `${sciCompPyBase}/polygon-area-calculator`,
        superBlock: 'scientific-computing-with-python-v7'
      },
      {
        id: '5e44414f903586ffb414c950',
        title: 'Probability Calculator',
        link: `${sciCompPyBase}/probability-calculator`,
        superBlock: 'scientific-computing-with-python-v7'
      }
    ]
  },
  {
    id: '5e46fc95ac417301a38fb934',
    title: 'Data Analysis with Python',
    slug: 'data-analysis-with-python-v7',
    flag: 'isDataAnalysisPyCertV7',
    projects: [
      {
        id: '5e46f7e5ac417301a38fb928',
        title: 'Mean-Variance-Standard Deviation Calculator',
        link: `${dataAnalysisPyBase}/mean-variance-standard-deviation-calculator`,
        superBlock: 'data-analysis-with-python-v7'
      },
      {
        id: '5e46f7e5ac417301a38fb929',
        title: 'Demographic Data Analyzer',
        link: `${dataAnalysisPyBase}/demographic-data-analyzer`,
        superBlock: 'data-analysis-with-python-v7'
      },
      {
        id: '5e46f7f8ac417301a38fb92a',
        title: 'Medical Data Visualizer',
        link: `${dataAnalysisPyBase}/medical-data-visualizer`,
        superBlock: 'data-analysis-with-python-v7'
      },
      {
        id: '5e46f802ac417301a38fb92b',
        title: 'Page View Time Series Visualizer',
        link: `${dataAnalysisPyBase}/page-view-time-series-visualizer`,
        superBlock: 'data-analysis-with-python-v7'
      },
      {
        id: '5e4f5c4b570f7e3a4949899f',
        title: 'Sea Level Predictor',
        link: `${dataAnalysisPyBase}/sea-level-predictor`,
        superBlock: 'data-analysis-with-python-v7'
      }
    ]
  },

  {
    id: '5e6021435ac9d0ecd8b94b00',
    title: 'Information Security',
    slug: 'information-security-v7',
    flag: 'isInfosecCertV7',
    projects: [
      {
        id: '587d824a367417b2b2512c44',
        title: 'Stock Price Checker',
        link: `${infoSecBase}/stock-price-checker`,
        superBlock: 'information-security-v7'
      },
      {
        id: '587d824a367417b2b2512c45',
        title: 'Anonymous Message Board',
        link: `${infoSecBase}/anonymous-message-board`,
        superBlock: 'information-security-v7'
      },
      {
        id: '5e46f979ac417301a38fb932',
        title: 'Port Scanner',
        link: `${infoSecBase}/port-scanner`,
        superBlock: 'information-security-v7'
      },
      {
        id: '5e46f983ac417301a38fb933',
        title: 'SHA-1 Password Cracker',
        link: `${infoSecBase}/sha-1-password-cracker`,
        superBlock: 'information-security-v7'
      },
      {
        id: '5e601c775ac9d0ecd8b94aff',
        title: 'Secure Real Time Multiplayer Game',
        link: `${infoSecBase}/secure-real-time-multiplayer-game`,
        superBlock: 'information-security-v7'
      }
    ]
  },
  {
    id: '5e46fc95ac417301a38fb935',
    title: 'Machine Learning with Python',
    slug: 'machine-learning-with-python-v7',
    flag: 'isMachineLearningPyCertV7',
    projects: [
      {
        id: '5e46f8d6ac417301a38fb92d',
        title: 'Rock Paper Scissors',
        link: `${machineLearningPyBase}/rock-paper-scissors`,
        superBlock: 'machine-learning-with-python-v7'
      },
      {
        id: '5e46f8dcac417301a38fb92e',
        title: 'Cat and Dog Image Classifier',
        link: `${machineLearningPyBase}/cat-and-dog-image-classifier`,
        superBlock: 'machine-learning-with-python-v7'
      },
      {
        id: '5e46f8e3ac417301a38fb92f',
        title: 'Book Recommendation Engine using KNN',
        link: `${machineLearningPyBase}/book-recommendation-engine-using-knn`,
        superBlock: 'machine-learning-with-python-v7'
      },
      {
        id: '5e46f8edac417301a38fb930',
        title: 'Linear Regression Health Costs Calculator',
        link: `${machineLearningPyBase}/linear-regression-health-costs-calculator`,
        superBlock: 'machine-learning-with-python-v7'
      },
      {
        id: '5e46f8edac417301a38fb931',
        title: 'Neural Network SMS Text Classifier',
        link: `${machineLearningPyBase}/neural-network-sms-text-classifier`,
        superBlock: 'machine-learning-with-python-v7'
      }
    ]
  }
];

const legacyProjectMap = {};
const projectMap = {};

certMap.forEach(cert => {
  // Filter out Legacy Full Stack so inputs for project
  // URLs aren't rendered on the settings page
  if (cert.title !== 'Legacy Full Stack') {
    if (cert.title.startsWith('Legacy')) {
      legacyProjectMap[cert.title] = cert.projects;
    } else {
      projectMap[cert.title] = cert.projects;
    }
  }
});

export { certMap, legacyProjectMap, projectMap };
