import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson2Instructions extends Component {
	
	
	render() {
		
	
	let lesson2 = 'Start with your fingers on the Home Row, with the index finger of your left hand on F and the index finger of your right hand on J, the middle fingers on D & K, the ring fingers on S & L and pinky fingers on A & semi colon (;). Sometimes it can be more difficult to type individual letters rather than proper words, so for now just concentrate on accuracy. You can move on when you feel you have reached a level of consistency.'

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 2</h6>
			<article>
			{lesson2}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>A</div>
			<div style={{backgroundColor: "green"}}>S</div>
			<div style={{backgroundColor: "green"}}>D</div>
			<div style={{backgroundColor: "grey"}}>F</div>
			<div style={{backgroundColor: "grey"}}>G</div>
			<div style={{backgroundColor: "grey"}}>H</div>
			<div style={{backgroundColor: "grey"}}>J</div>
			<div style={{backgroundColor: "yellow"}}>K</div>
			<div style={{backgroundColor: "yellow"}}>L</div>
			<div style={{backgroundColor: "yellow"}}>;</div>
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
			<div style={{backgroundColor: "aliceblue"}}>L4</div>
			<div style={{backgroundColor: "aliceblue"}}>L3</div>
			<div style={{backgroundColor: "grey"}}>L2</div>
			<div style={{backgroundColor: "grey"}}>L2</div>
			<div style={{backgroundColor: "grey"}}>R2</div>
			<div style={{backgroundColor: "grey"}}>R2</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson2Instructions);