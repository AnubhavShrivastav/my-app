import { Search } from "lucide-react"

function SearchBar() {

  return (
    <div className="relative flex items-center">

      <Search color="#574cea" className="absolute w-5 h-5 top-2.5 left-3" />

      <input
        className="border-2 min-w-74 sm:w-sm border-[rgb(238,238,238)] py-2 px-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm rounded-4xl transition duration-300 ease focus:outline-none"
        placeholder="Search reel & products"
      />
    </div>
  )
}

export default SearchBar