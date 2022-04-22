import Layout from "../components/Layout";
import useKiosko from "../hooks/useKiosko";
import { formatearDinero } from "../helpers";

import { useEffect, useCallback } from "react";

export default function total() {
  const { pedido, nombre, colocarOrden, mensaje, setNombre, total } = useKiosko();


  const comprobarPedido = () => {
    return pedido.length === 0;
  };

  useEffect(() => {
    comprobarPedido();
  }, [pedido]);



  return (
    <div>
      <Layout pagina="Total">
        <h1 className="text-4xl font-black font-Oswald">Total</h1>
        <p className="text-2xl my-10">Confirma tu pedido</p>

        <form onSubmit={colocarOrden}>
          <div>
            <label
              htmlFor="nombre"
              className="block uppercase text-slate-800 font-bold text-xl"
              
            >
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className="mt-10">
            <p className="text-2xl">
              Total a Pagar <span className="font-bold">{formatearDinero(total)}</span>
            </p>
          </div>

          <div className="mt-5">
            <input
              value="Confirmar Pedido"
              type="submit"
              className={`${
                comprobarPedido()
                  ? "bg-indigo-300"
                  : "bg-indigo-600 cursor-pointer hover:bg-indigo-900"
              }  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
              disabled={comprobarPedido()}
            />
          </div>
          {comprobarPedido() && (
            <div className="flex mt-5 text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="ml-1">No hay ningun Producto agregado</p>
            </div>
          )}
           {mensaje === true && (
            <div className="flex mt-5 text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="ml-1">El pedido debe de llevar nombre mayor a 3 letras</p>
            </div>
          )} 
        </form>
      </Layout>
    </div>
  );
}
