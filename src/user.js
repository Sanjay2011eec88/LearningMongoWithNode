const mongoose = require(mongoose);
const schema = mongoose.Schema;

const UserSchema = new schema({
   name: String
});

/*1.If there is no collection named user mongoose will create the collection
2.We pass our schema so that when we save data it should follow the schema that we created for that collection
3.Then we return result to User which represents the entire collection of data.*/
const User = mongoose.model('user',UserSchema);

//To use our schema we export our User class or model so that we can access our schema anywhere in our project.
module.exports = User;