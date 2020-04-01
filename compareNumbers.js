export default compareNumbers;

function compareNumbers(guess, correctNumber){
    const number = Number(guess);
    if (number === correctNumber)
        return 0;
    if (number < correctNumber)
        return -1;
    if (number > correctNumber)
        return 1;
    console.log(guess, correctNumber);
}
