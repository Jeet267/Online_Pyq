import { useState } from 'react';

const SignupModal = ({ onClose, onSignupSuccess, switchToSignin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // 'user' or 'admin'

  const handleSignup = () => {
    if (!name || !email || !phone || !password) {
      alert("All fields are required.");
      return;
    }

    // Save in localStorage (for demo purposes only)
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userRole', role);

    alert("Signup successful!");
    onSignupSuccess();
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-purple-200 to-pink-100 flex items-center justify-center z-50">
      <div className="bg-white shadow-2xl rounded-2xl w-96 p-8 transform transition-all duration-300 scale-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        
        <input
          className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        
        <input
          className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        
        <input
          type="password"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Role</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
                className="mr-2"
              />
              User
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
                className="mr-2"
              />
              Admin
            </label>
          </div>
        </div>

        <button
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <button
          className="w-full text-blue-600 mt-4 hover:underline transition"
          onClick={onClose}
        >
          Cancel
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <span
            onClick={switchToSignin}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
