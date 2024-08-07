import { PiClockCountdownLight } from "react-icons/pi";
import { IoCheckmark } from "react-icons/io5";

function Comp4() {
  return (
    <div className="h-[680px] w-[330px] flex flex-col gap-5">
    <div className="w-full h-[168px] bg-zinc-800 rounded-2xl border border-zinc-600 px-4">
        <div className="flex gap-1 py-3 border-b-2 border-dashed border-zinc-600"><span className="flex text-orange-500 items-center justify-center"><PiClockCountdownLight /></span><h1 className="text-zinc-400 font-semibold">Reward unlocks in</h1></div>
        <div className="w-full h-[80px] border border-zinc-600 bg-zinc-900 my-4 rounded-lg"></div>
    </div>
    <div className="w-full h-[480px] bg-zinc-900 rounded-2xl border border-zinc-600 p-3 flex-col">
        <div className="relative w-full h-[300px] object-fit rounded-lg border border-zinc-500 overflow-hidden">
            <h1 className="m-2 right-0 absolute text-zinc-100 bg-zinc-900 bg-opacity-60 rounded-md w-max h-max p-1">Lucky Draw</h1>
            <img className="" src=" https://www.intract.io/assets/kol-reward-12e6ae06.gif" alt="" /></div>
        <div className="py-2 flex justify-between border-b border-dashed border-zinc-600">
            <h1 className="text-zinc-500 font-semibold">Exclusive Community</h1>
            <h1 className="text-zinc-100 flex gap-1"><img src="https://www.intract.io/assets/discord-50baa5cf.svg" alt="" />Earndrop</h1>
        </div>
        <div>
            <h1 className="text-zinc-500 text-sm py-2 flex justify-between items-center">Complete all Essential quests <div className="border border-zinc-500 p-1 bg-zinc-700 rounded-full "><IoCheckmark /></div></h1>
            <h1 className="text-zinc-500 text-sm py-1 flex justify-between items-center">Complete at least 1 Alpha Hub quest today<div className=" border border-zinc-500 p-1 bg-zinc-700 rounded-full "><IoCheckmark /></div></h1>
        </div>
        <div className="items-center justify-center flex text-zinc-400 w-full h-[40px] bg-zinc-800 border border-zinc-500 rounded-md m-1 gap-2">
            Claim Now <img src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg" alt="" />
        </div>
    </div>    

</div>
  )
}

export default Comp4