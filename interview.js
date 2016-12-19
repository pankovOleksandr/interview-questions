// EXERCISE 1

function test() {
	console.log(a);
	console.log(foo());

	var a = 1;

	function foo() {
		var a = 2;
		return a;
	}
}

test(); // 


// EXERCISE 2

var message = 'Good bye';

var obj = {
	message: 'Hello',
	foo: function() {
		console.log(this.message);
	},
	baa: function() {
		setTimeout(function() {
			console.log(this.message);
		}, 1000);
	},
	boz: function() {
		(function() {
			console.log(this.message);
		})();
	}
};

var gret = obj.foo;

gret(); // 
obj.foo(); //  
obj.baa(); //  
obj.boz() //

// QUESTIONS:
// - say sequence and text of log messages
// - fix boz function so that it prints 'hello'


// EXERCISE 3

function Person(name) {
	this.name = name;
	this.getName = function() {
		return this.name;
	}
};

var person = new Person('Vasya');

console.log(person.getName());


function Person2(name) {
	this.name = name;
	this.getName = function() {
		return this.name;
	}
	return {
		name: 'Petya'
	}
};


var person2 = new Person2('Vasya');
console.log('person2', person2.getName());


// EXECISE 3
// QUESTIONS:
// -find all errors in the next code
angular
	.module('cat-app')
	.factory('cat', function() {
		return {
			this.color = 'grey';
		this.weight = 10;

		function delayed_color_update(newColor) {
			setTimeout(function() {
				this.color = 'white';
			}, 500)
		}

		// called from controller on input field model update
		function updateWeight(growthInputFieldValue) {
			this.weight = this.weight + growthInputFieldValue;
		}
	}
	});


// TASK 1


// Write a sum method which will work properly when invoked using either syntax below.


function sum(a, b) {

}

console.log(sum(2, 3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5


// TASK 2

// Write function once

function once(someFunc) {
	return someFunc
}


function callMeOnlyOncePlease(x, y) {
	return x + y;
}

var cally = once(callMeOnlyOncePlease);

console.log(cally(10, 15)); // 25
console.log(cally(5, 6)); // undefined
console.log(cally(5, 6)); // undefined


// TASK 3

// In this case we want you to create a function wrapper, 
// which takes a function and caches its results depending on the arguments, that were applied to the function.

// Usage example:

var sum = function(a, b) {
	return a + b;
};

var cachedSum = cache(sum);


function cache() {

}

cachedSum('foo', 'bar'); // complex function should be executed // foobar
cachedSum('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned // foobar
cachedSum('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments // foobaz