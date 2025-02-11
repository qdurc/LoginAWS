// import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <h1>Welcome back</h1>
      <div>
        <Link to="/login">
          <button className=" bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
            Logout
          </button>
        </Link>
      </div>
      
    </>
    
  )
}
