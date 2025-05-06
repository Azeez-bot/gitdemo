const {devices}=require('@playwright/test');
const { trace } = require('console');
const {channel}=require('diagnostics_channel');
const { on } = require('events');
 const config=({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    browsername:'Chromium',
    headless:false , 
    Trace:'on',
    screenshot:'on',
    trace:'retain-on-failure'
  },  
});
module.exports=config;

