import { REQUEST_FORM_DATA, REQUEST_FORM_DATA_SUCSESS } from './../constants/formData.constants';

const initialState = {
		personData: {
			inlineGroup: true,
			data: {
				name: {
					_id: '',
					parentGroup: 'personData',
					type: 'text',
					name: 'name',
					label: 'Name',
					value: '',
					plaseholder: 'Your name',
					width: 'eight'
				},
				surname: {
					_id: '',
					parentGroup: 'personData',
					type: 'text',
					name: 'surname',
					label: 'Surname',
					value: '',
					plaseholder: 'Your surname',
					width: 'eight'
				}
			} 
		},
		adress:{
			inlineGroup: false,
			_id: '',
			type: 'text',
			name: 'street',
			label: 'Street',
			value: '',
			plaseholder: 'Where are you live?'
		}
}

export default function formData(state = initialState, action){
	switch (action.type){
		case REQUEST_FORM_DATA:
			return state
		case REQUEST_FORM_DATA_SUCSESS:
			return {...action.data}
		default: 
			return state
	}
}