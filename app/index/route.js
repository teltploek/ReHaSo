import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			money: this.store.findAll('money')
		});
	},
	actions: {
		moneySeasonPicked: function (selectedSeason) {
			debugger;
		},
		resultsSeasonPicked: function (selectedSeason) {
			debugger;
		}
	}
});