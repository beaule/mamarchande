//set up handlebar client side
$.handlebars({
    templatePath: 'assets/views/layouts',
    templateExtension: 'handelbars',
	partialPath: 'assets/views/partials',
    partialExtension: 'handelbars',
	partials:[]
});

//categories view rendering & events
function renderCategories(listOfCategories){		
	$('#categories').render('categories', {
		categories: listOfCategories				
	});	
}

function category_onclick(categoryId){	
	let encodePurchasesController= new EncodePurchasesController();		
	encodePurchasesController.loadListOfProducts(categoryId);
}

//products view rendering & events
function renderProducts(listOfProducts){		
	$('#products').render('products', {
		products: listOfProducts				
	});	
}

function product_onclick(productId){
	let encodePurchasesController= new EncodePurchasesController();
	encodePurchasesController.addProductToBill(productId);	
}

//bill view rendering & events
function renderBill(bill){			
	$('#bill').render('bill', {
		billLines: bill.collectionOfProducts			
	});	
}

//speech
function speech(text) {	
    var msg = new SpeechSynthesisUtterance(text);
    msg.rate = 0.5;
    window.speechSynthesis.speak(msg);
}