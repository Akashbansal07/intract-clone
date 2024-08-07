import { CiCircleCheck } from "react-icons/ci";

function Comp2b() {
    const data=[
        {count:"7",image:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg",text:"#1: What are airdrops and..."},
        {count:"10",image:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg",text:"#2: Types of airdrops"},
        {count:"11",image:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png",text:"#3: How to earn huge $$$..."},
        {count:"7",image:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg",text:"#4: Things to keep in mind"}
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

export default Comp2b