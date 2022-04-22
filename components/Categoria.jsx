import Image from "next/image";
import useKiosko from "../hooks/useKiosko";

const Categoria = ({ categoria }) => {
  const { categoriaActual, handlerCategoria } = useKiosko();

  const { nombre, icono, id } = categoria;
  return (
    <button
      type="button"
      className={categoriaActual?.id === id ? `flex items-center gap-4 w-full border p-5 bg-amber-400` :`flex items-center gap-4 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer`}
      onClick={() => handlerCategoria(id)}
    >
      <Image
        width={100}
        height={100}
        src={`/img/icono_${icono}.svg`}
        alt="imagen"
      />
      <div className="text-2xl font-bold ">
        {nombre}
      </div>
    </button>
  );
};

export default Categoria;
