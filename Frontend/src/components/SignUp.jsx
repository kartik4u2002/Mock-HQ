import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./ui/Input";
import PrimaryButton from "./ui/PrimaryButton";
import { signupRequest, loginRequest } from "../api";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Candidate");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    setError(null);
    setSuccessMsg(null);

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await signupRequest({
        name: name.trim(),
        email: email.trim(),
        password,
        role,
      });

      setSuccessMsg("Registered successfully! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 800);
    } catch (err) {
      const msg =
        err?.response?.data?.message || err?.message || "Signup failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
          Create Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <Input
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Role */}
          <div>
            <label className="text-sm font-medium text-gray-700">Role</label>
            <div className="mt-2">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="rounded-lg p-3 border bg-white/90 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>Candidate</option>
                <option>Interviewer</option>
              </select>
            </div>
          </div>

          {/* Error / Success Messages */}
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          {successMsg && (
            <p className="text-green-600 text-sm text-center">{successMsg}</p>
          )}

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <PrimaryButton type="submit" disabled={loading}>
              {loading ? "Please wait..." : "SIGN UP"}
            </PrimaryButton>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 underline hover:text-blue-800"
              disabled={loading}
            >
              Login
            </button>
          </p>

          {/* Back Button */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-sm text-gray-500 hover:text-gray-700"
              disabled={loading}
            >
              Back to home
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
