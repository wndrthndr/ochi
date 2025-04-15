import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-gray-400 shadow-md backdrop-blur-md ' : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 h-full flex justify-between items-center'>
        <h1 className='text-xl font-bold text-blue-900'>MySite</h1>
        <div className='flex gap-8'>
          {['Home', 'About', 'Services', 'Contact'].map((item, idx) => (
            <div
              key={idx}
              className='group relative cursor-pointer text-20px text-black transition-all duration-300 ease-in-out flex items-center justify-center w-20 h-12'
            >
              <span className='group-hover:text-blue-700 transition-colors duration-300 items-center'>
                {item}
              </span>

              {/* Top-down animation block */}
              <div className='absolute top-0 left-0 w-full h-full bg-blue-100 rounded-md opacity-0 transform -translate-y-4 scale-y-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-y-100 transition-all duration-300 ease-out -z-10' />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
