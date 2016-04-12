function funcProg(collection, source){
	var newArr =[]; 

	var sourceKey = Object.keys(source); 

	newArr= collection.filter(function(obj){
		return sourceKey.every(function(value){
			return obj.hasOwnProperty(value) && obj[value] == source[value]; 
		}); 
	}); 
	return newArr; 
}

// call 
funcProg([{ first: "Neron", last: "Hadid" }, { first: "Mars", last: null }, { first: "Tyrell", last: "Lanister" }], { last: "Lanister" });