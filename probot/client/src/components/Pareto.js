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
    data: [],
    all: [],
    selectedFileType: 'all',
    selectedLanguage: 'all',
    options: {}
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
          
          this.setState(prevState => ({
            data: pareto,
            all: [...pareto],
            options: this.createOptions(pareto)
          }));
        }
      })
      .catch(() => {
        const pareto = [
          { filename: 'Nothing to show in Pareto Report', count: 0, prs: [] }
        ];
        this.setState(prevState => ({ data: pareto }));
      });
  }

  createOptions = (data) => {
    const options = data.reduce((seen, { filename }) => {
      const { articleType, language } = this.getFilenameOptions(filename);
      if (articleType && language) {
        if (!seen.hasOwnProperty(articleType)) {
          seen[articleType] = {};
        }
        seen[articleType][language] = true;
      }
      return seen;
    }, {});
    return options;
  }

  handleFileTypeOptionChange = changeEvent => {
    const { all } = this.state;
    const selectedFileType = changeEvent.target.value;
    let filteredData = [];
    if (selectedFileType === 'all') {
      filteredData = all;
    }
    else if (selectedFileType !== 'other') {
      filteredData = all.filter(({ filename }) => {
        const { articleType } = this.getFilenameOptions(filename);
        return articleType === selectedFileType;
      });
    }
    else {
      // Other selected
      filteredData = all.filter(({ filename }) => {
        const { articleType } = this.getFilenameOptions(filename);
        return !articleType;
      });
    }
    this.setState(prevState => ({ data: filteredData, selectedFileType }));
  }

  handleLanguageOptionChange = changeEvent => {
    const { all, selectedFileType } = this.state;
    const selectedLanguage = changeEvent.target.value;
    let filteredData = [];
    if (selectedLanguage === 'all') {
      filteredData = all.filter(({ filename }) => {
        const { articleType } = this.getFilenameOptions(filename);
        return articleType === selectedFileType;
      });
    }
    else if (selectedLanguage !== 'other') {
      filteredData = all.filter(({ filename }) => {
        const { articleType, language } = this.getFilenameOptions(filename);
        return articleType === selectedFileType && language === selectedLanguage;
      });
    }
    else {
      // Other selected
      filteredData = all.filter(({ filename }) => {
        const { articleType, language } = this.getFilenameOptions(filename);
        return articleType && !language;
      });  
    }
    this.setState(prevState => ({ data: filteredData, selectedLanguage }));
  }

  getFilenameOptions = filename => {
    const filenameReplacement = filename.replace(
      /^curriculum\/challenges\//, 'curriculum/'
    );
    const regex = /^(docs|curriculum|guide)(?:\/)(english|arabic|chinese|portuguese|russian|spanish)?\/?/;
    // need an array to pass to labelsAdder
    // eslint-disable-next-line
    const [_, articleType, language] = filenameReplacement.match(regex) || [];
    return { articleType, language };
  }
  
  render() {
    const { data, options, selectedFileType, selectedLanguage } = this.state;

    const elements = data.map(entry => {
      const { filename, count, prs } = entry;
      const prsList = prs.map(({ number, username, title }) => {
        return <ListItem key={number} number={number} username={username} prTitle={title} />;
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
    
    let fileTypeOptions = Object.keys(options).map(articleType => articleType);
    fileTypeOptions = ['all', ...fileTypeOptions.sort(), 'other'];

    const typeOptions = fileTypeOptions.map((type) => (
      <FilterOption
        key={type}
        name="filetype"
        value={type}
        onOptionChange={this.handleFileTypeOptionChange}
        selectedFileType={selectedFileType}
      >
      {type.charAt().toUpperCase() + type.slice(1)}
      </FilterOption>
    ));
    
    let languageOptions = null;
    if (selectedFileType !== 'all' && selectedFileType !=='other') {
      let languages = Object.keys(options[selectedFileType]);    
      languages = ['all', ...languages.sort(), 'other'];
      languageOptions = languages.map(language => (
        <FilterOption
          key={language}
          name="language"
          value={language}
          onOptionChange={this.handleLanguageOptionChange}
          selectedLanguage={selectedLanguage}
        >
        {language.charAt().toUpperCase() + language.slice(1)}
        </FilterOption>
      ));    
    }
    return (
      <FullWidthDiv>
        <div>
          {typeOptions}
        </div>
        {
        languageOptions &&
        <div>
          {languageOptions}
        </div>
        }
        {data.length ? elements : 'Report Loading...'}
      </FullWidthDiv>
    );
  }
}

export default Pareto;
