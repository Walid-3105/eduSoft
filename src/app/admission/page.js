"use client";
import { AuthContext } from "@/context/AuthProvider";
import React, { useState, useEffect, useRef, useContext } from "react";
import toast from "react-hot-toast";

const AdmissionPage = () => {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const { user } = useContext(AuthContext);
  const fileInputRef = useRef();
  const initialFormState = {
    candidateName: "",
    subject: "",
    candidateEmail: "",
    candidatePhone: "",
    address: "",
    dob: "",
    candidateImage: null,
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    const fetchColleges = async () => {
      const res = await fetch("https://edusoft-server.vercel.app/api/colleges");
      const data = await res.json();
      setColleges(data);
    };
    fetchColleges();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "candidateImage") {
      setFormData({ ...formData, candidateImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    // Matching frontend keys with backend expectations
    form.append("candidateName", formData.candidateName);
    form.append("subject", formData.subject);
    form.append("candidateEmail", formData.candidateEmail);
    form.append("candidatePhone", formData.candidatePhone);
    form.append("address", formData.address);
    form.append("dob", formData.dob);
    form.append("candidateImage", formData.candidateImage);
    form.append("collegeId", selectedCollege._id);
    form.append("collegeName", selectedCollege.collegeName);

    try {
      const res = await fetch(
        "https://edusoft-server.vercel.app/api/admissions",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await res.json();

      toast.success(result.message || "Admission submitted successfully!");

      setFormData(initialFormState);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setSelectedCollege(null);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit admission form.");
    }
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      candidateName: user?.displayName || "",
      candidateEmail: user?.email || "",
    }));
  }, [user]);

  return (
    <div className="max-w-3xl min-h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Apply for Admission
      </h1>

      {!selectedCollege ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {colleges.map((college) => (
            <button
              key={college._id}
              onClick={() => setSelectedCollege(college)}
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-semibold"
            >
              {college.collegeName}
            </button>
          ))}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white shadow-md rounded p-6 mt-4"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Admission to: {selectedCollege.collegeName}
          </h2>

          <input
            type="text"
            name="candidateName"
            onChange={handleChange}
            ref={fileInputRef}
            value={formData.candidateName}
            required
            readOnly
            placeholder="Candidate Name"
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="subject"
            onChange={handleChange}
            ref={fileInputRef}
            required
            placeholder="Subject"
            className="w-full p-2 border rounded"
          />

          <input
            type="email"
            name="candidateEmail"
            ref={fileInputRef}
            value={formData.candidateEmail}
            onChange={handleChange}
            required
            readOnly
            placeholder="Candidate Email"
            className="w-full p-2 border rounded"
          />

          <input
            type="tel"
            name="candidatePhone"
            ref={fileInputRef}
            onChange={handleChange}
            required
            placeholder="Candidate Phone Number"
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="address"
            ref={fileInputRef}
            onChange={handleChange}
            required
            placeholder="Address"
            className="w-full p-2 border rounded"
          />

          <input
            type="date"
            name="dob"
            ref={fileInputRef}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            type="file"
            name="candidateImage"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit Admission
          </button>
        </form>
      )}
    </div>
  );
};

export default AdmissionPage;
