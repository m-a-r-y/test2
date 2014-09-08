var data = [
 {
 	abv: "BY",
 	country: "Belarus",
 	population: 9685000 ,
 	status: false
 },
 {
 	abv: "BZ",
 	country: "Belize",
 	population: 314522, 
 	english: "yes",
 	status: true
 },
{
 	abv: "CA",
 	country: "Canada",
 	population: 33679000, 
 	english: "yes",
 	status: false
 },
{
 	abv: "CC",
 	country: "Cocos [Keeling] Islands",
 	population: 628, 
 	english: "yes",
 	status: true
 },
{
 	abv: "CD",
 	country: "Democratic Republic of the Congo",
 	population: 70916439,
 	status: false
 },
{
 	abv: "CF",
 	country: "Central African Republic",
 	population: 4844927, 
 	status: true
 },
{
 	abv: "CG",
 	country: "Republic of the Congo",
 	population: 3039126, 
 	status: true
 },
{
 	abv: "CH",
 	country: "Switzerland",
 	population: 7581000, 
 	status: false
 },
]

$(document).ready(function(){

	var source = $("#handlebar").html();
	var template = Handlebars.compile(source);

	var fresh = function(data){
		var context = template(data);
		$("#here").html(context);
	};
	fresh({one: data});



});
