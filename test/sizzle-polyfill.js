/* Code by Simon Uyttendaele 
http://stackoverflow.com/questions/597268/element-prototype-in-ie7
-------------------------------------------------------- */
Element = function(){}

var __createElement = document.createElement;
document.createElement = function(tagName)
{
	var element = __createElement(tagName);
	for(var key in Element.prototype)
		element[key] = Element.prototype[key];
	return element;
}

var __getElementById = document.getElementById
document.getElementById = function(id)
{
	var element = __getElementById(id);
	for(var key in Element.prototype)
		element[key] = Element.prototype[key];
	return element;
}
//-------------------------------------------------

document.querySelectorAll = function(selector){
	return $(selector).toArray();
}

document.querySelector = function(selector){
	return $(selector).get(0);
}

Element.prototype.querySelectorAll = function(selector){
	return $(this).find(selector).toArray();
}

Element.prototype.querySelector = function(selector){
	return $(this).find(selector).get(0);
}