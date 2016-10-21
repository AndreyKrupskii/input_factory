import React, { Component } from 'react';


export default class FieldContainer extends Component {

	constructor(props) 	{
		super(props);
		this.state = {
			_id: this.props.fieldData._id,
			parentGroup: this.props.fieldData.parentGroup,
			type: this.props.fieldData.type,
			name: this.props.fieldData.name,
			label: this.props.fieldData.label,
			value: this.props.fieldData.value,
			plaseholder: this.props.fieldData.plaseholder,
			width: this.props.fieldData.width
		}
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		this.setState({
			_id: nextProps.fieldData._id,
			parentGroup: nextProps.fieldData.parentGroup,
			type: nextProps.fieldData.type,
			name: nextProps.fieldData.name,
			label: nextProps.fieldData.label,
			value: nextProps.fieldData.value,
			plaseholder: nextProps.fieldData.plaseholder,
			width: nextProps.fieldData.width
		});
	}
	
	onInputChange(e){
		this.setState({
			value: e.target.value
		})
	}
	render(){
		const SpecificClass = (this.state.width) ? this.state.width : 'sixteen';
		return(
			<div className={'wide field ' + SpecificClass}>
				<label>{this.state.label}</label>
				<input 
					type={this.state.type}
					name={this.state.name} 
					value={this.state.value}
					onChange={(e)=> this.onInputChange(e)}
					placeholder={this.state.plaseholder}/>
			</div>
		)
	}
}