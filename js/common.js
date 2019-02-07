// open menu
document.getElementById("burger").onclick = function(event) {
	var links_in_header, burger;
	links_in_header = document.getElementById("wrap-links-header");
	burger = document.getElementById("burger");
	links_in_header.style.transform = "translate(0,0)";
	burger.style.display = "none";
}
// close menu
document.getElementById("close-menu").onclick = function(event) {
	var links_in_header, burger;
	links_in_header = document.getElementById("wrap-links-header");
	burger = document.getElementById("burger");
	links_in_header.style.transform = "translate(0,-150px)";
	burger.style.display = "block";
}
// Slider
var slider_go = true;
i=0;
document.getElementById("top-block").onmouseenter = function(event) {

	document.getElementById("top-block").onmouseleave = function(event){
	slider_go=false;
}
// window.onmouseout=function(event){ 
//   if(event.toElement===null) {
//   	slider_go=false;}
// }
	
	var item, bg_header, main_title_of_item, main_descr_of_item;
	item = document.querySelectorAll("div.item");
	bg_header = document.getElementById("top-block");
	main_title_of_item = document.getElementById("main-title-of-item");
  	main_descr_of_item = document.getElementById("main-descr-of-item");
  	
  	slider();
    function slider(){
    	if (slider_go == false) {
    	slider_go = true
	    return false
    	}
    	else {if (i==4) {
        i=0;}
        item[i].classList.add("item-active");
        bg_header.classList.add("bg"+(i+1));
        main_title_of_item.innerHTML = item[i].querySelector("span.title-of-item").innerHTML;
  		main_descr_of_item.innerHTML = item[i].querySelector("span.description-of-item").innerHTML;
        var time_active_slide = setTimeout(function(){
        if (slider_go == false) {
    	clearTimeout(time_active_slide);
    	}
    	else{
    	item[i].classList.remove("item-active");
	 	bg_header.classList.remove("bg"+(i+1));
	 	clearTimeout(time_active_slide);
	 	i++;
    	}
	 	}, 5000);	
	 	setTimeout(slider, 5000);}
		}
		document.getElementById("arrow_left").onclick = function (event) {
		item[i].classList.remove("item-active");
	 	bg_header.classList.remove("bg"+(i+1));
	 	main_title_of_item.innerHTML = item[i].querySelector("span.title-of-item").innerHTML;
  		main_descr_of_item.innerHTML = item[i].querySelector("span.description-of-item").innerHTML;
	 	i--;
	 	if (i<0) { i=3}
	 	item[i].classList.add("item-active");
        bg_header.classList.add("bg"+(i+1));
        main_title_of_item.innerHTML = item[i].querySelector("span.title-of-item").innerHTML;
  		main_descr_of_item.innerHTML = item[i].querySelector("span.description-of-item").innerHTML;
		}
		document.getElementById("arrow_right").onclick = function (event) {
		item[i].classList.remove("item-active");
	 	bg_header.classList.remove("bg"+(i+1));
	 	i++;
	 	if ( i>3) {i=0}
	 	item[i].classList.add("item-active");
        bg_header.classList.add("bg"+(i+1));
        main_title_of_item.innerHTML = item[i].querySelector("span.title-of-item").innerHTML;
  		main_descr_of_item.innerHTML = item[i].querySelector("span.description-of-item").innerHTML;
	}
}
// Activaion section Agents
window.onload = function() {
	data_agent = document.querySelectorAll("div.about-agent");
	for (var i = 0; i < data_agent.length; i++) {
		data_agent[i].style.display = "none";
	}
	data_agent[0].style.display = "block";
}


document.getElementById('min-photo-agent-1').onclick = function() {
	data_agent = document.querySelectorAll("div.about-agent");
	min_photo_agent = document.querySelectorAll("div.min-photo-agent");
	for (var i = 0; i < data_agent.length; i++) {
		 data_agent[i].style.display = "none";
	}
	data_agent[0].style.display = "block";
}
document.getElementById('min-photo-agent-2').onclick = function() {
	data_agent = document.querySelectorAll("div.about-agent");
	min_photo_agent = document.querySelectorAll("div.min-photo-agent");
	for (var i = 0; i < data_agent.length; i++) {
		 data_agent[i].style.display = "none";
	}
	data_agent[1].style.display = "block";
}
document.getElementById('min-photo-agent-3').onclick = function() {
	data_agent = document.querySelectorAll("div.about-agent");
	min_photo_agent = document.querySelectorAll("div.min-photo-agent");
	for (var i = 0; i < data_agent.length; i++) {
		 data_agent[i].style.display = "none";
	}
	data_agent[2].style.display = "block";
}
document.getElementById('min-photo-agent-4').onclick = function() {
	data_agent = document.querySelectorAll("div.about-agent");
	min_photo_agent = document.querySelectorAll("div.min-photo-agent");
	for (var i = 0; i < data_agent.length; i++) {
		 data_agent[i].style.display = "none";
	}
	data_agent[3].style.display = "block";
}
document.getElementById('min-photo-agent-5').onclick = function() {
	data_agent = document.querySelectorAll("div.about-agent");
	min_photo_agent = document.querySelectorAll("div.min-photo-agent");
	for (var i = 0; i < data_agent.length; i++) {
		 data_agent[i].style.display = "none";
	}
	data_agent[4].style.display = "block";
}
document.getElementById('min-photo-agent-6').onclick = function() {
	data_agent = document.querySelectorAll("div.about-agent");
	min_photo_agent = document.querySelectorAll("div.min-photo-agent");
	for (var i = 0; i < data_agent.length; i++) {
		 data_agent[i].style.display = "none";
	}
	data_agent[5].style.display = "block";
}
document.getElementById('min-photo-agent-7').onclick = function() {
	data_agent = document.querySelectorAll("div.about-agent");
	min_photo_agent = document.querySelectorAll("div.min-photo-agent");
	for (var i = 0; i < data_agent.length; i++) {
		 data_agent[i].style.display = "none";
	}
	data_agent[6].style.display = "block";
}
document.getElementById('min-photo-agent-8').onclick = function() {
	data_agent = document.querySelectorAll("div.about-agent");
	min_photo_agent = document.querySelectorAll("div.min-photo-agent");
	for (var i = 0; i < data_agent.length; i++) {
		 data_agent[i].style.display = "none";
	}
	data_agent[7].style.display = "block";
}



autoheight ();
function autoheight () {
	h = document.getElementById('border-around-about').clientWidth;
document.getElementById('border-around-about').style.height = h-((h/100)*45) + "px";
}
// Slider Steve Jobs
left=0;
document.getElementById("arrow-right-jobs").onclick = function (event) {
	line_Quotes_of_great_men = document.getElementById("line-quotes-of-great-men");
	great_men = document.querySelectorAll("div.great-men");
	left = left - 1;
		if (left  <-2) {
			left = 0
		}
	switch (left) {
  	case 0:
    	for (var i = 0; i < great_men.length; i++) {
			great_men[i].style.display = "none";
		}
		great_men[Math.abs(left)].style.display = "block";
    	break;
    case -1:
    	for (var i = 0; i < great_men.length; i++) {
			great_men[i].style.display = "none";
		}
		great_men[Math.abs(left)].style.display = "block";
		great_men[Math.abs(left)].style.opacity = "1";
    	break;
    	case -2:
    	for (var i = 0; i < great_men.length; i++) {
			great_men[i].style.display = "none";
		}
		great_men[Math.abs(left)].style.display = "block";
    	break;
    }
	line_Quotes_of_great_men.style.left = left+ "00"+"%";
}
document.getElementById("arrow-left-jobs").onclick = function (event) {
	line_Quotes_of_great_men = document.getElementById("line-quotes-of-great-men");
	great_men = document.querySelectorAll("div.great-men");
	left = left + 1;
		if (left  ==1) {
			left = -2
		}
	switch (left) {
  	case 0:
    	for (var i = 0; i < great_men.length; i++) {
			great_men[i].style.display = "none";
		}
		great_men[Math.abs(left)].style.display = "block";
    	break;
    case -1:
    	for (var i = 0; i < great_men.length; i++) {
			great_men[i].style.display = "none";
		}
		great_men[Math.abs(left)].style.display = "block";
		great_men[Math.abs(left)].style.opacity = "1";
    	break;
    	case -2:
    	for (var i = 0; i < great_men.length; i++) {
			great_men[i].style.display = "none";
		}
		great_men[Math.abs(left)].style.display = "block";
    	break;
    }
	line_Quotes_of_great_men.style.left = left+ "00"+"%";	
	line_Quotes_of_great_men.style.left = left+ "00"+"%";
}