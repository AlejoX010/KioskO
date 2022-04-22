import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Total", url: "/total" },
];

const Pasos = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              router.push(paso.url);
            }}
            className={router.pathname === paso.url ? `text-2xl font-bold text-amber-400`: `text-2xl font-bold text-black`}
            key={paso.paso}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
        {/* Asi se crea la barra con puro tailwind */}
      <div className="bg-g-100 mb-10">
        {router.pathname === "/" && (
          <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"></div>
        )}
        {router.pathname === "/resumen" && (
          <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-1/2"></div>
        )}
        {router.pathname === "/total" && (
          <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-full"></div>
        )}
      </div>
    </>
  );
};

export default Pasos;
