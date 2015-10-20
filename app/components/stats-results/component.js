import Ember from 'ember';

export default Ember.Component.extend({
	// send actions up to the router, making it load new data and re-render this component
	actions: {
		pickedSeason : function (selectedSeason) {
			this.sendAction('updateResults', 'season', selectedSeason);
		},
		pickedRound : function (selectedRound) {
			this.sendAction('updateResults', 'round', selectedRound);
		}
	}
});