// let recordCollection = {
// 	2548: {
// 		albumTitle: 'Slippery When Wet',
// 		artist: 'Bon Jovi',
// 		tracks: ['Let It Rock', 'You Give Love a Bad Name'],
// 	},
// 	2468: {
// 		albumTitle: '1999',
// 		artist: 'Prince',
// 		tracks: ['1999', 'Little Red Corvette'],
// 	},
// 	1245: {
// 		artist: 'Robert Palmer',
// 		tracks: [],
// 	},
// 	5439: {
// 		albumTitle: 'ABBA Gold',
// 	},
// };

// function updateRecords(records, id, prop, value) {
// 	if (prop !== 'tracks' && value !== '') {
// 		records[id][prop] = value;
// 	} else if (
// 		prop === 'tracks' &&
// 		records[id].hasOwnProperty('tracks') === false
// 	) {
// 		records[id][prop] = [value];
// 	} else if (prop === 'tracks' && value !== '') {
// 		records[id][prop].push(value);
// 	} else if (value === '') {
// 		delete records[id][prop];
// 	}
// 	return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// function phoneticLookup(val) {
// 	let result = '';
// 	let lookup = {
// 		alpha: 'Adams',
// 		bravo: 'Boston',
// 		charlie: 'Chicago',
// 		delta: 'Denver',
// 		echo: 'Easy',
// 		foxtrot: 'Frank',
// 		'': undefined,
// 	};
// 	result = lookup[val];
// 	return result;
// }

// function checkObj(obj, checkProp) {
// 	if (obj.hasOwnProperty(checkProp)) {
// 		return obj[checkProp];
// 	} else {
// 		return 'Not Found';
// 	}
// }

// var contacts = [
// 	{
// 		firstName: 'Akira',
// 		lastName: 'Laine',
// 		number: '0543236543',
// 		likes: ['Pizza', 'Coding', 'Brownie Points'],
// 	},
// 	{
// 		firstName: 'Harry',
// 		lastName: 'Potter',
// 		number: '0994372684',
// 		likes: ['Hogwarts', 'Magic', 'Hagrid'],
// 	},
// 	{
// 		firstName: 'Sherlock',
// 		lastName: 'Holmes',
// 		number: '0487345643',
// 		likes: ['Intriguing Cases', 'Violin'],
// 	},
// 	{
// 		firstName: 'Kristian',
// 		lastName: 'Vos',
// 		number: 'unknown',
// 		likes: ['JavaScript', 'Gaming', 'Foxes'],
// 	},
// ];

// function lookUpProfile(name, prop) {
// 	for (let i = 0; i < contacts.length; i++) {
// 		if (contacts[i].firstName === name) {
// 			if (contacts[i].hasOwnProperty(prop)) {
// 				return contacts[i][prop];
// 			} else {
// 				return 'No such property';
// 			}
// 		}
// 	}
// 	return 'No such contact';
// }

// function randomRange(myMin, myMax) {
// 	return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
// }

// function countdown(n) {
// 	if (n < 1) {
// 		return [];
// 	} else {
// 		let count = countdown(n - 1);
// 		count.unshift(n);
// 		return count;
// 	}
// }

// export { countdown };

// function rangeOfNumbers(startNum, endNum) {
// 	if (endNum - startNum === 0) {
// 		return [startNum];
// 	} else {
// 		let numbers = rangeOfNumbers(endNum, startNum - 1);
// 		numbers.push(endNum);
// 		return numbers;
// 	}
// }
// const myConcat = (arr1, arr2) => arr1.concat(arr2);

// function multi(multiplier, ...args) {
// 	return args.map((element) => {
// 		return multiplier * element;
// 	});
// }
// var args = multi(3, 4, 5, 6, 7);

// function minusNumber(minus, ...args){
// 	return args.map((numb) => {
// 		return minus - numb;
// 	});
// }
// var a = minusNumber(6, 1, 2 ,3);
// console.log(a);

function double (n){
	return n *2;
}
export {double};