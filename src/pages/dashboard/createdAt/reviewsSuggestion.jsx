import { Button } from '@material-tailwind/react'
import React from 'react'

export function ReviewsSuggestion() {
  return (
    <>
      <br />
      <h1>Business Objective: sell product online</h1>
      <h1>Business Status: sale product online without website first</h1>
      <h1>Suggestions:</h1>
      <div className="">
        <div class="grid gap-4 grid-cols-2  h-96 w-3/5  text-center">
          <div class="border-solid border-2 border-gray-400 text-center">
            <p>website traffic 1k per month</p>
            <p>conversion puchase less 50 per month</p>
            <p>......................</p>
            <p>......................</p>
            <p>......................</p>
            <p>......................</p>
          </div>
          <div class="border-solid border-2 border-gray-400 text-center">
            <p>website traffic 1k per month</p>
            <p>conversion puchase greater 50 per month</p>
            <p>......................</p>
            <p>......................</p>
            <p>......................</p>
            <p>......................</p>
          </div>
          <div class="border-solid border-2 border-gray-400">

            <div className="">
              <div className="text-center">
                Proposed action on website based

              </div>

              <div class="grid grid-cols-3 gap-4">
                <div class="border-solid border-2 border-gray-400 rounded-xl ">01</div>
                <div class="border-solid border-2 border-gray-400 rounded-xl ">02</div>
                <div class="border-solid border-2 border-gray-400 rounded-xl ">03</div>
              </div>

            </div>

          </div>
          <div class="border-solid border-2 border-gray-400 text-center">
            <p>suggest campaign name</p>
            <p>......................</p>
            <p>......................</p>
            <p>......................</p>
            <p>......................</p>
          </div>

        </div>

      </div>

    </>
  )
}

export default ReviewsSuggestion