import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson17Instructions extends Component {
	
	
	render() {
		
	
	
	let lesson17 = 'Symbols can vary from keyboard to keyboard, so this lesson will vary depending on which layout you are using. As always start with both hands on the home row with index fingers over the F and J keys. Remember to operate left Shift and right Shift with the respective Pinky fingers.'
	

	
		return (
			this.props.flagSelect1 === 'usLayout flagHighlighted' ?
			
			<div className="instructionArea">
			<h6>LESSON 17</h6>
			<article>
			{lesson17}
			</article>
			<div className="chart">
			<div className="col">
			
			<div style={{backgroundColor: "yellow"}}>{"<"}</div>
			<div style={{backgroundColor: "yellow"}}>{">"}</div>
			<div style={{backgroundColor: "yellow"}}>{"[ ] { } ' : ? \\"}</div>
			
			
			</div>
			
			<div className="col">
			<div style={{backgroundColor: "aliceblue"}}>R3</div>
			<div style={{backgroundColor: "aliceblue"}}>R4</div>
			<div style={{backgroundColor: "aliceblue"}}>R5</div>
			</div>
			</div>
			</div>
			
			:
			
			<div className="instructionArea">
			<h6>LESSON 17</h6>
			<article>
			{lesson17}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>{"\\"}</div>
			<div style={{backgroundColor: "yellow"}}>{"<"}</div>
			<div style={{backgroundColor: "yellow"}}>{">"}</div>
			<div style={{backgroundColor: "yellow"}}>{"[ ] { } ' : ?"}</div>
			
			
			</div>
			
			<div className="col">
			<div style={{backgroundColor: "aliceblue"}}>L5</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson17Instructions);