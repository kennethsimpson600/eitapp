import { Template } from 'meteor/templating';
import { check } from 'meteor/check';
import { Eits } from '../api/eits.js';
import './body.html';

Template.body.helpers({
  tasks() {
    return Eits.find({});
  },
});

Template.body.events({
	'submit .new-task'(event) {
	// Prevent default browser form submit
	event.preventDefault();

	// Get value from form element
	const fname = event.target.fname.value;
	const lname = event.target.lname.value;	
	const gender = event.target.gender.value;
	const dateBirth = event.target.dateBirth.value;

	// user authentication before submitting data
	if (! Meteor.userId()) {
     	 throw new Meteor.Error('not-authorized');
    }

    // form validation
    if(fname == "" || lname == "" || gender == "" || dateBirth == ""){
    	alert("Fields Required!");
        return true;
    }


	// Insert a task into the collection
	Eits.insert({
	fname: fname,
	lname: lname,
	gender: gender,
	dateBirth: dateBirth,
	createdAt: new Date() // current time
	});

	// Clear form
	event.target.fname.value = "";
	event.target.lname.value = "";
	event.target.gender.value = "";
	event.target.dateBirth.value = "";
	},

	 "click .checkbox": function () {
		  Eits.remove(this._id);
	}
});

