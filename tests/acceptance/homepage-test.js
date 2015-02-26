import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Homepage', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

// depending on version, you may need to add assert on line 6 and do assert.equal
test('visiting /', function() {
  visit('/');

  andThen(function() {
    equal(currentPath(), 'index');
    // .text goes to dom, finds h1, gets stuff - spacing matters in template, to .trim()
    equal(find('header > h1').text().trim(), 'My Awesome App');

    click('a:contains("Users")');

    fillIn('input.first-name', 'Bob');
    fillIn('input.last-name', 'Smith');
    click('button:contains("Create User")');

    andThen(function() {
      equal(find('.user').text().trim(), 'Smith, Bob');
    });
  });
});
