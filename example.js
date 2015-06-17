function closure(s){
	var counter = 0;
	var prefix = ' ' + s + ' ' ;
	return function(name) {
		counter++;
		return counter + prefix + name;
	};
}
