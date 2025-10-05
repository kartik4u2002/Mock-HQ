import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./ui/Input";
import PrimaryButton from "./ui/PrimaryButton";

export default function Login({ onBack }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
      return;
    }

    // Temporary mock login success
    navigate("/dashboard", { state: { user: { name: email.split("@")[0] } } });
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
          Welcome Back
        </h2>

        <div className="space-y-4">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-center mt-6">
            <PrimaryButton onClick={handleLogin}>LOGIN</PrimaryButton>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 underline"
            >
              Sign Up
            </button>
          </p>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
