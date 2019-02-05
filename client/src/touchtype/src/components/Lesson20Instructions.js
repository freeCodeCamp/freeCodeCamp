import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson20Instructions extends Component {
	
	
	render() {
		
	
	let lesson20 = 'This lesson will use all symbols across the keyboard and will really test your muscle memory. Try to remember the times when a key requires the shift key for a certain symbol.';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 20</h6>
			<article>
			{lesson20}
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson20Instructions);