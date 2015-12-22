import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      people: this.store.fetch('person'),
      tasks: this.store.fetch('task')
    });
  }
});
