import { IoCheckmark } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";

function Comp3b() {
  return (
    <div className="h-[400px] w-[160px]">
    <div className="w-full h-[17%]   flex items-center justify-center text-2xl text-zinc-500 "><span className="border border-zinc-500 bg-zinc-800 rounded-full p-3"><IoCheckmark /></span></div>
    <div className="relative w-full h-[45%]  rounded-2xl border border-zinc-500 p-2">
        <img className="w-full h-full object-cover rounded-2xl" src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png" alt="" />
        <span className="absolute bottom-0 right-0 border border-zinc-500 bg-zinc-900 rounded-full p-3 text-zinc-400 text-2xl translate-x-1/2 translate-y-1/2"><IoIosLock /></span>
    </div>
    <div className="w-full h-[28%] overflow-visible">
        <div className="pt-6"></div>
        <h1 className=" text-xl font-semibold text-zinc-400 whitespace-nowrap">
        Intract Certified: Earner NFT
        </h1>
        <p className="text-zinc-600 font-semibold text-sm pt-1">Your proof of airdrop expertise</p>
    </div>
    <div className="w-full h-[10%] border border-zinc-600 rounded-xl bg-zinc-800 flex items-center justify-center">
       <h1 className="text-zinc-400 text-lg">claim</h1>
    </div>
    
</div>
  )
}

export default Comp3b