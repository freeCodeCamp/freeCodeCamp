import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson15Instructions extends Component {
	
	
	render() {
		
	
	
	let lesson15 = 'Now you can start adding in capital letters. To do this operate the left shift key with the fifth finger of the left hand(pinky) and the right shift key with the fifth finger of the right hand(pinky).';
	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 15</h6>
			<article>
			{lesson15}
			</article>
			<div className="chart">
			<div className="col">
			
			<div style={{backgroundColor: "green"}}>ShiftLeft</div>
			
			<div style={{backgroundColor: "yellow"}}>ShiftRight</div>
			
			</div>
			<div className="col">
		
			
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
		
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson15Instructions);