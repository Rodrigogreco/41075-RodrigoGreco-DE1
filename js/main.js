function calcularMontoDeCF(precio){
    return precio * 0.21;
}

let sumatoria = 0;
let precioProductos
do{
    precioProductos = prompt('Si sos Responsable Inscripto ingresa el monto neto de tu factura y te diremos el IVA CF que podes deducir en tu ddjj mensual de IVA');
    const precioProductosParseado = parseFloat(precioProductos);
    if(precioProductosParseado){
        const productoIva = calcularMontoDeCF(precioProductosParseado)
        sumatoria += productoIva
        alert('Iva a Computar '+ productoIva)
    }
    
}while(precioProductos != 'Listo')
alert('El Importe a computar de CF es ' + sumatoria)