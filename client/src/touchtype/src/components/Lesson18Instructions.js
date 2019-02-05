import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson18Instructions extends Component {
	
	
	render() {
		
	
	let lesson18 = 'You should already be familar with positions of all of these keys, but remember to activate the shift key to use the alternative function of a given key.';

	

	
		return (
			this.props.flagSelect1 === 'usLayout flagHighlighted' ?
			
			<div className="instructionArea">
			<h6>LESSON 18</h6>
			<article>
			{lesson18}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>!</div>
			<div style={{backgroundColor: "green"}}>@</div>
			<div style={{backgroundColor: "green"}}>#</div>
			<div style={{backgroundColor: "green"}}>$</div>
			<div style={{backgroundColor: "green"}}>%</div>
			<div style={{backgroundColor: "yellow"}}>^</div>
			<div style={{backgroundColor: "yellow"}}>&</div>
			<div style={{backgroundColor: "yellow"}}>*</div>
			<div style={{backgroundColor: "yellow"}}>(</div>
			<div style={{backgroundColor: "yellow"}}>)</div>
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

			:
			
			<div className="instructionArea">
			<h6>LESSON 18</h6>
			<article>
			{lesson18}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>!</div>
			<div style={{backgroundColor: "green"}}>"</div>
			<div style={{backgroundColor: "green"}}>£</div>
			<div style={{backgroundColor: "green"}}>$</div>
			<div style={{backgroundColor: "green"}}>%</div>
			<div style={{backgroundColor: "yellow"}}>^</div>
			<div style={{backgroundColor: "yellow"}}>&</div>
			<div style={{backgroundColor: "yellow"}}>*</div>
			<div style={{backgroundColor: "yellow"}}>(</div>
			<div style={{backgroundColor: "yellow"}}>)</div>
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
		lessonKeys: state.lessonKeys,
		flagSelect1: state.flagSelect1,
		flagSelect2: state.flagSelect2
		
	
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        sendString: (value) => {dispatch({type: 'SENDSTRING', value: value})},
	
	
	
	
	}	
	
	
	
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson18Instructions);