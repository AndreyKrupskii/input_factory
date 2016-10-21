import renderHTML from './../libs/renderHTML';
import express from 'express';
import waterfall from 'async/waterfall';
import clientFact from 'node-rest-client';
import logger from './../libs/log.js';


const log = logger(module);



const router = express.Router();

router.get('/', function(req, res, next) {
	// const component = require('./../libs/getComponentHTML');
	// res.end(renderHTML(component.componentHTML, component.preloadedState));
	res.end(renderHTML());
});

router.post('/api/form', function(req,res,next){
	waterfall([
		function(callback){
			// let client = clientFact.Client;
			// let client = new Client();
			// client.get("http://remote.com/rest/json/post", function (data, response) {
			// 	console.log(data);
			// 	console.log(response);
			// });
			const actualData = {
				personData: {
					inlineGroup: true,
					data: {
						name: {
							_id: '',
							parentGroup: 'personData',
							type: 'text',
							name: 'name',
							label: 'Name',
							value: 'My new name!!!',
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
				// adress:{
				// 	inlineGroup: false,
				// 	_id: '',
				// 	type: 'text',
				// 	name: 'street',
				// 	label: 'Street',
				// 	value: '',
				// 	plaseholder: 'Where are you live?'
				// }
			};
			callback(null, actualData)
		}
		], function(err, apiResponse){
			if(err){
				next(err);
			}
			res.json(apiResponse);
		});
});

module.exports = router;


