import { headerLogo } from '../assets/images';
import { hamburger, hamburgerDark, lightMode, darkMode } from '../assets/icons';
import { navLinks } from '../constants';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  const hadleNavToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full transition ease-out duration-500">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={70} height={10} />
        </a>

        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={hadleNavToggle}
        >
          <img
            src={mode === 'light' ? hamburger : hamburgerDark}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
        <ul
          className={`flex flex-1 justify-center items-center gap-16 max-lg:nav-mobile max-lg:shadow-lg transition duration-300 ease-out sm:transition-none dark:dark-nav-mobile ${
            isOpen ? `max-lg:flex` : `max-lg:hidden`
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray font-bold hover:text-coral-red transition ease-in duration-200 dark:text-white-400"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li onClick={handleMode}>
            <img
              className="w-5 cursor-pointer"
              src={mode === 'light' ? lightMode : darkMode}
              alt="mode"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
