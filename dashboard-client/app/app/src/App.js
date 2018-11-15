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
    number: null,
    foundPRs: []
  };

  handleInputChange = (event) => {
    const { value } = event.target;

    this.setState((prevState) => ({ number: value }));
  }

  handleButtonClick = () => {
    const { number } = this.state;

    fetch(`https://pr-relations.glitch.me/test/${number}`)
      .then((response) => response.json())
      .then(({ foundPRs }) => {
        console.log(foundPRs);
        this.setState((prevState) => ({ foundPRs }))
      });
  }

  render() {
    const { foundPRs } = this.state;

    return (
      <Container>
        <Input onInputChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>Search</button>
        <Results foundPRs={foundPRs} />
      </Container>
    );
  }
}

export default App;
