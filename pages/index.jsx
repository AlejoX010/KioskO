
// import { PrismaClient } from "@prisma/client";

import Layout from "../components/Layout";
import useKiosko from "../hooks/useKiosko";
import Producto from "../components/Producto";

export default function Home() {

  const {categoriaActual}= useKiosko()

  return (
    <>
     <Layout pagina = {categoriaActual?.nombre}>
        <div className="ml-3">
        <h1 className="text-4xl font-black font-Oswald">{categoriaActual?.nombre}</h1>
        <p className="text-2xl my-10 font-medium font-Oswald">Elige y personaliza tu pedido</p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {categoriaActual?.productos?.map(producto => (
            <Producto key={producto.id} producto={producto} /> 
          ) )}
        </div>
     </Layout>
    </>
  );
}

/*Asi se hace una consulta para nuestra db
export const getServerSideProps = async () => {
  const prisma = new PrismaClient()

  const categorias = await prisma.categoria.findMany()
  return{
    props:{
      categorias,
    }
  }
}*/
