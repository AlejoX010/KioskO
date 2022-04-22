import Layout from "../components/Layout"
import useKiosko from "../hooks/useKiosko"
import Resumenproducto from "../components/ResumenProducto"

export default function resumen() {
  const {pedido} = useKiosko()
  return (
    <div>
      <Layout pagina='Resumen'>
      <h1 className="text-4xl font-black font-Oswald">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu pedido</p>
      {pedido.length=== 0 ?(
        <p className="text-center text-2xl font-medium text-gray-500">No hay pedidos</p>
      ) : (
        pedido.map(producto => (
          <Resumenproducto key={producto.id} producto = {producto} />
        ))
      ) }
      </Layout>
    </div>
  )
}
