import React, { Component } from 'react';
import styled from 'styled-components';

import Tabs from './components/Tabs';
import Search from './components/Search';
import Pareto from './components/Pareto';
import Footer from './components/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  color: white;
  width: 100%;
  padding: 3px;
`;

const imgStyle = {
  paddingRight: '20px',
  paddingTop: '6px'
};

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
      <PageContainer>
        <Title><img style={imgStyle} src="https://discourse-user-assets.s3.dualstack.us-east-1.amazonaws.com/original/3X/e/d/ed1c70bda321aaeee9e6c20ab650ce8bc34899fa.svg" alt="Free Code Camp Logo" /> Moderator Tools</Title>
        <Tabs view={view} onViewChange={handleViewChange}/>
        <Container>
          { view === 'search' && <Search /> }
          { view === 'reports' && <Pareto /> }
        </Container>
        <Footer />
      </PageContainer>
    );
  }
}
export default App;
