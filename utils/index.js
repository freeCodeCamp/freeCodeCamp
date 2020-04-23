import { dasherize } from './slugs';

const idToTitle = new Map(
  Object.entries({
    '561add10cb82ac38a17523bc': 'APIs and Microservices',
    '5a553ca864b52e1d8bceea14': 'Data Visualization',
    '561acd10cb82ac38a17513bc': 'Front End Libraries',
    '5e611829481575a52dc59c0e': 'Quality Assurance',
    '5e6021435ac9d0ecd8b94b00': 'Information Security',
    '561abd10cb81ac38a17513bc': 'JavaScript Algorithms and Data Structures',
    '561add10cb82ac38a17513bc': 'Responsive Web Design',
    '660add10cb82ac38a17513be': 'Legacy Back End',
    '561add10cb82ac39a17513bc': 'Legacy Data Visualization',
    '561add10cb82ac38a17513be': 'Legacy Front End',
    '561add10cb82ac38a17213bc':
      'Legacy Information Security and Quality Assurance',
    '561add10cb82ac38a17213bd': 'Full Stack',
    '5e44431b903586ffb414c951': 'Scientific Computing with Python',
    '5e46fc95ac417301a38fb934': 'Data Analysis with Python',
    '5e46fc95ac417301a38fb935': 'Machine Learning with Python'
  })
);

const idToPath = new Map();

for (const [id, title] of idToTitle) {
  idToPath.set(id, dasherize(title));
}

export const getCertIds = () => idToPath.keys();
export const getPathFromID = id => idToPath.get(id);
export const getTitleFromId = id => idToTitle.get(id);
