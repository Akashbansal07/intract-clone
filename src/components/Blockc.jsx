

function Blockc() {
    const data=[
        {text:'How to plan your retirement with crypto?',image:'https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png'},
        {text:'Why are there limited Bitcoin?',image:'https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png'},
        {text:'How does Uniswap actually work?',image:'https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png'},
        {text:'How to spot crypto projects to invest in?',image:'https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png'}
    ]
  return (
    <div className="comp3 bg-zinc-900 flex flex-col px-32 py-8 border-y border-zinc-700 w-full h-auto">
                {/*heading*/}
                <div className="w-full h-[8rem]  flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-medium text-zinc-100">Top Crypto Creators and Projects to Follow</h1>
                    <p className="font-medium text-zinc-500">Answers to your crypto doubts, straight from the experts</p>
                </div>
                {/*cards*/}
                <div className="w-full h-auto py-8 flex items-center justify-center gap-6">
                    {data.map((elem,index)=>(
                        <div key={index} className="relative h-[410px] w-[280px] bg-sky-300 rounded-xl overflow-hidden">
                        <div className="absolute right-0 top-0 border rounded-full m-3  bg-opacity-75 backdrop-blur-md">
                        <img className="p-1 object-cover" src="https://www.intract.io/assets/reel-video-ee824737.svg" alt="" />
                        </div>
                        <img className="w-full h-full object-cover" src={elem.image} alt="" />
                        <h1 className="absolute bottom-0 left-0 w-full   text-zinc-100 text-2xl font-semibold  p-3">{elem.text}</h1>
                    </div>
                    ))}
                    
                </div>

            </div> 
  )
}

export default Blockc