import React from 'react'
import { FaMailBulk, FaSms } from 'react-icons/fa'
const Contacts = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 text-white">
        <div className="text-center  ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  placeholder="Enter your subject"
                  className="input input-bordered  "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">What you wont</span>
                </label>
                <input
                  type="text"
                  placeholder="What you wont"
                  className="input input-bordered h-36 w-full"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  Sent <FaSms />{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
