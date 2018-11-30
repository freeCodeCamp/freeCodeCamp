import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin: 5px;
`;

const Results = ({ foundPRs }) => {
  const elements = foundPRs.map((foundPR) => {
    const { number, filenames, username } = foundPR;
    const files = filenames.map((filename, index) => {
      return <li key={`${number}-${index}`}>{filename}</li>;
    });
    const prUrl = `https://github.com/freeCodeCamp/freeCodeCamp/pull/${number}`

    return (
      <div key={number}>
        {!Number(number)
          ? number
          : <>
              <a href={prUrl} rel="noopener noreferrer" target="_blank">{number}</a>
              <span>&nbsp;{username}</span>
            </>
        }
        <List>
          {files}
        </List>
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
