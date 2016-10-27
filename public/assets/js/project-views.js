//set up handlebar client side
$.handlebars({
    templatePath: 'assets/views/layouts',
    templateExtension: 'handelbars',
	partialPath: 'assets/views/partials',
    partialExtension: 'handelbars',
	partials:['category','product']
});

function renderCategories(listOfCategories){		
	$('#categories').render('categories', {
		categories: listOfCategories				
	});	
}

function renderProducts(listOfProducts){		
	$('#products').render('products', {
		products: listOfProducts				
	});	
}
