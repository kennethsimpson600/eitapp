import { Template } from 'meteor/templating';

import { Eits } from '../api/eits.js';

import './task.html';

Template.task.events({
	'click .toggle-checked'() {
	// Set the checked property to the opposite of its current value
	Eits.update(this._id, {
		$set: { checked: ! this.checked },
		});
	},
	'click .delete'() {
		Eits.remove(this._id);
	},
	'click .edit'(){
		var form = document.querySelector('.new-task');
		form.fname.value = this.fname;
		form.lname.value = this.lname;
		form.gender.value = this.gender;
		form.dateBirth.value = this.dateBirth;
		form.id.value = this._id;
	}
});