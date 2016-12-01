import Ember from "ember";
import moment from 'moment';

export default Ember.Controller.extend({
    first: moment().format('MM/DD/YYYY hh:mm:ss')
});
