import React from 'react';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export const metadata = {
  title: 'Home Page',
  description: 'Welcome to our website. Explore our services and products.',
};

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
    <h1 className={`${lusitana.className} text-4xl font-bold mb-4`}>Choose Your Jersey</h1>
    <p className="mb-4">Select a sport to explore our collection:</p>
    <div className="flex justify-center space-x-4">
      <Link 
        href="/" 
        className="bg-blue-700 text-white py-2 px-4 rounded shadow hover:bg-blue-800"
      >
        Football Jerseys
      </Link>
      <Link 
        href="/" 
        className="bg-green-700 text-white py-2 px-4 rounded shadow hover:bg-green-800"
      >
        Cricket Jerseys
      </Link>
    </div>
  </div>
  );
};

export default Home;
