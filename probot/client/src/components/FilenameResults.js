import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';
import FullWidthDiv from './FullWidthDiv';
import Result from './Result';

const List = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const filenameTitle = { fontWeight: '600' };

const FilenameResults = ({ searchValue, results }) => {
  const elements = results.map(result => {
    const { filename, prs: prObjects } = result;
    const prs = prObjects.map(({ number, username, title }, index) => {
      return <ListItem number={number} username={username} prTitle={title} />;
    });

    const fileOnMaster = `https://github.com/freeCodeCamp/freeCodeCamp/blob/master/${filename}`;
    return (
      <Result key={filename}>
        <span style={filenameTitle}>{filename}</span>{' '}
        <a href={fileOnMaster} rel="noopener noreferrer" target="_blank">
          (File on Master)
        </a>
        <List>{prs}</List>
      </Result>
    );
  });

  return (
    <FullWidthDiv>
      {results.length ? <h3>Results for: {searchValue}</h3> : null}
      {elements}
    </FullWidthDiv>
  );
};

export default FilenameResults;
