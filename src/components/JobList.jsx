// src/components/JobList.js
import React, { useState } from "react";
import JobModal from "./JobModal";

import { useTheme } from "../context/Theme";
import jobsData from "../data/jobsData";

const JobList = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [filters, setFilters] = useState({
   type: "",
  });
   const [selectedJob, setSelectedJob] = useState(null);
const[isDark]=useTheme()
   const handleJobClick = (job) => {
     setSelectedJob(job);
   };

   const closeModal = () => {
     setSelectedJob(null);
   };


  // Filter jobs based on user input
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
    applyFilters({ ...filters, [name]: value });
  };

  const applyFilters = (filters) => {
    const filtered = jobsData.filter((job) => {
      return (
       
        (filters.type ? job.type === filters.type : true) 
        
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          name="type"
          className={`border rounded px-4 py-2 ${isDark?"text-black":""}`}
          value={filters.type}
          onChange={handleFilterChange}
        >
          <option value="">Filter by job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
      </div>

      {/* Job List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="border p-4  shadow  transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-200 rounded-md duration-300 "
            onClick={() => handleJobClick(job)}
          >
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-blue-600">{job.type}</p>
          </div>
        ))}
      </div>
      {selectedJob && <JobModal job={selectedJob} onClose={closeModal} />}
    </div>
  );
};

export default JobList;
