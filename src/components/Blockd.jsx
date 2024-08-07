import { IoBookOutline } from "react-icons/io5";

function Blockd() {
  return (
    <div className="main_d bg-zinc-900 flex flex-col px-32 py-8 border-y border-zinc-700 w-full h-auto items-center justify-center">
    <div className="w-full h-[8rem]  flex flex-col items-center justify-center">
           <h1 className="text-2xl font-medium text-zinc-100">Crypto Dictionary</h1>
           <p className="font-medium text-zinc-500">Your one-stop to catch up on all crypto terms</p>
       </div>

       <div className="relative h-[29rem] w-full bg-sky-300 rounded-xl overflow-hidden">
               <div className="absolute right-0 bottom-0 border rounded-full m-4  bg-opacity-75 backdrop-blur-md p-4 text-zinc-100 text-2xl">
               <IoBookOutline />
               </div>
               <img className="w-full h-full object-cover" src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg" alt="" />
               <div className="absolute bottom-0 left-0 w-full     p-3">
                   <h1 className="text-zinc-100 text-2xl font-semibold opacity-75">Web3 + Degen Glossary</h1>
                   <h1 className="font-semibold text-zinc-100 opacity-75">Your own crypto dictionary</h1>
               </div>
               
             
           </div>
           <div className="border border-zinc-600 bg-zinc-800 w-[22rem] h-[2.5rem] mt-16 rounded-full flex opacity-75">
                   <div className="w-1/2 flex items-center justify-center rounded-full bg-zinc-700"><h1 className="text-zinc-100 text-lg">Essentials</h1></div>
                   <div className="w-1/2 flex items-center justify-center rounded-full "><h1 className="text-zinc-500 text-lg">Alpha Hub</h1></div>
           </div>
    </div>
  )
}

export default Blockd