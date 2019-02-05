import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson5Instructions extends Component {
	
	
	render() {
		
	
	let lesson5 = 'As always start with your fingers on the Home Row (Row 3) with your index fingers over F & J. Continuing with the rest of Row 2 on the keyboard but this time using the outer fingers L5 (pinky), L4 (ring), L3 (middle), R4 (ring), R5 (pinky).';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 5</h6>
			<article>
			{lesson5}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>Q</div>
			<div style={{backgroundColor: "green"}}>W</div>
			<div style={{backgroundColor: "green"}}>E</div>
			<div style={{backgroundColor: "grey"}}>R</div>
			<div style={{backgroundColor: "grey"}}>T</div>
			<div style={{backgroundColor: "grey"}}>Y</div>
			<div style={{backgroundColor: "grey"}}>U</div>
			<div style={{backgroundColor: "grey"}}>I</div>
			<div style={{backgroundColor: "yellow"}}>O</div>
			<div style={{backgroundColor: "yellow"}}>P</div>
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
			<div style={{backgroundColor: "aliceblue"}}>L4</div>
			<div style={{backgroundColor: "aliceblue"}}>L3</div>
			<div style={{backgroundColor: "grey"}}>L2</div>
			<div style={{backgroundColor: "grey"}}>L2</div>
			<div style={{backgroundColor: "grey"}}>R2</div>
			<div style={{backgroundColor: "grey"}}>R2</div>
			<div style={{backgroundColor: "grey"}}>R3</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson5Instructions);