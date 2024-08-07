import Comp1 from "./Comp1"
import Comp2 from "./Comp2"
import Comp3 from "./Comp3"
import Comp3b from "./Comp3b"
import Comp4 from "./Comp4"
import Comp5 from "./Comp5"
import Logo from "./Logo"






function Blocka() {

  return (
    
        <div className="max-w-screen mx-auto">
        <div className=" bg-red-100 w-full h-auto flex-col">
       <Logo/>

            <img className="w-full h-full object-cover" src="https://www.intract.io/assets/intract-academy-background-5547a705.png" alt="" />
            


            <div className="w-full h-auto pb-32 px-64 bg-zinc-900 ">

              {/*div1*/}
                 <div className="h-[700px] w-full  p-16 justify-between  flex flex-row items-center justify-content">
                      <div className=""> <Comp1/> </div>
                      <div> <Comp3/></div>
                 </div>
               

              {/*div*/}
              <div className="h-[700px] w-full  justify-between flex ">
                      <div> <Comp3b/></div>
                      <div className=""> <Comp2/> </div>
                      
                 </div> 


                {/*div*/}

                <div className="h-[700px] w-full flex justify-between ">
                      <div> <Comp4/></div>
                      <div className=""> <Comp5/> </div>
                      
                 </div> 




            </div>
        </div>
        </div> 




             
            



        
     
        
  
  )
}

export default Blocka