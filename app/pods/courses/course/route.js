/**
 * Created by abhishek on 27/06/17.
 */
'use strict';

import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('course', params.id, {reload: true})
  }
});
