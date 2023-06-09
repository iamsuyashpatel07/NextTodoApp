'use client';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { Context } from '../../components/Clients';
import { redirect } from 'next/navigation';
import { toast } from 'react-hot-toast';

export const metadata = {
  title: 'Login',
  description: 'A app whwere you can store your Todo  List || Login Page',
};

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(Context);

  const loginhandler = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      setUser(data.user);
      toast.success(data.message);
    } catch (error) {
      return toast.error(data.message);
    }
  };
  if (user._id) return redirect('/');

  return (
    <div className='login'>
      <section>
        <form onSubmit={loginhandler}>
          <input
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <input
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />

          <button type='submit'>Login</button>
          <p>OR</p>
          <Link href={'/register'}>New User</Link>
        </form>
      </section>
    </div>
  );
};

export default page;
