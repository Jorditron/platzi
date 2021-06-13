class Billete{
	constructor(v,c){
		this.valor=v;
		this.cantidad=c;
	}
	
}
var dinero=0;
var div; //esto será la división de los billetes pedidos entre los que hay
var papeles=0; // esto son los papeles que dará el cajero


var caja=[];			//aquí estarán guardados todos los billetes de la matriz caja
caja.push(new Billete(100,10));
caja.push(new Billete(50,50)); //estos son los  billetes que tendremos en la caja para dar
caja.push(new Billete(20,10));
caja.push(new Billete(10,10));

var entregado=[];		//aquí estarán guardados todos los billetes entregados


function entregarDinero(){
	
	
	var t=document.getElementById("dinero"); //ponemos en una variable el valor de input "dinero"
	dinero=parseInt(t.value);			//pasamos a entero el valor de esa variable y lo ponemos en otra variable.
	
		for(var elementosdecaja of caja){    //recorremos la matriz de los billetes que hay en caja
			
			if(dinero>0){
			
				div=Math.floor(dinero/elementosdecaja.valor);
			
					if(div>elementosdecaja.cantidad){
				
					papeles=elementosdecaja.cantidad;
				
				
					}
			
							else{
				
								papeles=div;
				
				
				
					}
					
					entregado.push(new Billete(elementosdecaja.valor, papeles));
					dinero=dinero-(elementosdecaja.valor*papeles);
	
		}
	
	}
	if(dinero>0){
		document.write("no hay money");
		
	}
	else{
		for(var e of entregado){
			
			
			resultado.innerHTML += e.cantidad+ " billetes de € "+e.valor+ "<br/>";
			
			if(e.valor=50){
				

				
			}
			
			
			
			
		}
		
		
	}
}







var r=document.getElementById("resultado");
var b= document.getElementById("extraer");
b.addEventListener("click",entregarDinero);

