import DS from 'ember-data';

var User = DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string')
});

User.reopenClass({
  FIXTURES: []
});

export default User;
