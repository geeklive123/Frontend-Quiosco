import { useNavigate } from 'react-router-dom';
import useQuisco from "../hooks/useQuiosco";
import Categoria from "./Categoria";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {

    const { categorias } = useQuisco();
    const { logout, user } = useAuth({ middleware: 'auth' });
    const navigate = useNavigate(); 
    return (
        <aside className="md:w-72">
            <div className="p-4">
              
            </div>

            <p className="my-10 text-xl text-center">Hola: {user?.name}</p>

            <div className="mt-10">
                {categorias.map(categoria => (
                    <Categoria 
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </div>

            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                    onClick={() => navigate('/pedidos')} 
                >
                    Ver Mis Pedidos
                </button>
            </div>
            
         
            
            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                    onClick={logout} 
                >
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    );
}
