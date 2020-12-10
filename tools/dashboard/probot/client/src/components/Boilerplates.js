import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';
import FullWidthDiv from './FullWidthDiv';
import Result from './Result';
import { ENDPOINT_BOILERPLATES } from '../constants';

const List = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const detailsStyle = { padding: '3px' };
const filenameTitle = { fontWeight: '600' };

class Boilerplates extends React.Component {
  state = {
    data: [],
    rateLimitMessage: ''
  };

  componentDidMount() {
    fetch(ENDPOINT_BOILERPLATES)
      .then(response => response.json())
      .then(({ ok, rateLimitMessage, boilerplates }) => {
        if (ok) {
          if (!boilerplates.length) {
            boilerplates.push({
              repoName: 'No open boilerplate PRS',
              prs: []
            });
          }

          this.setState(prevState => ({
            data: boilerplates
          }));
        } else if (rateLimitMessage) {
          this.setState(prevState => ({
            rateLimitMessage
          }));
        }
      })
      .catch(() => {
        const boilerplates = [
          { repoName: 'No open boilerplate PRS', prs: [] }
        ];
        this.setState(prevState => ({ data: boilerplates }));
      });
  }

  render() {
    const { data, rateLimitMessage } = this.state;

    const elements = rateLimitMessage
      ? rateLimitMessage
      : data.map(entry => {
        const { _id: repoName, prs } = entry;
        const prsList = prs.map(({ _id: number, username, title, prLink }) => {
          return <ListItem key={number} number={number} username={username} prTitle={title} prLink={prLink} />;
        });

        return (
          <Result key={repoName}>
            <span style={filenameTitle}>{repoName}</span>
            <br />
            <details style={detailsStyle}>
              <summary># of PRs: {prs.length}</summary>
              <List>{prsList}</List>
            </details>
          </Result>
        );
      });

    return (
      <FullWidthDiv>
        {rateLimitMessage
          ? rateLimitMessage
          : data.length
            ? elements
            : 'Report Loading...'}
      </FullWidthDiv>
    );
  }
}

export default Boilerplates;
