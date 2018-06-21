import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDRYZpdD-8BheO5HITIaGkMX0LUOIlZKxw",
	authDomain: "catchoftheday-16fa0.firebaseapp.com",
	databaseURL: "https://catchoftheday-16fa0.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
