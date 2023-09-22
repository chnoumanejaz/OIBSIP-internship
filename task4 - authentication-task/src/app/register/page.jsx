'use client';
import Link from 'next/link';
import Button from '../components/Button';
import Input from '../components/Input';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const defaultRegistrationData = { username: '', name: '', password: '' };

function Register() {
  const [registrationData, setRegistrationData] = useState(
    defaultRegistrationData
  );

    const router = useRouter()


  function handleRegistrationData(e) {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleRegister(e) {
    e.preventDefault();

    if (
      !registrationData.name ||
      !registrationData.username ||
      !registrationData.password
    ) {
      // FIXME: use toast for alert
      alert('Please fill all the fields');
      return;
    } else {
      // TODO: Api call for registration
      try {
        const response = await axios.post(
          'api/users/register',
          registrationData
        );

        setRegistrationData(defaultRegistrationData);

        if (response.status === 200) {
            router.push('/login')
        }
      } catch (error) {
        // FIXME: use toast for alert
        alert(error.message);
      }
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white px-16 pt-8 pb-12 mb-4 rounded-lg shadow-md">
        <h1 className="mb-6 text-gray-700 tracking-wide text-3xl font-medium text-center uppercase">
          Create an account
        </h1>

        <form>
          <Input
            type="text"
            label="Enter name"
            id="name"
            onChange={handleRegistrationData}
            value={registrationData.name}
          />
          <Input
            type="text"
            label="Enter username"
            id="username"
            onChange={handleRegistrationData}
            value={registrationData.username}
          />
          <Input
            type="password"
            label="Enter Password"
            id="password"
            onChange={handleRegistrationData}
            value={registrationData.password}
          />
          <Button type="primary" onClick={handleRegister}>
            Register
          </Button>

          <p className="mt-2">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-semibold text-blue-800 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register;
