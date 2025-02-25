"use client";

import React, { useState , useContext } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);




  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (


    <nav className="bg-cardBg dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" passHref>
                  <a className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</a>
                </Link>
                <Link href="/counter" passHref>
                  <a className="text-foreground dark:text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Counter</a>
                </Link>
                <Link href="/products" passHref>
                  <a className="text-foreground dark:text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Products</a>
                </Link>
                <Link href="/todos" passHref>
                  <a className="text-foreground dark:text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Todos</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="bg-cardBg p-2 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-foreground dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-label="Open main menu"
              >
                {isMenuOpen ? <X color={theme === 'dark' && 'white'} size={24} /> : <Menu color={theme === 'dark' && 'white'} size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    
      <div 
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" passHref>
            <a className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</a>
          </Link>
          <Link href="/counter" passHref>
            <a className="text-foreground dark:text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Counter</a>
          </Link>
          <Link href="/products" passHref>
            <a className="text-foreground dark:text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Products</a>
          </Link>
          <Link href="/todos" passHref>
            <a className="text-foreground dark:text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Todos</a>
          </Link>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;