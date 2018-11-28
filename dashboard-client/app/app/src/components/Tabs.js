import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
`;

const Tab = styled.div`
  background: ${({ active, theme }) => active ? theme.primary : 'white'};
  color: ${({ active, theme }) => active ? 'white' : theme.primary};
  font-size: 18px;
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.primary};
  border-left: none;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.primary};
    color: white;
  }

  &:first-child {
    border-left: 2px solid ${({ theme }) => theme.primary};
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
