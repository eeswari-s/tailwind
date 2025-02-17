import React from 'react'

function Block() {
  return (
    <div>
           <div class="flex justify-center space-x-6 bg-white py-16">   
    <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-black  mr-20">Build better landing page fast</h2>
        <p class="text-gray-600 mt-2 text-wrap text-left ml-34 ">With lots of unique blocks, you can easily build a page without coding. <br/> Build your next landing page.</p>
    </div>
    <div class="flex justify-evenly space-x-6 mt-8 ">
        <button class="w-25 h-10 px-2 bg-blue-100 text-blue-700 rounded ml-16">Learn more    </button>
        <button class="w-25 h-10 px-2 bg-blue-600 text-white  rounded">Get it now    </button>
    </div>   
</div>
    </div>
    
  )
}

export default Block