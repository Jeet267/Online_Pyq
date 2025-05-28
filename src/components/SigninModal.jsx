import { SignIn } from '@clerk/clerk-react';

const SigninModal = ({ onClose, onSigninSuccess, switchToSignup }) => {
  return (
    <div 
      className="fixed inset-0 bg-gray-100/90 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={(e) => {
        // Close modal when clicking the background
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl p-4 w-full max-w-md mx-4" 
        onClick={e => e.stopPropagation()}
      >
        <SignIn 
          afterSignInUrl="/"
          routing="virtual"
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-500 hover:bg-blue-600",
              card: "shadow-none",
              formFieldInput: "border-2 focus:border-blue-500",
              rootBox: "w-full",
              header: "hidden",
              footer: "hidden",
              alternativeMethodsBlockButton: "hidden",
              formFieldLabel: "text-gray-700",
              socialButtonsBlockButton: "border-2 hover:border-blue-500",
              footerActionLink: "hidden",
              footerActionText: "hidden",
              dividerRow: "hidden",
              dividerText: "hidden",
              formFooter: "hidden",
              footerAction: "hidden",
              alternativeMethodsSeparator: "hidden"
            },
            layout: {
              socialButtonsPlacement: "bottom",
              socialButtonsVariant: "iconButton",
              privacyPageUrl: "https://clerk.dev/privacy",
              termsPageUrl: "https://clerk.dev/terms",
              showOptionalFields: false,
              hideFooter: true
            },
          }}
        />
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <span 
            className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium"
            onClick={() => {
              onClose();
              switchToSignup();
            }}
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
