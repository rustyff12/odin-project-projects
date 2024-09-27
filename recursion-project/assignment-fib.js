// Iteration fibonacci
const iterFib = (num) => {
	let arr = [];

	for (let i = 0; i < num; i++) {
		if (i === 0) {
			arr.push(0);
		} else if (i === 1) {
			arr.push(1);
		} else {
			arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
		}
	}

	return arr;
};

// console.log(iterFib(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

const fibsRec = (num, arr = [0, 1]) => {
	console.log("This was printed recursively");
	if (num === 0) {
		return [];
	} else if (num === 1) {
		return arr.slice(0, 1);
	} else if (num === 2) {
		return arr;
	}

	let sum = arr[arr.length - 1] + arr[arr.length - 2];
	arr.push(sum);

	return fibsRec(num - 1, arr);
};

// console.log(fibsRec(0)); // []
// console.log(fibsRec(1)); // [0]
// console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
