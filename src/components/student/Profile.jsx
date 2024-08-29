import React from 'react';
import { Card,Textarea } from 'flowbite-react';
import Layout from './Layout';

const Profile = () => {
  const user = {
    name: 'Bikash Malu',
    email: 'bikashmalu1@gmail.com',
    bio: 'A passionate developer with experience in building web applications. Enthusiastic about new technologies and continuous learning.',
    profilePicture: 'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?height=399&width=711&fit=bounds', // Placeholder image
  };

  return (
    <Layout>
      <div className="p-6 max-w-3xl mx-auto">
        <Card className="p-6 shadow-lg rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-semibold text-gray-800 mb-2">{user.name}</h1>
              <p className="text-gray-500 mb-4">{user.email}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bio</h2>
            <Textarea
              rows={6}
              value={user.bio}
              readOnly
              className="border-gray-300 rounded-lg"
            />
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
