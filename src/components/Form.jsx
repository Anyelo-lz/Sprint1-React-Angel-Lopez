import React, { useRef, useEffect } from 'react';

function Form() {
  const firstNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  return (
    <>   
      <div className="bg-my-image5 flex justify-center  w-screen h-screen bg-cover font-bold ">
        <form method='Get'>
          <div className=" w-10/12 ">
            <h2 className=" m-10 text-4xl text-white">Personal Information</h2>
            <div className=" ">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white ">First name</label>
              <div className="mt-2">
                <input ref={firstNameRef} type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className=" ">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6  text-white ">Last name</label>
              <div className="mt-2">
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5  text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className=" ">
              <label htmlFor="email" className="block text-sm font-medium leading-6  text-white ">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className=" ">
              <label htmlFor="password" className="block text-sm font-medium leading-6  text-white ">Password</label>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="password" className="block w-full rounded-md border-0 py-1.5  text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-white">Cancel</button>
              <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form;
