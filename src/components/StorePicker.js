import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();
	goToStore = event => {
		event.preventDefault();
		// get text from input
		const storeName = this.myInput.value.value
		// change page to /store/<input-value>
		// change URL w/o refresh *OR* losing memory
		this.props.history.push(`/store/${storeName}`)
	}
	render() {
		return ( 
			<form onSubmit={this.goToStore} action="" className="store-selector">
				<h2>Please Enter A Store</h2>
				<input ref={this.myInput} defaultValue={getFunName()} type="text" require placeholder="Store Name"/>
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

export default StorePicker;