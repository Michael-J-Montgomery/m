function Article() {
	
	this.journal_citation;
	this.element = $('<div class="article element" citation="0" date="0" ></div>');
	this.title = "[Title not retieved]";
	this.abstractText = "[No abstract available]";
	this.publicationTypes = [];
	this.isReview = false;
	this.date;
	this.authors;
	this.abbrevJournal;
	this.pmid;
	this.abstractText;
	this.affiliation;
	this.color= "white";
}

Article.prototype.registerClick = function($container){
	var that = this.element;
	this.element.click(function(){
		var width = that.css('width');
		width = width.substring(0, width.length - 2);
		var height = that.css('height');
		height = height.substring(0, height.length - 2);

		that.css('height', height*2 + "px");
		that.css('width', width*2 + "px");
		//TODO: trying to reload items
		$("#container").isotope({
			masonry: {
				columnWidth: 50
			}
		});
	});
};

Article.prototype.render = function($container){
	this.element.text(this.title);
	this.element.css('background-color', this.color);
	this.element.attr('citation', this.journal_citation);
	//TODO display date et abstract et author
	this.element.attr('date', this.date);
	this.element.attr('isReview', this.isReview);
	
	if(this.isReview == true){
		this.element.addClass("review");
	}
	
	$('#container').isotope( 'insert', this.element );
};

Article.prototype.setImpact = function(impact){
	//TODO statements
	
	if(impact != undefined){
		this.journal_citation = impact;
	}
	var red = 255 - Math.round(impact*255/94);
	var green = 255 - Math.round(impact*156/94);
	if(isNaN(red)){
		this.color = "#fff";
	}else{
		this.color = "rgb(" + red + ", " + green + ", 255)";
	}
	console.log(this.color);

//	if(impact == 1){
//		this.color = "orange";
//	}else if(impact == 2){
//		this.color = "yellow";
//	}else if(impact > 2){
//		this.color = "red";
//	}else{
//		this.color = "white";
//	}
};