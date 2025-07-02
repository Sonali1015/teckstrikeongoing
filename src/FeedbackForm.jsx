import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    feedbackType: "",
    feedback: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    alert("Feedback submitted successfully!");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-2xl"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          🎉 Club Event: TechFest 2025
        </h2>
        <p className="text-gray-600 mb-6">
          We would love to hear your thoughts, suggestions, concerns or problems
          with anything so we can improve!
        </p>

        {/* Feedback Type */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Feedback Type
          </label>
          <div className="flex space-x-8">
            {["Comments", "Suggestions", "Questions"].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="feedbackType"
                  value={type}
                  checked={formData.feedbackType === type}
                  onChange={handleChange}
                  required
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Feedback Message */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Describe Your Feedback:
          </label>
          <textarea
            name="feedback"
            rows="4"
            required
            value={formData.feedback}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Name Fields */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            required
            placeholder="ex: myname@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
