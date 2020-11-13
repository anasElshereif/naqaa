$(".lang span.en").on("click", function(){
	// Get HTML head element 
	var head = document.getElementsByTagName('HEAD')[0];  

	// Create new link Element 
	var link = document.createElement('link'); 

	// set the attributes for link element  
	link.rel = 'stylesheet';  

	link.type = 'text/css'; 

	link.href = './assets/css/mainAr.css';  

	link.id =  "styleFile"
	// Append link element to HTML head 
	head.appendChild(link);  
	document.title = "نقاء"
})
$(".lang span.ar").on("click", function(){
	$("#styleFile").remove()
	document.title = "NAQAA"
})
var firstBlot = document.getElementById("first_btn"),
	secondBlot = document.getElementById("second_btn"),
    firstSlide = document.getElementById("firstItem"),
	secondSlide = document.getElementById("secondItem");

secondBlot.onclick = function(){
	secondSlide.classList.add("activeSlide");
	firstSlide.classList.remove("activeSlide");
	secondBlot.classList.add("active");
	firstBlot.classList.remove("active")
}

firstBlot.onclick = function(){
	secondSlide.classList.remove("activeSlide");
	firstSlide.classList.add("activeSlide");
	secondBlot.classList.remove("active");
	firstBlot.classList.add("active")
}

setInterval(function(){
	secondSlide.classList.toggle("activeSlide");
	firstSlide.classList.toggle("activeSlide");
	secondBlot.classList.toggle("active");
	firstBlot.classList.toggle("active")
}, 7000) 



$(".discount_val").each(function(){
	var new_price = parseInt($(this).parents('.prodcut').find(".new_price").html()),
		old_price = parseInt($(this).parents('.prodcut').find(".old_price").html()),
		percent = ((old_price - new_price) / old_price) * 100


	$(this).html(Math.round(percent) + " %")
})

$(".more").on("click", function(){
	$(this).parents(".blog_item").find(".blog_text").toggleClass('active_txt')
	$(this).find("span").toggleClass("hide")
})



// start data

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
	responsiveClass:true,
	dots:true,
	lazyLoad: true,
	loop:true,
	nav:false,
	items:4,
	rtl:true,
    responsive:{
		0:{
			items:1,
			nav:false,
		},
        450:{
            items:2,
            nav:false
        },
        800:{
            items:3,
            nav:false
        },
        1100:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$(".owl-nav").remove()

$(window).on("scroll",function(){
	if($(this).scrollTop() > 200){
		$(".nav").addClass("activeNav");
		$(".go_to_top").fadeIn(500);
	}else{
		$(".nav").removeClass("activeNav");
		$(".go_to_top").fadeOut(500);
	}
})

$(".go_to_top").on("click", function(){
	$("html, body").animate({
		scrollTop:0,
	},1000)
})

$(".right_links li:not(:last-of-type)").on("click",function(){
	var sectionOffset = $($(this).data('link')).offset().top;        
	$('body,html').animate({
		scrollTop:sectionOffset,
	})
	$(this).addClass('active').siblings("li").removeClass("active")
})

$(window).on("scroll",function(){
	var scrollValue = $(this).scrollTop();
	$('.section').each(function(){
		if($(this).offset().top <= (scrollValue + 100)){
			$(`.right_links [data-link = '#${$(this).attr("id")}']`).addClass("active").siblings("li").removeClass("active")
		}
		
	})
})
$(".menue").on("click", function(){
	$('.right_links').slideToggle()
})

$(".close").on("click", function(){
	$(this).parents(".prodcutPopup").fadeOut()
})
$(".store .item .prodcut .img_cont").on("click", function(){
	$(".prodcutPopup").fadeIn().css({
		display:"flex"
	})
	var imgSrc = $(this).find("img").attr("src"),
	prname = $(this).parents(".prodcut").find('.name.en').text(),
	prarname = $(this).parents(".prodcut").find('.name.ar').text(),
	new_price = parseInt($(this).parents(".prodcut").find(".new_price").text()),
	old_price = parseInt($(this).parents(".prodcut").find(".old_price").text());
	$(".prodcutPopup").find('.img_cont img').attr("src", imgSrc);
	$(".prodcutPopup").find(".name.en").text(prname);
	$(".prodcutPopup").find(".name.ar").text(prarname);
	$('.prodcutPopup').find('.new_price').text(new_price + "TL")
	$('.prodcutPopup').find('.old_price').text(old_price + "TL")
})


