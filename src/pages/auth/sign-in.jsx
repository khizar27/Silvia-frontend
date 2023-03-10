import { Link } from "react-router-dom";
import React, { useState } from "react";
import SilviaAlert from "@/widgets/layout/silviaAlert";
import ReactDOM from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom'
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
import { ToastContainer, toast } from 'react-toastify';

export function SignIn() {
  const [check, setCheck] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const Navigate = useNavigate()
  let location = useLocation();



  const close_Alert = () => {

    if (!data) {
      alert_id.style.display = 'flex'
    }
    var alert_id = document.getElementById("toast-danger");
    var alert_show = alert_id.style.display
    if (alert_show === 'flex') {
      alert_id.style.display = 'none'
    }
  }
  let error1 = "Click on checkbox"
  const login = async () => {
    // use
    if (check) {
      console.log(data)
      let result = await fetch('http://localhost:4000/auth/login', 
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      result = await result.json()
        .then(Result => {
          
          setData(Result)
          console.log(Result,"ye filds h");

          if (Result.success === false) {
            toast.warning(Result.message);
          } else {
            toast.success(Result.message);
            Navigate('/dashboard/home')
            localStorage.setItem("user", JSON.stringify(Result))
          }
        })
    } else {
      console.log(check);
      var alert_id = document.getElementById("toast-danger");
      var alert_show = alert_id.style.display
      if (alert_show === 'none') {
        alert_id.style.display = 'flex'
      }

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
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">

            <Input type="email" label="Email" size="lg"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })} />

            <Input type="password" label="Password" size="lg"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })} />


            <div className="-ml-2.5">

              <Checkbox onClick={() => { setCheck(!check) }} label="Remember Me" />
            </div>

            <SilviaAlert close_Alert={close_Alert} error1={error1}/>
          </CardBody>
          <CardFooter className="pt-0">

            <Button variant="gradient" fullWidth onClick={login}>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>

      </div>
    </>
  );
}

export default SignIn;
