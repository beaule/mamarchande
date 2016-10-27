//var baseUrl="http://localhost:3000/stub/";
//var apiKey="";	
 var baseUrl="https://api.airtable.com/v0/apphR8QJcnOdxmhcR/";	
 var apiKey="api_key=keyO4Vqd0OzTgJ0Ml";

//encodePurchasesController
function EncodePurchasesController(){	
	this.categoriesCollection=new CategoriesCollection();
	this.productsCollection=new ProductsCollection();
}

EncodePurchasesController.prototype.loadListOfCategories = function (){		
	this.categoriesCollection.getListOfCategories(renderCategories);
}

EncodePurchasesController.prototype.loadListOfProducts = function (categoryId){		
	this.productsCollection.getListOfProducts(renderProducts,categoryId);
}