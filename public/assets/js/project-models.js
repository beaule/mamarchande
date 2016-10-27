const baseUrl="http://localhost:3000/stub/";
const apiKey="";	
//var baseUrl="https://api.airtable.com/v0/apphR8QJcnOdxmhcR/";	
//var apiKey="api_key=keyO4Vqd0OzTgJ0Ml";



//categories
class CategoriesCollection{
	constructor(){
		this.collection=new Array();
	}

	getListOfCategories(callback){		
		$.getJSON(baseUrl+"categories?"+apiKey, function(data) {
			this.collection=data.records;				
			callback.call(this,data.records);
		});	
	}
}

//products
class ProductsCollection{
	constructor(){
		this.collection=new Array();
	}

	getListOfProducts(callback,categoryId){		
		$.getJSON( baseUrl+"products?filterByFormula=(Id="+categoryId+")&"+apiKey, function(data) {
			this.collection=data.records;				
			callback.call(this,data.records);
		});	
	}
}

class Product{
	constructor(id,name,image,categoryId,price){
		this.id="";
		this.name="";
		this.image="";
		this.categoryId="";
		this.price="";
	}

	initfromJsonRecord(jsonRecord){	
		alert(jsonRecord);	
		this.id=jsonRecord.Id;
		this.name=jsonRecord.Name;
		this.image=jsonRecord.Image;
		this.categoryId=jsonRecord.CategoryId;
		this.price=jsonRecord.Price;
	}
}

//bill
let billInstance=null;
class Bill{
	constructor(){
		if(!billInstance)
			billInstance=this;
		this.collectionOfProducts={};
		this.collectionOfQuantities={};
		return billInstance;
	}

	addProduct(product){
		alert(product);
		if(!(product.id in this.collectionOfProducts))		
			this.collectionOfProducts[product.id]=product;						
		this.collectionOfQuantities[product.id]=this.collectionOfQuantities[product.id]+1;		
	}
}