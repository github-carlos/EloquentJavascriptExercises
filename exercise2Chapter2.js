let currentNumber = 1;
const maxNumber = 100;

while (currentNumber <= 100) {
	let output = currentNumber;

	if (currentNumber % 3 === 0 && currentNumber % 5 == 0)
		output = "FizzBuzz";
	else if(currentNumber % 3 === 0)
		output = "Fizz";
	else if (currentNumber % 5 === 0)
		output = "Buzz";
	console.log(output);
	currentNumber += 1;
}
