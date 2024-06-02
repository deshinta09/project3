export default function Navbar(){
    return <div className="min-h-full p-4" style={{ backgroundColor: '#4D869C' }}>
      <div className="gap-1">
        <button className="hover:bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium">Home</button>
        <button className="hover:bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium">About</button>
        <button className="hover:bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium">Projects</button>
        <button className="hover:bg-sky-800 text-white rounded-md px-3 py-2 text-sm font-medium">Contact</button>
      </div>
  </div>
}