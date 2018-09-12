var adjective = ['sunny', 'gloomy', 'windy', 'chilly'];
var creature = ['squid', 'whale', 'turtle', 'tuna'];
var verb = ['dancing', 'laughing', 'burping', 'singing', 'blushing'];
var verb2 = ['swimming away', 'doing the boogie', 'eating kelp'];

var randomAdjective = Math.floor( Math.random() * adjective.length); 
var randomCreature = Math.floor( Math.random() * creature.length);
var randomVerb = Math.floor( Math.random() * verb.length);
var randomVerb2 = Math.floor( Math.random() * verb2.length);

var first = document.getElementById('adjective'),
	second = document.getElementById('creature'),
	third = document.getElementById('verb'),
	fourth = document.getElementById('verb2');

console.log(document.getElementById('adjective'));
console.log(document.getElementById('creature'));
console.log(document.getElementById('verb'));
console.log(document.getElementById('verb2'));


first.textContent = adjective[randomAdjective];
second.textContent = creature[randomCreature];
third.textContent = verb[randomVerb];
fourth.textContent = verb2[randomVerb2];