import React, { Component } from 'react';
import styled from 'styled-components';

import Tabs from './components/Tabs';
import Search from './components/Search';
import Pareto from './components/Pareto';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  width: 90vw;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 #777;
`;

class App extends Component {
  state = {
    view: 'search'
  };

  handleViewChange = ( { target: { id } }) => {
    const view = id.replace('tabs-', '');
    this.setState((prevState) => ({ ...this.clearObj, view }));
  }

  render() {
    const { handleViewChange, state: { view } } = this;
    return (
      <>
        <Tabs view={view} onViewChange={handleViewChange}/>
        <Container>
          { view === 'search' && <Search /> }
          { view === 'reports' && <Pareto /> }
        </Container>
      </>
    );
  }
}
export default App;
