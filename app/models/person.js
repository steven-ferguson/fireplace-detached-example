import {Model, attr, hasMany} from 'fireplace';
export default Model.extend({
  name: attr(),
  tasks: hasMany({detached: true, path: "tasks_by_person/"})
});
