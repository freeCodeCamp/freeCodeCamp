import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row5 extends Component {
	

	
	
	render() {
		
		return (
			<div className="row5">
			<div className="doubleKey" id="ControlLeft">
			<br/>
			ctrl 
			</div>
			<div className="shiftHalf" id="OSLeft">
			<br/>
			  win<br/>
			</div>
			<div className="shiftHalf" id="AltLeft">
			<br/>
			 alt<br/>
			</div>
			<div className="spaceKey" id="Space" val=" " secval=" ">
			<br/>
			<br/>
			</div>
           
			<div className="shiftHalf" id="AltRight">
			<br/>
			 alt<br/>
			</div>
        
			<div className="shiftHalf" id="OSRight">
			<br/>
			 win<br/>
			</div>
			<div className="shiftHalf" id="ContextMenu">
			<br/>
			 &hArr;<br/>
			</div>
			<div className="doubleKey" id="ControlRight">
			<br/>
			ctrl 
			</div>
		
			
			
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {

	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
       classChange: (id) => {dispatch({type: 'PRESSED', id: id})},
		classChangeOff: (id) => {dispatch({type: 'RELEASED', id: id})},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Row5);