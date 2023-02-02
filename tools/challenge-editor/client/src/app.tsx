import * as React from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Landing from './components/landing/landing';
import SuperBlock from './components/superblock/super-block';
import Block from './components/block/block';
import Editor from './components/editor/editor';
import Tools from './components/tools/tools';

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
