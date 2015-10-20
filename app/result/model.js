import DS from 'ember-data';

export default DS.Model.extend({
  member: DS.belongsTo('member'),
	appearances: DS.attr('number'), 
	points: DS.attr('number'),
	pointsPerGame: DS.attr('number'),
	knockouts: DS.attr('number'),
	knockoutsPerGame: DS.attr('number'),
	money: DS.attr('number'),
	moneyPerGame: DS.attr('number'),
	inTheMoney: DS.attr('number'),
	inTheMoneyPercent: DS.attr('number'),
	firstOneOut: DS.attr('number')
});
