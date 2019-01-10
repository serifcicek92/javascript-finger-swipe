// JavaScript Document
var nesne = document.querySelector('.satir');
		var MyRight = document.querySelector('.scSlideNext');
		var MyLeft = document.querySelector('.scSlidePrev');
		var totalObj = nesne.childElementCount;
		var totalW = (totalObj*229)-229;
		var wW = window.innerWidth;
		var calculate;
		var pages = Math.ceil(totalW/wW);
		console.log(pages);
		var dottes = document.querySelector(".dottes");
		for(i=0; i<pages; i++){
			dottes.innerHTML += "<span id='dottes-"+i+"' onClick='getSerifPage("+i+")'></span>";
		}
		function getSerifPage(event){
			var setGo = 0-event*parseInt(wW);
			console.log(setGo);
			nesne.style.left=setGo+"px";
		}
	
		//alert(wW);
		var num = parseInt(totalW/wW);
		var ObjPosition;
		
		MyRight.addEventListener('click',function(event){
			ObjPosition = parseInt(window.getComputedStyle(nesne).left);
			//alert(totalW);
			if(ObjPosition<0-totalW || ObjPosition==totalW){
				nesne.style.left=-totalW+"px";
			}else if(ObjPosition>-totalW){
				calculate = ObjPosition-wW;
				nesne.style.left=calculate+'px';
			}
		});
		MyLeft.addEventListener('click',function(event){
			ObjPosition = parseInt(window.getComputedStyle(nesne).left);
			//alert(totalW);
			if(ObjPosition>0 || ObjPosition==0){
				nesne.style.left = 0+"px";
			}else{
			calculate = ObjPosition+wW;
			nesne.style.left = calculate+'px';
			}
		});
	
		setInterval(function(){
			ObjPosition = parseInt(window.getComputedStyle(nesne).left);
			
			if(ObjPosition<-totalW){
				nesne.style.left = -totalW+"px";
			}else if(ObjPosition>0){
				nesne.style.left = 0+"px";
			}
							  
			},500);
		