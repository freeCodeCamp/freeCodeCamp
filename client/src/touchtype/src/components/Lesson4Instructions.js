import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson4Instructions extends Component {
	
	
	render() {
		
	
	let lesson4 = 'Start with your fingers on the Home Row (Row 3) with your index fingers over F & J, this should be a familiar position by now. If you have put some practice in on the previous lessons you will notice you are reaching for the correct keys without thinking too much. Lets now add a few keys on Row 2. Reaching up, and using fingers L2 (index), R2 (index), R3 (middle) to the key positions shown on the chart below.'

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 4</h6>
			<article>
			{lesson4}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "grey"}}>Q</div>
			<div style={{backgroundColor: "grey"}}>W</div>
			<div style={{backgroundColor: "grey"}}>E</div>
			<div style={{backgroundColor: "green"}}>R</div>
			<div style={{backgroundColor: "green"}}>T</div>
			<div style={{backgroundColor: "yellow"}}>Y</div>
			<div style={{backgroundColor: "yellow"}}>U</div>
			<div style={{backgroundColor: "yellow"}}>I</div>
			<div style={{backgroundColor: "grey"}}>O</div>
			<div style={{backgroundColor: "grey"}}>P</div>
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "grey"}}>L5</div>
			<div style={{backgroundColor: "grey"}}>L4</div>
			<div style={{backgroundColor: "grey"}}>L3</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>L2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R2</div>
			<div style={{backgroundColor: "aliceblue"}}>R3</div>
			<div style={{backgroundColor: "grey"}}>R4</div>
			<div style={{backgroundColor: "grey"}}>R5</div>
		
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson4Instructions);