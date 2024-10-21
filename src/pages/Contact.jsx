// pages/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-500">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-gray-500">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-gray-500">Message</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
