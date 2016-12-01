import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        go: function() {
            var self = this;
            Ember.run.later((function() {
                self.transitionTo("rando");
            }), 2000);
        }
    }
});
