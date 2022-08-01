import React from 'react'

function contact() {
  return (
<main className="flex flex-col items-center justify-center space-y-10 space-x-10" >
<div  className=''>
 <h1 className='flex flex-container items-center justify-center font-bold italic'> FORMULAIRE DE CONTACT </h1> </div>

 <div className='flex-container items-center justify-center'> 
<div className="w-full md:w-96 md:max-w-full mx-auto">
  <div className="p-6 border border-gray-300 sm:rounded-md">
    <form method="POST" action="https://herotofu.com/start">
      <label className="block mb-6">
        <span className="text-gray-700">Votre Nom : </span>
        <input type="text"name="name"
          classNameclassName="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
          placeholder="Bloggs"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Votre Préom : </span>
        <input type="text"name="name"
          classNameclassName="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
          placeholder="Joe"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Email</span>
        <input
          name="email"
          type="email"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="joe.bloggs@example.com"
          required
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Message</span>
        <textarea
          name="message"
          className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows="8"
          placeholder="Merci de mettre votre message..."
        ></textarea>
      </label>
      <div className="mb-6 flex items-center justify-center mx-auto w-full">
        <button type="submit" className=" h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
          Envoyer
        </button>
      </div>
    </form>
  </div>
</div>
</div>
</main>
 
  )
}

export default contact