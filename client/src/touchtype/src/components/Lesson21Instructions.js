import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson21Instructions extends Component {
	
	
	render() {
		
	
	let lesson21 = 'If you have made it this far you should have a thorough grasp on the placement of all the main keys on the keyboard.';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 21</h6>
			<article>
			{lesson21}
			</article>
			
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson21Instructions);