const fizzBuzz = () => {
    let fizz = 3;
    let buzz = 5;
    let max = 100;

    for(let i = 0; i <= max; i++) {
        const isFizz = i % fizz === 0;
        const isBuzz = i % buzz === 0;

        let output = isFizz && isBuzz ? "FizzBuzz" : isFizz ? "Fizz" : isBuzz ? "Buzz" : i;
        console.log(output);
    }
}

fizzBuzz();