/*
* Mocha Test
* Starts with Describe function with multpile it function
*
*
* Describe function takes two arguments :
* 1.String Description of the test
* 2.Function
*
* It function takes same argument as describe block.
* In it func we write a assertion function.
* */
const assert = require('assert');
const User = require('../src/user');

describe('Creating records',()=>{
    it('saves a user', () =>{

        /*User model represents all the collection
        * joe is instace of User model
        *
        * the below line doesn't save data
        * */
        const joe = new User({name:'Joe'})

        //To save data
        joe.save();
    });
});