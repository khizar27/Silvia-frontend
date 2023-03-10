import React, { useState } from 'react'
import {
  Button,
  Select,
  Option
} from "@material-tailwind/react";
export function SelectBusinessStatus() {
  const [first, setfirst] = useState('')
  const [second, setsecond] = useState('')
  // const mainDropdown = () => {
  //   console.log(first, "first");
  // }
  const firstdropDownArr = ['Sale Product Online With a Website', 'Sale Product Online Without Website']
  const secondDropdown = {
    'Sale Product Online With a Website': ['New Business', 'Established Business'],
    'Sale Product Online Without Website': ['New Business', 'Established Business']
  }
  
  return (
    <>
      <br />
      <h1>BusinessStatus : ____</h1>
      <div className="h-screen">
        <div className="h-96 ">
          <br />

          <div className=" w-96">
            <h1>Business Status</h1>

            <select style={{width:'380px',padding:'9px'}}  label="select One Option" value={first} onChange={(e) =>setfirst(e.target.value)}>
            <option disabled={first ? true : false}>Select option</option>
              {
                firstdropDownArr?.map((item) => {
                  console.log(first, "first")
                  return <option value={item} key={item}>{item}</option>
                })
              }
            </select>
          </div>

          <br /><br />

          <div className=" w-96">
            {
              first && <select style={{width:'380px',padding:'9px'}}  label="select One Option" value={second} onChange={(e) =>setsecond(e.target.value)}>
              <option disabled={second ? true : false}>Select option</option>
                {
                  secondDropdown[first]?.map((item) => {
                    console.log(second, "second")
                    return <option value={item} key={item}>{item}</option>
                  })
                }
              </select>
            }

          </div>
        </div>
        <div className="flex justify-center">
              {
                second && <Button  className="content-center">NEXT</Button>
              }
              
            </div>


      </div>
    </>

  )
}

export default SelectBusinessStatus