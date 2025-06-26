import React from "react";

const AccessPopup = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#001233] p-8 rounded shadow-lg min-w-[320px] max-w-full text-center">
        <h3 className="text-lg font-bold mb-2 text-[#001233] dark:text-[#e0e6f5]">
          Club Membership Required
        </h3>
        <p className="mb-4 text-[#001233] dark:text-[#e0e6f5]">
          Please become a club member to access this project.
        </p>
        <button
          onClick={() => {
            window.location.href = "https://your-razorpay-link.com";
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-full">
          Pay with Razorpay
        </button>
        <button
          onClick={onClose}
          className="ml-4 text-gray-600">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AccessPopup;
