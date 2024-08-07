import  { useEffect } from 'react';

const Essentials = () => {
  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById('fixedComponent');
      const scrollThreshold = 300; // Adjust this value as needed
      const scrollTop = window.scrollY;

      if (scrollTop > scrollThreshold) {
        component.style.position = 'static';
      } else {
        component.style.position = 'absolute';
        component.style.bottom = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Your main content here */}

      {/* Component to be positioned at the bottom */}
      <div id="fixedComponent" className="absolute bottom-0 left-0 w-full flex justify-center">
        <div className="border border-zinc-600 bg-zinc-800 w-[22rem] h-[2.5rem] mt-16 rounded-full flex opacity-75">
          <div className="w-1/2 flex items-center justify-center rounded-full bg-zinc-700">
            <h1 className="text-zinc-100 text-lg">Essentials</h1>
          </div>
          <div className="w-1/2 flex items-center justify-center rounded-full">
            <h1 className="text-zinc-500 text-lg">Alpha Hub</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
