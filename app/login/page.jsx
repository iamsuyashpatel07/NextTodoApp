import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Login',
  description: 'A app whwere you can store your Todo  List || Login Page',
};

const page = () => {
  return (
    <div className='login'>
      <section>
        <form>
          <input type='email' placeholder='Enter email' />
          <input type='password' placeholder='Enter Password' />

          <button type='submit'>Login</button>
          <p>OR</p>
          <Link href={'/register'}>New User</Link>
        </form>
      </section>
    </div>
  );
};

export default page;
