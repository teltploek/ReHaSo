import Ember from 'ember';

export default Ember.Route.extend({
	resultsState: {
	},
	setResultsState: function (key, val) {
		if (val !== '') {
			this.resultsState[key] = val;
		}else{
			if (typeof this.resultsState[key] !== 'undefined') {
				delete this.resultsState[key];
			}
		}
	},
	model: function() {
		return Ember.RSVP.hash({
			member: this.store.findAll('member'), 
			money: 	this.store.findAll('money'),
			results: this.store.findAll('result')
		});
	},
	actions: {
		moneySeasonPicked: function (selectedSeason) {
			this.store.findAll('money', { season: selectedSeason });
		},
		updateResults: function (key, val) {
			this.setResultsState(key, val);
			console.table(this.resultsState);
			results: this.store.findAll('result', this.resultsState);
		}
	}
});

// http://stackoverflow.com/questions/21639812/filter-multiple-models-by-attribute-in-ember-js-route