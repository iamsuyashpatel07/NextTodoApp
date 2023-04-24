import Link from 'next/link';
import React from 'react';
import { LogoutBtn } from '../components/Clients';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h2>Todo</h2>
      </div>
      <article>
        <Link href={'/'}>Home</Link>
      </article>
      <article>
        <Link href={'/about'}>About</Link>
      </article>
      <article>
        <LogoutBtn />
      </article>
    </div>
  );
};

export default Header;
