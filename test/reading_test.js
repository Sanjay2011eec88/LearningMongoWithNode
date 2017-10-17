const assert = require('assert');
const User = require('../src/user');

describe('Reading user out of database',() => {
    let joe;
    beforeEach((done) =>{
        joe = new User({name:'Joe'});
        joe.save()
            .then(() => done());
    });

    it('finds all user with name of joe',(done) =>{
        User.find({name:'Joe'})
            .then((users) => {
                //We use to String method to grab the id which is object
                assert(users[0]._id.toString() === joe._id.toString());
                done();
            });
    });

    it('find a user with a particular id', (done)=> {
        User.findOne({_id:joe._id})
            .then((user) => {
                assert(user.name === 'Joe');
                done();
            })
    })
});




/*
Query methods:
find(criteria)=Find all the users that match the given criteria. Returns an array
findOne(criteria)=Find the first user that matches the criteria. Returns a single record
 */