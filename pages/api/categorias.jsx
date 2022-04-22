//Si quieres poner las apis en el state debes de instalas "npm i axios"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {

  const categorias = await prisma.categoria.findMany({
    //Asi es para incluir los productos que pertenencen a esa misma categoria
    include: {
      productos: true
    }
  })

  res.status(200).json(categorias)
}
