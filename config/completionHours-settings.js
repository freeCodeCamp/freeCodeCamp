const certHours = {
  'APIs and Microservices': 300,
  'Data Analysis with Python': 300,
  'Data Visualization': 300,
  'Front End Libraries': 300,
  'Information Security': 300,
  'Legacy Back End': 300,
  'Legacy Data Visualization': 300,
  'Legacy Front End': 300,
  'Legacy Full Stack': 1800,
  'Legacy Information Security and Quality Assurance': 300,
  'Quality Assurance': 300,
  'Responsive Web Design': 300,
  'Scientific Computing with Python': 300
};

const completionTime = certTitle => {
  return certHours[certTitle];
};

module.exports = {
  certHours,
  completionTime
};
