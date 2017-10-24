const mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   name: {
      type:String,
       //validation that name should be longer than 2 character
      validate: {
         validator: (name) => name.length > 2,
         message: 'Name must be longer than 2 characters.'
      },
      //to make something required
      required:[true,'Name is required.']
   },
   //postCount: Number,
    //Nested Post Schema list
    //We are creating a schema in post file and exporting it and using that schema in user Schema to fill the post field
   posts:[PostSchema],
   likes: Number
});

//To declare a virtual property we define like below
UserSchema.virtual('postCount').get(function () {
    return this.posts.length;
});
/*1.If there is no collection named user mongoose will create the collection
2.We pass our schema so that when we save data it should follow the schema that we created for that collection
3.Then we return result to User which represents the entire collection of data.*/
const User = mongoose.model('user',UserSchema);

//To use our schema we export our User class or model so that we can access our schema anywhere in our project.
module.exports = User;