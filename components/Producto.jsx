import Image from "next/image";
import { formatearDinero } from "../helpers";
import useKiosko from "../hooks/useKiosko";

const Producto = ({ producto }) => {
  const {handlerProducto, handlerModal} = useKiosko()
  const { imagen, nombre, precio } = producto;
  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/img/${imagen}.jpg`}
        alt={`Imagen del producto ${nombre}`}
        className='w-full'
      />
      <div className="p-5">
        <h3 className="text-xl font-bold font-RobotoSlab">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500 font-Anton">
          {formatearDinero(precio)}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-semibold"
          onClick={()=>{handlerProducto(producto), handlerModal()}}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
