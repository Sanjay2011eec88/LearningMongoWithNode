const mongoose = require('mongoose');

//Whenever we need promise use es6 implementation after declaring below line
//Default promise implemenatation
mongoose.Promise = global.Promise;

//before will run only once
//however before each will run after every test
before((done) =>{
    mongoose.connect('mongodb://localhost/users_test');

//When trying to connect we check if it is connected by once, if not then we get error in on method.
    mongoose.connection
        .once('open', () => {done();})
        .on('error', () => {
            console.warn('Warning',error);
        });

});

//Hook is a function which gets executed brfore any test inside test suite

//The below function will delete all the data before running any tests.
beforeEach((done) => {
   mongoose.connection.collections.users.drop(() => {
       //Ready to run the next test
       done();
   });
});

/*done function is used to tell mocha to stop for a while so that the process in before each function is completed
and then we execute our test case.*/