import fetch from 'isomorphic-fetch';

import { 
	REQUEST_FORM_DATA, 
	REQUEST_FORM_DATA_SUCSESS, 
	REQUEST_FORM_DATA_FAIL 
} from './../constants/formData.constants';

export function requestFormData() {
	return (dispatch) => {
		dispatch({
			type: REQUEST_FORM_DATA
		})

		const config = getConfig('some data');
		fetch('/api/form', config) 
			.then(response => {
				return (response.status !== 200) ? 'ERROR' : response.json(); 
			})
			.then(data =>{
				if(data == 'ERROR'){
					dispatch({
						type: REQUEST_FORM_DATA_FAIL
					})
				} else{
					dispatch({
						type: REQUEST_FORM_DATA_SUCSESS,
						data
					})
				}
			})
			.catch((err) => {
				if(err){
					dispatch({
						type: REQUEST_FORM_DATA_FAIL
					})
				}
			})
	}
}

function getConfig(data){
	return {
		method: 'POST',
		headers: { 'Content-Type':'application/json' },
		body: JSON.stringify({data: data})
	}
}
