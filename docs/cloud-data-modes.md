---
id: cloud-data-modes
title: Cloud Data Modes
sidebar_label: Cloud Data Modes
---



## Cloud Data Modes

When sending data to the cloud platform, the MQTT topic and payload to be sent, must match the receiving platforms requirements of topic as well as the payload structure. Since one of the major features of the ModbusBox is its flexibility, we made possible to select different profiles for the topic and data structure and we called it **Cloud Data Modes**.

There are currently three **Cloud Data Modes** available:

* Standard Mode
* Ubidots Compatibility Mode
* Extended Ubidots Compatibility Mode

If you plan to use your own MQTT broker and visualization tool, use the **Standard Mode** and you should be able to adapt the receiving endpoint to the **Standard Mode**. 

> We plan to add the possibility of create custom **Cloud Data Modes** in future developments. 



### Standard Mode

In the **Standard Mode**, the host which is the ModbusBox, is considered the root device. 

In this data mode, the following topic is used to publish all kind of messages:

```bash
/v1.6/devices/{device_name}
```

> device_name: Name of the ModbusBox



There are currently three type of messages that the ModbusBox publishes to the cloud:

* Host Status Message
* Slave Data Message
* Notification Message



Those messages vary on their structure. Below is a detailed description of each type of MQTT messages published from ModbusBox.



#### Host Status Message

The **Host Status Message** carries vital status information about the ModbusBox. **These variables are not user selectable**, however the report of those variables can be disabled as requested by the user through the WebUI. 

These message is published on the root of the message and may contain the following variables:

| Variable Name | Data Type | Description                                                  |
| :-----------: | :-------: | :----------------------------------------------------------- |
|    uptime     |  integer  | Time in seconds that the device has been running since last restart. |
|     RSSI      |  integer  | It is an estimated measure of power level that the device is receiving from the Wi-Fi router. |
|    chip_id    |  string   | Unique identification code of the device.                    |
|     ssid      |  string   | Name of the network or Wi-Fi signal that the device is connected to. |
|      ip       |  string   | IP address assigned to the device by the Wi-Fi router on the local network. |
| input_voltage |  string   | Voltage level on the device's power supply.                  |

Table 1

##### Example Host Status Message:

```json
{
    "Uptime":155,
    "RSSI":-48,   "hostname":"MBOXA4WA2C40A24",
    "chip_id":"5CF7A2C40A24",
    "ssid":"TPAHN",
    "ip":"192.168.20.180",
    "input_voltage":"24.3"
}
```



#### Slave Data Message

Register's value polled from every slave gets publish to the MQTT cloud every **Polling Cycle** defined by the **Polling Interval** parameter.

The **Slave Data Message** object contains the polled value of the register's selected by the user. This object is published in the root of the message and identified by the name of the slave.

##### Example Slave Data Message:

```json
"M200":
{
    "id":1,
    "name":"M200",
    "MotorProteccAcc":0,
    "LoadPercent":0,
    "DcbusVolts":289,
    "EnergyMeter":3.32,
    "ctrlwrd":128,
    "Analog1":0,
    "StackTemp":38,
    "InverterTemp":38,
    "IOWord":513,
    "LastTrip":26,
    "StatusWord":5,
    "PresetRef8":60,
    "PostRampRef":0,
    "CurrentMag":0,
    "OutputFreq":0,
    "MotorRpm":0
}

```



#### Notification Message

This message type is used to send critical notifications to the cloud platform. Notifications can be disabled as requested by the user through the WebUI. Notification messages are published on the root of the message. 

The following notifications are currently supported: 

|   Notification Name    |        Trigger         | Description |
| :--------------------: | :--------------------: | :---------: |
| Low Wi-Fi signal alert | Low Wi-Fi signal level |     n/a     |
|                        |                        |             |
|                        |                        |             |
|                        |                        |             |
|                        |                        |             |

Table 2



### Ubidots Compatibility Mode

Ubidots has its own data structure and topic requirements. This data mode enables compatibility with Ubidots cloud platform. Please refer to the [Ubidots Documentation](https://ubidots.com/docs/hw/#mqtt) for details.

In this data mode, each slave is considered as a device. **Host Status** and **Notification** messages won't be sent. 

:::important
We are currently working on this documentation. Please come back later.
:::

### Extended Ubidots Compatibility Mode

Ubidots has its own data structure and topic requirements. This data mode enables compatibility with Ubidots cloud platform. Please refer to the [Ubidots Documentation](https://ubidots.com/docs/hw/#mqtt) for details.

In this data mode, the host and each slave are considered devices. The host is displayed as a device with its status variables and alarms. Each slave is shown as a separate device with its variables.

:::important
We are currently working on this section. Please come back later.
:::