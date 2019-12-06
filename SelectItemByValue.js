function(element,itemValue) {
	var elements = element.options ;
	for(var i=0;i<elements.length;i++){
		//alert(elements[i].value);
		if(elements[i].value == itemValue){
			elements.selectedIndex = i;
		}
	}
}