import { useState, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const tiendaContext = createContext();

export default tiendaContext
export const TiendaContextProvider = ({children}) => {
	const [tienda,setTienda] = useLocalStorage("tienda",[])
	const agregarProducto = (producto) => {
		const manageStore = (arr) =>{
			let ids = []
			let tienda = []
			for(let producto of arr){
				if(!ids.includes(producto.id)){
						ids=[...ids,producto.id]
						tienda = [...tienda,producto]
				}
				else{
				 tienda.find(item=>item.id===producto.id).cantidad=tienda.find(item=>item.id===producto.id).cantidad+producto.cantidad
				}
			}
			return tienda
		 }
		setTienda(manageStore([...tienda,producto]))
	}
	const quitarProducto = (id) => {
		setTienda(tienda.filter(item=>item.id!==id))
	}
	const modificarProducto = (id,cantidad) => {
		setTienda(tienda.map(item=>{
			return item.id===id ? {...item,cantidad:cantidad} : item
		}))
	}
  return (
		<tiendaContext.Provider
			value={{
				tienda,
				agregarProducto,
				quitarProducto,
				modificarProducto
			}}
		>
			{children}
		</tiendaContext.Provider>
	);
};


