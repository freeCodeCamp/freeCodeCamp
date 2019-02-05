import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import TextArea from './components/TextArea';
import LessonArea from './components/LessonArea';
import ControlPanel from './components/ControlPanel';
import TimeFrame from './components/TimeFrame';
import InstructionArea from './components/InstructionArea';
import FinishPanel from './components/FinishPanel';
import KeyboardSelect from './components/KeyboardSelect';
class App extends Component {
  render() {
    return (
   
      <div className="App">
        <TextArea />
		<ControlPanel />
		<Keyboard />
		<LessonArea />
		<TimeFrame />
		<InstructionArea/>
		<FinishPanel />
		<KeyboardSelect />
      </div>
     
    );
  }
}

export default App;
