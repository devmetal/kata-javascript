it("test", function() {
	function add(a, b) {
		return a + b;
	}
	;
	var f = function(a, b) {
		return a + b;
	};

	var fother = f(1, 2);
	
	expect(fother).toEqual(3);
	expect(f(1, 2)).toEqual(3);
	expect(add(1, 2)).toEqual(3);
	expect(add.apply(null, [ 1, 2 ])).toEqual(3);
	expect(add.call(null, 1, 2)).toEqual(3);
	expect(add.name).toEqual("add");
	expect(add.length).toEqual(2);

	// ---closure
	var hello = closure('Hello');
	expect(hello('World')).toEqual("1 Hello World");
	expect(hello('World')).toEqual("2 Hello World");

	// ---global
	name = 'global';
	expect(name).toEqual("global");
	expect(window.name).toEqual("global");

	// ---binding
	var c = {};
	c.r = 1;
	c.a = function() {
		return this.r + this.r
	};

	expect(c.a()).toEqual(2);
	expect(c.r).toEqual(1);

	var fn = c.a;
	// expect(fn.call()) NaN

	window.r = 2;
	expect(fn.call()).toEqual(4);
	expect(fn.call(c)).toEqual(2);

	// ---new opareator, class and instance
	function Circle(radius) {
		this.radius = radius;
	}
	Circle.prototype.area = function() {
		return this.radius * this.radius;
	}
	var instance = new Circle(5);
	expect(instance.area()).toEqual(25);

	// ---function binding
	function bind(tnThis, fn) {
		return function() {
			return fn.apply(fnThis, arguments);
		}
	}
	// ---Iteration
	var array = [ "car", "book", "table" ];
	for ( var i in array) {
		// console.log(array[i]);
	}

	// callback1
	function doSomething(callback) {
		callback('stuff', 'goes', 'here');
	}

	function foo(a, b, c) {
		console.log(a + " " + b + " " + c);
	}
	doSomething(foo);

	doSomething(function(a, b, c) {
		console.log(a + " " + b + " " + c);
	});

	// /callback2
	function Thing(name) {
		this.name = name;
	}
	Thing.prototype.doSomething = function(callback) {
		callback.call(this);
	}
	var t = new Thing('Joe');

	t.doSomething(function() {
		console.log(this.name);
	});

	function print() {
		console.log(this.name)
	}

	t.doSomething(print);

	// callback3
	function Class(name) {
		this.name = name;
	}
	Class.prototype.doSomething = function(callback, salute) {
		callback.call(this, salute);
	}

	function print(salute) {
		console.log(salute + this.name);
	}

	var instance = new Class("Csaba");

	instance.doSomething(print, "hello")

	$(function() {
		$("div").click(function() {
			$("body").css("background", "#ccc");
		});
	});
	
	var valami = {};
	valami.va = 2;
	expect(valami.va).toEqual(2);

});
