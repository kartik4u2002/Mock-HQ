import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./ui/Card";
import PrimaryButton from "./ui/PrimaryButton";

export default function Dashboard({ openSignup, openLogin }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Get user info from Login/Signup navigation state or fallback
  const user = location.state?.user || { name: "Guest", role: "Candidate" };
  const role = (user.role || "Candidate").toString();

  // Interviewer UI
  const InterviewerView = () => (
    <>
      <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">
        Interviewer Panel — Welcome, <span className="text-blue-600">{user.name}</span>!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
        <Card className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <div className="text-lg font-semibold mb-3 text-gray-800">Schedule Interview</div>
          <div className="mb-4 text-5xl">📅</div>
          <PrimaryButton onClick={() => alert("Open booking modal (stub)")}>Book Now</PrimaryButton>
        </Card>

        <Card className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <div className="text-lg font-semibold mb-3 text-gray-800">Interviews for Review</div>
          <div className="mb-4 text-5xl">📝</div>
          <div className="text-sm text-gray-600 mb-3">Pending recordings and feedback to review</div>
          <button className="text-sm text-blue-600 underline hover:text-blue-800" onClick={() => alert("Go to review list")}>Review Now</button>
        </Card>

        <Card className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <div className="text-lg font-semibold mb-3 text-gray-800">Templates & Settings</div>
          <div className="mb-4 text-5xl">⚙️</div>
          <div className="text-sm text-gray-600 mb-3">Feedback templates, availability & profile</div>
          <PrimaryButton onClick={() => alert("Open templates")}>Manage</PrimaryButton>
        </Card>
      </div>
    </>
  );

  // Candidate UI
  const CandidateView = () => (
    <>
      <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">
        Candidate Dashboard — Welcome, <span className="text-blue-600">{user.name}</span>!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
        <Card className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <div className="text-lg font-semibold mb-3 text-gray-800">Upcoming Interviews</div>
          <div className="mb-4 text-5xl">🎯</div>
          <div className="text-sm text-gray-600 mb-4">See your scheduled interviews and details</div>
          <PrimaryButton onClick={() => alert("Open upcoming interviews")}>View</PrimaryButton>
        </Card>

        <Card className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <div className="text-lg font-semibold mb-3 text-gray-800">Practice Questions</div>
          <div className="mb-4 text-5xl">💡</div>
          <div className="text-sm text-gray-600 mb-4">Brush up technical & behavioral questions</div>
          <PrimaryButton onClick={() => alert("Open practice")}>Practice</PrimaryButton>
        </Card>

        <Card className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <div className="text-lg font-semibold mb-3 text-gray-800">Past Feedback</div>
          <div className="mb-4 text-5xl">📂</div>
          <div className="text-sm text-gray-600 mb-4">Review feedback from previous interviews</div>
          <button className="text-sm text-blue-600 underline hover:text-blue-800" onClick={() => alert("View feedback history")}>View All</button>
        </Card>
      </div>
    </>
  );

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Render based on role */}
      {role.toLowerCase() === "interviewer" ? <InterviewerView /> : <CandidateView />}

      {/* Footer Links (common) */}
      <div className="mt-10 text-center text-sm text-gray-600">
        Not your account?{" "}
        <button onClick={() => navigate("/signup")} className="text-blue-600 underline hover:text-blue-800">Create one</button>{" "}
        or{" "}
        <button onClick={() => navigate("/login")} className="text-blue-600 underline hover:text-blue-800">Login</button>
        .
      </div>
    </section>
  );
}
