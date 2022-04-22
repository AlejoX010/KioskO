import { categorias } from './data/categorias'
import { productos } from './data/productos' 
import { PrismaClient } from '@prisma/client'

// Para que todo esto funcione se debe de instalar una dependencia llamada ts-node y checar lo que se hace en el package.json

const prisma = new PrismaClient()

const main = async () : Promise<void> => {
    try {
        await prisma.categoria.createMany({
            data: categorias
        })
        await prisma.producto.createMany({
            data:productos
        })
    } catch (error) {
        console.log(error);
    }
}
main()