import React from 'react'
import { FaMailBulk, FaSms } from 'react-icons/fa'
import { FaFileContract, FaSeedling } from 'react-icons/fa6'

const Contacts = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Sent Now <FaSms />
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
            <form className="card-body">
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
                  className="input input-bordered h-36"
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
