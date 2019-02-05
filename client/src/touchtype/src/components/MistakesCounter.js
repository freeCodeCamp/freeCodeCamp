import React, { Component } from 'react';
import { connect } from 'react-redux';





class MistakesCounter extends Component {
	
	
	render() {
		
	
	
	
		
		return (
		
			
			<div className="mistakes"><label>Errors: </label>{this.props.mistakesLength}</div>
			
			
		)
	}
}
	
const mapStateToProps = (state) => {
	return {
		mistakesLength: state.mistakesLength
		
		
	
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
		sendSecsToState: (value) => {dispatch({type: 'SECONDS', value: value})},
		sendIntervalId: (value) => {dispatch({type: 'INTERVALID', value: value})}
	
	}	
	
	
	
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(MistakesCounter);