import React from 'react';

const Mint = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-20 py-40 mx-auto flex flex-wrap justify-end">
    <div className="lg:w-1/2 md:w-full p-4 ml-10">
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-20 sm:flex-row flex-col">
        {/* Content goes here */}
      </div>
    </div>
  </div>
</section>

<div className="flex">
 
    <div className="container px-20 py-10 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 md:w-full p-4">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          {/* Content goes here */}
        </div>
      </div>
    </div>

 
    <div className="container px-20 py-10 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 md:w-full p-4 pl-0"> {/* Adjusted margin to remove space */}
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          {/* Content goes here */}
        </div>
      </div>
    </div>
 
</div>





    </>
  );
};

export default Mint;
