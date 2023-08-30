import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="login">
      <form action="">
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password:
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2">
          <Link to="/dashboard" className="button">
            <button className="btn btn-primary" type="button">
              LOGIN
            </button>
          </Link>
        </div>
        <p>
          Don't have an account yet? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
