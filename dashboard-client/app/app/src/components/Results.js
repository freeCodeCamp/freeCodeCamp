import React from 'react';

const Results = ({ foundPRs }) => {
  const elements = foundPRs.map((foundPR) => {
    const { number, filenames } = foundPR;
    const files = filenames.map((filename, index) => {
      return <li key={`${number}-${index}`}>{filename}</li>;
    });
    const prUrl = `https://github.com/freeCodeCamp/freeCodeCamp/pull/${number}`
    return (
      <div key={number}>
        <h5>
          {!Number(number)
            ? number
            : <a href={prUrl} rel="noopener noreferrer" target="_blank">{number}</a>
          }
        </h5>
        <ul>
          {files}
        </ul>
      </div>
    );
  });

  return (
    <div>
      {elements}
    </div>
  );
};

export default Results;
