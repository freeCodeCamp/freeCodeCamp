import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson6Instructions extends Component {
	
	
	render() {
		
	
	let lesson6 = 'As always start with your fingers on the Home Row (Row 3) with your index fingers over F & J. Now for all of Row 2 at once apart from a few symbols. Row 2 is a very important row to learn as it contains some of the most commonly used letters in the English language, also home to the majority of the vowels on the keyboard, so take your time and remember accuracy first and the speed will come.';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 6</h6>
			<article>
			{lesson6}
			</article>
			<div className="chart">
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson6Instructions);