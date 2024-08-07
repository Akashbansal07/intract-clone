import { useState } from 'react';
import { VscTriangleUp } from 'react-icons/vsc';
import Comp1b from './Comp1b';

function Comp1a() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={`main_1_1 bg-zinc-900 hover:bg-zinc-800 ${isExpanded ? 'h-[37%] rounded-t-3xl' : 'h-[37%] rounded-3xl'} w-full p-6 border border-zinc-600`}>
        <div className="relative h-full w-full rounded-xl flex overflow-hidden">
          <button
            className={`up_triangle absolute text-zinc-500 text-2xl right-0 transform ${isExpanded ? '' : 'rotate-180'}`}
            onClick={handleToggle}
          >
            <VscTriangleUp />
          </button>
          <div className="main_1_left h-full w-[33%] bg-zinc-800 rounded-xl border border-zinc-600 p-2">
            <div className="h-full w-full bg-zinc-100 rounded-xl overflow-hidden">
              <img
                className="object-cover h-full w-auto"
                src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
                alt=""
              />
            </div>
          </div>
          <div className="main_1_right w-[67%] h-full flex-col pl-6 py-2">
            <div className="w-full h-[70%] border-b border-dashed border-zinc-600">
              <h1 className="text-[1.5rem] text-zinc-100">Basics of Crypto</h1>
              <p className="text-zinc-500">The safest and easiest place to start your crypto journey!</p>
            </div>
            <div className="p-2">
              <div className="bg-zinc-800 w-[6rem] h-[2rem] rounded-full flex border border-zinc-600 p-1.5">
                <img src="https://www.intract.io/assets/xp-icon-aacd204a.svg" alt="" />
                <h1 className="text-sm text-zinc-200">1490 XPs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second half */}
      <div
        className={`main_1_2 bg-transparent w-full transition-all duration-300 ${isExpanded ? 'h-[63%] p-5 overflow-y-auto' : 'h-0 p-0 overflow-hidden'}`}
      >
        <div className="h-full w-full flex flex-col gap-4">
          {/* inner component of scrollable part */}
          <Comp1b />
          
        </div>
      </div>
    </>
  );
}

export default Comp1a;
