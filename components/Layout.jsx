import Head from "next/head";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebard from "./Sidebard";
import useKiosko from "../hooks/useKiosko";
import Modalproducto from "./ModalProducto";
import Pasos from "./Pasos";

//Esto es una copnfiguracion para el modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

const Layout = ({ children, pagina }) => {
  const { modal } = useKiosko();

  return (
    <>
      <Head>
        <title>KioskO - {pagina}</title>
        <meta name="description" content="Aplicacion para un Quiosco" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className="md:flex">
        <aside className="xl:w-1/5 md:4/12">
          <Sidebard />
        </aside>

        <main className="xl:w-4/5 md:8/12 h-screen overflow-y-scroll">
          <div className="p-10">
            <Pasos />
            {children}
          </div>
        </main>
      </div>

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <Modalproducto />
        </Modal>
      )}

      {/* Para esto debes de tener instalado el npm i react-toastify */}
      {/* Este es para decir donde se va a mostrar y toast es la funcion que permire mandar a llamar el toust  */}
      <ToastContainer />
    </>
  );
};

export default Layout;
