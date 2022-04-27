import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import SuperBlock from './components/superblock/SuperBlock';
import Block from './components/block/Block';
import Editor from './components/editor/Editor';
import Tools from './components/tools/Tools';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Routes>
          <Route index element={<Landing />} />
          <Route path=':superblock' element={<SuperBlock />} />
          <Route path=':superblock/:block' element={<Block />} />
          <Route path=':superblock/:block/_tools' element={<Tools />} />
          <Route path=':superblock/:block/:challenge' element={<Editor />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
