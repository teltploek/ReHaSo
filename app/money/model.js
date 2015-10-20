import DS from 'ember-data';

export default DS.Model.extend({
	member: DS.belongsTo('member'),
	clubmoney: DS.attr('number'),
	prizemoney: DS.attr('number'),
	reservedmoney: DS.attr('number')
});
