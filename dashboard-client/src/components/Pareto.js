import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
  word-wrap: break-word;
  margin: 10px 0;
  &:nth-child(odd) {
    background: #eee;
  }
  padding: 3px;
`;

const List = styled.div`
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.a`
  flex-basis: 33%;
  overflow: hidden;
`;

const detailsStyle = { padding: '3px' };

const filenameTitle = { fontWeight: '600' };

class Pareto extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(`https://pr-relations.glitch.me/pareto`)
    .then((response) => response.json())
    .then(({ ok, pareto }) => {
      if (ok) {
        if (!pareto.length) {
          pareto.push({ filename: 'Nothing to show in Pareto Report', count: 0, prs: [] });
        }
        this.setState((prevState) => ({ data: pareto }));
      }
    })
    .catch(() => {
      const pareto = [{ filename: 'Nothing to show in Pareto Report', count: 0, prs: [] }];
      this.setState((prevState) => ({ data: pareto }));
    });
  }

  render() {
    const { data } = this.state;
    const elements = data.map((entry) => {
      const { filename, count, prs } = entry;
      const prsList = prs.map(({ number, username }) => {
        const prUrl = `https://github.com/freeCodeCamp/freeCodeCamp/pull/${number}`;
        return (
          <ListItem href={prUrl} rel="noopener noreferrer" target="_blank">
            #{number} <span>({username})</span>
          </ListItem>
        )
      });
      return (
        <Result key={filename}>
          <span style={filenameTitle}>{filename}</span><br />
          <details style={detailsStyle}>
            <summary># of PRs: {count}</summary>
            <List>{prsList}</List>
          </details>
        </Result>
      );
    });

    return (
      <div>
        {data.length ? elements : 'Report Loading...'}
      </div>
    );
  }
}

export default Pareto;
