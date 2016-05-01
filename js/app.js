window.onload=function(){
	var opacity = window.innerWidth / 1600;
	var collection = document.getElementsByClassName("image");
	var arr = [].slice.call(collection);
	arr.forEach(function(element){
		element.style.opacity = opacity*opacity;
	})
};
window.onresize=function(){
	var opacity = window.innerWidth / 1600;
	var collection = document.getElementsByClassName("image");
	var arr = [].slice.call(collection);
	arr.forEach(function(element){
		element.style.opacity = opacity*opacity;
	})
};
