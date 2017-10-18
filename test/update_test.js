const assert = require('assert');
const User = require('../src/user');

describe('Updating a records', () => {
   let joe;

   beforeEach( (done) => {
       joe = new User({name:'Joe',postCount:0});
       joe.save()
           .then(() => done());
   });

   function assertName(operation, done) {
       operation
           .then( () => User.find({}))
           .then((users) => {
               assert(users.length === 1);
               assert(users[0].name === 'Alex');
               done()
           })

   }

   it('instance type using set n save', (done) => {
        //set is used change the attribute in instance method
       //set will change the data in nodejs memory it will change in db
       //To change in db we need to use save.
        joe.set('name','Alex');
        assertName(joe.save(), done);
   });

   it('A model instance can update', (done) => {
        assertName(joe.update({name:'Alex'}),done);
   });

   it('A model class can update',(done) => {
       assertName(
           User.update({name:'Joe'},{name:'Alex'}),
           done
       );
   });

   it('A model class can update one record',(done) => {
       //Find the first record and update
        assertName(
            User.findOneAndUpdate({name:'Joe'},{name:'Alex'}),
            done
        );
   });

   it('A model class can find a record with an ID and update',(done) => {
       //Finds by Id and updates takes 2 args 1.ID 2.what to be updated
        assertName(
            User.findByIdAndUpdate(joe._id,{name:'Alex'}),
            done
        );
   });

   it('A user can have their postcount incremented by 1', (done) => {
       //Using mongoose operators for performing inc operation and updating the record
        User.update({name: 'Joe'}, {$inc: {postCount: 1}})
            .then(() => User.findOne({ name:'Joe' }))
            .then((user) => {
                assert(user.postCount === 1 );
                done();
            });
   });
});