'use client';
import Link from 'next/link';
import Button from '../components/Button';
import Input from '../components/Input';
import { useState } from 'react';
// import axios from 'axios';

const defaultLoginData = { username: '', name: '', password: '' };

function Login() {
  const [loginData, setLoginData] = useState(defaultLoginData);

  function handleLoginData(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    if (!loginData.username || !loginData.password) {
      // FIXME: use toast for alert
      alert('Please fill all the fields');
      return;
    } else {
      // TODO: Api call for Login
      console.log('login')
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white px-16 pt-8 pb-12 mb-4 rounded-lg shadow-md">
        <h1 className="mb-6 text-gray-700 tracking-wide text-3xl font-medium text-center uppercase">
          Login
        </h1>

        <form>
          <Input
            type="text"
            label="Enter username"
            id="username"
            onChange={handleLoginData}
            value={loginData.username}
          />
          <Input
            type="password"
            label="Enter Password"
            id="password"
            onChange={handleLoginData}
            value={loginData.password}
          />
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button>

          <p className="mt-2">
            Dont have an account?{' '}
            <Link
              href="/register"
              className="font-semibold text-blue-800 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Login;
