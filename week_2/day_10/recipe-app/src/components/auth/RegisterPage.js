import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCred);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="container my-5">
      <div className="card card-body">
        <h1>Register</h1>
        <p>Please enter your email and password to register</p>

        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              value={email}
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="d-flex justify-content-end mt-4">
            {/* <button type="submit" className="btn btn-primary">
              Register
            </button> */}
            <Button type='submit' className='px-5' loading={loading}>
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
