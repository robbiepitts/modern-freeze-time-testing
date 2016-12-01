import Ember from 'ember';
import { module, test } from 'qunit';
import timemachine from 'vendor/timemachine';
import startApp from 'testing-time/tests/helpers/start-app';

var application;

module('Acceptance: Freezz', {
  beforeEach: function() {
    application = startApp();
    timemachine.config({
        dateString: 'December 25, 1991 13:12:59'
    });
  },

  afterEach: function() {
    timemachine.reset();
    Ember.run(application, 'destroy');
  }
});

test('should freeze the time as shown above', function(assert) {
    visit('/');
    andThen(function() {
        assert.equal(currentURL(), '/');
        var first = find(".first-render");
        assert.equal(first.text().trim(), "12/25/1991 01:12:59");
    });
    click('.go');
    andThen(function() {
        assert.equal(currentURL(), '/rando');
        var updated = find(".updated-render");
        assert.equal(updated.text().trim(), "12/25/1991 01:12:59");
    });
});
