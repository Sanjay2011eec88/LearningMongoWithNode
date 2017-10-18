const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
   it('requires a user name', () => {
      const user = new User({ name: undefined });
      /*
      * validateSync gives result in the same line
      * While Validate is used for async function*/

      //Since we are going for single validation we are using validateSync
      const validationResult = user.validateSync();
      // console.log(validationResult);
      const { message } = validationResult.errors.name;

      assert(message === 'Name is required.');
   });

    it('require a user\'s name longer than 2 characters', () => {
        const user = new User({ name: 'Al' });

        const validationResult = user.validateSync();
        // console.log(validationResult);
        const { message } = validationResult.errors.name;

        assert(message === 'Name must be longer than 2 characters.');
    });

    it('mongodb disallows invalid records from being saved', (done) => {
        const user = new User({ name: 'Al' });
        user.save()
            .catch((validationResult) => {
                const {message} = validationResult.errors.name;
                assert(message === 'Name must be longer than 2 characters.');
                done();
            });

    });
});