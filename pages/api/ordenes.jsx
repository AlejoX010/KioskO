import { PrismaClient } from "@prisma/client";

//Api para los pedidos se almacenen en la base de datos
export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        pedido: req.body.pedido,
        fecha: req.body.fecha,
      },
    });
    res.json(orden);
  } 
}
