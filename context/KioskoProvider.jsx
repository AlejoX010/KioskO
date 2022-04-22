//Asi se inicia para tener los estados globales en todos los componentes y se deben de hacer unos movimiento en el _app.jsx

import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

const KioskoContext = createContext();

const KioskoProvider = ({ children }) => {
  const router = useRouter();
  //Aqui es para jalar las categorias
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState(false);
  const [total, setTotal] = useState(0);

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");

    setCategorias(data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  //Este es para que marque algo en cuanto arranque y no solo se quede en el state sin nada
  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  //Este es el effect para poder dar el total de de todo el pedido en general
  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  //Este es para que cuando se haga clik en una categoria se agarre la categoria
  const handlerCategoria = (id) => {
    //Esta es la funcion que lo hace posible
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
    router.push("/");
  };

  //Este es para cuando haga click en producto se seleccione ese producto
  const handlerProducto = (producto) => {
    setProducto(producto);
  };

  const handlerModal = () => {
    setModal(!modal);
  };
  // Y asi se aceptan las cosas que se pasaron del componente
  const handlerAgregarPedido = ({ categoriaId, ...producto }) => {
    //Asi es como decir que no quiero usar ni categoria ni la imahen
    //Esto se hace para que en vez de que se hagan pedidos separados del mismo producto, se actualicen
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);
      toast.success("Guardado el Pedido", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al Pedido", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    handlerModal();
  };

  const handlerEditarCantidades = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id);
    setProducto(productoActualizar[0]);
    setModal(!modal);
  };

  const handlerEliminarProducto = (id) => {
    alert("¿Eliminar este producto?");
    const productoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(productoActualizado);
  };

  const colocarOrden = async (e) => {
    e.preventDefault();
    if (nombre === "" || nombre.length < 3) {
      setMensaje(true);
    } else {
      try {
        const { data } = await axios.post("/api/ordenes", {
          pedido,
          nombre,
          total,
          fecha: Date.now().toString(),
        });
        console.log(data);
        //Restar de la app
        setCategoriaActual(categorias[0]);
        setPedido([]);
        setNombre("");
        setTotal(0);
        toast.success("Pedido agregado", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(()=>{
          router.push('/')
        }, 3000)
      } catch (error) {
        console.log(error);
      }
      setMensaje(false);
    }
  };

  return (
    <KioskoContext.Provider
      value={{
        modal,
        producto,
        pedido,
        categorias,
        categoriaActual,
        nombre,
        mensaje,
        total,
        setNombre,
        handlerCategoria,
        handlerProducto,
        handlerModal,
        handlerAgregarPedido,
        handlerEditarCantidades,
        handlerEliminarProducto,
        colocarOrden,
      }}
    >
      {children}
    </KioskoContext.Provider>
  );
};

export { KioskoProvider };

export default KioskoContext;
