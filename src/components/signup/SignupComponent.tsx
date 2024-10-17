/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from 'next/link';
import '../../styles/globals.css';

export default function Signup() {

    return (
        // <div className="bg-white h-screen  w-4/4 flex justify-center items-center">
        //     <div className="py-1  h-3/4 w-1/4 rounded bg-primary font-bold flex items-center flex-col justify-between ">
        //     <div className='bg-white w-4/4'>
        //     <h1 className="text-4xl text-white font-blold">Sign In</h1>            
        //      <span className="text-white text-l font-extralight ">Sign in with shopmade</span> 
        //     </div>


        //      <form className="flex flex-col pt-10 gap-10 " action="" >
        //         <input className='w-250 h-10' type="text" />
        //         <input className='w-4/4 h-10'  type="text" />
        //      </form>
        //      <span className="text-white text-l font-extralight pb-5"> Dont have an account ? <span className='text-#ebe6ef'>Sign Up</span></span> 

 
        //     </div>
        // </div>


<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm "> 
    <h1 className="text-5xl font-black text-center text-primary ">Shopmade</h1>
   
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to get started</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6 " action="#" method="POST">
    <div>
        <label  className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
        <div className="mt-2">
          <input id="name" name="name" type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
    Already have an account ?
      <Link href="/signin" className="font-semibold leading-6 text-primary hover:text-hover"> Sign In </Link>
    </p>
  </div>
</div>

    );
}
