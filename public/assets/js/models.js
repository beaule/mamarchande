//const baseUrl="http://localhost:3000/stub/";
//const apiKey="";	
var baseUrl="https://api.airtable.com/v0/apphR8QJcnOdxmhcR/";	
var apiKey="api_key=keyO4Vqd0OzTgJ0Ml";



//categories
class CategoriesCollection{
	constructor(){
		this._collectionOfCategories=new Array();
	}

	getCollectionOfCategories(callback){		
		$.getJSON(baseUrl+"categories?"+apiKey, function(data) {
			this._collectionOfCategories=data.records;				
			callback.call(this,data.records);
		});	
	}
}

//products
class ProductsCollection{
	constructor(){
		this._collectionOfProducts=new Array();
	}

	getListOfProducts(callback,categoryId){		
		$.getJSON( baseUrl+"products?filterByFormula=(Id="+categoryId+")&"+apiKey, function(data) {
			this._collectionOfProducts=data.records;				
			callback.call(this,data.records);
		});	
	}
}

class Product{
	constructor(id,name,image,categoryId,price){
		this._id=id;
		this._name=name;
		this._image=image;
		this._categoryId=categoryId;
		this._price=price;
	}

	get id(){
		return this._id
	}

	get name(){
		return this._name
	}

	get image(){
		return this._image
	}
	
}

//bill
let billInstance=null;
class Bill{	
	constructor(){
		if(!billInstance)
			billInstance=this;
		this._collectionOfProducts={};		
		return billInstance;
	}	

	get collectionOfProducts(){		
		return this._collectionOfProducts;
	}

	addProduct(product){		
		if(product.id in this.collectionOfProducts)			
			this._collectionOfProducts[product.id].quantity=eval(this._collectionOfProducts[product.id].quantity)+1;					
		else
			this._collectionOfProducts[product.id]={product:product,quantity:"1"};
	}
}