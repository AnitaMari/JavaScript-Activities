function muestraMensaje() {
    alert("Bienvenido a JavaScript");
}

function miNombre() {
    let nombre = prompt("Introduce tu nombre");
    document.write("Mi nombre es " + nombre);
    nombre = "Ana Mari";
    operaciones();
}

function operaciones() {
    num1 = Number(prompt("Introduce un número"));
    num2 = Number(prompt("Introduce otro número"));
    suma = num1 + num2;
    resta = num1 - num2;
    multiplicacion = num1 * num2;
    division = num1 / num2;
    division = division.toFixed(2)
    resto= num1 % num2;
    document.write("NÚMEROS: ", num1, " y ", num2, "<br>", "<br>", "OPERACIONES: ", "<br>", "Suma: ", suma, "<br>", "Resta: ", resta, "<br>", "Multiplicación: ", multiplicacion, "<br>", "División: ", division, "<br>", "Resto: ", resto);
    // document.write(zz);
}
/* 
Se concatena con + Aquí abajo no funcionaría la coma
a="pedro";
b="garcía"

nombreCompleto=a+" "+b;
document.write(nombreCompleto)

num1= 1;
num2= 2;

numeros=num1+""+num2;
hay que poner las "" o te las suma.
*/
function meses() {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    document.write(meses[0]+"<br>"+meses[1]+"<br>"+meses[2]+"<br>"+meses[3]+"<br>"+meses[4]+"<br>"+meses[5]+"<br>"+meses[6]+"<br>"+meses[7]+"<br>"+meses[8]+"<br>"+meses[9]+"<br>"+meses[10]+"<br>"+meses[11]);

    // Otra versión:
/*     document.write(meses[0]+"<br>");
    document.write(meses[1]+"<br>");
    document.write(meses[2]+"<br>");
    document.write(meses[3]+"<br>");
    document.write(meses[4]+"<br>");
    document.write(meses[5]+"<br>");
    document.write(meses[6]+"<br>");
    document.write(meses[7]+"<br>");
    document.write(meses[8]+"<br>");
    document.write(meses[9]+"<br>");
    document.write(meses[10]+"<br>");
    document.write(meses[11]); */
}

function operadores() {
    let initValue = 3;
    document.write(++initValue + "<br>");

   // otra versión:

    --initValue;
    // initValue-- 
    // También funciona si lo pones detrás, aunque hay gente que dice que el otro es más rápido, y además este no funciona en el document.write
    document.write("Número: " + initValue + "<br>");

    let num = 3;
    num+=3;
    document.write(num + "<br>");

    //estos dos dan lo mismo ponga el ++ delante o detrás.
    let num2 = ++num;
    document.write(num2 + "<br>");

    let num3 = num++;
    document.write(num3 + "<br>");

    //  let num4++;
    // document.write(num4 + "<br>"); //no aparece. Undefined porque no se le ha asignado un valor.
}

function par() {
    num = Number(prompt("Introduce un número"));
    resto = num % 2;

    // document.write("Si el resultado es 0 tu número es par. " + "<br>" + "El resultado es " + resto)

    if (resto==0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
}

// EXPERIMENTO MÍO:
console.log(3 === "3");

let ana = 25;
ana= 40;
console.log(ana);

// const pepe = 30;
// pepe = 40; //con const no se puede reasignar un valor
// console.log(pepe)

function edad() {
    let edad = Number(prompt("Dime tu edad y te diré si eres mayor de edad :)"));

    if (edad>=18) {
        alert("Eres mayor de edad");
    } else {
        alert("Aún NO eres mayor de edad");
    }
}

function divisible() {
    let num1 = Number(prompt("Dime un número"));
    let num2 = Number(prompt("Dime otro número"));

    if (num1>=num2 && num1%num2==0) {
        alert("El " + num1 + " es divisible por el " + num2);
    } else if (num2>=num1 && num2%num1==0){
        alert("El " + num2 + " es divisible por el " + num1);
    } else if (num1>=num2 && num1%num2!=0){
        alert("El " + num1 + " NO es divisible por el " + num2);
    } else {  //No hace falta poner: else if (num2>=num1 && num2%num1!=0)
        alert("El " + num2 + " NO es divisible por el " + num1);
    }

  //Ver versión de Santiago con nueva variable mayor y menor.

//   let mayor; //hay que declarar las variables fuera
//   let menor;

//   if (num1>=num2) {
//     mayor = num1;
//     menor = num2;
//   } else {
//     mayor = num2;
//     menor = num1;
//   }

//   if (mayor%menor==0) {
//     alert(mayor + "es divisible entre" + menor);
//   } else {
//     alert(mayor + "NO es divisible entre" + menor);
//   }



    // if (num1%num2==0) {
    //     alert("El " + num1 + " es divisible por el " + num2);
    // } else if (num2%num1==0) {
    //     alert("El " + num2 + " es divisible por el " + num1);
    // } else {
    //     alert("NO es divisible");
    // }
}

function operacionesSwitch() {
    let num1 = Number(prompt("Dime un número"));
    let num2 = Number(prompt("Dime otro número"));
    let operacion=prompt("Elige opción: 1.-SUMA 2.-RESTA 3.MULTIPLICACIÓN 4.DIVISIÓN");


    //No olvidar poner break al final de cada case o se ejecutará el default
    switch(operacion) {
        case "1":
            resultado = num1 + num2;
            alert("La suma de: "+num1+" y "+num2+" es " + resultado);
            break
        case "2":
            resultado = num1 - num2;
            alert("La resta de: "+num1+" y "+num2+" es " + resultado);
            break
        case "3":
            resultado = num1 * num2;
            alert("La multiplicación de: "+num1+" y "+num2+" es " + resultado);
            break
        case "4":
            resultado = num1 / num2;
            alert("La división de: "+num1+" y "+num2+" es " + resultado);
            break
        default:
            alert("No has pulsado una opción correcta de operación");
    }
}

// letras dni:
// TRWAGMYFPDXBNJZSQVHLCKE
//la primera letra es 0. Calcular la letra del dni. El resto de dividir el número de tu dni entre 23 te da un resto que se corresponde con el índice de la letra, empezando por el 0

function dniSwitch() {
    let num = Number(prompt("Escribe el número de tu DNI"));   
    let resto = num % 23;


    //No olvidar poner break al final de cada case o se ejecutará el default

    //LO QUE VA EN EL SWITCH ES UNA VARIABLE Y LO QUE VA EN LOS DIFERENTES CASOS ES EL VALOR QUE PUEDE TENER ESA VARIABLE. NO PUEDEN SER RANGOS SINO UN VALOR CONCRETO.
    switch(resto) {
        case 0:           
            alert("La letra de tu DNI es la letra T");
            break
        case 1:
            alert("La letra de tu DNI es la letra R");
            break
        case 2:
            alert("La letra de tu DNI es la letra W");
            break
        case 3:
            alert("La letra de tu DNI es la letra A");
            break
        case 4:           
            alert("La letra de tu DNI es la letra G");
            break
        case 5:
            alert("La letra de tu DNI es la letra M");
            break
        case 6:
            alert("La letra de tu DNI es la letra Y");
            break
        case 7:
            alert("La letra de tu DNI es la letra F");
            break
        case 8:           
            alert("La letra de tu DNI es la letra P");
            break
        case 9:
            alert("La letra de tu DNI es la letra D");
            break
        case 10:
            alert("La letra de tu DNI es la letra X");
            break
        case 11:
            alert("La letra de tu DNI es la letra B");
            break
        case 12:           
            alert("La letra de tu DNI es la letra N");
            break
        case 13:
            alert("La letra de tu DNI es la letra J");
            break
        case 14:
            alert("La letra de tu DNI es la letra Z");
            break
        case 15:
            alert("La letra de tu DNI es la letra S");
            break
        case 16:           
            alert("La letra de tu DNI es la letra Q");
            break
        case 17:
            alert("La letra de tu DNI es la letra V");
            break
        case 18:
            alert("La letra de tu DNI es la letra H");
            break
        case 19:
            alert("La letra de tu DNI es la letra L");
            break
        case 20:           
            alert("La letra de tu DNI es la letra C");
            break
        case 21:
            alert("La letra de tu DNI es la letra K");
            break
        case 22:
            alert("La letra de tu DNI es la letra E");
            break
        default:
            alert("No has escrito bien el número");
    }
// TRWAGMYFPDXBNJZSQVHLCKE
}

function dni2() {
    let num = Number(prompt("Escribe el número de tu DNI")); 
    let resto = num%23; 
    let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    document.write("Tu DNI es :" + num + letras[resto]);
}

//CÓMO PASAR A STRING:
function dniSplit() {
    let num = Number(prompt("Escribe el número de tu DNI"));
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let resto = num%letras.length;
    let letras2 = letras.split("");

    document.write("Tu DNI es :" + num + letras2[resto]);

}

function bucleFor() {
    for (let i=0; i<=10; i++) {
        document.write(i+"<br>");
    }
    document.write("<hr>");

    for (let i=10; i>=0; i--) {
        document.write(i+"<br>");
    }
    document.write("<hr>");
    
    for (let i=2; i<=10; i+=2) {
        document.write(i+"<br>");
    }
    document.write("<hr>");

}

function tablaMultiplicar() {
    let num = Number(prompt("Escribe un número"));

    document.write("TABLA DE MULTIPLICAR DEL NÚMERO "+num+"<br>")

    for (let i=0; i<=10; i++) {
        document.write(num+" x "+i+" = "+num*i+"<br>");
    }
}

function mesesFor() {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    //i<meses.length es lo mismo y sería menos código
    for (let i=0;i<=meses.length-1;i++) {
    document.write(meses[i]+"<br>");
    }
}

function encabezado() {
    for (let i=1;i<=6;i++) {
    document.write("<h"+i+">Encabezado de nivel H"+i+"</h"+i+">");
    }
}

function intervalo() {
    let num1 = Number(prompt("Escribe un número"));
    let num2 = Number(prompt("Escribe otro número"));

    if (num1>=num2) {
        mayor = num1;
        menor = num2;
    } else {
        mayor = num2;
        menor = num1;
    }

    for (let i=menor; i<mayor; i++) {
        document.write(i+", ");
    }
    document.write(mayor);//o i
 

    // for(i=menor;i<=mayor;i++) {
    //     document.write(i);
    //     if(i<mayor) {
    //         document.write(", ");
    //     }
    // }
}

function intervalo2() {
    let num1 = Number(prompt("Escribe un número"));
    let num2 = Number(prompt("Escribe otro número"));

    if (num1>=num2) {
        mayor = num1;
        menor = num2;
    } else {
        mayor = num2;
        menor = num1;
    }

    for (let i=mayor; i>=menor; i--) {
        document.write(i);
        if (i==50) {
           document.write("*");
        } 
        if (i>menor)
            document.write(", ");
        }
    }

function intervaloMultiplo7() {
    let num1 = Number(prompt("Escribe un número"));
    let num2 = Number(prompt("Escribe otro número"));

    if (num1>=num2) {
        mayor = num1;
        menor = num2;
    } else {
        mayor = num2;
        menor = num1;
    }

    for (let i=menor; i<=mayor; i++) {
        document.write(i);
        if (i%7==0) {
            document.write("*");
        } 
        if (i<mayor)
            document.write(", ");
        }
}

function intervaloMultiploVariable() {
    let mult = Number(prompt("¿De qué número quieres ver los múltiplos?"));
    let num1 = Number(prompt("Escribe un número"));
    let num2 = Number(prompt("Escribe otro número"));
    let mayor, menor;

    if (num1>=num2) {
        mayor = num1;
        menor = num2;
    } else {
        mayor = num2;
        menor = num1;
    }

    for (let i=menor; i<=mayor; i++) {
        document.write(i);
        if (i%mult==0) {
            document.write("*");
        } 
        if (i<mayor)
            document.write(", ");
        }
}

function intervaloSoloMultiplo() {
    let mult = Number(prompt("¿De qué número quieres ver los múltiplos?"));
    let num1 = Number(prompt("Escribe un número"));
    let num2 = Number(prompt("Escribe otro número"));
    let mayor, menor;

    if (num1>=num2) {
        mayor = num1;
        menor = num2;
    } else {
        mayor = num2;
        menor = num1;
    }

    for (let i=menor; i<=mayor; i++) {
        if (i%mult==0) {
            document.write(i); 
            if (i<mayor && (mayor-mult)>=i) {
                document.write(", ");
            }         
        } 
    }        
}

function factorial() {
    let num = Number(prompt("Dime un número."));
    let total = num;

    for (let i=num-1; i>=1; i--) {
          total=total*i; //total*=i
        } document.write("El factorial de " + num + " es " + total + "<br>");

    total = 1;
    for (i=1;i<=num;i++) {
        total *= i;
    } document.write("El factorial de " + num + " es " + total);
}

function table() {
    let filas = Number(prompt("Introduce el número de filas"));
    let columnas = Number(prompt("Introduce el número de columnas."));

    document.write("<table style='border:solid 1px black; border-collapse:collapse;'")

    for (let i=1; i<=filas; i++) {
        document.write("<tr>")
        for (let j=1; j<=columnas; j++) {
            document.write("<td style='border: solid 1px black; padding:30px;'></td>")
        } document.write("</tr>")
    } document.write("</table>")
}

function ajedrez() {
    let filas = 8; //i
    let columnas = 8; //j
    let color, contador;
    contador = 1;

    document.write("<table style='border:solid 1px black; border-collapse:collapse;'")

    for (let i=1; i<=filas; i++) {
        document.write("<tr>");
        for (let j=1; j<=columnas; j++) {
            if (contador%2==0) {
                color= "black";
            } else {
                color= "white"
            }  document.write("<td style= 'background-color: " + color + "; padding: 30px'></td>"); 
            contador++;        
        } document.write("</tr>");
        contador++;
    } document.write("</table>");
}

function ajedrez2() { //SIN TERMINAR
    let filas = 8; //i
    let columnas = 8; //j

    document.write("<table style='border:solid 1px black; border-collapse:collapse;'")

    for (let i=1; i<=filas; i++) {
        document.write("<tr>");
        for (let j=1; j<=columnas; j++) {
            if (i%2==0 && j%2==0 || i%2!=0 && j%2!=0) {
                document.write("<td style='border: solid 1px black; padding:30px; background-color: black'></td>");
            } else {
                document.write("<td style='border: solid 1px black; padding:30px;'></td>");   
            } document.write("</tr>");
        } document.write("</table>");
    }
}

function bucleForIn() {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (i in meses) { //es más corto que for(i=0;i<meses.length; i++)
    document.write(meses[i]+"<br>");
    }
}

function sumaNumerosWhile() {
    let num = "0";
    let suma = 0;

    //No se puede comparar un número a una string, así que el prompt que mete la persona va a ser una string
    while (num != "=") {
        num = prompt("Introduce el número que quieras sumar (= para finalizar)");

    //si lo que mete la persona es un número, es el valor de la variable numero que creamos dentro, y se añade al contador suma.
        if(num==Number(num)) {
            numero = Number(num);
            suma+=numero;
        }
    }  document.write(suma);

    //// Si la condición de salirse fuera que fuera un 0 sería más fácil:
    // let num = 1;
    // let suma = 0;

    // while(num != 0) {
    //     num = Number(prompt("Introduce un nº. Para saber el total escribe 0"));
    //     document.write(num);
    //     suma+=num;
    // }

}

function sumaNumerosWhile2() {
    let num = 1;
    let suma = 0;
    let contador = 1;
    document.write("La suma de "); 

    while (num != 0) { //no podemos poner que num es 0 o aquí se saldría del bucle
        num = Number(prompt("Introduce el número que quieras sumar (0 para finalizar)"));

        if(num==Number(num)) {
            numero = Number(num);
            suma+=numero;
        } 
        if(num!=0) {
            if (contador>1) {
                document.write(" + ");
            }
            document.write(num);
            suma+=num;
            contador++;
        }
    }  document.write(" = " + suma);
}

function media() {
    let num = "0";
    let suma = 0;
    let contador = 0; 
    document.write("La media de los números ");

    //No se puede comparar un número a una string, así que el prompt que mete la persona va a ser una string
    while (num != "=") {
        num = prompt("Introduce un número. Si quieres ver la media de esos números pulsa =");

        if(num ==Number(num)) {   
            contador++;     
            numero = Number(num);

                if (contador>1) {
                    document.write(" , ");
                }
                document.write(numero);
                suma+=numero;
      
            }

    } document.write(" es "+ suma/contador);
}  

function sumaAleatoria() {
    let aleatorio = 0;
    let suma = 0;
    let contador = 1; //si lo inicializo en 0 tengo que poner el contador++ antes del if.

    do {
        aleatorio = parseInt((Math.random()*100));
        suma+=aleatorio;
        if (suma<1000) {
        document.write(contador + ": Número: " + aleatorio + ". SUMA: " + suma + "<br>");
        }
        contador++;
    } while (suma<1000);
}

//podríamos pasar la iteracion por parámetro
function estadistica() {
    let aleatorio = parseInt((Math.random()*10000));
    let iteracion = 100000;
    let counter0 = 0;
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;
    let counter7 = 0;
    let counter8 = 0;
    let counter9 = 0;
    
    //No olvidar poner break al final de cada case o se ejecutará el default

    //LO QUE VA EN EL SWITCH ES UNA VARIABLE Y LO QUE VA EN LOS DIFERENTES CASOS ES EL VALOR QUE PUEDE TENER ESA VARIABLE. NO PUEDEN SER RANGOS SINO UN VALOR CONCRETO.

    for (let i=1; i<=iteracion; i++) {
        aleatorio = parseInt((Math.random()*10));

        switch(aleatorio) {
            case 0:
                counter0++;
                break;
            case 1:
                counter1++;
                break;
            case 2:
                counter2++;            
                break;
            case 3:
                counter3++;                
                break;
            case 4:   
                counter4++;        
                break;
            case 5:
                counter5++;
                break;
            case 6:
                counter6++;
                break;
            case 7:
                counter7++;
                break;
            case 8:    
                counter8++;
                break;
            case 9:
                counter9++;
                break;
        }
    }

    document.write("El número 0 ha salido " + counter0 + " veces. (" + counter0/iteracion*100 + "%)<br>");
    document.write("El número 1 ha salido " + counter1 + " veces. (" + counter1/iteracion*100 + "%)<br>");
    document.write("El número 2 ha salido " + counter2 + " veces. (" + counter2/iteracion*100 + "%)<br>");
    document.write("El número 3 ha salido " + counter3 + " veces. (" + counter3/iteracion*100 + "%)<br>");    document.write("El número 4 ha salido " + counter4 + " veces. (" + counter4/iteracion*100 + "%)<br>");  
    document.write("El número 5 ha salido " + counter5 + " veces. (" + counter5/iteracion*100 + "%)<br>");  
    document.write("El número 6 ha salido " + counter6 + " veces. (" + counter6/iteracion*100 + "%)<br>");  
    document.write("El número 7 ha salido " + counter7 + " veces. (" + counter7/iteracion*100 + "%)<br>");  
    document.write("El número 8 ha salido " + counter8 + " veces. (" + counter8/iteracion*100 + "%)<br>");  
    document.write("El número 9 ha salido " + counter9 + " veces. (" + counter9/iteracion*100 + "%)<br>");  

    //esto es igual pero más corto. CON LA FUNCIÓN EVAL
    // for (j=0;j<=9;j++) {
    //     document.write("El " + j + " ha aparecido " + eval("num"+j) + " veces = " + eval("num"+j) / iteracion * 100 + "%<br>");
    // }
}

//esta es más corta que la anterior
function estadistica2() {
    let i, aleatorio;
    let num=[0,0,0,0,0,0,0,0,0,0];
    let iteracion = 100000;

    //el do while es para que no cuente el 0.
    for (i=1; i<= iteracion; i++) {
        do {
            aleatorio = parseInt(Math.random()*10);
        } while (aleatorio < 1);
        ++num[aleatorio];
    }

    for (i=0;i<=9;i++) {
        document.write("El " + i + " ha aparecido " + num[i] + " veces = " + num[i] / iteracion * 100 + "%<br>");
    }
}

//aquí sí se cuenta el 0
function estadistica3() {
    let i, aleatorio;
    let num=[0,0,0,0,0,0,0,0,0,0];
    let iteracion = 100000;

    for (i=1; i<= iteracion; i++) {
        aleatorio = parseInt(Math.random()*10);
        ++num[aleatorio];
    }
    //CON WHILE. HABRÍA QUE DARLE UN VALOR A i O NO ENTRARÍA EN EL BUCLE:
    // let i = 1;
    // while(i<=iteracion) {
    //     aleatorio=parseInt(Math.random()*10);
    //     ++num[aleatorio];
    //     ++i;
    // }

    for (i in num) { //empieza a recorrer todos los índices de la array
        document.write("El " + i + " ha aparecido " + num[i] + " veces = " + num[i] / iteracion * 100 + "%<br>");
    }
}

function parametros(nombre, color) {
    document.write("<span style='color:" + color + ";'> Hola " + nombre + ", bienvenido al curso de Javascript.</span>"); //podría ser p o h1, h2...
}

function calculaFuncion() {
    let num1 = Number(prompt("Dime un número"));
    let num2 = Number(prompt("Dime otro número"));
    let operacion=prompt("Elige opción: 1.-SUMA 2.-RESTA 3.MULTIPLICACIÓN 4.DIVISIÓN");


    //No olvidar poner break al final de cada case o se ejecutará el default
    switch(operacion) {
        case "1":
            resultado = suma(num1,num2);
            alert("La suma de: "+num1+" y "+num2+" es " + resultado);
            break
        case "2":
            resultado = resta(num1,num2);
            alert("La resta de: "+num1+" y "+num2+" es " + resultado);
            break
        case "3":
            resultado = multiplicacion(num1,num2);
            alert("La multiplicación de: "+num1+" y "+num2+" es " + resultado);
            break
        case "4":
            resultado = division(num1,num2);
            alert("La división de: "+num1+" y "+num2+" es " + resultado);
            break
        default:
            alert("No has pulsado una opción correcta de operación");
    }
}

function suma(a,b) {
    let resultado=a+b;
    return resultado; //solo puede devolver una cosa porque arriba solo se le puede asignar a una variable (resultado = suma(num1,num2))
}

function resta(a,b) {
    let resultado=mayor(a,b)-menor(a,b);
    return resultado;
}

function multiplicacion(a,b) {
    let resultado=a*b;
    return resultado;
}

function division(a,b) {
    let resultado=mayor(a,b)/menor(a,b);
    return resultado;
}

function mayor(a,b) {
    let mayor;
    if (a>b) {
        mayor = a;
    } else {
        mayor = b;
    }
    return mayor;
}

function menor(a,b) {
    let menor;
    if (a<b) {
        menor = a;
    } else {
        menor = b;
    }
    return menor;
}

//ESTO CALCULA EL MAYOR DE VARIOS NÚMEROS (podría meter una array también)
//mayor=Math.max(1,3,89,267,2,5);

function mayorArray(num) {
    let mayor = 0;
    for (let i=0; i<num.length; i++) {    
        if (num[i]>mayor) {
            mayor=num[i];
        } 
    } 
    return mayor;

    //otra versión:
    // for (let i in num) {
    //     if (num[i]>mayor) {
    //         mayor=num[i];
    //     }
    // }
    // return mayor;
}

//no hace falta darle un valor a dato con do porque se inicia con el valor que se le da dentro la primera vez que entra. Con solo while sí que habría que darle un valor inicial.
function array1() {
    let num = [];
    let dato;
    do { //la persona mete un dato que no pasamos a número porque hay que compararlo luego con q.
        dato = prompt("Introduce nº (escribe q para finalizar)");
        if(dato==Number(dato)) { //si el dato que mete la persona es un número (y no una letra), convierte ese string número en número y lo añade a la array. O sea compara "3" con 3.
            dato = Number(dato);
            num.push(dato);
        }
    } while (dato!="q")

    let mayor = mayorArray(num);
    document.write(num+" <br>El mayor es: " + mayor)
}

//MÉTODOS PARA STRINGS:
function funcionesTexto() {
    let frase = prompt("Introduce una frase");
    let posicion = Number(prompt("Introduce el nº de posición deseada"));
    let subcadena = prompt("Subcadena a buscar");
    //.length calcula la longitud de un texto o un array.
    let longitud = frase.length;

    document.write(frase+"<br>");
    document.write("Longitud: " + longitud + " caracteres<br>");
    document.write("Posición: " + posicion + " es " + frase.charAt(posicion) + "<br>");
    document.write("Posición subcadena con indexOf(): " + subcadena + " es " + frase.indexOf(subcadena, 0) + "<br>");
    document.write("Posición subcadena con lastIndexOf(): " + subcadena + " es " + frase.lastIndexOf(subcadena) + "<br>");
}

function dniCharAt() {
    let dni = Number(prompt("Escribe el número de tu DNI"));
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    document.write("Tu DNI es: " + dni + letras.charAt(dni % 23));
}

function sinEspacios() {
    let frase = prompt("Introduce una frase");
    let fraseSinEspacios = frase.split(" ");
    let fraseFinal = "";
   
    document.write("La frase con espacios es :" + frase+ "<br>");
    for (i in fraseSinEspacios) {
        fraseFinal += fraseSinEspacios[i];
    } document.write("La frase sin espacios es: " +  fraseFinal);
  
    //otra forma de hacerlo es con el split y el join.
    // document.write(fraseSinEspacios.join(""));
}

function seleccionResaltada() {
    let texto = prompt("Introduce un texto","En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.");
    // let texto = prompt("Introduce un texto","Hola Mundo");

    let seleccion = prompt("¿Qué quieres resaltar?");

    let textoSinSeleccion = texto.split(seleccion); 
    document.write("Texto original: " + texto + "<br> Texto sin selección (nueva array): " + textoSinSeleccion + "<br> Longitud de la nueva array: "+textoSinSeleccion.length +"<br> Resaltar: " + seleccion + "<br>")
    
    //textoSinSeleccion es un array sin la seleccion, cada vez que hay un elemento seleccionado se pone una coma y se separa el elemento, por eso hacemos el for y despues de cada indice añadimos la seleccion resaltada,porque es ahí donde se quitaron.
    for (i in textoSinSeleccion) {
        document.write(textoSinSeleccion[i]);
        if (i<textoSinSeleccion.length-1) {
        document.write("<mark>"+seleccion+"</mark>");
        } //hacemos esto porque añadimos la seleccion al final de cada i de la array y por eso añade uno extra al final. Si fuera "H","la Mund", serían 3 elementos porque al quitar la última o pone una coma y detrás habría un elemento fantasma que no vemos pero que lo cuenta. Está hecho así por si queremos añadir algo después. Si fuera ,"ola Mundo" habría 2 elementos. Al quitar la H hay un elemento fantasma delante.
    }   

    //OTRA VERSIÓN:
    // let cadenaMarcada = "";
    // for (i in textoSinSeleccion) {
    //     cadenaMarcada += textoSinSeleccion[i];
    //     if (i<textoSinSeleccion.length-1) {
    //         cadenaMarcada+="<mark>"+seleccion+"</mark>";
    //     }
    //     document.write(cadenaMarcada);
    // }

    // EJEMPLO:
    // Hola Mundo
    // split("o") //seleccion. Quita esa letra y devuelve un array cortada en cada sitio donde he quitado esa letra.
    // ["H", "la Mund"] //después tengo que recorrer la array y añadir la selección si no es el último elemento de la array (porque añadía uno extra al final)

    document.write("<br> Crear substring empezando en el índice 3 y terminando en el índice 6 (3,6): "+ texto.substring(3,6) + "<br>");
}

function separarCaracteres() {
    let texto = prompt("Introduce un texto","En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero.");
    let simbolo = prompt("Introduce un símbolo");

    let texto2 = texto.split(""); //creo una array para separar cada caracter.

    //VERSIÓN 1
    // for (i in texto2) {
    //     document.write(texto2[i]);
    //     if (i<texto2.length-1) {
    //     document.write(simbolo);
    //     } 
    // }

    //OTRA VERSIÓN:
    // let textoSeparado = "";
    // for (i in texto2) {
    //     textoSeparado+=texto2[i];
    //     if (i<texto2.length-1) {
    //     textoSeparado+=simbolo;
    //     }
    // } document.write("<br>" + textoSeparado + "<br>");

    //OTRA VERSIÓN: 
    //PODEMOS TRATAR UNA CADENA DE TEXTO (STRING) COMO SI FUERA UNA ARRAY.
    document.write("<br>" + texto + "<br>");

    for (i in texto) {
        document.write(texto[i]);
        if(i<texto.length-1) {
            document.write(simbolo);
        }
    }

}

function sinSplitJoin() {
    let texto = prompt("Introduce un texto","En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero.");
    let simbolo = prompt("Introduce un símbolo");

    document.write("<br>" + texto + "<br>");

    let arrayTexto = texto.split(" ");
    texto="";

    for (i in arrayTexto) {
        texto+=arrayTexto[i];
    }

    for (i in texto) {
        document.write(texto[i]);
        if(i<texto.length-1) {
            document.write(simbolo);
        }
    }

}

//SPLIT AND JOIN
//SPLIT SE USA CON STRINGS Y DEVUELVE UN ARRAY.
//JOIN SE USA CON STRINGS Y ARRAYS Y DEVUELVE UN STRING.
function splitJoin() {
    let texto = prompt("Introduce un texto","En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero.");

    let simbolo = prompt("Introduce un símbolo");

    let texto2 = texto.split(" ").join(""); //creo una array para quitar el espacio y después uno los elementos de la array y los convierto en un string.

    let texto3 = texto2.split("").join(simbolo); //convierto el string texto3 en caracteres separados y los unimos por el símbolo.

    document.write("<br>" + texto2 + "<br>" + texto3 + "<br>");
}

function mitadString() {
    let texto = prompt("Introduce un texto","En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero.");
   
    let mitad = texto.length/2; //NO HACE FALTA REDONDEAR PORQUE EL MÉTODO SUBSTRING COGE SOLO LA PARTE ENTERA

    let mitad1 = texto.substring(0,mitad);
    let mitad2 = texto.substring(mitad, texto.length);

    document.write(mitad1 + "<br>" + mitad2 + "<br>");

    //SE PODRÍA HACER DIRECTAMENTE ASÍ (sin crear las variables):
    document.write(texto.substring(0,mitad) + "<br>" + texto.substring(mitad, texto.length));
}

function convierteNumero() {
    texto = prompt("Introduce un nº","23.5895");
    document.write("conversión con parseInt(): " + parseInt(texto)+"<br>"); //pasa a número y redondea hacia abajo (o sea, quita decimales y deja el entero igual)
    document.write("conversión con Number(): " + Number(texto)+"<br>"); //pasa a número y lo deja como está
    document.write("conversión con parseFloat(): " + parseFloat(texto)+"<br>"); //pasa a número y deja los decimales tal cual.
    document.write("conversión con Math.round(): " + Math.round(texto)+"<br>"); //hace el redondeo normal. Si es 0.5 o más pone uno más. Pero solo pone enteros, nunca decimales.
    document.write("conversión con Math.floor(): " + Math.floor(texto)+"<br>"); //redondea siempre hacia abajo. O sea, que deja el número entero sea cuales sean los decimales.
    document.write("conversión con Math.ceil(): " + Math.ceil(texto)+"<br>"); //redondea siempre hacia arriba. O sea, pone el número siguiente del entero con decimales, sea cuales sean los decimales.
    document.write("conversión con toFixed(): " + Number(texto).toFixed(2)+"<br>"); //pones a cuantos decimales quieres redondear y te hace el redondeo normal. Si es 0.5 o más pone uno más.
    document.write(isNaN(texto)+"<br>"); //false. El prompt es un número.
    document.write(!isNaN(texto)+"<br>"); //true. No no es un número, o sea que es un número.
    document.write(texto*5+"----"+(Number(texto)+5)+"<br>"); //como el + concatena además de sumar, si no convertimos el texto a número y hacemos la operación entre () no funciona. Con la multiplicación no hay problemas porque solo sirve para eso.
}

// function meteNumero() {
//     let num;
//     do {
//         num = prompt("Introduce un nº válido")
//     } while (isNaN(num));
//     num = Number(num);
//     return num;
// }

//VERSION MEJORADA PARA PODER USARLA EN LAS DEMAS FUNCIONES:
function meteNumero(texto) {
    let num;
    do {
        num = prompt(texto)
    } while (isNaN(num));
    num = Number(num);
    return num;
}

function calculaFuncionConMeteNumero() {
    let num1 = meteNumero("Dime un número");
    let num2 = meteNumero("Dime otro número");
    let operacion=prompt("Elige opción: 1.-SUMA 2.-RESTA 3.MULTIPLICACIÓN 4.DIVISIÓN");


    //No olvidar poner break al final de cada case o se ejecutará el default
    switch(operacion) {
        case "1":
            resultado = suma(num1,num2);
            alert("La suma de: "+num1+" y "+num2+" es " + resultado);
            break
        case "2":
            resultado = resta(num1,num2);
            alert("La resta de: "+num1+" y "+num2+" es " + resultado);
            break
        case "3":
            resultado = multiplicacion(num1,num2);
            alert("La multiplicación de: "+num1+" y "+num2+" es " + resultado);
            break
        case "4":
            resultado = division(num1,num2);
            alert("La división de: "+num1+" y "+num2+" es " + resultado);
            break
        default:
            alert("No has pulsado una opción correcta de operación");
    }
}

function funcionEval() {
//EVAL TE CALCULA LO QUE HAY DENTRO SI SE PUEDE CALCULAR.
    let miTexto = "3 + 5";
    //let miTexto2 = "hola";
    eval("document.write(miTexto+'<br>')"); //3+5
    eval("document.write(eval(miTexto)+'<br>')"); //8
    document.write(eval(miTexto)+'<br>'); //8
    // document.write(eval(miTexto2)); //no imprime nada y provoca un error que no deja ver lo demás.
    document.write(eval(miTexto)/2+'<br>'); //4
    document.write(eval(miTexto/2)+'<br>'); //NaN
}

function raizCuadrada() {
    let num = Math.abs(meteNumero("Introduce un número"));
    //Math.abs es para convertir un número negativo en absoluto (positivo)
    let raizCuadrada = Math.sqrt(num).toFixed(2);
    document.write("La raiz cuadrada de "+num+" es: "+raizCuadrada);   
    return raizCuadrada;
}

function letra() {
    let texto = prompt("Introduce un texto");
    let indice;
    let letra;

    //EL IF NO FUNCIONA PORQUE SOLO SE EJECUTA UNA VEZ, Y SI LA PERSONA VUELVE A METER MAL EL NÚMERO YA NO SE EJECUTA DE NUEVO
    // if (indice>texto.length) {
    //     indice = prompt("Introduce un número");
    // } else {
    //     letra = texto.charAt(indice);
    //     document.write(letra);
    // }

    do {
        //indice = prompt("Introduce un número");
        indice = meteNumero("Introduce un número");
        if (indice > texto.length-1 || indice<0) {
            alert("El índice es mayor que la longitud del texto");
        }
    } while (indice > texto.length-1 || indice<0);

    letra = texto.charAt(indice).toUpperCase();
    document.write(letra);
    return letra;
}


function principal() {
    let num = Math.abs(meteNumero("Introduce un número"));
    let texto = prompt("Introduce un texto");
    let indice = meteNumero("Introduce un número");
    let letra;
    document.write("La raiz cuadrada de " + num + " es: " + raizCuadrada(num));  
    document.write("En el texto: '" + texto + " el índice (posición) " + indice + " es la letra " + letra());  

    // return raizCuadrada, letra;

}

function vocales() {
    let texto = prompt("Introduce un texto");
    let texto2 = texto.toLowerCase();
    let cont = 0;

    for (let i in texto2) { //otra opción es texto[i] en lugar de texto.charAt(i) porque es como un array de letras
        if (texto2.charAt(i) == "a" || texto2.charAt(i) == "e" || texto2.charAt(i) == "i" || texto2.charAt(i) == "o" || texto2.charAt(i) == "u") {
        cont++;
        }
    }

    document.write("Texto: '"+texto+"'<br> Este texto tiene "+
    cont+" vocales.");
}

function reverse() {
    let texto = prompt("Introduce un texto", "Hola Mundo");
    let texto2 = texto.split("").reverse().join("");
    // el split me convierte el string en un array, con el reverse que funciona con arrays le doy la vuelta, y con el join que funciona con strings y arrays lo convierto de nuevo en un string y le quita las comas.

    document.write(texto2);
}


//VERSIÓN REVERSE DE SANTIAGO SIN USAR EL MÉTODO REVERSE:
function reves() {
    let texto = prompt("Introduce un texto", "HOLA Mundo");
    let textoReves="";//Esto es un ACUMULADOR que guarda los valores que vamos añadiendo. Intervienen 2 variables. En el ejemplo de las vocales era un CONTADOR. En el contador solo interviene una variable (num++ num=num+1, num=num+2 num+=2)

    for (let i=texto.length-1; i>=0; i--) {
        textoReves+=texto[i];
    }

    document.write(texto+"<br>"+textoReves);
}

function eliminaEspacios(texto) {
    let textoSin = "";
    for (i in texto) {
        if(texto[i] != " ") {
            textoSin+=texto[i];
        }
    }
    //OTRA VERSIÓN:
    // let textoSin = texto.split(" ").join("");
    return textoSin; 
}

//PALÍNDROMOS:
// A ti no bonita
// a la catalana banal atacala
// dabale arroz a la zorra el abad
// Allí ves a Sevilla
// Ana lava lana
// Ana lleva al oso la avellana .... 
function palindromo() {
    let textoOriginal = prompt("Introduce un texto", "Ana lleva al oso la avellana");
    let texto = textoOriginal.toLowerCase();
    let texto1 = texto.split(" ").join("");//sin espacios
    let texto2 = texto1.split("").reverse().join("");

    document.write("Texto original: '"+textoOriginal+"'<br>Texto 1: '"+texto1+"'<br>Texto 2: '"+texto2+"'<br>")
    if (texto1 == texto2) {
        document.write("Estos dos textos son un palíndromo, o sea, se leen igual al derecho y al revés.")
    } else {
        document.write("Estos dos textos NO son un palíndromo, o sea, NO se leen igual al derecho y al revés.")
    }
}

//PALINDROMO VERSIÓN SANTIAGO
function palindromo2() {
    let texto = prompt("Introduce un texto","a la catalana banal atacala");
    texto = texto.toLowerCase();
    let textoSin = eliminaEspacios(texto);
    let textoReves = reves1(textoSin);
    if(textoSin==textoReves){
        document.write(texto + " es un Palíndromo");
    } else{
        document.write(texto + " NO es un Palíndromo");
    }
}

//formato inglés. Los meses empiezan a contar por = (enero), así que todos son uno menos (diciembre=11)
function fecha() {
    let fecha = new Date();
    let cumple = new Date(1995,11,17);
    let fechaGmt = (Date.UTC(1970, 0, 2, 12, 0, 0))/1000/60/60/24; //días entre esa fecha y la referencia que es el 1 de enero de 1979
    document.write(fecha+"<br>"+cumple+"<br>"+fechaGmt);
    // IMPRIME:
    // Thu Aug 10 2023 12:28:41 GMT+0200 (hora de verano de Europa central)
    // Sun Dec 17 1995 00:00:00 GMT+0100 (hora estándar de Europa central)
    // 1.5
}

// calcular días entre dos fechas
function diasEntreFechas() {
    let year = Number(prompt('año'));
    let mes = Number(prompt('mes'))-1;
    let dia = Number(prompt('día'));
    
    let fecha1Gmt = Date.UTC(year, mes, dia);
    document.write(fecha1Gmt+"<br>");

    let year2 = Number(prompt('año'));
    let mes2 = Number(prompt('mes'))-1;
    let dia2 = Number(prompt('día'));
    
    let fecha2Gmt = Date.UTC(year2, mes2, dia2);
    document.write(fecha2Gmt+"<br>");

    let diferencia = Math.abs(fecha1Gmt-fecha2Gmt); 
    document.write(diferencia+"<br>");//con Math.abs da igual cuál sea el mayor o el menor o que salga el resultado en negativo porque lo convierte en positivo.

    let dias = diferencia/1000/60/60/24;
    document.write(dias);
}

//VERSION SANTIAGO
function diasEntreFechas2() {
    let fecha1 = prompt("Introduce la primera fecha (AAAA/MM/DD");
    let fecha2 = prompt("Introduce la segunda fecha (AAAA/MM/DD");

    let arrayFecha1 = fecha1.split("/");
    let arrayFecha2 = fecha2.split("/");

    let year1 = Number(arrayFecha1[0]);
    let mes1 = Number(arrayFecha1[1])-1;
    let dia1 = Number(arrayFecha1[2]);
    let year2 = Number(arrayFecha2[0]);
    let mes2 = Number(arrayFecha2[1])-1;
    let dia2 = Number(arrayFecha2[2]);

    let diferenciaDias = Math.abs((Date.UTC(year1,mes1,dia1)-Date.UTC(year2,mes2,dia2)))/1000/60/60/24;

    document.write(diferenciaDias+"<br>");//con Math.abs da igual cuál sea el mayor o el menor o que salga el resultado en negativo porque lo convierte en positivo.

}

//VERSIÓN CON MÉTODOS DE FECHAS
function diasEntreFechas3() {
    // let fecha1 = prompt("Introduce la primera fecha (AAAA/MM/DD");
    // let fecha2 = prompt("Introduce la segunda fecha (AAAA/MM/DD");

    //AHORA METIENDO LA FECHA EN FORMATO ESPAÑOL:
    let fecha1 = prompt("Introduce la primera fecha (DD/MM/AAAA");
    let fecha2 = prompt("Introduce la segunda fecha (DD/MM/AAAA");

    fecha1 = fecha1.split("/").reverse().join("/");//para cambiar el orden de la fecha y que sea año/mes/dia en formato inglés.
    fecha2 = fecha2.split("/").reverse().join("/");

    fecha1 = new Date(fecha1);
    fecha2 = new Date(fecha2);

    let year1 = fecha1.getFullYear();
    let mes1 = fecha1.getMonth();
    let dia1= fecha1.getDate();
    
    let year2 = fecha2.getFullYear();
    let mes2 = fecha2.getMonth();
    let dia2= fecha2.getDate();
        
    let diferenciaDias = Math.abs((Date.UTC(year1,mes1,dia1)-Date.UTC(year2,mes2,dia2)))/1000/60/60/24;

    document.write(diferenciaDias+"<br>");
}

//FUNCIÓN QUE DEVUELVA LA FECHA DADA EN FORMATO DD/MM/AAAA EN ESTE FORMATO: Domingo, 2 de Septiembre de 1979
function fechaFormatoNormal() {
    let fecha = prompt("Introduce la primera fecha (DD/MM/AAAA"); //en formato español.

    fecha = fecha.split("/").reverse().join("/");//devuelve la fecha en formato inglés(AAAA/MM/DD);
    //EL JOIN NO HACE FALTA PORQUE LA FUNCIÓN DE ABAJO LEE LAS ARRAYS TAMBIÉN. NO HACE FALTA CONVERTIRLA A STRING Y VOLVER A AÑADIR LA /
    console.log(fecha);

    fecha = new Date(fecha);//convierte nuestra variable fecha que es texto en un formato fecha para que lo entienda js y podamos usar los métodos de abajo.
    console.log(fecha);

    let year = fecha.getFullYear(); //devuelve año en número.
    let mes = fecha.getMonth();//devuelve mes en número (uno menos del normal. Enero es 0)
    let diaMes= fecha.getDate(); //devuelve el número del día del mes.
    let diaSemana = fecha.getDay(); //devuelve el número del día de la semana empezando por el domingo que es el 0.

    let diaSemanaLetras = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    let diaMesLetras = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

    document.write(diaSemanaLetras[diaSemana]+", "+diaMes+" de "+diaMesLetras[mes]+" de "+year+"."); //el índice de las arrays son los números de las variables de arriba.   
}

function calcularEdad() {
    let fechaNacimiento = prompt("Introduce tu fecha de nacimiento en este formato: DD//MM//AAAA");
    let hoy = new Date(); //se genera automáticamente la fecha de hoy si se deja new Date() vacío.

    fechaNacimiento = fechaNacimiento.split("/").reverse();//no hace falta el join.

    fechaNacimiento = new Date(fechaNacimiento);

    let year1 = fechaNacimiento.getFullYear();
    let mes1 = fechaNacimiento.getMonth();
    let dia1= fechaNacimiento.getDate();
    
    let year2 = hoy.getFullYear();
    let mes2 = hoy.getMonth();
    let dia2= hoy.getDate();
        
    // let diferenciaDias = Math.abs((Date.UTC(year2,mes2,dia2)-Date.UTC(year1,mes1,dia1)))/1000/60/60/24;
    // let edad = Math.floor(diferenciaDias/365.25);//pongo el 0.25 porque cada 4 años es un año bisiesto que tiene 1 día más, por lo que divido ese día de más entre cuatro y añado a cada año un cuarto. Con el Math.floor quito la parte decimal y dejo solo el entero.

    //VERSIÓN ABREVIADA:
    let edad = Math.floor((Date.UTC(year2,mes2,dia2)-Date.UTC(year1,mes1,dia1))/1000/60/60/24/365.25);
    console.log(fechaNacimiento);
    console.log(hoy);
    // console.log(diferenciaDias);

    document.write("Mi edad es: "+edad+" años.");
}

function calcularEdad2() {
    let fechaNac, hoy, edad;

    do {
        fechaNac = prompt("Introduce tu fecha de nacimiento en el formato: DD/MM/AAAA");
        fechaNac = fechaNac.split("/").reverse();
        hoy = new Date().valueOf();//fecha de hoy en milisegundos.
        fechaNac = new Date(fechaNac).valueOf();//fecha de nacimiento en milisegundos.
        if (hoy<fecha) {
            alert("Es una fecha inválida. Debe ser una fecha anterior o igual al día de hoy")
        }
    } while (hoy<=fecha);

    edad = (hoy-fechaNac)/1000/60/60/24/365.25;
    document.write("Tu edad es: "+parseInt(edad)+" años.");
}

function arrays() {
    let array1 = new Array(10);
    console.log(array1);//array vacía (comas sin nada más)
    array1[2]= "Santi";
    console.log(array1);//,,Santi,,,,,,
    array1[2]= "Pepe";
    console.log(array1);//,,Pepe,,,,,,,
    array1[20] = "Ana";//,,Pepe,,,,,,,,,,,,,,,,Ana (te añade los del medio. No he contado las comas)

    let array2 = new Array();
    console.log(array2);//crea un array vacía sin elementos ni comas.
    let array3 = []; 
    console.log(array3); //crea un array vacía sin elementos ni comas. Es igual que poner new Array()

    let texto = array1.join("-"); //Une los elementos de la array por - y devuelve un string.
    document.write(texto+"<br>");

    let array1Copia =[...array1];
    array1Copia.join("");//imprime los elementos sin espacio todos pegados y devuelve un string.
    document.write(array1Copia+"<br>");

    // let borrado = array1.pop();
    // document.write(array1+"<br>"+ array1Copia+"<br>Borrado: "+borrado+"<br>");

    // let diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    let diaMes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    diaMes.splice(3,0,"Santi","Pepe"); //...marzo, santi, pepe, abril...//no borra nada, solo añade en el índice 3
    document.write(diaMes+"<br>");
    let borrado = diaMes.pop();//borro el último: diciembre
    document.write(diaMes+"<br>Borrado: "+borrado+"<br>");
    diaMes.push(borrado);//o "diciembre". Lo añade al final.
    document.write(diaMes+"<br>Borrado: "+borrado+"<br>");
    let diaMesCopia = diaMes.push("diciembre2"); //=
    document.write(diaMesCopia+"<br>");

    let diaMes2 = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    diaMes2.splice(3,2,"Santi","Pepe"); //...marzo, santi, pepe, junio...//borra 2 elementos en el índice 3 y añade esos otros dos
    document.write(diaMes2);

    let diaMes3 = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let primero = diaMes3.shift();//eliminamos el primer elemento y lo metemos en la variable primero
    document.write("con shift en otra variable: "+primero+"<br>"+diaMes3+"<br>")
    diaMes3.unshift(primero);
    document.write("con unshift: "+diaMes3+"<br>")
}    

//ORDENAR CON SORT(): primero números, luego mayúsculas y luego minúsculas
function ordenar() {
    // let num = Number(prompt("1,6,102,34,2","Introduce los números separados por una coma"));
    let num = [1,6,102,34,2];
    num.sort(function (a, b) {
        return a-b;
    })
    console.log(num);
}

function ordenar2() {
// let array = [5,2,85,25,75,234];
let array = prompt("Introduce varios números separados por una coma");
console.log(array);
array = array.split(",");
console.log(array);

for (let i=0; i<array.length; i++) {
    for (let j=0; j<array.length; j++ ) {
        if(j+1 !== array.length) {
            if(array[j]>array[j+1]) {
                let elemIntercambio = array[j+1];
                array[j+1] = array[j];
                array[j] = elemIntercambio;
            }
        }
    }
}
document.write(array + "<br>");
}

function aleatorioEntreDosNum(a,b) {
    let aleatorio = parseInt(Math.random()*(b-a+1))+a;
    return aleatorio; //0-2= (0.99*3)+0
    //el math.random siempre va del 0 al 0.99, nunca llega al 1
}

function estadisticaX(iteracion) {
    let i = 1;
    let aleatorio;
    let num = [0,0,0,0,0,0,0,0,0,0];

    while (i<= iteracion) {
        aleatorio = aleatorioEntreDosNum(3,5);
        ++num[aleatorio];
        i++;
}

    for (i in num) { //i=0;i<=9;i++
         document.write("El " + i + " ha aparecido " + num[i] + " veces = " + num[i] / iteracion * 100 + "%<br>");
    }
}

function compruebaNumEnArray(num, arr) {
    // let num = 5;
    // let arr = [1,0,8,23,5,7,9];
    let dentro = false;
    
    for (let i=0;i<arr.length;i++) {
        if (arr[i]==num) {
            dentro = true;
        }
    }
    return dentro;
}

function generaCombinacion(numElemArr, min, max) {
    let aleatorio;
    let arr=[]; 

    while (arr.length<numElemArr) {
        aleatorio = aleatorioEntreDosNum(min,max);//no tienes que llamarlos a y b como los parámetros de la función que llamas, lo importante es el orden
        repetido = compruebaNumEnArray(aleatorio,arr);
        if(!repetido) {
        arr.push(aleatorio);
    } 
    };

    return arr;

    //VERSIÓN SANTIAGO:
    // let aleatorio;
    // let contador=0;
    // let arr = new Array(numElemArr);

    // do {
    //     aleatorio = aleatorioEntreDosNum(min,max);//no tienes que llamarlos a y b como los parámetros de la función que llamas, lo importante es el orden
    //     repetido = compruebaNumEnArray(aleatorio,arr);
    //     if(!repetido) {
    //         arr[contador]=aleatorio;
    //         ++contador;
    //     } 
    // } while (contador<numElemArr);
    // arr.sort(function (a, b) {
    //     return a-b;
    // })
    // return arr;
}

function ordenaArrayConVuelta(arr) {
    arr.sort(function (a, b) {
        return a-b;
    })
    return arr;
}

//EUROMILLONES (5 números entre 1-50 y 2 estrellas entre 1 y 12). Ese número de la estrella puede ser igual que los otros 5.
function euromillones() {
    //MI VERSIÓN
    // let aleatorio;
    // let arr=[]; //combinación de 5 núm entre 1-50
    // let arr2=[]; //combinación de 2 estrellas entre 1-12

    // //esto es para general la combinación de 5 núm.
    // while (arr.length<5) {
    //     aleatorio = aleatorioEntreDosNum(1,50);
    //     repetido = compruebaNumEnArray(aleatorio,arr);
    //     if(!repetido) {
    //     arr.push(aleatorio);
    // } 
    // };
    // arr.sort(function (a, b) {
    //     return a-b;
    // })

    // //esto es para generar las 2 estrellas.
    // do {
    //     aleatorio = aleatorioEntreDosNum(1,12);
    //     repetido = compruebaNumEnArray(aleatorio,arr2);
    //     if(!repetido) {
    //     arr2.push(aleatorio);
    // } 
    // } while (arr2.length<2);
    // arr.sort(function (a, b) {
    //     return a-b;
    // })
    let arr = generaCombinacion(5,1,50);
    arr = ordenaArrayConVuelta(arr);
    let arrEstrellas = generaCombinacion(2,1,12);arrEstrellas = ordenaArrayConVuelta(arrEstrellas);

    // document.write("La combinación aleatoria de Euromillones es: "+arr+"<br>Las estrellas son: "+arr2);

    
    // //COPIAR VERSIÓN 2 DE SANTIAGO
    // let aleatorio;
    // let contador=0;
    // let arr = new Array(5); //combinación de 5 núm entre 1-50
    // let arr2 = new Array(2); //combinación de 2 estrellas entre 1-12

    // //esto es para general la combinación de 5 núm.
    // do {
    //     aleatorio = aleatorioEntreDosNum(1,50);
    //     repetido = compruebaNumEnArray(aleatorio,arr);
    //     if(!repetido) {
    //     arr[contador]=aleatorio;
    //     ++contador;
    // } 
    // } while (contador<5);
    // arr.sort(function (a, b) {
    //     return a-b;
    // })

    // //esto es para generar las 2 estrellas.
    // do {
    //     aleatorio = aleatorioEntreDosNum(1,12);
    //     repetido = compruebaNumEnArray(aleatorio,arr2);
    //     if(!repetido) {
    //     arr2[contador]=aleatorio;
    //     ++contador;
    // } 

    // } while (contador<2);
    // arr2.sort(function (a, b) {
    //     return a-b;
    // })

    document.write("<h2>La combinación aleatoria de Euromillones es</h2>");

    for (let i in arr){
        document.write("<span style='display:inline-block;padding:15px;margin:15px;border-radius:50%;border:1px solid #000;min-width:20px;text-align:center;'>"+arr[i]+"</span>");
    }

    document.write("<br>");

    for (let i in arrEstrellas){
        document.write("<span style='display:inline-block;padding:25px;margin:15px;background-image:url(images/Estrella.png);background-size:cover;min-width:20px;text-align:center;'>"+arrEstrellas[i]+"</span>");

}
}

//PRIMITIVA: 6 números + 1 complementario que no puede estar repetido. De entre 49 números. Reintegro del 0 al 9

function primitiva() {
    let arr = generaCombinacion(6,1,49);  
    arr = ordenaArrayConVuelta(arr); 
    let arrReintegro = generaCombinacion(1,0,9);
    let arrComplementario = [];

    while (arrComplementario.length<1) {
        aleatorio = aleatorioEntreDosNum(1,49);
        repetido = compruebaNumEnArray(aleatorio,arr);
        if(!repetido) {
        arrComplementario.push(aleatorio);
        } 
    }

    //se podría hacer lo del pop. En tal caso sería:
    //let arrComplementario = generaCombinacion(1,1,49);
    //pero entonces habría que sacar de la función generaCombinacion lo del sort para ordenar los números, para que el complementario no sea siempre el último número generado que es el más alto, sino uno random de los que salieron. Lo de ordenar se pondría en otra función que se llama ordenaArrayConVuelta.

    // let arr = generaCombinacion(7,1,49);
    // let arrComplementario = arr.pop();   
    // let arrReintegro = generaCombinacion(1,0,9);
    

    document.write("<h2>La combinación aleatoria de la Primitiva es: </h2>");

    for (let i in arr){
        document.write("<span style='display:inline-block;padding:15px;margin:15px;border-radius:50%;border:1px solid #000;min-width:20px;text-align:center;'>"+arr[i]+"</span>");
    }

    document.write("<br>");

    for (let i in arrComplementario){
        document.write("<span style='display:inline-block;padding:15px;margin:15px;border-radius:25%;border:1px solid #000;min-width:20px;text-align:center;'>"+arrComplementario[i]+"</span>");
    }

    document.write("<br>");

    for (let i in arrReintegro){
        document.write("<span style='display:inline-block;padding:15px;margin:15px;border-radius:50%;border:1px solid #000;background-color:black;color:white;min-width:20px;text-align:center;'>"+arrReintegro[i]+"</span>");
    }
}

//para crear passwords insertando unos caracteres random de los código ASCII de entre el 33 al 126
function password() {
    let arr = generaCombinacion(5,33,126);

    for (let i in arr) {
        //document.write(String.fromCharCode(arr[i]));//esta es otra opción que funciona también
        document.write("&#"+arr[i]+";");        
    }
}

function password2() {
    let arr = generaCombinacion(5,33,126);
    let pass = "";

    for (let i in arr) {
        //document.write(String.fromCharCode(arr[i]));//esta es otra opción que funciona también
    pass += ("&#"+arr[i]+";");
    }
    console.log(pass);
    return pass;
}

function mediaArray(arr) {
    // let arr = [1,"hola",4,7,5];
    let suma = 0;
    let contador = 0;
        
    for (let i in arr) {
        if(arr[i] ==Number(arr[i])) {   
            contador++; 
            suma += arr[i];
            }
    }  
    
    let media = Math.round(suma/(contador));
    console.log(media);

    return media; 
}


//generar un array multidimensional con 3 ciudades (Córdoba, Sevilla, Málaga) y sus temperaturas de la semana. Y en la última casilla la media de la temperatura. Y todo esto lo muestra en una tabla.
function arrayMultidimensional() {
    let media1 = 0;
    let media2 = 0;
    let media3 = 0;

    let arr = [["Ciudad 🏙️","Lunes", "Martes", "Miércoles","Jueves","Viernes","Sábado","Domingo", "Temp. Media 🌡️"],["Cádiz",34,38,40,33,39,40,40],["Sevilla",39,38,42+"🫠 🥵",39,39,40,41],["Málaga",38,39,40,38,37,40,41]];

    media1 = mediaArray(arr[1]);
    media2 = mediaArray(arr[2]);
    media3 = mediaArray(arr[3]);
    console.log(media1,media2,media3);
    arr[1].push(media1); //no hay que poner arr = arr[1].push(media1), se pone directamente así.
    arr[2].push(media2);
    arr[3].push(media3);
    console.log(arr);

    let filas = arr.length;
    console.log(filas);
    let i = 0;
    let columnas = arr[i].length;
    console.log(columnas);

    //para pintar la tabla
    document.write("<table style='border:solid 1px black; border-collapse:collapse;'");

    //para pintar la fila de cabecera
    document.write("<tr><h1 style='text-align: center;'>TABLA DE TEMPERATURAS &#128540; </h1>");//emoji guiño
    for (let i=0; i<columnas; i++) {
        document.write("<th style='border:solid 1px black;padding:5px;'>"+arr[0][i]+"</th>");
    };
    document.write("</tr>");

    //para pintar las filas de datos:    
    for (let i=1; i<filas; i++) {
        document.write("<tr>");
        for (let j=0; j<columnas; j++) {
            document.write("<td style='border: solid 1px black; padding:30px;'>"+arr[i][j]+"</td>");
        } 
        document.write("</tr>");
    } 
    document.write("</table>");
}

//VERSIÓN SANTIAGO. ÉL NO HA USADO FUNCIONES EXTERNAS PARA HACER LA MEDIA.
function arrayMultidimensional2() {
    let i, j, color, media = 0;
    // si al final de un array ponemos una coma, indica que hay un elemento más en el array
    // para sacar los emojis en pantalla de mac (Control + Comando + espacio). En Windows (Windows+.)
    let arr = [
        ["Ciudad", "L", "M", "X", "J", "V", "S", "D", "media 🌡️"],
        ["Cádiz", 31, 34, 36, 35, 34, 38, 39],
        ["Sevilla", 36, 32, 40, 42, 39, 41, 40],
        ["Málaga", 30, 32, 38, 36, 37, 38, 36],
        ["Huelva", 30, 32, 40, 42, 39, 38, 32],
        ["Córdoba", 47, 37, 45, 42, 39, 41, 44],
        ["Granada", 31, 32, 40, 42, 39, 39, 38],
        ["Almería", 40, 32, 39, 42, 36, 38, 40],
        ["Jaén", 42, 38, 44, 42, 39, 41, 44]
    ];
    //calculamos la media de temperatura de cada provincia
    for (i = 1; i < arr.length; ++i) {
        for (j = 1; j <= 7; ++j) {
            media += arr[i][j];
        }
        media = Math.round(media / 7);
        arr[i].push(media); // añade la media al array
    }

    //pintamos la tabla
    document.write("<table style='border:solid 1px #000;border-collapse:collapse;'>");
    //pintamos la fila de cabecera
    document.write("<tr>")
    for (i = 0; i < arr[0].length; ++i) {
        document.write("<th style='border:solid 1px #000;padding:5px;'>" + arr[0][i] + "</th>");
    }
    document.write("</tr>");
    //pintamos las filas de datos
    for (i = 1; i < arr.length; ++i) {
        if (i % 2 == 0) {
            color = "#fff";
        } else {
            color = "#eee"
        }
        document.write("<tr style='background:" + color + ";'>")
        for (j = 0; j < arr[i].length; ++j) {
            document.write("<td style='border:solid 1px #000;padding:5px;text-align:center;'>" + arr[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function password2() {
    let arr = generaCombinacion(5,33,126);
    let pass = "";

    for (let i in arr) {
        //document.write(String.fromCharCode(arr[i]));//esta es otra opción que funciona también
    pass += ("&#"+arr[i]+";");
    }
    console.log(pass);
    return pass;
}

//*******OBJETOS********
function objeto1() {
let casa = {};
    casa.color = "blanco";
    casa.direccion = "Salamanca";
    casa.owner = "Santi";
    casa.m2 = "60 m<sup>2</sup>";
    casa.precio = 150000;
    casa.password = function() {
        let pass = password2(); //si la función devuelve un valor hay que recogerlo cuando la llamamos.
        return pass;
    }
    casa.mensaje = function() {
    document.write(" La casa de "+casa.owner+" es de color "+casa.color+". Está en "+casa.direccion+". Tiene "+casa.m2+" y un precio de "+casa.precio+"€. Y su password es: "+casa.password())
    }
    casa.mensaje();
    // console.log(casa.password);
    // casa.password();
}

function instancia1() {
        casa = function() {
        this.color;
        this.direccion;
        this.owner;
        this.m2;
        this.precio;
        this.password = function() {
            let pass = password2(); //si la función devuelve un valor hay que recogerlo cuando la llamamos.
            return pass;
        }
        this.mensaje = function() {
        document.write(" La casa de "+this.owner+" es de color "+this.color+". Está en "+this.direccion+". Tiene "+this.m2+" y un precio de "+this.precio+"€. Y su password es: "+this.password()+"<br>")
        }
    }

    let casaSanti = new casa();
    casaSanti.color = "blanco";
    casaSanti.direccion = "Salamanca";
    casaSanti.owner = "Santi";
    casaSanti.m2 = "60 m<sup>2</sup>";
    casaSanti.precio = 150000;
    casaSanti.mensaje();

    let casaPepe = new casa();
    casaPepe.color = "negro";
    casaPepe.direccion = "Jerez";
    casaPepe.owner = "Pepe";
    casaPepe.m2 = "80 m<sup>2</sup>";
    casaPepe.precio = 170000;
    casaPepe.mensaje();
}

// ************************
// ******** REPASO ********

let a = 15;
document.write(a+"<br>");

function aNumero() {
    let numero = Number(prompt("Introduce un número"));
    // let numero = +(prompt("Introduce un número"));  //otra manera de hacerlo.
    // sería lo mismo que hacer:
    // let numero;
    // numero = prompt("Introduce un número");
    // numero = Number(numero);
    let a = 8;
    let b = 23;
    let suma = a + b;
    ++suma;
    document.write(a+"<br>");
    verValor(a); // 8
    document.write(numero);
}

function verValor(a) {
    console.log(a+"<br>"); //15
}

function operadoresRepaso() {
    let num1 = 10;
    let num2 = 5;
    let suma = 2;
    suma += num1 += num2; //suma vale 17
    console.log(suma, num1, num2); //17, 15, 5 // al num1 se le cambia el valor también, se le suma el valor del num2
    suma += num1 -= num2;
    console.log(suma, num1, num2); //27, 10, 5 // ahora el valor del num1 es el anterior, 10, y se le quitarían el num2 que es 5.
    suma %= num1; // 27/10 resto = 7
    console.log(suma);
}

function pruebaDivision() {
    let dividendo = Number(prompt("Dividendo", 28));
    let divisor = Number(prompt("Divisor", 5));
    let cociente = Number(prompt("Cociente", 5));
    let resto = Number(prompt("Resto", 3));
    let resultado = (dividendo == divisor*cociente+resto); //true or false

    // if (dividendo==divisor*cociente+resto) {
    if (resultado) {
        document.write("La división es correcta");
    } else {
        document.write("La división es incorrecta");
    }
}
 
function hambreComida() {
    let hambre = "si"; 
    let comida = "si";
    if(hambre=="si" && comida=="si") { //true && true
        document.write("Puedo comer")
    } else {
        document.write("No puedo comer")
    }

    // let hambre = true; 
    // let comida = false;
    // if(hambre && comida) { //true && false
    //     document.write("Puedo comer")
    // } else {
    //     document.write("No puedo comer") //no podría comer, tienen que ser los dos true para ser verdad
    // }
} 

function pide2Valores(color1, color2) {
    let nombre = prompt("introduce el nombre");
    let apellidos = prompt("introduce los apellidos");
    return "<span style='color:"+color1+"; background:"+color2+";'>"+nombre+" "+apellidos+"</span>";
    //o crear una variable que se llame 
    // let nombreCompleto = "<span style='color:"+color+";'>"+nombre+apellidos+"</span>";
}

function nombreMayusculas() {
    let color = prompt("Introduce un color");
    let fondo = prompt("Introduce un color de fondo");
    let nombre = pide2Valores(color, fondo).toUpperCase();
    document.write(nombre);
}
