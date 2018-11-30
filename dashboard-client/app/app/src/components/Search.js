import React, { Component } from 'react';

import Input from './Input';
import Results from './Results';

class Search extends Component {
  state = {
    number: '',
    foundPRs: [],
  };

  clearObj = { number: '', foundPRs: [] };

  inputRef = React.createRef();

  handleInputEvent = (event) => {
    const { type, key, target: { value } } = event;

    if (type === 'change') {
      if (Number(value) || value === '') {
        this.setState((prevState) => ({ number: value, foundPRs: [] }));
      }
    }
    else if (type === 'keypress' && key === 'Enter') {
      this.searchPRs(value);
    }
  }

  handleButtonClick = () => {
    const { number } = this.state;
    this.searchPRs(number);
  }

  searchPRs = (number) => {
    fetch(`https://pr-relations.glitch.me/pr/${number}`)
    .then((response) => response.json())
    .then(({ ok, foundPRs }) => {
      if (ok) {
        if (!foundPRs.length) {
          foundPRs.push({ number: 'No PRs with matching files', filenames: [] });
        }
        this.setState((prevState) => ({ foundPRs }));
      }
      else {
        this.inputRef.current.focus();
      }
    })
    .catch(() => {
      this.setState((prevState) => (this.clearObj));
    });
  }

  render() {
    const { handleButtonClick, handleInputEvent, inputRef, state } = this;
    const { number, foundPRs } = state;
    return (
      <>
        <Input ref={inputRef} value={number} onInputEvent={handleInputEvent} />
        <button onClick={handleButtonClick}>Search</button>
        <Results foundPRs={foundPRs} />
      </>
    );
  }
}

export default Search;
