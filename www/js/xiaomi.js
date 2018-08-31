let a =document.querySelectorAll('.nav-item');
console.log(a)
let hides =document.querySelectorAll('.hide');
console.log(hides)
let item = document.querySelector('.hide-item');
console.log(item)
	for(let i = 0;i<a.length-2;i++){
		a[i].onmouseenter =function(){
			item.innerHTML = a[i].querySelector('.nav-item .hide').innerHTML;
			hides[i].style.display = 'block';
		}
		a[i].onmouseleave = (e) =>{
			console.log(e)
		if(hides[i].contains(e.toElement)){
			
		}else{
			hides[i].style.display = 'none';
		}
	}
	}
(() =>{
		let banner = document.querySelectorAll('#banner_nav_left');
		console.log(banner);
		let childrens = document.querySelectorAll('.children');
		for(let j = 0;j<banner.length;j++){
			banner[j].onmouseenter =function(){
			childrens[j].classList.add('active');
			}
			banner[j].onmouseleave = function(){
				childrens[j].classList.remove('active');
				}
		}
})();

///轮播图

	let img = document.querySelectorAll('.banner-list');
	let imgs = document.querySelector('.banner_img')
	// console.log(img)
	let banner_l = document.querySelector('.banner_lbtn');
	let banner_r = document.querySelector('.banner_rbtn');
	let link = document.querySelectorAll('.ui-pager-link');
	let render = index =>{
		for(let i = 0; i<img.length; i++){
			img[i].classList.remove('banner-active');
			link[i].classList.remove('link-avtive');
		}
		img[index].classList.add('banner-active');
		link[index].classList.remove('link-active');
	}
		function auto () {
		index = index + 1;
		index = index >4 ? 0:index;
		render(index);
	}
	let id = null;
	id = setInterval( auto,1000);
	imgs.onmouseenter = function(){
		clearInterval(id)
	}
	imgs.onmouseleave = function(){
		id = setInterval( auto,1000);
	}
	let index = 0;
	render(index);
		banner_l.onclick =() =>{
			clearInterval(id)
			index = index -1;
			index = index <0 ?4:index;
			render(index)
	}
		banner_r.onclick = () =>{
			clearInterval(id);
			index = index + 1;
			index = index >4 ? 0:index;
			render(index)
		}
	for(let i = 0; i<link.length; i++){
		link[i].onclick = function(){
			index = i ;
			render(index);
		}
	}



// 小米明星单品
// 		let btn_l = document.querySelector('.star_btn1');
// 		let btn_r = document.querySelector('.star_btn2');
// 		console.log(btn_r);
// 		let star = document.querySelectorAll('.star_bottom');
// 		console.log(star);
// 		{
// 			function star(parent){
// 				let prev=parent.querySelector(".star_btn1");
// 				let next=parent.querySelector(".star_btn2");
// 				let inner=parent.querySelector(".star_wrap");
// 				let n=0;
// 				next.onclick = function(){
// 					n++;
// 					prev.classList.remove("disable");
// 					if (n===2) {
// 						this.classList.add("disable");
// 					}
// 					if (n===3) {
// 						n=2;
// 						return;
// 					}
// 					inner.style.marginLeft=-1240*n+"px";
// 				}
// 				prev.onclick = function(){
// 					n--;
// 					next.classList.remove("disable");
// 					if(n===0){
// 						this.classList.add("disable");
// 					}
// 					if (n===-1) {
// 						n=0;
// 						return;
// 					}
// 					inner.style.marginLeft=-1240*n+"px";
// 				}
// 			}
// 			const contentlist=document.querySelectorAll(".star");
// 			contentlist.forEach(function(ele){
// 				star(ele);
// 			});
// 		}

//内容、图片效果
{
	function tupian(parent){
		let next=parent.querySelector(".neirong_rbtn");
		let prev=parent.querySelector(".neirong_lbtn");
		let inner=parent.querySelector(".neirong_inner");
		let items=parent.querySelectorAll(".neirong_list1");
		let circle=parent.querySelectorAll(".circle1");
		let n=0;
		let obj=circle[0];
		const l=circle.length;
		next.onclick=function( ){
			n++;
			if(n===l){
				n=l-1;
				return;
			}
			inner.style.marginLeft=-n*296+"px";
			circle[n-1].classList.remove("circle");
			circle[n].classList.add("circle");
			obj=circle[n];
		}
		prev.onclick=function( ){
			n--;
			if(n===-1){
				n=0;
				return;
			}
			inner.style.marginLeft=-n*300+"px";
			circle[n+1].classList.remove("circle");
			circle[n].classList.add("circle");
			obj=circle[n];
		}	
		circle.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("circle");
				ele.classList.add("circle");
				obj=ele;
				inner.style.marginLeft=-index*296+"px";
				n=index;
			}	
		})
	}
	const contentlist=document.querySelectorAll(".neirong_item");
	contentlist.forEach(function(ele){
		tupian(ele);
	});
}
////视频部分
			let video = document.querySelectorAll('.shipin_itemtop');
			// console.log(video);
			let videos= document.querySelectorAll('.shipin_itembottom a');
			// console.log(videos)
			let fade = document.querySelectorAll('.fade');
			// console.log(fade);
			let close = document.querySelectorAll('.video-head .head-right');
			// console.log(close);
			let end = document.querySelectorAll('.video-end');
			// console.log(end);
			let src = document.querySelectorAll('.shipin_item');
			// console.log(src);
			for(let i = 0 ; i<4;i++){
				video[i].onclick = function(){
						fade[i].style.display = 'block';
				}
				videos[i].onclick = function(){
						fade[i].style.display = 'block';
				}
				close[i].onclick = function (){
					fade[i].style.display = 'none';
				}
				let x = src[i].getAttribute('x');
				end[i].querySelector('iframe').setAttribute('src', x);
			}

//购物车部分
let car = document.querySelector('.head_shop');
console.log(car);
let tip = document.querySelector('.head_tip');
console.log(tip)
 car.onmouseenter = function(){
 	tip.style.display = 'block';
 }
 car.onmouseleave = function (){
 	tip.style.display = 'none';
 }