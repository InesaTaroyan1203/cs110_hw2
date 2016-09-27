<script>
const creatSpaces = function(spc){
	if (spc===0){
		return "";
	}
	return " " + creatSpaces(spc-1);
};

const creatStars = function(str){
	if (str===0){
		return "";
	}
	return "*" + creatStars(str-1);
};
const printStars = function (spc,str,n){
	if(n===0){
		return "";
	}
	console.log(creatSpaces(spc)+creatStars(str));
	printStars (spc-1,str+2, n-1);
};
const triangleStar = function(n) {
	printStars(n-1,1,n);
};
triangleStar(5)



</script>

