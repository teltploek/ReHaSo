import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		chosenSeason : function (selectedSeason) {
			this.set('selectedSeason', selectedSeason);

			this.sendAction('pickedSeason', selectedSeason);
		}
	}
});