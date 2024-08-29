import { Dropdown, Avatar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/logout'); 
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="w-full h-16 border-b-2 flex justify-between items-center px-4 bg-gray-100">
      <div className="text-xl md:text-2xl lg:text-3xl font-bold">
        {/* Your logo or title here */}
      </div>
      <div className="hidden xl:block text-sm md:text-2xl text-gray-500 font-semibold">
        Welcome To Course Enroll Dashboard
      </div>
      <div className="flex items-center space-x-4 border-gray-200">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<Avatar alt="User settings" rounded={true} />}
          className="border border-gray-300 shadow-md"
        >
          <Dropdown.Header className="border-b border-gray-200 py-2 px-4">
            <span className="block text-sm">BIKASH MALU</span>
            <span className="block truncate text-sm font-medium">bikashmalu1@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item className="border-b border-gray-200" onClick={handleProfile}>
            Profile
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>
            Logout
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navigation;
