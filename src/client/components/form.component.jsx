import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FieldContainer from './../containers/field.container';
import * as formDataActions from './../actions/formData.actions';

class FormComponent extends Component {

	// componentWillMount() {
	// 	const { requestFormData } = this.props.formDataActions;
	// 	requestFormData();
	// }

	getFields(){
		const formData = this.props.formData;
		const fields = [];

		for(let field in formData){
			if( !formData[field].inlineGroup ){
				const fieldData = formData[field]
				fields.push(
					<div key={'form_' + field} className='field'>
					<FieldContainer fieldData={fieldData} />
					</div>
					)
			} else{
				const fieldData = formData[field];
				const subFields = [];
				for (let subField in fieldData.data){
					subFields.push(
						<FieldContainer key={'form_sub_' + subField}  fieldData={fieldData.data[subField]} />
						)
				}
				fields.push(
					<div key={'form_' + field} className='fields'>
					{subFields}
					</div>
					)
			}
		}
		return fields;
	}
	render(){
		const { requestFormData } = this.props.formDataActions;
		let fields = this.getFields();
		return(
			<form className='ui form app-form'>
				<h4 className='ui dividing header'>Some Information</h4>
				{fields}
				<div onClick={requestFormData} className='ui button'>Get form data</div>
			</form>
		)
	}
}

function mapStateToProps(state){
	return{
		formData: state.formData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		formDataActions: bindActionCreators(formDataActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)