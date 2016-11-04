//set up handlebar client side
$.handlebars({
    templatePath: 'assets/views/layouts',
    templateExtension: 'handelbars',
	partialPath: 'assets/views/partials',
    partialExtension: 'handelbars',
	partials:[]
});

let categoryControllerInstance=null;
class CategoryController{
	constructor(){
		if(!categoryControllerInstance)
			categoryControllerInstance=this;			
		return categoryControllerInstance;
	}

	initialize(){
		this.categoriesCollection=new CategoriesCollection();							
	}

	loadCategories(){		
		this.categoriesCollection.loadCollection(this.renderCategories);				
	}

	renderCategories(listOfCategories){					
		$('#categories').render('categories', {
			categories: listOfCategories			
		});	
	}

	category_onclick(categoryId){					
		productControllerInstance.loadProducts(categoryId);
	}
}

let productControllerInstance=null;
class ProductController{
	constructor(){
		if(!productControllerInstance)
			productControllerInstance=this;				
		return productControllerInstance;
	}

	initialize(){
		this.productsArrayOfCollection=new Array();						
	}

	loadProducts(categoryId){					
		var productCollection=this.productsArrayOfCollection[categoryId];				
		if(!productCollection){		
			productCollection=new ProductsCollection();			
			productCollection.loadCollection(this.renderProducts,categoryId);			
		}		
		else{
			
			this.renderProducts(productCollection,categoryId);			
		}				
	}

	renderProducts(listOfProducts,categoryId){			
		productControllerInstance.productsArrayOfCollection[categoryId]=listOfProducts;
		$('#products').render('products', {
			products: listOfProducts				
		});	
	}

	product_onclick(productId){
		let encodePurchasesController= new EncodePurchasesController();
		encodePurchasesController.addProductToBill(productId);	
	}
}


let billControllerInstance=null;
class BillController{
	constructor(){
		if(!billControllerInstance)
			billControllerInstance=this;			
		return billControllerInstance;
	}

	initialize(){
		this.categoriesCollection=new CategoriesCollection();							
	}

	loadCategories(){		
		this.categoriesCollection.loadCollection(this.renderCategories);				
	}

	renderCategories(listOfCategories){					
		$('#categories').render('categories', {
			categories: listOfCategories			
		});	
	}

	category_onclick(categoryId){					
		productControllerInstance.loadProducts(categoryId);
	}
}





/*
//encodePurchasesController
let instance=null;
class EncodePurchasesController{
	constructor(){
		if(!instance)
			instance=this;
		this.categoriesCollection=new CategoriesCollection();
		this.productsCollection=new ProductsCollection();
		return instance;
	}

	initialize(){
		this.loadListOfCategories();
		this.loadListOfProducts(1);	
	}

	loadListOfCategories(){		
		renderCategories(this.categoriesCollection.collection);		
	}

	loadListOfProducts (categoryId){		
		this.productsCollection.getListOfProducts(renderProducts,categoryId);
	}

	addProductToBill (productId){		
		//this.productsCollection.getListOfProducts(renderProducts,categoryId);
		let myBill= new Bill();
		var myProduct=new Product(productId,"Philadelphia","","1","1");	
		speech(myProduct.name)					
		myBill.addProduct(myProduct);		
		renderBill(myBill);
	}
}
*/



$().ready(function(){				           
	let categoryControllerInstance= new CategoryController();	
	categoryControllerInstance.initialize();
	categoryControllerInstance.loadCategories();

	let productControllerInstance= new ProductController();	
	productControllerInstance.initialize();
	productControllerInstance.loadProducts(1);			
});