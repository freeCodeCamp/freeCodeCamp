import React, { Component } from 'react';
import { connect } from 'react-redux';





class WpmCounter extends Component {
	
	
	render() {
		
	let minutesElapsed = this.props.timevalue.toString().substring(0,2);
	let secondsElapsed = this.props.timevalue.toString().substring(3,5);
	let totalTime = ~~minutesElapsed + (~~secondsElapsed / 60);
	
		if(this.props.testString.length === 0) {
			
			this.props.sendWpm((this.props.usedString.length / 5) / totalTime );
		}
		return (
		
			
		
		
			
			
			<div className="wpm"><label>Wpm: </label>{Math.round((this.props.usedString.length / 5) / totalTime ) === Infinity  ? 0 : Math.round((this.props.usedString.length / 5) / totalTime ) > 0 ? Math.round((this.props.usedString.length / 5) / totalTime ) : 0}</div>
	         
		
			
		)
	}
}
	
const mapStateToProps = (state) => {
	return {
		mistakesLength: state.mistakesLength,
		usedString: state.usedString,
		timevalue: state.timevalue,
		testString: state.testString,
		stringEnd: state.stringEnd,
		wpm: state.wpm
		
	
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
		sendWpm: (value) => {dispatch({type: 'SENDWPM', value: value})}
	
	}	
	
	
	
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(WpmCounter);