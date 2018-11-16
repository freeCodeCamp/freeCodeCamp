import React, { Component } from 'react';
import styled from 'styled-components';

import Input from './components/Input';
import Results from './components/Results';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 #777;
`;

class App extends Component {
  state = {
    number: '',
    foundPRs: []
  };

  inputRef = React.createRef();

  handleInputChange = (event) => {
    const { value } = event.target;
    console.log(Number(value))
    if (Number(value) || value === '') {
      this.setState((prevState) => ({ number: value, foundPRs: [] }));
    }
  }

  handleButtonClick = () => {
    const { number } = this.state;

    fetch(`https://pr-relations.glitch.me/pr/${number}`)
      .then((response) => response.json())
      .then(({ ok, foundPRs }) => {
        if (ok) {
          if (!foundPRs.length) {
            foundPRs.push({number: 'No PRs with matching files', filenames: []});
          }
          this.setState((prevState) => ({ foundPRs }));
        }
        else {
          this.inputRef.current.focus();
        }
      })
      .catch((err) => {
        //console.log(err)
        this.setState((prevState) => ({ number: '', foundPRs: [] }));
      });
  }

  render() {
    const { number, foundPRs } = this.state;

    return (
      <Container>
      <input
        type="text"
        placeholder="PR #"
        onChange={this.handleInputChange}
        value={number}
        ref={this.inputRef}
      />
        <button onClick={this.handleButtonClick}>Search</button>
        <Results foundPRs={foundPRs} />
      </Container>
    );
  }
}

export default App;
