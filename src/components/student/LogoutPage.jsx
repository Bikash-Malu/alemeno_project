import React from 'react';
import { Card, Button } from 'flowbite-react';
import Layout from './Layout';
const LogoutPage = () => {
  return (
    <Layout>
      <div className="p-6 max-w-md mx-auto">
        <Card className="p-6 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Are you sure you want to log out?
          </h2>
          <div className="flex justify-center space-x-4">
            <Button color="gray" >
              Cancel
            </Button>
            <Button color="red">
              Logout
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default LogoutPage;
