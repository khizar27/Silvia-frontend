import React,{useState} from 'react'
import Flow from '../componant/flow'
import {
  Button,
  Select,
  Option
} from "@material-tailwind/react";


export function ChooseBusinessObjective() {
  let Arr = ['Sale Product Online','Get More App Install','Increase Brand Awareness','Get More Store Trafic']
  const [first, setfirst] = useState('')
  return (
    <>
      <div className="h-screen  ">
        <div className="h-96">
          <br /><br />
          <div className=" w-96 ">
            <h1>Choose your Business Objective</h1>

            <select style={{width:'380px',padding:'9px'}}  label="select One Option" value={first} onChange={(e) =>setfirst(e.target.value)}>
            <option disabled={first ? true : false}>Select option</option>
              {
                Arr?.map((item) => {
                  console.log(first, "first")
                  return <option value={item} key={item}>{item}</option>
                })
              }
            </select>
          </div>
          
        </div>
        <div className="flex justify-center ">
          {
            first && <Button className="content-center">NEXT</Button>
          }
        
        </div>
        
      </div>



    </>
  )
}

export default ChooseBusinessObjective