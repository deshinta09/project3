import { useNavigate } from "react-router-dom"

export default function Navbar({ name }){
  const navigate = useNavigate()
    return <div className="min-h-full p-4" style={{ backgroundColor: '#4D869C' }}>
      <div className="gap-2">
        <button className={ name==='home'? "bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium":"hover:bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium"} onClick={()=>navigate('/')}>Home</button>
        <button className={ name==='about'? "bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium":"hover:bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium"} onClick={()=>navigate('/about')}>About</button>
        <button className={ name==='projects'? "bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium":"hover:bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium"} onClick={()=>navigate('/projects')}>Projects</button>
        <button className={ name==='contact'? "bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium":"hover:bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium"} onClick={()=>navigate('/contact')}>Contact</button>
      </div>
  </div>
}