import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
  word-wrap: break-word;
  margin: 10px 0;
  &:nth-child(odd) {
    background: #eee;
  }
`;

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
      const prsList = prs.reduce((html, { number, username }) => {
        const prUrl = `https://github.com/freeCodeCamp/freeCodeCamp/pull/${number}`;
        return html += `
          <a href=${prUrl} rel="noopener noreferrer" target="_blank">#${number} <span>${username}</span></a>, `;
      }, '');
      return (
        <Result key={filename}>
          {filename}<br />
          <details>
            <summary># of PRs: {count}</summary>
            <div dangerouslySetInnerHTML={{__html: prsList}} />
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
