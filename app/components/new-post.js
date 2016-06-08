import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showPostForm() {
      this.set('addNewPost', true);
    },
    save1() {
      var userInput = {
        headline: this.get('headline'),
        content: this.get('content'),
        writter: this.get('writter'),
        date: this.get('date'),
        image: this.get('image'),
      };
      this.set('addNewPost', false);
      this.sendAction('save2', userInput);
    }
  }
});
