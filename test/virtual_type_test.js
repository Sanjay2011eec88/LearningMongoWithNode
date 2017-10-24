//A virtual type is any field that does not persisted over to mongodb
//Virtual type or field or property refers to any type of property that does not actually gets saved inside our mongodb
//We can use virtual types when a property is derivative of one or more property

const assert = require('assert');
const User =  require('../src/user');

describe('Virtual types', () => {
    it('postCount returns number of posts', (done)=>{
        const joe = new User({
            name:'Joe',
            posts:[{title:'PostTitle'}]
        });

        joe.save()
            .then(() => {User.findOne({name:'Joe'})})
            .then((user) => {
                assert(joe.postCount === 1);
                done();
            });
    });
});