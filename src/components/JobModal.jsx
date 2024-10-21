
import React from "react";
import { useTheme } from "../context/Theme";

const JobModal = ({ job, onClose }) => {
  const [isDark] = useTheme();
  if (!job) return null; // If no job is selected, return null

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center p-4 items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className={`text-2xl font-bold mb-2 ${isDark?"text-black":""}`}>{job.title}</h2>
        <p className="text-gray-600 mb-4">{job.company}</p>
        <p className="text-gray-500 mb-4">{job.location}</p>
        <p className={`mb-4 ${isDark?"text-black":""}`}>{job.description}</p>
        <div className="flex justify-between pr-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mb-2">
            Apply Now
          </button>
          <button onClick={onClose} className="text-gray-600 mt-2">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
