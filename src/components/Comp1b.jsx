import { CiCircleCheck } from "react-icons/ci";

function Comp1b() {
    const data=[
        {count:"11",image:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png",text:"#1: But What is the crypto and..."},
        {count:"8",image:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg",text:"#2: Setting up your own web3..."},
        {count:"8",image:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg",text:"#3: What the heck is a..."},
        {count:"10",image:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg",text:"#4: Swapping and bridging..."},
        {count:"6",image:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg",text:"#5: NFTs and why they are..."},
        {count:"8",image:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg",text:"#6: Doing quests and winning..."}
    ]
  return (
   <>

     {data.map((elem,index)=>(
           
        <div key={index} className="h-[33%] w-full bg-zinc-800 hover:bg-zinc-700 rounded-xl border border-zinc-700 p-3 ">
                           
    <div className="relative h-full w-full  flex">
    <div className="absolute bottom-0 right-0 text-3xl bg-zinc-700 rounded-full text-zinc-400 mr-2 mb-1"><CiCircleCheck /></div>
        <div className="h-full rounded-xl overflow-hidden w-[30%]">
            <img className="object-cover h-full w-auto" src={elem.image} alt="" />
        </div>
        <div className="flex-col h-full  px-3">
            <div className="p-3 border-b border-dashed border-zinc-500 py-2">
                <h1 className="text-zinc-200 text-lg">{elem.text}</h1>
            </div>
            <div className="flex py-2 space-x-4">
                  <h1 className="text-zinc-400 text-base">{elem.count}</h1>
                  <div className="border border-zinc-700 rounded-full w-[60%] p-1.5"> <div className="w-full h-full bg-zinc-700 rounded-full borde-2 border-zinc-900"></div></div>
                  
            </div>
        </div>
    </div>
</div>

     ))}
     </>
    


  )
}

export default Comp1b