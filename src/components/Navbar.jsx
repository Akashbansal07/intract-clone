
function Navbar() {
  return (
    <div className="max-w-screen  p-2 bg-transparent border-b border-zinc-700">
        <div className="max-w-screen-xl mx-auto bg-zinc-900  flex items-center space-x-8 justify-between">
            <div className="first_half_nav flex items-center space-x-8 p-3 font-medium w-6/10">
                <img src="https://www.intract.io/logo/intract_text.svg" alt="" />
                <div className="links flex gap-10  text-zinc-300 ">
                    <a className="hover:text-zinc-100">Compass</a>
                    <a className="hover:text-zinc-100">Explore</a>
                    <div className="flex items-center ">
                        <a className="hover:text-zinc-100">Academy</a>
                        <div className="text-xs p-1 bg-violet-600 rounded-lg ml-2 ">New</div>
                        </div>
                    <a className="hover:text-zinc-100">NFTs</a>    
                    <a className="hover:text-zinc-100">For Projects</a>
                </div>
            </div>
            <div className="second_half_nav w-4/10">
                <div className="Search_bar ">
                
                <input  type="text" className="rounded-full border border-zinc-400  placeholder-zinc-400 h-12 w-full max-w-md bg-transparent bg-opacity-30 backdrop-blur pl-4 pr-20"   placeholder=" Search for ecosystems, trending quests etc,."  />
                </div>
            </div>
            <div className="p-3 rounded-full border-solid border border-orange-500">
                <img src="https://www.intract.io/assets/broadcast_or-04af786c.svg" alt="" />
            </div>
            <button className=" bg-zinc-100 text-zinc-900 font-medium px-4 py-1 hover:bg-zinc-400 rounded-md justify-content items-center flex">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar