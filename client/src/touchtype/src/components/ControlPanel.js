import React, { Component } from 'react';
import { connect } from 'react-redux';

class ControlPanel extends Component {
	
	
	handleButtonClick = () => {
			this.props.lessonsMenu();
		
		}
	
	
	handleButtonReset = () => {
			this.props.startLesson(this.props.activeLesson, this.props.lessonKeys, 1);
			this.props.sendPanelOff();
		}
	
	render() {
	
	
		
		return (
		
		<div className="controlPanel">
			
		<button id="LessonButton" className="lessonButton" onMouseDown={this.handleButtonClick}>Lessons</button>
		<button id="ResetButton" className="lessonButton" onMouseDown={this.handleButtonReset}>Restart</button>	
			
		</div>
		
		)
	}
}

const mapStateToProps = (state) => {
	return {
		lessonsActive: state.displayLessonsMenu,
		activeLesson: state.activeLesson,
		lessonKeys: state.lessonKeys
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        classChange: (id) => {dispatch({type: 'PRESSED', id: id})},
		lessonsMenu: () => {dispatch({type: 'LESSONSMENU'})},
		startLesson: (lessonNumber,keys, code) => {dispatch({type: 'STARTLESSON', lessonNumber: lessonNumber, keys: keys, code: code})},
		sendPanelOff: () => {dispatch({type: 'PANELOFF'})}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);