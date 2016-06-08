import DS from 'ember-data';

export default DS.Model.extend({
    headline: DS.attr(),
    content: DS.attr(),
    writter: DS.attr(),
    date: DS.attr(),
    image: DS.attr()
});
