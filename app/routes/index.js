import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll("post");
  },
  actions: {
    save3(userInput) {
      var newPost = this.store.createRecord('post', userInput);
      newPost.save();
      this.transitionTo('index');
    },

    destroyPost(post){
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
