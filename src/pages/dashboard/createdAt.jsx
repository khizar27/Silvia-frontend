import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import routes from '@/pages/dashboard/createdAt/routes'
export function CreatedAt  () {
      return (
        <>
        <div className=''>
        <br />
        <div className="">
            <h1>Design Your Ad</h1>
        </div>
        <br />
        <Tabs value="html">
          <TabsHeader>
            {routes.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {
                  console.log(value,"value")
                }
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {routes.map(({ value, element, }) => (
              <TabPanel key={value} value={value}>
                {element}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>

        </div>
        
        </>
 
        
        );
}

export default CreatedAt