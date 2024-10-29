import {categorias} from "../data/categorias"
import Categoria from "./Categoria"
export default function Sidebar() {
    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img 
                    src="img/logo.svg" 
                    className="w-40"
                />
            </div>
            <div 
                className="mt-10">
                    {categorias.map(categoria=>(
                         <Categoria
                            categoria={categoria}
                        />
                    ))}
            </div>
        </aside>
    )   
}