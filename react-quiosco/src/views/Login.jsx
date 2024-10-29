
import  {Link} from 'react-router-dom'
export default function Login(){
    return(
        <>
        <h1 className="text-4xl font-black">Iniciar Sesion</h1> 
        <p>Para crear un pedido debes iniciar sesion</p> 
        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
             
                <div className="mb-4">
                    <label 
                    className="text-slate-800"
                    htmlFor="email"
                    >Email:
                    </label>
                    <input 
                    type="email" 
                    id="email"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="email"
                    placeholder="Tu Email"
                    />
                </div>
                <div className="mb-4">
                    <label 
                    className="text-slate-800"
                    htmlFor="password"
                    >Password:
                    </label>
                    <input 
                    type="password" 
                    id="email"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="password"
                    placeholder="Tu Password"
                    />
                    
                <input 
                type="submit"
                value="Iniciar Sesion"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
                uppercase font-bold cursor-pointer" 
                />
                </div>
            </form>
        </div>
        <nav className="mt-5">
            <Link to="/auth/Registro">
                No tienes cuenta? Crea una
            </Link>
        </nav>
   </>
    )
}