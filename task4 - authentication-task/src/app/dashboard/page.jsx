'use client';

import Button from '../components/Button';

function Dashboard() {
    function handleLogout(e) {
      e.preventDefault();

      // TODO: Api call for Dashboard
      console.log('Logout done');
    }

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white px-16 pt-8 pb-12 mb-4 rounded-lg shadow-md">
        <h1 className="mb-6 text-gray-700 tracking-wide text-3xl font-medium text-center uppercase">
          Dashboard
        </h1>

        <p className="text-center mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ea
          nostrum pariatur minus quidem aliquam a quasi <br /> earum officia
          consequatur sapiente.
        </p>
        <Button type="danger" onClick={handleLogout}>Logout</Button>
      </div>
    </main>
  );
}

export default Dashboard;
