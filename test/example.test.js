// IMPORT MODULES under test here:
import compareNumbers from '../compareNumbers.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('user guesses correctly', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 7;
    const correctNumber = 7;
    const expected = 0;
    const answer = compareNumbers(guess, correctNumber);
    assert.equal(expected, answer);
});

test('user guesses low', function(assert) {
        //Arrange
        // Set up your parameters and expectations
    const guess = 4;
    const correctNumber = 7;
    const expected = -1; 

    const answer = compareNumbers(guess, correctNumber);
    assert.equal(expected, answer);
});
        
test('user guesses high', function(assert) {
        //Arrange
        // Set up your parameters and expectations
    const guess = 10;
    const correctNumber = 7;
    const expected = 1;  
    

    //Act 
    // Call the function you're testing and set the result to a const
    const answer = compareNumbers(guess, correctNumber);


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, answer);
});