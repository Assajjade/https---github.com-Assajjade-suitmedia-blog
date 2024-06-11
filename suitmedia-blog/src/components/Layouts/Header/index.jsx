import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../Elements/Logo';

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed w-full ${show ? 'bg-orange-500' : 'bg-orange-500 bg-opacity-50'} transition-all duration-300 z-50`}>
      <nav className="container mx-auto flex justify-between items-center px-24">
        <div className="text-white font-bold text-lg">
          <Logo />
        </div>
        <ul className="flex space-x-6 text-white">
          {['Work', 'About', 'Services', 'Ideas', 'Careers', 'Contact'].map((item, index) => (
            <li key={index}>
              <NavLink to={`/${item.toLowerCase()}`} activeClassName="underline">{item}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
