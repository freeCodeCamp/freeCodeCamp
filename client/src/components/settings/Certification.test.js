/* global expect */

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../redux/createStore';

import { CertificationSettings } from './Certification';

function renderWithRedux(ui) {
  return render(<Provider store={createStore()}>{ui}</Provider>);
}

describe('<certification />', () => {
  // shallow rendering does not render children component
  // form buttons are not included in shallow render
  it('Should render show cert button for claimed legacy cert', () => {
    const { container } = renderWithRedux(
      <CertificationSettings {...defaultTestProps} />
    );

    expect(
      container.querySelector('#button-legacy-data-visualization')
    ).toHaveTextContent('buttons.show-cert');
  });

  it('Should link show cert button to the claimed legacy cert', () => {
    const { container } = renderWithRedux(
      <CertificationSettings {...defaultTestProps} />
    );

    expect(
      container.querySelector('#button-legacy-data-visualization')
    ).toHaveAttribute(
      'href',
      '/certification/developmentuser/legacy-data-visualization'
    );
  });

  // full forms with unclaimed certs should should not shallow render button
  it('Should not render show cert button for unclaimed full form', () => {
    const { container } = renderWithRedux(
      <CertificationSettings {...defaultTestProps} />
    );

    expect(
      container.querySelector('#button-legacy-back-end')
    ).not.toBeInTheDocument();
  });

  // empty forms with unclaimed certs should should not shallow render button
  it('Should not render show cert button for empty form', () => {
    const { container } = renderWithRedux(
      <CertificationSettings {...defaultTestProps} />
    );

    expect(
      container.querySelector('#button-legacy-front-end')
    ).not.toBeInTheDocument();
  });

  it('Render button when only solution is present', () => {
    const { container } = renderWithRedux(
      <CertificationSettings {...propsForOnlySolution} />
    );

    expect(
      container.querySelector('#btn-for-5e46f802ac417301a38fb92b')
    ).toHaveAttribute('href', 'https://github.com/freeCodeCamp/freeCodeCamp');
  });

  it('Render button when both githubLink and solution is present', () => {
    const { container } = renderWithRedux(
      <CertificationSettings {...propsForOnlySolution} />
    );

    const linkList = container.querySelector(
      '#dropdown-for-5e4f5c4b570f7e3a4949899f + ul'
    );
    const links = linkList.querySelectorAll('a');

    expect(links[0]).toHaveAttribute(
      'href',
      'https://github.com/freeCodeCamp/freeCodeCamp1'
    );

    expect(links[1]).toHaveAttribute(
      'href',
      'https://github.com/freeCodeCamp/freeCodeCamp2'
    );
  });

  it('rendering the correct button when files is present', () => {
    const { getByText } = renderWithRedux(
      <CertificationSettings {...propsForOnlySolution} />
    );

    const button = getByText('buttons.show-code');
    expect(button).toBeInTheDocument();
  });
});

/* eslint-disable max-len */
const defaultTestProps = {
  certMap: [
    {
      block: 'legacy-data-visualization-certificate',
      dashedName: 'legacy-data-visualization-certificate',
      id: '561add10cb82ac39a17513bc',
      order: 1,
      superBlock: 'legacy-data-visualization',
      tests: [
        {
          id: 'bd7157d8c242eddfaeb5bd13',
          link:
            '/learn/legacy-data-visualization/legacy-data-visualization-projects/build-a-markdown-previewer',
          title: 'Build a Markdown Previewer'
        },
        {
          id: 'bd7156d8c242eddfaeb5bd13',
          link:
            '/learn/legacy-data-visualization/legacy-data-visualization-projects/build-a-camper-leaderboard',
          title: 'Build a Camper Leaderboard'
        },
        {
          id: 'bd7155d8c242eddfaeb5bd13',
          link:
            '/learn/legacy-data-visualization/legacy-data-visualization-projects/build-a-recipe-box',
          title: 'Build a Recipe Box'
        },
        {
          id: 'bd7154d8c242eddfaeb5bd13',
          link:
            '/learn/legacy-data-visualization/legacy-data-visualization-projects/build-the-game-of-life',
          title: 'Build the Game of Life'
        },
        {
          id: 'bd7153d8c242eddfaeb5bd13',
          link:
            '/learn/legacy-data-visualization/legacy-data-visualization-projects/build-a-roguelike-dungeon-crawler-game',
          title: 'Build a Roguelike Dungeon Crawler Game'
        },
        {
          id: 'bd7168d8c242eddfaeb5bd13',
          link:
            '/learn/legacy-data-visualization/legacy-data-visualization-projects/visualize-data-with-a-bar-chart',
          title: 'Visualize Data with a Bar Chart'
        },
        {
          id: 'bd7178d8c242eddfaeb5bd13',
          link:
            '/learn/legacy-data-visualization/legacy-data-visualization-projects/visualize-data-with-a-scatterplot-graph',
          title: 'Visualize Data with a Scatterplot Graph'
        },
        {
          id: 'bd7188d8c242eddfaeb5bd13',
          link:
            '/learn/legacy-data-visualization/legacy-data-visualization-projects/visualize-data-with-a-heat-map',
          title: 'Visualize Data with a Heat Map'
        },
        {
          id: 'bd7198d8c242eddfaeb5bd13',
          link:
            '/learn/legacy-data-visualization/legacy-data-visualization-projects/show-national-contiguity-with-a-force-directed-graph',
          title: 'Show National Contiguity with a Force Directed Graph'
        },
        {
          id: 'bd7108d8c242eddfaeb5bd13',
          link:
            '/learn/legacy-data-visualization/legacy-data-visualization-projects/map-data-across-the-globe',
          title: 'Map Data Across the Globe'
        }
      ],
      title: 'Legacy Data Visualization'
    },
    {
      block: 'legacy-full-stack-certificate',
      dashedName: 'legacy-full-stack-certificate',
      id: '561add10cb82ac38a17213bd',
      order: 5,
      superBlock: 'legacy-full-stack',
      tests: [
        {
          title: 'Responsive Web Design Certificate',
          id: '561add10cb82ac38a17513bc',
          link:
            '/learn/legacy-full-stack/legacy-full-stack-projects/responsive-web-design-certificate'
        },
        {
          title: 'JavaScript Algorithms and Data Structures Certificate',
          id: '561abd10cb81ac38a17513bc',
          link:
            '/learn/legacy-full-stack/legacy-full-stack-project…script-algorithms-and-data-structures-certificate'
        },
        {
          title: 'Front End Libraries Certificate',
          id: '561acd10cb82ac38a17513bc',
          link:
            '/learn/legacy-full-stack/legacy-full-stack-projects/front-end-libraries-certificate'
        },
        {
          title: 'Data Visualization Certificate',
          id: '5a553ca864b52e1d8bceea14',
          link:
            '/learn/legacy-full-stack/legacy-full-stack-projects/data-visualization-certificate'
        },
        {
          title: "API's and Microservices Certificate",
          id: '561add10cb82ac38a17523bc',
          link:
            '/learn/legacy-full-stack/legacy-full-stack-projects/apis-and-microservices-certificate'
        },
        {
          title:
            'Legacy Information Security and Quality Assurance Certificate',
          id: '561add10cb82ac38a17213bc',
          link:
            '/learn/legacy-full-stack/legacy-full-stack-project…mation-security-and-quality-assurance-certificate'
        }
      ],
      title: 'Legacy Full Stack'
    }
  ],
  completedChallenges: [
    {
      id: 'bd7156d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7155d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7154d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7153d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7168d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7178d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7188d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7198d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7108d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443edefaeb5bdef',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443edefaeb5bdff',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443edefaeb5bd0e',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443edefaeb5bdee',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443edefaeb5bd0f',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443eddfaeb5bdef',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443eddfaeb5bdff',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443eddfaeb5bd0e',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443eddfaeb5bd0f',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443eddfaeb5bdee',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e444147903586ffb414c94c',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e444147903586ffb414c94d',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e444147903586ffb414c94e',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e444147903586ffb414c94f',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e44414f903586ffb414c950',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e46f7e5ac417301a38fb928',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e46f7e5ac417301a38fb929',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e46f7f8ac417301a38fb92a',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e46f802ac417301a38fb92b',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e4f5c4b570f7e3a4949899f',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7157d8c242eddfaeb5bd13',
      completedDate: 1554272923799,
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    }
  ],
  createFlashMessage: () => {},
  is2018DataVisCert: false,
  isApisMicroservicesCert: false,
  isBackEndCert: false,
  isDataVisCert: true,
  isFrontEndCert: false,
  isFrontEndLibsCert: false,
  isFullStackCert: false,
  isHonest: false,
  isInfosecQaCert: false,
  isQaCertV7: false,
  isInfosecCertV7: false,
  isJsAlgoDataStructCert: false,
  isRespWebDesignCert: false,
  isSciCompPyCertV7: false,
  isDataAnalysisPyCertV7: false,
  isMachineLearningPyCertV7: false,
  updateLegacyCert: () => {},
  username: 'developmentuser',
  verifyCert: () => {},
  errors: {},
  submit: () => {}
};

const contents = 'This is not JS';
const ext = 'js';
const key = 'indexjs';
const name = 'index';
const path = 'index.js';

const propsForOnlySolution = {
  ...defaultTestProps,
  completedChallenges: [
    {
      id: '5e46f802ac417301a38fb92b',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: '5e4f5c4b570f7e3a4949899f',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp1',
      githubLink: 'https://github.com/freeCodeCamp/freeCodeCamp2'
    },
    {
      id: '5e46f7f8ac417301a38fb92a',
      files: [
        {
          contents,
          ext,
          key,
          name,
          path
        }
      ]
    }
  ]
};
