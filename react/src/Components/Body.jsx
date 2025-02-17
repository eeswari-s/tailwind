import React from 'react'

function Body() {
  return (
    <div>
         <div class="container mx-auto mt-12 bg-gray-100">
      <section class="flex justify-center items-center py-10">
        <div class="w-1/2 px-10 text-left">
          <h2 class="text-3xl font-bold text-black">
            Getting started with Albino is easier than ever
          </h2>
          <p class=" mt-5 text-sm text-gray-600" >With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.</p>
          <button class="mt-5 bg-blue-600 text-white px-5 py-2 rounded text-sm">
            Getting Started Free
          </button>
        </div>
        <div class="w-1/2 flex justify-center">
          <img
            src="./assets/gamebg.png"
            alt=""
            class="rounded shadow-sm"
          />
        </div>
      </section>

      <section class="bg-white">
        <div class="flex justify-around text-center">
          <div class="mt-12 mb-12">
            <h2 class="text-2xl font-bold">1M+</h2>
            <p class="text-cxl text-gray-600 mt-3">
              Customers visit Albino every month
            </p>
          </div>
          <div class="mt-12 mb-12">
            <h2 class="text-2xl font-bold">93%</h2>
            <p class="text-cxl text-gray-600 mt-3">
              Satisfaction rate from our customers
            </p>
          </div>
          <div class="mt-12 mb-12">
            <h2 class="text-2xl font-bold">4.9</h2>
            <p class="text-cxl text-gray-600 mt-3">
              Average customer rating on our platform
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Body