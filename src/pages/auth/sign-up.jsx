import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert
} from "@material-tailwind/react";
import CheckBox from "./checkBox";

export function SignUp() {
  const [check, setCheck] = useState(false)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    businessname: "",
    industry: "",
    province: ""
  });
  const Navigate = useNavigate()


  const signup = async () => {
    if (check) {
      console.log(data)
      let result = await fetch('http://localhost:4000/auth/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      result = await result.json()
        .then(Result => {
          console.log(Result, "result");
          setData(Result)
          console.log(data);
          if(Result.success === false){
            toast.warning(Result.error)
          }else{
            toast.success(Result.message)
            Navigate('/auth/sign-in',)
          }
          
          
          


        })
    }
    else {
      toast('click on term and condition')
      // <Alert color="blue">fill checkbox</Alert>
      // <CheckBox/>
    }
  }
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">

            <Input label="First Name" size="lg" required= 'true'
              value={data.firstname}
              onChange={(e) => setData({ ...data, firstname: e.target.value })} />

            <Input label="Last Name" size="lg"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })} />

            <Input type="email" label="Email" size="lg"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })} />

            <Input type="password" label="Password" size="lg"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })} />

            <Input label="Business Name" size="lg"
              value={data.businessname}
              onChange={(e) => setData({ ...data, businessname: e.target.value })} />

            <Input label="Industry" size="lg"
              value={data.industry}
              onChange={(e) => setData({ ...data, industry: e.target.value })} />

            <Input label="Province" size="lg"
              value={data.province}
              onChange={(e) => setData({ ...data, province: e.target.value })} />


            <div className="-ml-2.5">
              <Checkbox onClick={() => { setCheck(!check) }} label="I agree the Terms and Conditions" />
            </div>

            {/* <div className="flex items-center justify-between max-w-xs p-4 bg-white border rounded-md shadow-sm">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <p className="ml-3 text-sm font-bold text-green-600">Successfully Toast Message !</p>
              </div>
            </div> */}


          </CardBody>
          <CardFooter className="pt-0">

            <Button variant="gradient" fullWidth
              onClick={signup}>
              Sign Up
            </Button>


            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
