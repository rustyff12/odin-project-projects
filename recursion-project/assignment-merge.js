const mergeSort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	const res = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			res.push(left.shift());
		} else {
			res.push(right.shift());
		}
	}

	return [...res, ...left, ...right];
};

const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
