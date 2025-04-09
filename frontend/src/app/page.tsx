"use client";

import React, { useState } from "react";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validata()) {
      try {
        // Send data to the backend
        const response = await fetch("http://localhost:3001/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
          }),
        });

        if (response.ok) {
          const newUser = await response.json();
          // Update submissions with the new user data
          setSubmissions([...submissions, newUser]);
          // Reset form data
          setFormData({ firstName: "", lastName: "", email: "" });
          alert("Form Submitted");
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form.");
      }
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const validata = () => {
    let isValid = true;
    let newErrors = { firstName: "", lastName: "", email: "" };
    if (!formData.firstName) {
      newErrors.firstName = "Firstname is required";
      isValid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = "Lastname is required";
      isValid = false;
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  const [submissions, setSubmissions] = useState<
    { firstName: string; lastName: string; email: string }[]
  >([]);
  return (
    <div className="bg-gradient-to-b from-blue-800 to-purple-800 min-h-screen flex flex-col items-center justify-center">
      <div className="form-container bg-black p-10 mb-10 w-full max-w-md space-y-6 flex items-center justify-center rounded-2xl">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold"> Form</h2>
          <label className="flex mb-4">
            Firstname:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className=" border rounded-md focus:ring-2"
            ></input>
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </label>
          <label className="flex mb-4">
            Lastname:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className=" border rounded-md focus:ring-2"
            ></input>
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </label>
          <label className="flex mb-4">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" border rounded-md focus:ring-2"
            ></input>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </label>
          <button
            type="submit"
            className="w-full bg-blue-400 rounded-md hover:bg-blue-300  transition"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="bg-black p-2 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold">Table</h2>
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="border border-gray-300 px-2 py-2">Firstname</th>
              <th className="border border-gray-300 px-2 py-2">Lastname</th>
              <th className="border border-gray-300 px-2 py-2">Email</th>
              <th className="border border-gray-300 px-2 py-2">Count</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-2 py-2">
                  {submission.firstName}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {submission.lastName}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {submission.email}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {index + 1}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Page;
