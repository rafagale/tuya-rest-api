# Tuya Device Switch REST API

<p align="center">
  <img src="https://raw.githubusercontent.com/rafagale/tuya-rest-api/main/tuya-rest-api.png" width="600px" alt="tuya-switch-api-logo" />
</p>

## Description
API endpoint that behaves like a switch for a single device or multiple devices in the same group that use the [Tuya](http://tuya.com) cloud network (TuyaSmart or Smart Life apps). 

It uses the official nodejs connector by Tuya which supports the new Signature algorithm implemented on June 30, 2021 on Tuya IoT Platform.

Useful to use with NFC tags and/or to enhace automation tasks with other frameworks. Eg: Write the endpoint call to a NFC tag to turn on/off all the lights in the same room/group.


## Installation

Clone this repository:
```
$ git clone https://github.com/rafagale/tuya-rest-api
```

Navigate to the new `tuya-rest-api` folder and install the node dependencies.
```
$ npm i
```

## Pre-requisites
See the [setup instructions](https://github.com/codetheweb/tuyapi/blob/master/docs/SETUP.md) for how to find the needed parameters. Once this is done you need to fill the .env file in the root of the project with your api key, api secret and the virtual ids of your devices. 

Additionally you may need to change the switch method for your device.
```
$ cp sample.env .env && nano .env
```

## Usage
Use the following command to run it or use any process manager like forever or pm2
```
$ npm start
```

## Endpoint(s)

|Method name|API endpoint|HTTP method|Input|Output|
|-----------|------------|-----------|-----|------|
|switchStatus|/tuya/switchdevices|GET|(All is inside .env file)|See below|


### Call example
```
http://<hostname>:<port>/tuya/switchdevices
```

Output examples

```json5
{
  "success": true,
  "message": "OK",
  "status": true  //powered on after the api call
}
```

```json5
{
  "success": true,
  "message": "OK",
  "status": false  //powered off after the api call
}
```