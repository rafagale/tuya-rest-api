
import { Device } from "../model/tuya.device";
import { TuyaContext } from '@tuya/tuya-connector-nodejs';


const tuya = new TuyaContext({
    baseUrl: 'https://openapi.tuyaeu.com',
    accessKey: process.env.CLIENT_ID,
    secretKey: process.env.CLIENT_SECRET,
    version: 'v2'
});

/**
 * Service Methods
 */
export const switchStatus = async (devices: Array<string>): Promise<null | boolean> => {
    //Get current status of any of the devices in the group
    let response = await tuya.request({
        method: 'GET',
        path: '/v1.0/devices/' + devices[0]
    });
    
    let lamp = response.result as Device;
    let currentStatus = getSwitchStatus(lamp);

    //Switch status
    devices.forEach(async device => {
        await tuya.request({
            method: 'POST',
            path: '/v1.0/devices/' + device + '/commands',
            body:
            {
                "commands":
                    [
                        {
                            "code": process.env.SWITCH_COMMAND,
                            "value": !currentStatus
                        }
                    ]
            }
        }).then(() => console.log(`${device} changed from ${currentStatus} to ${!currentStatus}`));
    });
    return !currentStatus;
};

function getSwitchStatus(lamp: Device) {
    for (let element of lamp.status) {
        if (process.env.SWITCH_COMMAND === element.code) {
            return element.value;
        }
    }
    return false;
}