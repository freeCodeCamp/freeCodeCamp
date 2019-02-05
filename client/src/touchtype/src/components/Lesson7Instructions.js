import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson7Instructions extends Component {
	
	
	render() {
		
	
	let lesson7 = 'Start with your fingers on the Home Row (Row 3) with your index fingers over F & J. This lesson will combine the first two rows you have learnt so far. The main goal of this lesson is to feel comfortable switching between the two rows. Study the chart below for the correct finger positions';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 7</h6>
			<article>
			{lesson7}
			</article>
			<div className="chart" style={{height:  '120px'}}>
			<div className="col">
			<div style={{backgroundColor: "green"}}>Q</div>
			<div style={{backgroundColor: "green"}}>W</div>
			<div style={{backgroundColor: "green"}}>E</div>
			<div style={{backgroundColor: "green"}}>R</div>
			<div style={{backgroundColor: "green"}}>T</div>
			<div style={{backgroundColor: "yellow"}}>Y</div>
			<div style={{backgroundColor: "yellow"}}>U</div>
			<div style={{backgroundColor: "yellow"}}>I</div>
			<div style={{backgroundColor: "yellow"}}>O</div>
			<div style={{backgroundColor: "yellow"}}>P</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson7Instructions);