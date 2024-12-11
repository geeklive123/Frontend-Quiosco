import useSWR from 'swr'
import clienteAxios from '../config/axios'
import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

export default function Pedidos() {
    const token = localStorage.getItem('AUTH_TOKEN')
    
    const fetcher = () => clienteAxios('/api/pedidos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const { handleCancelarPedido } =  useQuiosco()
    const { data, error, isLoading } = useSWR('/api/pedidos', fetcher, { refreshInterval: 1000 })

    if (isLoading) return 'Cargando...'

    if (!data || data.data.data.length === 0) {
        return (
            <div>
                <h1 className="text-4xl font-black">Pedidos</h1>
                <p className="text-2xl my-10">No tienes Pedidos Registrados.</p>
            </div>
        )
    }

   

    return (
        <div>
            <h1 className="text-4xl font-black">Pedidos</h1>
            <p className="text-2xl my-10">Ve el estado de tus pedidos aquí.</p>

            <div className="grid grid-cols-2 gap-5">
                {data.data.data.map(pedido => (
                    <div key={pedido.id} className="p-5 bg-white shadow space-y-2 border-b">
                        <p className="text-xl font-bold text-slate-600">Contenido del Pedido:</p>

                        {pedido.productos.map(producto => (
                            <div
                                key={producto.id}
                                className="border-b border-b-slate-200 last-of-type:border-none py-4"
                            >
                                <p>{producto.nombre}</p>
                                <p>
                                    Cantidad: {''}
                                    <span className="font-bold">{producto.pivot.cantidad}</span>
                                </p>
                            </div>
                        ))}

                        <p className="text-lg font-bold text-amber-500">
                            Total a Pagar: {''}
                            <span className="font-normal text-slate-600">
                                {formatearDinero(pedido.total)}
                            </span>
                        </p>

                        <p className={`text-sm font-semibold ${pedido.estado === 1 ? 'text-green-500' : 'text-red-500'}`}>
                            Estado: {pedido.estado === 1 ? 'Completado' : 'Pendiente'}
                        </p>

                    
                        {pedido.estado === 0 && (
                            <button
                                type="button"
                                className="bg-red-600 hover:bg-red-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"
                                onClick={() => handleCancelarPedido(pedido.id)}
                            >
                                Cancelar Pedido
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
