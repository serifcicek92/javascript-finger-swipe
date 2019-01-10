window.onload = function(){
	
		var nesne = document.querySelector('.satir');
		var nesnePozisyon;////////////////////
		var baslangicX;
		var tasiX;
		var sonX;
		var control = 0;
		var x=0;
		var total = document.querySelector(".satir").childElementCount;
		total = -(230*total)+290;
		console.log("total-child:"+total);
		
		nesne.addEventListener("touchstart",function(event){
			nesnePozisyon = parseFloat(window.getComputedStyle(nesne).left);////////////////////
			//console.log(nesnePozisyon);
			//console.log(event);
			baslangicX = event.touches[0].clientX;
			//console.log(baslangicX);
			nesne.addEventListener("touchmove",function(event){
				tasiX = event.touches[0].clientX;
				//console.log(tasiX);				
				var hesapla = tasiX-baslangicX+nesnePozisyon;
				//console.log(hesapla);
				console.log("ilk değer:"+control);
				if(tasiX<control){
				nesne.style.left = (hesapla-100)+"px";
				}else if(tasiX>control){
				//alert("nesne sola doğru");
				nesne.style.left = (hesapla+100)+"px";
				}
				control=tasiX;
				console.log("ikini değer:"+control);
						
				
				return baslangicX;
					
				
				
			});
			nesne.addEventListener("touchend",function(event){
			nesnePozisyon = parseFloat(window.getComputedStyle(nesne).left);
			
			//console.log(nesnePozisyon);
			//console.log(total);
				if(nesnePozisyon<total){
				nesne.style.left=total+"px";
				//console.log("nesnemiz 0 dan küçük");
				}else if(nesnePozisyon>0){
				//console.log("deneğer pozitif");
				nesne.style.left=0+"px";
				}else{
				sonX = event.changedTouches[0].clientX
				var control = baslangicX-sonX;
				//console.log("control:"+control);
				if(control>0){console.log("yön sağa doğrudur");}
				else if(control<0){console.log("yön sağa doğrudur");}
				//console.log("başlangıc"+baslangicX);
				//console.log("sonuncusu:"+sonX);
				//nesnePozisyon = sonX;
				//alert(nesnePozisyon);
				//nesne.style.left=nesnePozisyon;
				}
			});
			
		});
		
		
	};
	//with: 210px; margin:10px; 