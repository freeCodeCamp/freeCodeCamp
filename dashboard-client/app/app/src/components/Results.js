import React from 'react';

const Results = ({ foundPRs }) => {
  const elements = foundPRs.map((foundPR) => {
    const { number, filenames } = foundPR;
    const files = filenames.map((filename, index) => {
      return <li key={`${number}-${index}`}>{filename}</li>;
    });

    return (
      <div key={number}>
        <h4>{number}</h4>
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
