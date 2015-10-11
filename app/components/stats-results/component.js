import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		pickedSeason : function (selectedSeason) {
			// send action up to the router, making it load new data and re-render this component
			this.sendAction('resultsSeasonPicked', selectedSeason);
		}
	}
});
