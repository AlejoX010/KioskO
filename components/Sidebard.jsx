import Image from "next/image";

import useKiosko from "../hooks/useKiosko";
import Categoria from "./Categoria";

const Sidebard = () => {
  const { categorias } = useKiosko();
  

  return (
    <>
      <header className="mt-4">
        <Image
          width={300}
          height={100}
          src="/img/logo.svg"
          alt="Imagen del logo"
        />
      </header>

      <nav className="mt-10">
         {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebard;
