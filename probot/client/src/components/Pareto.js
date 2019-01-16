import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';
import FullWidthDiv from './FullWidthDiv';
import Result from './Result';
import FilterOption from './FilterOption';
import { ENDPOINT_PARETO } from '../constants';

const List = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const detailsStyle = { padding: '3px' };
const filenameTitle = { fontWeight: '600' };

class Pareto extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(ENDPOINT_PARETO)
      .then(response => response.json())
      .then(({ ok, pareto }) => {
        if (ok) {
          if (!pareto.length) {
            pareto.push({
              filename: 'Nothing to show in Pareto Report',
              count: 0,
              prs: []
            });
          }
          this.setState(prevState => ({ data: pareto }));
        }
      })
      .catch(() => {
        const pareto = [
          { filename: 'Nothing to show in Pareto Report', count: 0, prs: [] }
        ];
        this.setState(prevState => ({ data: pareto }));
      });
  }

  render() {
    const { data } = this.state;
    const elements = data.map(entry => {
      const { filename, count, prs } = entry;
      const prsList = prs.map(({ number, username, title }) => {
        return <ListItem number={number} username={username} prTitle={title} />;
      });
      const fileOnMaster = `https://github.com/freeCodeCamp/freeCodeCamp/blob/master/${filename}`;
      return (
        <Result key={filename}>
          <span style={filenameTitle}>{filename}</span>{' '}
          <a href={fileOnMaster} rel="noopener noreferrer" target="_blank">
            (File on Master)
          </a>
          <br />
          <details style={detailsStyle}>
            <summary># of PRs: {count}</summary>
            <List>{prsList}</List>
          </details>
        </Result>
      );
    });

    const options = data.reduce((seen, { filename }) => {
      const filenameReplacement = filename.replace(
        /^curriculum\/challenges\//,
        'curriculum/'
      );
      const regex = /^(docs|curriculum|guide)(?:\/)(english|arabic|chinese|portuguese|russian|spanish)?\/?/;
      // need an array to pass to labelsAdder
      const [_, articleType, language] = filenameReplacement.match(regex) || [];
      if (articleType && language) {
        if (!seen.hasOwnProperty(articleType)) {
          seen[articleType] = {};
        }
        seen[articleType][language] = true;
      }
      return seen;
    }, {});

    let fileTypeOptions = Object.keys(options).map((articleType) => articleType);
    fileTypeOptions = fileTypeOptions.concat('all','other').sort();
    // const typeOptions = fileTypeOptions.map((type) => (
    //   <FilterOption
    //     name="filetype"
    //     value={type}
    //     onOptionChange={handleOptionChange}
    //     selectedOption={selectedOption}
    //   >
    //   {captialize(type)}
    //   </FilterOption>
    // ));
    return (
      <FullWidthDiv>
        <div>
          {/*typeOptions*/}
        </div>
        {data.length ? elements : 'Report Loading...'}
      </FullWidthDiv>
    );
  }
}

export default Pareto;
