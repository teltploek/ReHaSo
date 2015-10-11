import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function () {
		this._super();
		
		var chartEl = this.$('.chart-results', this.element);

		var data = this.data.store.peekAll('money');
		var membernames = this.data.mapProperty('membername');
		var prizeMoney = this.data.mapProperty('prizemoney');
		var clubMoney = this.data.mapProperty('clubmoney');
		var reservedMoney = this.data.mapProperty('reservedmoney');

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
