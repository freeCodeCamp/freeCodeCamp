import React, { Component } from 'react';
import { connect } from 'react-redux';



class Lesson19Instructions extends Component {
	
	
	render() {
		
	
	let lesson19 = 'These Symbols are common in programming. Take your time with this lesson and remember these symbols may be slightly different depending which layout your keyboard has.';

	

	
		return (
			this.props.flagSelect1 === 'usLayout flagHighlighted' ?
			
			<div className="instructionArea">
			<h6>LESSON 19</h6>
			<article>
			{lesson19}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>{'` ~ '}</div>
			<div style={{backgroundColor: "yellow"}}>{'" _ - | + ='}</div>
			
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "aliceblue"}}>L5</div>

			<div style={{backgroundColor: "aliceblue"}}>R5</div>
			</div>
			</div>
			</div>
			
			:
			
			<div className="instructionArea">
			<h6>LESSON 19</h6>
			<article>
			{lesson19}
			</article>
			<div className="chart">
			<div className="col">
			<div style={{backgroundColor: "green"}}>{'` ¬ |'}</div>
			<div style={{backgroundColor: "yellow"}}>{'# @ ~ _ - + ='}</div>
			
			</div>
			<div className="col">
		
			<div style={{backgroundColor: "aliceblue"}}>L5</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Lesson19Instructions);