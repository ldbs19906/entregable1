let precioMasBajo = 99999999999;
let precioMasAlto = 0;
let siYaCargueAlgo= false;

let nombreBajo;
let nombreAlto;


do{  //Solitud de datos 

    nombre= prompt('Ingrese el nombre del producto');
    precio= prompt('Ingrese el precio de' + nombre);

    
    // Declaro la variablee siYaCargue algo como false para que tome el primr valor d precio como max. y min., al igual que o nombr del producto 
    if(siYaCargueAlgo== false){

        

        precioMasAlto=precio;
        precioMasBajo=precio;
        nombreAlto=nombre;
        nombreBajo=nombre;

        //Al asignar el valor true, ya se saltea este bloque de decicion y trabaja directamente con el bloque else 
        siYaCargueAlgo=true;
    }else{
        // Verifico que el valor ingresado sea max.
        if(precio > precioMasAlto ){
        
            precioMasAlto = precio;
            nombreAlto= nombre
        }
        // Verifico que el valor ingresado sea min.
        if(precio < precioMasBajo){
            
            precioMasBajo = precio;
            nombreBajo = nombre;
        }
    }

    

//Consulto si desa cargar otro dato
}while( confirm('Quiere ingresar otro valor?'));


//Muestra el nombre e los productos cuyos valores sean maximo y minimo.
alert('El precio del producto mas barato es:' + precioMasBajo + '. El producto es: ' + nombreBajo);

alert('El precio del producto mas caro  es:' + precioMasAlto + '- El producto es: ' + nombreAlto);
