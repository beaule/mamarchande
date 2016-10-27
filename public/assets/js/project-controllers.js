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
		this.categoriesCollection.getListOfCategories(renderCategories);
	}

	loadListOfProducts (categoryId){		
		this.productsCollection.getListOfProducts(renderProducts,categoryId);
	}
}