import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  IconButton,
  Button,
  Input,
  Select,
  Option,
  CardFooter
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import CamapignAdd from './camapignAdd';


export function Campaign() {
  const [data, setData] = useState([])
  const [campaign, setCampaign] = useState({});

  const Navigate = useNavigate()
  let spacialAddArr = ['Credit', 'Employment', 'Housing', 'Social Issues, elections or politics']
  useEffect(() => {
    fetch('http://localhost:4000/facebook/campaign').then((result) => {

      result.json().then((resp) => {
        // console.log(resp?.camapign,"resp");
        setData(resp?.camapign)
        // setData(resp?.camapign)
        // console.log(data,"success");
      })
    })
  }, [])
 

 const campaign_add = async()=>{
    console.log('abghbh');
    let result = await fetch('http://localhost:4000/facebook/campaign', {
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
        
      },

    });
    console.log(result,"rsult");
    result = await result.json()
      .then(Result => {
        // console.log(Result,"pahlay");
        setCampaign(Result)
        console.log(Result,"ye filds h")

        //   Navigate('/dashboard/home')



      })
  
    // console.log(check);
    // var alert_id = document.getElementById("toast-danger");
    // var alert_show = alert_id.style.display
    // if (alert_show === 'none') {
    //   alert_id.style.display = 'flex'
    // }

  
 }

  return (
    <>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <div><CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              CAMPAIGN
            </Typography>
            
          </CardHeader></div>

          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["campaign_id", "name", "status", "special_ad_categories", "objectives", "user_id"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.map(
                  ({ campaign_id, name, status, special_ad_categories, objective, id }, key) => {
                    const className = `py-3 px-5 ${key === data.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                      }`;

                    return (
                      <tr>
                        <td className={className}>
                          <div className="flex items-center gap-4">

                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {campaign_id}
                              </Typography>

                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {name}
                          </Typography>

                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {status}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {special_ad_categories}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {objective}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            {id}
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>

      </div>


      <div
        data-te-modal-init
        class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"

        id="exampleModalCenter"
        tabindex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog">
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]" style={{ left: "644px" }}>
          <div
            class="pointer-events-auto relative flex  flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600" style={{ width: "600px" }}>
            <div
              class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalScrollableLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="relative p-4">






              <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
              <div className="container mx-auto p-4">
                <Card className="absolute top-2/4 left-2/4 w-full max-w-[40rem] -translate-y-2/4 -translate-x-2/4">
                  <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                  >
                    <Typography variant="h3" color="white">
                      Add-Campaign
                    </Typography>
                  </CardHeader>
                  <CardBody className="flex flex-col gap-4">
                    Camapaign Name
                    <Input label="Campaign Name" size="lg" required='true'
                      value={campaign.name}
                      onChange={(e) => setCampaign({...campaign, name: e.target.value })} />

                    Declare if your ads are related to credit, employment or housing, or about social issues, elections or politics. Requirements differ by country.

                    
                    <CamapignAdd/>


                    {/* <Select label="Objective"
                    value={campaign.objective}
                    onChange={(e) => setCampaign({ ...campaign, objective: e.target.value })}>
                      <Option>LINK_CLICKS</Option>
                    </Select> */}
                    {/* <Input label="Objective" size="lg" required='true'
                      value={campaign.objective}
                      onChange={(e) => setCampaign({ ...campaign, objective: e.target.value })} /> */}

                    {/* <Select label="Status"
                    value={campaign.status}
                    onChange={(e) => setCampaign({ ...campaign, status: e.target.value })}
                    >
                      <Option>PAUSED</Option>
                      <Option>ACTIVE</Option>
                    </Select> */}
                    {/* <Input label="Status" size="lg" required='true'
                      value={campaign.status}
                      onChange={(e) => setCampaign({ ...campaign, status: e.target.value })} /> */}

                  </CardBody>
                  <CardFooter className="pt-0">

                    <Button variant="gradient" fullWidth
                      onClick={campaign_add}>
                      Submit
                    </Button>

                  </CardFooter>
                </Card>
              </div>







            </div>

          </div>
        </div>
      </div>

    </>

  );
}

export default Campaign