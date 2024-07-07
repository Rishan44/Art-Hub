import React from 'react'

export default function SignIn() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-slate-400 text-white p-8 rounded-2xl shadow-md w-96 text-center'>
        <img/>
        <h2 className='text-slate-600 text-2x1 font-bold mb-6'>USER LOGIN</h2>
        <form>
          <div className='mb-4'>
            <label>Email:</label>
            <input 
            type="email"
            name="email"
            className='text-black w-full p-2 border-gray-300 rounded'
             />
          </div>

          <div className='mb-4'>
            <label>Password:</label>
            <input 
            type="password"
            name='password'
            className='text-black w-full p-2 border-gray-300 rounded'
            />
          </div>
          <div className='flex items-center justify-center'>
            <button type='submit' className="bg-yellow-500 mt-2 text-gray-900 py-2 px-6 rounded-full hover:bg-yellow-400 focus:outline-none focus:ring focus:border-blue-300 mr-4" >Submit</button>
            <button/> 
          </div>
        </form>
      </div>
    </div>
  )
}
