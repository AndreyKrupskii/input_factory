import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'

import FormComponent from './form.component';

import './App.component.scss';

class	App	extends	Component	{		
	render(){
		return(	
			<section className='App ui container'>
				<header className='app-header'>
					<h1>Here is form example!</h1>
				</header>	
				<section className='form-wrap'>
					<FormComponent />
				</section>
			</section>		
		) 
	} 
}

// function mapStateToProps(state){
// 	return{

// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {

// 	}
// }


// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;