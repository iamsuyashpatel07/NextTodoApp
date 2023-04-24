import Link from 'next/link';
import React from 'react';

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
        <Link href={'/login'}>Login</Link>
      </article>
    </div>
  );
};

export default Header;
