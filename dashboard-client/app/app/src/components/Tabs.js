import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
`;

const Tab = styled.div`
  background: ${({ active }) => active ? 'blue' : 'white'};
  color: ${({ active }) => active ? 'white' : 'blue'};
  font-size: 18px;
  padding: 5px;
  border: 2px solid blue;
  border-left: none;

  &:hover {
    cursor: pointer;
    background: blue;
    color: white;
  }

  &:first-child {
    border-left: 2px solid blue;
  }
`;

const Tabs = ({ view, onViewChange }) => {
  return (
    <Container>
      <Tab id="tabs-search" onClick={onViewChange} active={view === 'search'}>Search</Tab>
      <Tab id="tabs-reports" onClick={onViewChange} active={view === 'reports'}>Reports</Tab>
    </Container>
  );
};

export default Tabs;
