const {devices}=require('@playwright/test');
const { trace } = require('console');
const {channel}=require('diagnostics_channel');
const { on } = require('events');
 const config=({
  testDir: './tests',
  retries:1,
  fullyParallel: true,
  reporter: 'html',
  projects:[
    {
      name: 'safari',
      use: {
        browsername:'webkit',
        headless:false , 
        Trace:'on',
        screenshot:'on',
        trace:'retain-on-failure',
      },  
    },
    {
      name: 'Chrome',
      use: {
        browsername:'chromiun',
        headless:false , 
        Trace:'on',
        screenshot:'on',
        trace:'retain-on-failure'
      },  
    }
  ]
 
});
module.exports=config;

