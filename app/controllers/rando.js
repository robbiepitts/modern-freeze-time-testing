import Ember from "ember";
import moment from 'moment';

export default Ember.Controller.extend({
    updated: moment().format('MM/DD/YYYY hh:mm:ss')
});
