const fizzBuzz = () => {
    let fizz = 3;
    let buzz = 5;
    let max = 100;
    let output = [];

    for(let i = 1; i <= max; i++) {
        const isFizz = i % fizz === 0;
        const isBuzz = i % buzz === 0;

        output.push(isFizz && isBuzz ? "FizzBuzz" : isFizz ? "Fizz" : isBuzz ? "Buzz" : i);
    }
    return output;
}

module.exports = fizzBuzz;