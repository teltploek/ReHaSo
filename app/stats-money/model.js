import DS from 'ember-data';

export default DS.Model.extend({
	memberid: DS.attr('number'),
	membername: DS.attr('string'),
	clubmoney: DS.attr('number'),
	prizemoney: DS.attr('number'),
	reservedmoney: DS.attr('number')
});
