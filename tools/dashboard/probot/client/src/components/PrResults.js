import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';
import FullWidthDiv from './FullWidthDiv';
import Result from './Result';

const List = styled.ul`
  margin: 3px;
`;

const PrResults = ({ searchValue, results }) => {
  const elements = results.map((result, idx) => {
    const { number, filenames, username, title } = result;
    const files = filenames.map((filename, index) => {
      const fileOnMaster = `https://github.com/freeCodeCamp/freeCodeCamp/blob/master/${filename}`;
      return (
        <li key={`${number}-${index}`}>
          {filename}{' '}
          <a href={fileOnMaster} rel="noopener noreferrer" target="_blank">
            (File on Master)
          </a>
        </li>
      );
    });

    return (
      <Result key={`${number}-${idx}`}>
        <ListItem number={number} username={username} prTitle={title} />
        <List>{files}</List>
      </Result>
    );
  });

  return (
    <FullWidthDiv style={{ width: '100%' }}>
      {results.length ? <h3>Results for PR# {searchValue}</h3> : null}
      {elements}
    </FullWidthDiv>
  );
};

export default PrResults;
