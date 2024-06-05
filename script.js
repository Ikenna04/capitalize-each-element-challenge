// Capitalize each element challenge

const words = ['coder', 'programmer', 'developer'];

console.log(words);

const cWord = words.map(
	word => `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`
);

console.log('Capitalize each element in the array we get: ', cWord);

// OR

const capWord = words.map(
	word =>
		word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase()
);

console.log('Capitalize each element in the array we get: ', capWord);
