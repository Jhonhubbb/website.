function saludo(){
        alert("Web site Bostrap y js");
}

function suma(){
    //Declaramos las variables Necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    //Olicitamos los valores
    A = parseInt(prompt("Ingrese el 1er valor a sumar"));
    B = parseInt(prompt("Ingrese el 2do valor a sumar"));
    //Realizanmos los procesos
    S= A+B;
    //Mostramos los resultados en pantalla
    alert("El resultado de la suma es: "+S);
}

function operaciones(){
    //Declaramos las variables Necesarias
    let A = 0;
    let B = 0;
    let R = 0;
    //Olicitamos los valores
    A = parseInt(prompt("Ingrese el 1er valor a restar"));
    B= parseInt(prompt("Ingrese el 2do valor a restar"));
    //Realizanmos los procesos
    R= A+B;
    R= A-B;
    R= A*B;
    R= A/B;
    //Mostramos los resultados en pantalla
    alert("los resultado es: "+R / " ");
}

function mayor(){
    
    alert("Algoritmo que determinara el numro mayor de los numeros ingresado");

    let n1 = 0;
    let n2 = 0;

    n1 = parseInt(prompt("ingresa el 1er numero"));
    n2 = parseInt(prompt("ingrse el 2do numero"));

    if (n1 == n2) {
            alert("Los numeros son iguales");
    }
    else if (n1>n2){
        alert("El numero mayor es el 1ro: " +n1);
    }
    else {
        alert("Elvnumero mayor es el 2do: " +n2);
    }


}

//El colegio ABC REQUIERE UN ALGORITMO O UN SISTEMA que permita a los diferentes estudiantes ingesar su nombre, materia y calificacion y este, 
//le indique si aproba o reprobo la materia teniendo en cuenta que si aprueba si el puntaje si es mayor o igual a 6

function promedio (){
    alert("Algoritmo que determinara la nota ");

    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;
    let g = 0;

    a = parseInt(prompt("ingresa el 1er numero"));
    b = parseInt(prompt("ingrse el 2do numero"));
    c = parseInt(prompt("ingresa el 3er numero"));
    d = parseInt(prompt("ingrse el 4to numero"));
    e = parseInt(prompt("ingresa el 5to numero"));
    f = parseInt(prompt("ingrse el 6to numero"));
    g = parseInt(prompt("ingresa el 7mo numero"));
   
    st= a+b+c+d+e+f+g ;

    pr= st/7;

if (pr<6){
    alert("usted no aprobo su nota esta por debajo de 6:  " +pr);
}
else if (pr>=6){
    alert("usted  aprobo su nota esta por arriba de 6:  " +pr);
}

}
 // se requiere un algoritmo que al ingresar el valor en dolares nos indique a cuantos pesos colombianos equivale , euros, soles

 function capital(){

    let D =0;

    D = parseFloat(prompt("ingresa la cantidad de dolares"));
    
    VD=D*4.119;
    VE=D*0.92;
    VS=D*3.72;
   
    alert ( VD+  ' VALOR EN PESOS COLOMBIANOS ,\n '+VE+ ' VALOR EN EUROS ,\n '+VS+ ' VALOR EN SOLES');

    //alert('Esto que lo escriba en la 1ª línea, \n y esto en la 2ª');
       
 }

 //un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara depues de N numero de años teniendo en cuenta que el banco paga un interes del 1,3% mensual

 function CDT(){

    let C=0;
    let A=0;

    
    C= parseFloat(prompt("ingresa el capital a invertir"));
    A= parseFloat(prompt("ingresa a cuantos años desea invertir"));
    I= parseFloat(prompt("ingresa a cuantos latasa de interes"));


     M = A * 12;
     IA = I * 12;
     FI = 1 + (IA / 100);
     MF = C * Math.pow(FI, A);
     alert(`Después de ${A} años, el monto final será de $${MF}`);
 }
function Circulo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("Circulo");
}
function Movetop() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("top");

}

function Panel_lateral(){
    const panel =document.getElementById("Panel_lateral");
    panel.classList.toggle("active");

}
    
                                                                        