import { BsArrowRight } from "react-icons/bs";

function Logo() {
  return (
    <div>
        <div className=" h-[36vh] w-[42vw] absolute top-[35vh] left-[50vh]">
                 

                <div className="w-full h-[67%] flex flex-col justify-center items-center">
                    <div className="mt-6">
                        <p className="text-xl font-medium text-zinc-500">
                        <span className="text-zinc-200">Intract users</span> have together made more than <span className="text-zinc-200">$100 million</span> in web3.<br />
                        </p>
                        <p className="text-xl font-medium text-zinc-500 flex justify-center items-center">Join them and &nbsp;<span className="text-zinc-200"> learn how to earn crypto!</span>
                    </p>
                    </div>
                    <button className="py-2 px-16 bg-purple-700 rounded-md  my-10 flex justify-center items-center space-x-2 mt-auto">
                       <h1>Get Started</h1>< BsArrowRight />
                    </button>
                </div>

            </div>
    </div>
  )
}

export default Logo