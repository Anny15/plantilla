window.onload=manejarclick;
var inicio="IP.jpg";
function manejarclick(){
	var imgen1=document.getElementById("imgen1");
	imgen1.addEventListener("click",function(){
							mostrar(imgen1.src);
								});
	imgen1.addEventListener("mouseover",function(){
							fijar(imgen1.src);
								});
	imgen1.addEventListener("mouseout",function(){
							salir(imgen1.src);
								});
	var imgen2=document.getElementById("imgen2");
	imgen2.addEventListener("click",function(){
							mostrar(imgen2.src);
								});
	imgen2.addEventListener("mouseover",function(){
							fijar(imgen2.src);
								});
	imgen2.addEventListener("mouseout",function(){
							salir(imgen2.src);
								});
	var imgen3=document.getElementById("imgen3");
	imgen3.addEventListener("click",function(){
							mostrar(imgen3.src);
								});
	imgen3.addEventListener("mouseover",function(){
							fijar(imgen3.src);
								});
	imgen3.addEventListener("mouseout",function(){
							salir(imgen3.src);
								});
	var imgen4=document.getElementById("imgen4");
	imgen4.addEventListener("click",function(){
							mostrar(imgen4.src);
								});
	imgen4.addEventListener("mouseover",function(){
							fijar(imgen4.src);
								});
	imgen4.addEventListener("mouseout",function(){
							salir(imgen4.src);
								});
	var imgen5=document.getElementById("imgen5");
	imgen5.addEventListener("click",function(){
							mostrar(imgen5.src);
								});
	imgen5.addEventListener("mouseover",function(){
							fijar(imgen5.src);
								});
	imgen5.addEventListener("mouseout",function(){
							salir(imgen5.src);
								});
	var imgen6=document.getElementById("imgen6");
	imgen6.addEventListener("click",function(){
							mostrar(imgen6.src);
								});
	imgen6.addEventListener("mouseover",function(){
							fijar(imgen6.src);
								});
	imgen6.addEventListener("mouseout",function(){
							salir(imgen6.src);
								});
	var imgen7=document.getElementById("imgen7");
	imgen7.addEventListener("click",function(){
							mostrar(imgen7.src);
								});
	imgen7.addEventListener("mouseover",function(){
							fijar(imgen7.src);
								});
	imgen7.addEventListener("mouseout",function(){
							salir(imgen7.src);
								});
	var imgen8=document.getElementById("imgen8");
	imgen8.addEventListener("click",function(){
							mostrar(imgen8.src);
								});
	imgen8.addEventListener("mouseover",function(){
							fijar(imgen8.src);
								});
	imgen8.addEventListener("mouseout",function(){
							salir(imgen8.src);
								});
	var imgen9=document.getElementById("imgen9");
	imgen9.addEventListener("click",function(){
							mostrar(imgen9.src);
								});
	imgen9.addEventListener("mouseover",function(){
							fijar(imgen9.src);
								});
	imgen9.addEventListener("mouseout",function(){
							salir(imgen9.src);
								});
	var imgen10=document.getElementById("imgen10");
	imgen10.addEventListener("click",function(){
							mostrar(imgen10.src);
								});
	imgen10.addEventListener("mouseover",function(){
							fijar(imgen10.src);
								});
	imgen10.addEventListener("mouseout",function(){
							salir(imgen10.src);
								});
}
function mostrar(imagen){
	inicio=imagen;
	var g =document.getElementById("I").src=inicio;
}
function fijar(ima){
	var a =document.getElementById("I").src=ima;
}
function salir(j){
	var v =document.getElementById("I").src=inicio;
}