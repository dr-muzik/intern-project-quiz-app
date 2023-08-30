import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Registration = (props: Props) => {
  return (
    <div className="reg">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="First Name"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            LastName
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            min={11}
            max={11}
            className="form-control"
            id="inputAddress"
            placeholder="080 xxxx xxxx"
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        {/* <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div> */}
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            Subject 1
          </label>
          <select id="inputState" className="form-select" required>
            <option value="Quiz-1" selected>
              Quiz-1
            </option>
            <option value="Quiz-2">Quiz-2</option>
            <option value="Quiz-3">Quiz-3</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            Subject 2
          </label>
          <select id="inputState" className="form-select" required>
            <option value="Quiz-1">Quiz-1</option>
            <option value="Quiz-2" selected>
              Quiz-2
            </option>
            <option value="Quiz-3">Quiz-3</option>
          </select>
        </div>
        {/* <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div> */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/">Sign in</Link>
      </p>
    </div>
  );
};

export default Registration;
