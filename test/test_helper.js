const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');

//When trying to connect we check if it is connected by once, if not then we get error in on method.
mongoose.connection
        .once('open', () => console.log('Good to go!'))
        .on('error', () => {
            console.warn('Warning',error);
});