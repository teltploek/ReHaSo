import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		pickedSeason : function (selectedSeason) {
			// send action up to the router, making it load new data and re-render this component
			this.sendAction('moneySeasonPicked', selectedSeason);
		}
	},
	didInsertElement: function () {
		this._super();
		
		var chartEl = this.$('.chart-results', this.element);

		var data = this.data.store.peekAll('money');
		var membernames = this.data.mapBy('membername');
		var prizeMoney = this.data.mapBy('prizemoney');
		var clubMoney = this.data.mapBy('clubmoney');
		var reservedMoney = this.data.mapBy('reservedmoney');

		new Chartist.Bar(chartEl[0], {
		  labels: membernames,
		  series: [
		    { className: 'bar-money-club', value : clubMoney },
		    { className: 'bar-money-prize', value : prizeMoney },
		    { className: 'bar-money-reserved', value : reservedMoney }
		  ]
		}, {
		  stackBars: true,
		  axisY: {
		    labelInterpolationFnc: function(value) {
		    	return value;
		      return (value / 1000) + 'k';
		    }
		  }
		}).on('draw', function(data) {
		  if(data.type === 'bar') {
		    data.element.attr({
		      style: 'stroke-width: 30px'
		    });
		  }
		});
	}
});
