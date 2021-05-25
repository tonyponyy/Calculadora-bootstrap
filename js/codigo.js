valor_anterior=0;
valor = 0;
operacion_actual =0;


function rescatar(){
   valor= +document.getElementById("pantalla").innerHTML
}

function imprimir(num){
    document.getElementById("pantalla").innerHTML = num;
}


function add(numero){
    if (document.getElementById("pantalla").innerHTML != 0){
    document.getElementById("pantalla").innerHTML= document.getElementById("pantalla").innerHTML+numero
    } else  document.getElementById("pantalla").innerHTML= numero;
}

function suma(){
    rescatar();
    valor_anterior = valor;
    valor = 0;
    operacion_actual =1;
    imprimir(0);
}


function resta(){
    rescatar();
    valor_anterior = valor;
    valor = 0;
    operacion_actual =2;
    imprimir(0);
}

function multiplicar(){
    rescatar();
    valor_anterior = valor;
    valor = 0;
    operacion_actual =3;
    imprimir(0);
}

function division(){
    rescatar();
    valor_anterior = valor;
    valor = 0;
    operacion_actual =4;
    imprimir(0);
}

function porcentaje(){
    rescatar();
    valor_anterior = valor;
    valor = 0;
    operacion_actual =5;
    imprimir(0);
}

function negar(){
    rescatar();
    valor_anterior = valor;
    valor =valor*-1 ;
    imprimir(valor);
}

function inversa(){
    rescatar();
    valor_anterior = valor;
    valor =1/valor ;
    imprimir(valor);
}

function raiz(){
    rescatar();
    valor = Math.sqrt(valor);
    imprimir(valor);
}

function retr(){
    valor = valor_anterior;
    imprimir(valor);
}

function igual(){

    rescatar();
 
    switch (operacion_actual) {
        case 1:
          //SUMA
          valor = valor+valor_anterior;
          break;
        case 2:
          //RESTA
          valor =  valor_anterior-valor;
          break;
        case 3:
          //MULTIPLICAR
          valor = valor*valor_anterior;
          break;
        case 4:
          //DIVISION
          valor = valor_anterior/valor;
          break;
        case 5:
          //PORCENTAJE
          valor = (valor*valor_anterior)/100;
          break;
        
      }
      valor_anterior = 0;
      operacion_actual=-1;
      imprimir(valor);

}

function retr(){
    let temp = valor;
    valor = valor_anterior;
    valor_anterior = temp;
    imprimir(valor);
}


function C(){
imprimir(0);
valor=0;
}