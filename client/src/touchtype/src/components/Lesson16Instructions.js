import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson16Instructions extends Component {
	
	
	render() {
		
	
	
	let lesson16 = 'Having learnt to type characters now it\'s time to move on to real words.';
	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 16</h6>
			<article>
			{lesson16}
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson16Instructions);