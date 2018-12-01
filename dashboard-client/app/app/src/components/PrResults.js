import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 15px;
`;

const List = styled.ul`
  margin: 3px;
`;

const PrResults = ({ searchValue, results }) => {
  const elements = results.map((result, idx) => {
    const { number, filenames, username } = result;
    const files = filenames.map((filename, index) => {
      return <li key={`${number}-${index}`}>{filename}</li>;
    });
    const prUrl = `https://github.com/freeCodeCamp/freeCodeCamp/pull/${number}`

    return (
      <Container key={`${number}-${idx}`}>
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
      </Container>
    );
  });

  return (
    <div>
      {results.length ? <h3>Results for PR# {searchValue}</h3> : null}
      {elements}
    </div>
  );
};

export default PrResults;
