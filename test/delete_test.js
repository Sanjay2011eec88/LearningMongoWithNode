const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user',() => {
    let joe;

    beforeEach((done) => {

        joe = new User({name:'Joe'});
        joe.save()
            .then(() => done());
    });

    it('model instance remove', (done) => {
        //removing instance of the method
        joe.remove()
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class model remove', (done) => {
        //removing a bunch of records with same criteria
        User.remove({ name:'Joe' })
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class model findOne and remove', (done) => {
        //finding one record and removing it
        //To delete a very specific property e.g. a unique mail
        User.findOneAndRemove({ name:'Joe' })
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class model find by Id and remove', (done) => {
        //finding one record using instance id and removing it
        User.findByIdAndRemove(joe._id)
            .then(() => User.findOne({ name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });
});