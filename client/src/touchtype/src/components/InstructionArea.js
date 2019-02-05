import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lesson1Instructions from './Lesson1Instructions';
import Lesson2Instructions from './Lesson2Instructions';
import Lesson3Instructions from './Lesson3Instructions';
import Lesson4Instructions from './Lesson4Instructions';
import Lesson5Instructions from './Lesson5Instructions';
import Lesson6Instructions from './Lesson6Instructions';
import Lesson7Instructions from './Lesson7Instructions';
import Lesson8Instructions from './Lesson8Instructions';
import Lesson9Instructions from './Lesson9Instructions';
import Lesson10Instructions from './Lesson10Instructions';
import Lesson11Instructions from './Lesson11Instructions';
import Lesson12Instructions from './Lesson12Instructions';
import Lesson13Instructions from './Lesson13Instructions';
import Lesson14Instructions from './Lesson14Instructions';
import Lesson15Instructions from './Lesson15Instructions';
import Lesson16Instructions from './Lesson16Instructions';
import Lesson17Instructions from './Lesson17Instructions';
import Lesson18Instructions from './Lesson18Instructions';
import Lesson19Instructions from './Lesson19Instructions';
import Lesson20Instructions from './Lesson20Instructions';
import Lesson21Instructions from './Lesson21Instructions';

class InstructionArea extends Component {
	
	
	render() {
		
	let basics = "When beginning to type, your fingers should always rest on the third row of keys or the 'Home Row'. With the index fingers find the small raised bumps on the F and J keys. From here spread each finger of both hands outwards so the fingers are lightly resting on the Row 3 three keys as in the following chart. The left and right Thumbs are used to control the space bar. The most important rule is DON'T LOOK AT YOUR KEYBOARD. If you must look try to use the on screen keyboard to check which key is being struck. To start choose a lesson."
	
	
	
	
	
		return (
		this.props.activeLesson === 'lesson1' ?
			
			
			<Lesson1Instructions />
			:
		this.props.activeLesson === 'lesson2' ?
			
			<Lesson2Instructions />
			:
		this.props.activeLesson === 'lesson3' ?
			
			<Lesson3Instructions />
			:
			
		this.props.activeLesson === 'lesson4' ?	
			
			<Lesson4Instructions />
			
			
			:
			
		this.props.activeLesson === 'lesson5' ?	
			
			<Lesson5Instructions />
			
			
			:
			
		this.props.activeLesson === 'lesson6' ?	
			
			<Lesson6Instructions />
			:
			
		this.props.activeLesson === 'lesson7' ?	
			
			<Lesson7Instructions />
			
			
			:
			
		this.props.activeLesson === 'lesson8' ?	
			
			<Lesson8Instructions />
			
			:
			
		this.props.activeLesson === 'lesson9' ?		
			
			<Lesson9Instructions />
			
			:
			
		this.props.activeLesson === 'lesson10' ?
			
			<Lesson10Instructions />
			
			:
			
		this.props.activeLesson === 'lesson11' ?
			
			<Lesson11Instructions />
			
			:
		
		this.props.activeLesson === 'lesson12' ?
			
			<Lesson12Instructions />
			
			
			:
			
		this.props.activeLesson === 'lesson13' ?
			
			<Lesson13Instructions />
			
			:
			
		this.props.activeLesson === 'lesson14' ?
			
			<Lesson14Instructions />
			
			:
		
		this.props.activeLesson === 'lesson15' ?
			
			<Lesson15Instructions />
			
			:
			
		this.props.activeLesson === 'lesson16' ?
			
			<Lesson16Instructions />
			
			:
		
		this.props.activeLesson === 'lesson17' ?
			
			<Lesson17Instructions />
			
			:
		
		this.props.activeLesson === 'lesson18' ?
			
			<Lesson18Instructions />
			
			:
			
		this.props.activeLesson === 'lesson19' ?
			
			<Lesson19Instructions />
			
			:	
		
		this.props.activeLesson === 'lesson20' ?
			
			<Lesson20Instructions />
			
			:
			
		this.props.activeLesson === 'lesson21' ?
			
			<Lesson21Instructions />
			
			:
			
			<div className="instructionArea">
			<h6>BASICS</h6>
			<article>
			{basics}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>A</div>
			<div style={{backgroundColor: "green"}}>S</div>
			<div style={{backgroundColor: "green"}}>D</div>
			<div style={{backgroundColor: "green"}}>F</div>
			<div style={{backgroundColor: "green"}}>G</div>
			<div style={{backgroundColor: "yellow"}}>H</div>
			<div style={{backgroundColor: "yellow"}}>J</div>
			<div style={{backgroundColor: "yellow"}}>K</div>
			<div style={{backgroundColor: "yellow"}}>L</div>
			<div style={{backgroundColor: "yellow"}}>;</div>
			</div>
			<div className="col">
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
			<div style={{backgroundColor: "aliceblue"}}>L4</div>
			<div style={{backgroundColor: "aliceblue"}}>L3</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R3</div>
			<div style={{backgroundColor: "aliceblue"}}>R4</div>
			<div style={{backgroundColor: "aliceblue"}}>R5</div>
			</div>
			</div>
			</div>
		)
	}
}
	
const mapStateToProps = (state) => {
	return {
		activeLesson: state.activeLesson,
		lessonKeys: state.lessonKeys
		
	
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
	
	
	
	
	}	
	
	
	
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(InstructionArea);