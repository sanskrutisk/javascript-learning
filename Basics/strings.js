const name = "Sans";

const repoCount = 50;

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sans-sk-com');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 6)
console.log(anotherString);

const newStringOne = "   sans    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sans.com/sans%20kadam"

console.log(url.replace('%20', '-'));

console.log(url.includes('sans'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));