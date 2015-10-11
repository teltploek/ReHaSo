import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		chosenSeason : function (chosenSeason) {
			this.set('chosenSeason', chosenSeason);
		}
	}
});
