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
	loadListOfCategories(){		
		this.categoriesCollection.getCollectionOfCategories(renderCategories);
	}

	loadListOfProducts (categoryId){		
		this.productsCollection.getListOfProducts(renderProducts,categoryId);
	}

	addProductToBill (productId){		
		//this.productsCollection.getListOfProducts(renderProducts,categoryId);
		let myBill= new Bill();
		var myProduct=new Product(productId,"Product1","","1","1");						
		myBill.addProduct(myProduct);		
		renderBill(myBill);
	}
}