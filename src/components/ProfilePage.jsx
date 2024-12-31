import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(formData));
    dispatch(login(formData));
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Profile Page
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            value={formData.fname}
            onChange={(e) =>
              setFormData({ ...formData, fname: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-gray-700 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lname}
            onChange={(e) =>
              setFormData({ ...formData, lname: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-gray-700 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-gray-700 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSave}
          className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};
