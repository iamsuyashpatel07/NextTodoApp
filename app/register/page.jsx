'use client';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'signup',
  description: 'A app whwere you can store your Todo  List || signup Page',
};

const page = () => {
  return (
    <div className='login'>
      <section>
        <form>
          <input type='text' placeholder='Enter Name' />
          <input type='email' placeholder='Enter email' />
          <input type='password' placeholder='Enter Password' />
          <button type='submit'>Login</button>
          <p>OR</p>
          <Link href={'/login'}>Already Register</Link>
        </form>
      </section>
    </div>
  );
};

export default page;
