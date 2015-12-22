import {Model, attr, hasMany} from 'fireplace';

export default Model.extend({
  title: attr(),
  assignees: hasMany('person', {embedded: false}),
});
