import React from 'react'
import Navside from '../Comp/Navside'

export default function Signin() {
  return (
    <>
    
   
<form className='px-12 relative m-auto p-4 w-[500px] border border-b border-[#00D09c] shadow-2xl rounded-[20px]  top-[100px]'>
<h1 className='text-center text-2xl font bold mt-2'>Login Now </h1>
  <div class="mb-6 ">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
    <input type="email" id="email" class="bg- border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-black dark:text-black">Remember me</label>
  </div>
  <div className='flex'>
  <button type="submit" class="text-white bg-[#00D09c] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#00D09c] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button><span className='ml-24 mt-1'> do you have'nt account?</span><p className='text-blue-500 ml-1 mt-1'>Sign-up</p>
  </div>
</form>

    
    
    
    </>
  )
}
