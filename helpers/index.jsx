
//Funcion para que el dinero se vea como dinero
const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-US', {
         style: 'currency',
         currency: 'USD'
    })
}
export {formatearDinero}