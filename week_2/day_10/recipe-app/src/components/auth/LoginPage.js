import React, { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Alert from "../common/Alert";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCred.user.uid);
      navigate("/");
    } catch (err) {
      // alert(err.message);
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="container my-5">
      <div className="card card-body">
        <h1>Login</h1>
        <p>Please enter your email and password to login</p>

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
              Login
            </button> */}
            <Button type='submit' className='px-5' loading={loading}>
              Login
            </Button>
          </div>
        </form>

        <Alert className='mt-5' show={error} onHide={() => setError('')}>
          {error}
        </Alert>
      </div>
    </div>
  );
}
