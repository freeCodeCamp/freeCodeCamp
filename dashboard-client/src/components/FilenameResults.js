import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.div`
  padding: 0 5px;
`;

const FilenameResults = ({ searchValue, results }) => {
  const elements = results.map((result) => {
    const { filename, prs: prObjects } = result;
    const prs = prObjects.map(({ number }, index) => {
      const prUrl = `https://github.com/freeCodeCamp/freeCodeCamp/pull/${number}`;
      return <ListItem key={`${filename}-${index}`}>
        • <a href={prUrl} rel="noopener noreferrer" target="_blank">{number}</a>
      </ListItem>;
    });

    return (
      <div key={filename}>
        {filename}
        <List>
          {prs}
        </List>
      </div>
    );
  });

  return (
    <div>
      {results.length ? <h3>Results for: {searchValue}</h3> : null}
      {elements}
    </div>
  );
};

export default FilenameResults;
