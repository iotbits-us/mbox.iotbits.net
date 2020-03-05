---
id: modbusbox-operational-modes
title: Operational Modes
sidebar_label: Operational Modes
---

## Operational Modes

There are two operational modes in which the ModbusBox can be operated:

* Normal Mode
* Setup Mode

:::important
Notice that **Setup Mode** is an optional operational mode to perform the initial setup of the device or to access its configuration while not yet connected to an Wi-Fi network. While in this mode, the device will not performs its modbus polling task neither will stablish connection with the cloud platform. 
:::



## Normal Mode

The **Normal Mode** is the default operational mode in which the device performs normally as configured by the user. Polling Cycle and MQTT Data Reporting will occur while in this operational mode.

### Polling Cycle

We refer to polling cycle as the event of reading data from all configured slaves. The polling cycle starts when the polling interval reaches its starting point and it ends when the process of reading every slave's registers finishes with the last slave in the queue.

> Notice that **polling cycle** enabled/disabled state and **polling interval** can be managed by the user through the Web-UI.

### Cloud Data Reporting

The Cloud Data Reporting process starts when the polling cycle finishes if enabled. This is the process that sends the data gathered from the selected slaves to the Cloud platform via MQTT.

> Notice that **Cloud Data Reporting** can be enabled or disabled by the user through the Web-UI.



## Setup Mode

**Setup Mode** is an optional operational mode to perform the initial setup of the device or to access its configuration while not yet connected to an Wi-Fi network.

When the ModbusBox has not been configure for the first time, it will automatically enter in Setup Mode allowing the user to connect to its Wi-Fi Access Point and open the Web-UI to perform the initial setup with ease. 

When the device enters in Setup Mode, a Wi-Fi Access Point will be created with the device's hostname as the SSID. By default the device's hostname starts with **MBOX** follow by the device model code and finally the **Chip ID** which is generated from the device's MAC Address. 

Take the following hostname as an example: **MBOX-A4W-A2C40A24**. If you use a Windows 10 device to perform the search It looks like this:

![modbusbox-ap-ssid-pc](https://raw.githubusercontent.com/iotbits-us/mbox.iotbits.net/master/static/img/modbusbox-ap-ssid.png) 

### Entering in Setup Mode

To boot the device in **Setup Mode**, press and hold the **Setup** button and then press and release the **Reset** button while holding **Setup** button for 3 seconds or until **Status LED** change from fading pattern to fast blinking on green.

To exist **Setup Mode**, just restart the device by the Web-UI or pressing the hardware **Reset** button.

> More information about [Control Buttons](hardware-info#control-buttons) and the [Status LED](hardware-info#status-led) on the [Hardware Information](hardware-info#control-buttons) section.