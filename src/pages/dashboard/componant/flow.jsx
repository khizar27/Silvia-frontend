import React from 'react'
import {
  Button
} from "@material-tailwind/react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export function Flow() {
  return (
    <>
    <br/>
    <br/>
    {/* <div className="flex padding-20px">
      <h1>Design your Ad</h1>
    </div>
      <div className="flex   justify-center ">
        <div>
          <Button className='border-solid border-2 w-40 h-20'>Choose Business Objective</Button>
        </div>
        <div className='mt-7'>
          <span>
            <ArrowRightAltIcon />
          </span>
        </div>
        <div>
          <Button className='border-solid border-2 w-40 h-20'>Select Business Status</Button>
        </div>
        <div className='mt-7'>
          <span>
            <ArrowRightAltIcon />
          </span>
        </div>
        <div>
          <Button className='border-solid border-2 w-40 h-20'>Review suggestion</Button>
        </div>
        <div className='mt-7'>
          <span>
            <ArrowRightAltIcon />
          </span>
        </div>
        <div>
          <Button className='border-solid border-2 w-40 h-20'>Create Ad</Button>
        </div>
        <div className='mt-7'>
          <span>
            <ArrowRightAltIcon />
          </span>
        </div>
        <div>
          <Button className='border-solid border-2 w-40 h-20'>Run Campaign</Button>
        </div>
      </div> */}
      
    <div className="flex  justify-center  ">
         
    <button >
        <input type="radio" id="hosting-small1" name="hosting" value="hosting-small" class="hidden peer" required/>
        <label for="hosting-small1" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block h-8">
                <div class="w-48 text-lg font-semibold">Choose Business Objective</div>
                {/* <div class="w-full">Good for small websites</div> */}
            </div>
            <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
    </button>
    <button>
        <input type="radio" id="hosting-small2" name="hosting" value="hosting-small" class="hidden peer" required/>
        <label for="hosting-small2" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-48 text-lg font-semibold">Select Business Status</div>
                {/* <div class="w-full">Good for small websites</div> */}
            </div>
            <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
    </button>
    <button>
        <input type="radio" id="hosting-small3" name="hosting" value="hosting-small" class="hidden peer" required/>
        <label for="hosting-small3" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-48 text-lg font-semibold">Review Suggestion</div>
                {/* <div class="w-full">Good for small websites</div> */}
            </div>
            <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
    </button>
    <button>
        <input type="radio" id="hosting-small4" name="hosting" value="hosting-small" class="hidden peer" required/>
        <label for="hosting-small4" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-48 text-lg font-semibold">Create Ad</div>
                {/* <div class="w-full">Good for small websites</div> */}
            </div>
            <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
    </button>
    <button>
        <input type="radio" id="hosting-small5" name="hosting" value="hosting-small" class="hidden peer" required/>
        <label for="hosting-small5" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-48 text-lg font-semibold">Run Campaign</div>
                {/* <div class="w-full">Good for small websites</div> */}
            </div>
            <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
    </button>

    
      </div>
 
    </>
  )
}

export default Flow