import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		chosenRound : function (selectedRound) {
			var roundName = $(event.target).data('name');


			this.set('selectedRound', selectedRound);
			this.set('selectedRoundName', roundName);

			this.sendAction('pickedRound', selectedRound);
		}
	}
});
