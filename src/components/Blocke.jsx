import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { BiSolidMessageAltMinus } from "react-icons/bi";
function Blocke() {
    const data=[
        {head:"INTRACT",p1:"Explore Quests",p2:"Comunities",p3:"Alpha Hub",p4:" ",p5:" "},
        {head:"EARN",p1:"Refer & Earn",p2:"Leaderboard",p3:"Achievements",p4:" ",p5:" "},
        {head:"ABOUT",p1:"Product Roadmap",p2:"Affiliate Program",p3:"Sign up Program",p4:"Growth Community",p5:"Blogs"},
        {head:"SUPPORT",p1:"Help Center",p2:"Create your quest",p3:"Terms of Service",p4:"Privacy Policy",p5:"Community Guidelines"}
    ]

  return (
    <div className="relative bg-zinc-900 flex flex-col px-32   w-full h-auto items-center justify-center">
     <div className="absolute bottom-0 right-0 rounded-full p-2 bg-zinc-100 m-6">
        <span className="text-3xl"><BiSolidMessageAltMinus /></span>
        </div>   


    <div className="w-full h-auto p-12 flex gap-12 border-b border-zinc-700">
        <div className="intract-text w-[25%] h-full">
            <h1 className="text-zinc-100 text-3xl font-semibold">intract.</h1>
            <p className="mt-4 text-sm text-zinc-500 font-medium">We are your personal guide for exploring web3 projects & earning 100x rewards</p>
        </div>
        <div className="flex items-center justify-center gap-4 w-[75%] h-full">
            {data.map((elem,index)=>(
                    <div key={index} className="w-[22%] h-full">
                    <h1 className="text-zinc-100 font-medium text-lg">{elem.head}</h1>
                    <p className="text-zinc-500">{elem.p1}</p>
                    <p className="text-zinc-500">{elem.p2}</p>
                    <p className="text-zinc-500">{elem.p3}</p>
                    <p className="text-zinc-500">{elem.p4}</p>
                    <p className="text-zinc-500">{elem.p5}</p>
                </div>
            ))}
            
        </div>
    </div>
    <div className="w-full h-auto py-12 pr-16 border-b border-zinc-700">
         <p className="text-zinc-500 text-sm"> <span className="text-zinc-300"> Disclaimer: </span>Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.</p>
    </div>

    <div className="h-auto w-full py-12 flex justify-between">
          <h1 className="text-zinc-100">CREATED BY <span className="underline decoration-zinc-100 underline-offset-1">AKASH</span></h1>
          <div className="text-zinc-100 flex  gap-12 text-2xl">
            <span className="text-indigo-500"> <FaTwitter /></span>
            <span className="text-sky-500"><FaDiscord /></span>
            <span className="text-indigo-500"><FaTelegram /></span>
            <span className="text-green-500"><FaSpotify /></span>
          </div>
    </div>
    
 </div>
  )
}

export default Blocke