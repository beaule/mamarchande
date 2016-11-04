const baseUrl="/";	

//categories
class CategoriesCollection{
	constructor(){
		this._collection=new Array();
	}

	get collection(){
		return this._collection;
	}
	
	loadCollection(callback){
		if(this._collection.length==0){
			$.getJSON( baseUrl+"categories?", function(data) {
			this._collection=data.records;						
			callback(data.records);
			});	
		}			
		else
			callback.call();
	}
}

//products
class ProductsCollection{
	constructor(){
		this._collection=new Array();
	}

	get collection(){
		return this._collection;
	}
	
	loadCollection(callback,categoryId){
		if(this._collection.length==0){
			$.getJSON( baseUrl+"products?filterByFormula=(categoryId="+categoryId+")", function(data) {
			this._collection=data.records;											
			callback(data.records,categoryId);
			});	
		}			
		else
			callback.call(this._collection,categoryId);
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