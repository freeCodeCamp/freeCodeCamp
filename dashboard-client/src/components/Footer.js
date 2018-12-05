import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5px;
  text-align: center;
`;

const Info = styled.div`
  font-size: 14px;
  padding: 2px;
`;

class Footer extends Component {
  state = {
    numPRs: null,
    prRange: null,
    lastUpdate: null
  }

  componentDidMount() {
    const baseUrl = 'https://pr-relations.glitch.me/';
    const fetchUrl = baseUrl + 'info';
    fetch(fetchUrl)
    .then((response) => response.json())
    .then(({ ok, numPRs, prRange, lastUpdate }) => {
      if (ok) {
        this.setState((prevState) => ({ numPRs, prRange, lastUpdate }));
      }
    })
    .catch(() => {
      // do nothing
    });
  }

  localTime(lastUpdate) {
    const newTime = new Date(lastUpdate);
    return newTime.toLocaleString();
  }

  render() {
    const { numPRs, prRange, lastUpdate } = this.state;
    return (
      <Container>
        <Info>Last Update: {this.localTime(lastUpdate)}</Info>
        <Info># of open PRs: {numPRs} ({prRange})</Info>
      </Container>
    );
  }
};

export default Footer;
