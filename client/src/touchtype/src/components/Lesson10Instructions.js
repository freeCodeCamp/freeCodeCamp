import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson10Instructions extends Component {
	
	
	render() {
		
	
	let lesson10 = 'Now practice the whole of Row 4. If using a UK layout style of keyboard Backslash will be introduced later.';

	

	
		return (
		
			
			<div className="instructionArea">
			<h6>LESSON 10</h6>
			<article>
			{lesson10}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>Z</div>
			<div style={{backgroundColor: "green"}}>X</div>
			<div style={{backgroundColor: "green"}}>C</div>
			<div style={{backgroundColor: "green"}}>V</div>
			<div style={{backgroundColor: "green"}}>B</div>
			<div style={{backgroundColor: "yellow"}}>N</div>
			<div style={{backgroundColor: "yellow"}}>M</div>
			<div style={{backgroundColor: "yellow"}}>,</div>
			<div style={{backgroundColor: "yellow"}}>.</div>
			<div style={{backgroundColor: "yellow"}}>/</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson10Instructions);