var baseUrl="http://localhost:3000/stub/";
var apiKey="";	
//var baseUrl="https://api.airtable.com/v0/apphR8QJcnOdxmhcR/";	
//var apiKey="api_key=keyO4Vqd0OzTgJ0Ml";



//categories
function CategoriesCollection(){
	this.collection=new Array();
}

CategoriesCollection.prototype.getListOfCategories = function (callback){	
	var baseUrl="http://localhost:3000/stub/";
	$.getJSON( baseUrl+"categories?"+apiKey, function(data) {
		this.collection=data.records;				
		callback.call(this,data.records);
	});		
}

//products
function ProductsCollection(){
	this.collection=new Array();
}

ProductsCollection.prototype.getListOfProducts = function (callback,categoryId){	
	var baseUrl="http://localhost:3000/stub/";
	$.getJSON( baseUrl+"products?filterByFormula=(Id="+categoryId+")&"+apiKey, function(data) {
		this.collection=data.records;				
		callback.call(this,data.records);
	});		
}