import { useState } from 'react';
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';

const AuthContainer = ({ onClose, onSigninSuccess }) => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSignupSuccess = () => {
    setIsSignup(false); // Switch to Signin after successful signup
  };

  return (
    <>
      {isSignup ? (
        <SignupModal
          onClose={onClose}
          onSignupSuccess={handleSignupSuccess}
          switchToSignin={() => setIsSignup(false)}
        />
      ) : (
        <SigninModal
          onClose={onClose}
          onSigninSuccess={onSigninSuccess}
          switchToSignup={() => setIsSignup(true)}
        />
      )}
    </>
  );
};

export default AuthContainer;
