import { Button } from '@material-tailwind/react'
import React from 'react'
import { render } from 'react-dom'
import SilviaAlert from './silviaAlert'

function demo() {

    const click = ()=>{
      <SilviaAlert/>
    }
    console.log(click,"click");
    render(
      SilviaAlert()
    )
  return (
    <div>
      
      <Button onClick={click}>click it</Button>
    </div>
  )
}

export default demo