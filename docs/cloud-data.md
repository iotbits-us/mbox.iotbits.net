---
id: cloud-data
title: Cloud Data
sidebar_label: Cloud Data
---



## Messages

ModbusBox sends data to the cloud platform in **JSON** format. Every message is a **JSON** object and carries key-value pairs, objects and arrays, depending on the type of message and the selected [Cloud Data Mode](/cloud-data#cloud-data-modes). 

:::note Topic and structure of messages

The topic where messages are published and their structure are defined by the selected **Cloud Data Mode**. You can see detailed information in the [Cloud Data Modes](/cloud-data#cloud-data-modes) section. 

:::

Below are the different types of message that ModbusBox sends to the cloud:

* Host Status Message

* Slave Data Message

* Notification Message

  

### Host Status Message

The **Host Status Message** carries vital status information about the ModbusBox. **These variables are not user selectable**, however the report of those variables can be disabled as requested by the user through the WebUI. 

Below the variables included in every **Host Status Message**:

| Variable Name | Data Type | Description                                                  |
| :-----------: | :-------: | :----------------------------------------------------------- |
|    uptime     |  integer  | Time in seconds that the device has been running since last restart. |
|     RSSI      |  integer  | It is an estimated measure of power level that the device is receiving from the Wi-Fi router. |
|    chip_id    |  string   | Unique identification code of the device.                    |
|     ssid      |  string   | Name of the network or Wi-Fi signal that the device is connected to. |
|      ip       |  string   | IP address assigned to the device by the Wi-Fi router on the local network. |
| input_voltage |  string   | Voltage level on the device's power supply.                  |

Table 1



### Slave Data Message

The **Slave Data Message** contains the value read from each register of the slave. The content of every **Slave Data Message** is a JSON object where every field is a key-value pair being **key** the **short_name** of the register and **value** the register's value polled from the slave in the last polling cycle. 

:::note Register's name

Please note that the name of each register is assigned by the short_name field on the manifest file.

:::

### Notification Message

This message type is used to send critical notifications to the cloud platform. Notifications can be disabled as requested by the user through the WebUI. 

The following notifications are currently available: 

|   Notification Name    |        Trigger         |                         Description                          |
| :--------------------: | :--------------------: | :----------------------------------------------------------: |
| Low Wi-Fi Signal Alert | Low Wi-Fi signal level | The firmware takes a reading of the Wi-Fi signal level every 5 seconds, then calculates the average of the last 10 measurements and if it is below the established threshold which is **-70**, it sends the Low Wi-Fi Signal Alert. |
|      Power Outage      |   Device Lost Power    | Input voltage has suddenly dropped from the minimum allowed or has completely lost power. |

Table 2



## Cloud Data Modes

When sending data to the cloud platform, the MQTT topic and payload to be sent, must match the receiving platforms requirements of topic as well as the payload structure. Since one of the major features of the ModbusBox is its flexibility, we made possible to select different profiles for the topic and data structure and we called it **Cloud Data Modes**.

There are currently three **Cloud Data Modes** available:

* Standard Mode
* Ubidots Compatibility Mode
* Extended Ubidots Compatibility Mode

If you plan to use your own MQTT broker and visualization tool, use the **Standard Mode** and you should be able to adapt the receiving endpoint to the **Standard Mode**. 

> We plan to add the possibility of create custom **Cloud Data Modes** in future developments. 



## Standard Mode

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



### Example Host Status Message:

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



### Example Slave Data Message:

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



### Example Notification Message

```json
{
  "alarm" : {
    "alarm_code" : "poa",
    "alarm_text" : "Power Outage",
    "last_vcc" : 13.51109
  }
}
```



## Ubidots Compatibility Mode

Ubidots has its own data structure and topic requirements. This data mode enables compatibility with Ubidots cloud platform. Please refer to the [Ubidots Documentation](https://ubidots.com/docs/hw/) for details. In this data mode, each slave connected to the ModbusBox is considered as a device. 

:::note
Please note that in this mode, messages containing **Host Status** and **Notifications** are not published at any time.
:::

The following is an Ubidots compatible message structured by ModbusBox when the **Ubidots Compatibility Mode** is selected containing values read from an slave.

```json
{
  "id" : 1,
  "name" : {
    "value" : 0,
    "context" : {
      "name" : "M201"
    }
  },
  "MotorProteccAcc" : 0,
  "LoadPercent" : 0,
  "DcbusVolts" : 286,
  "EnergyMeter" : 3.32,
  "ctrlwrd" : 0,
  "Analog1" : 0,
  "StackTemp" : 38,
  "InverterTemp" : 38,
  "IOWord" : 513,
  "LastTrip" : 26,
  "StatusWord" : 5,
  "PresetRef8" : 25.76,
  "PostRampRef" : 0,
  "CurrentMag" : 0,
  "OutputFreq" : 0,
  "MotorRpm" : 0
}
```



## Ubidots Compatibility Mode - Extended

Ubidots has its own data structure and topic requirements. This data mode enables compatibility with Ubidots cloud platform. Please refer to the [Ubidots Documentation](https://ubidots.com/docs/hw/) for details.

In this data mode, the host and each slave are considered devices. The host is displayed as a device with its status variables and alarms. Each slave is shown as a separate device with its variables.

### Example Host Status Message

The **Host Status Message** is structured by ModbusBox to comply with Ubidots requirements as shown in the sample message below:

```json
{
  "Uptime" : 35,
  "RSSI" : -41,
  "hostname" : {
    "value" : 0,
    "context" : {
      "hostname" : "MBOX-A4W-A2C40A24"
    }
  },
  "chip_id" : {
    "value" : 0,
    "context" : {
      "chip_id" : "5CF7A2C40A24"
    }
  },
  "ssid" : {
    "value" : 0,
    "context" : {
      "ssid" : "TPAHN"
    }
  },
  "ip" : {
    "value" : 0,
    "context" : {
      "ip" : "192.168.20.179"
    }
  },
  "input_voltage" : {
    "value" : "24.3"
  }
}
```



### Example Slave Data Message

The message is structured by ModbusBox to comply with Ubidots requirements as shown in the sample message below:

```json
{
  "id" : 1,
  "name" : {
    "value" : 0,
    "context" : {
      "name" : "M201"
    }
  },
  "MotorProteccAcc" : 0,
  "LoadPercent" : 0,
  "DcbusVolts" : 286,
  "EnergyMeter" : 3.32,
  "ctrlwrd" : 0,
  "Analog1" : 0,
  "StackTemp" : 38,
  "InverterTemp" : 38,
  "IOWord" : 513,
  "LastTrip" : 26,
  "StatusWord" : 5,
  "PresetRef8" : 25.76,
  "PostRampRef" : 0,
  "CurrentMag" : 0,
  "OutputFreq" : 0,
  "MotorRpm" : 0
}
```

### Example Notification Message

```json
{
  "alarm" : {
    "value" : 0,
    "context" : {
      "alarm_code" : "poa",
      "alarm_text" : "Power Outage",
      "last_vcc" : 15.16561
    }
  }
}
```



:::note Work in progress
We are currently working on this section. If you need more information regarding this Claud Data Mode, please [contact us](https://www.iotbits.net/contact).
:::