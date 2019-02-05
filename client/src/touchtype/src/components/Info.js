import React, { Component } from 'react';
import { connect } from 'react-redux';


class Info extends Component {
	
	
	render() {
		
		
		return (
			
		<div className="info">test</div>
		)
	}
	
	
}





const mapStateToProps = (state) => {
	return {
		currentKey: state.currentKey,
		testString: state.testString,
		usedString: state.usedString,
		needText: state.fetchText,
		letterCorrect: state.letterCorrect,
		activeLesson: state.activeLesson,
		
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
		
	
	}	
	
	
	
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);