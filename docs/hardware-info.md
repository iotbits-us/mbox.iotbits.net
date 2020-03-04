---
id: hardware-info
title: Hardware Information
sidebar_label: Hardware Information
---

## Overview

Our device has been carefully designed to meet our standards of durability and requirements for working in industrial environments. 

Its Wi-Fi connectivity complies with the **IEEE 802.11** standards and certifications provided by the manufacturer of its microcontroller, the [ESP32](https://www.espressif.com/en/products/hardware/esp32/resources) manufactured by [ESPRESSIF SYSTEMS](https://www.espressif.com/).



## Description

The following figure shows the internal components, LEDs, connectors and buttons of our ModbusBox. Please observe carefully, we recommend to print this section for a better understanding of any further explanation of the modbus usage and setup.



![modbusbox-hardware-description](https://raw.githubusercontent.com/iotbits-us/mbox.iotbits.net/master/static/img/modbusbox-hardware-description.png)

Figure 1



| Number | Name                    | Function                                                     |
| :----: | ----------------------- | ------------------------------------------------------------ |
|   1    | RJ45 Connector          | DC power input and Modbus connection                         |
|   2    | Programming Mode Button | Used to put the device in programming mode (**for developers**) |
|   3    | Setup Mode Button       | Combined with reset enters the ModbusBox in setup mode       |
|   4    | Reset Button            | Reset the ModbusBox (used combined with 2 and 3)             |
|   5    | Activity LED            | MQTT activity white LED                                      |
|   6    | Wi-Fi Module            | Wi-Fi antenna                                                |
|   7    | Status LED              | RGB pixel LED to indicate ModbusBox statuses                 |
|   8    | Dev Options             | Connectors (**for developers**)                              |
|   9    | Modbus Interface LEDs   | Indicate Modbus Tx/Rx activity                               |
|   10   | Power LED               | Green LED - indicate power presence                          |
|   11   | Power/Modbus            | Secondary power & modbus connector (**for developers**)      |

Table 1



## Microcontroller

Out ModbusBox features a powerful [ESP32-WROOM-32](https://www.espressif.com/en/products/hardware/esp32/overview). This microcontroller is capable of functioning reliably in industrial environments, with an operating temperature ranging from –40°C to +125°C. Powered by advanced calibration circuitries, ESP32 can dynamically remove external circuit imperfections and adapt to changes in external conditions.

Engineered for mobile devices, wearable electronics and IoT applications, ESP32 achieves ultra-low power consumption with a combination of several types of proprietary software. ESP32 also includes state-of-the-art features, such as fine-grained clock gating, various power modes and dynamic power scaling.

|      | Description                                                  |
| :--: | :----------------------------------------------------------- |
| CPU  | [Espressif ESP32-WROOM-32](https://www.espressif.com/en/products/hardware/esp32/overview) 2 x Xtensa® 32-bit LX6 microprocessors |
| RAM  | 520 KB of on-chip SRAM                                       |

Table 2



> Please refer to the ESP32 [datasheet](https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32_datasheet_en.pdf) for detailed information



## Control Buttons

As you can see in the following image, there are three control buttons located on the PCB. These control buttons allows the user to switch between operation modes and to perform other advanced procedures.

![modbusbox-control-buttons](https://raw.githubusercontent.com/iotbits-us/mbox.iotbits.net/master/static/img/modbusbox-control-buttons.png)

Figure 2



### PROG Button

Use this button to put the device in **Programming Mode** in order to upload a new firmware. To enter into **Programming Mode**, press and hold  **Programming** button and quick press and release **Reset** button. 

For more information regarding this operational mode, refer to the [Programming Mode]() documentation or the following guide: [Uploading firmware in Programming Mode](uploading-firmware-programming-mode).

### SETUP Button

This is a multifunction button that can triggered many actions depending on the state of the device.

For more information regarding this operational mode, refer to the [Setup Mode]() documentation or the following guide: [Putting Device in Setup Mode]().

### RST Button

Used this button to perform a factory reset of the device and restore its defaults state.

For more information regarding this operational mode, refer to the [Factory Reset]() documentation or the following guide: [Restoring the device's factory state]().



## LED Indicators

ModbusBox has 4 LEDs indicators and 1 multicolor LED for system status. This light indicators are very useful to quickly understand the operational status of the ModbusBox. They also helps to troubleshoot any problem with the device operation. 



### LEDs

The following table aims to describe every LED of the 4 found on the ModbusBox.

| Item number in figure 1 | Label on PCB | Indication                 | Description                                                  |   Color   |
| :---------------------: | :----------: | :------------------------- | :----------------------------------------------------------- | :-------: |
|           10            |      D3      | DC input voltage           | When ON indicates power voltage has been detected            |     🟢     |
|            5            |      D9      | MQTT activity              | It blinks every time an MQTT message is sent or received     |     ⚪     |
|            9            |      D4      | Modbus master request      | It blinks when ModbusBox try to communicate with a modbus slave | &#x1F535; |
|            9            |      D8      | Modbus response from slave | Its blinks when ModbusBox has received a response from slave |     🔴     |

Table 3.1



### Status LED

The following table aims to describe the Status LED.

| Item number in figure 1 | Label on PCB |        Indication         |                         Description                          |    Color    |
| :---------------------: | :----------: | :-----------------------: | :----------------------------------------------------------: | :---------: |
|            7            |      D2      | System Operational Status | This RGB LED is color dependent upon device statuses and alarms and special notifications. | 🔴🟢&#x1F535; |

Table 3.2



#### Status LED Colors Patterns

The **Status LED**, labeled as **D2** on the PCB and marked with number 7 in **Figure 2**, is color dependent upon device statuses and alarms.

The following tables shows the color patterns of different statuses and alarms indications of the **Status LED** on the ModbusBox.

##### System Operational Status

| Status                      | Animation  |   Color    | HSL Color Code |
| --------------------------- | :--------: | :--------: | :------------: |
| Setup Mode                  | Quick Fade |     🟢      |      115       |
| System OK                   | Slow Fade  | AQUAMARINE |      174       |
| Connecting to Wi-Fi network | Quick Fade | &#x1F535;  |      240       |
| Connecting to MQTT          | Quick Fade | &#x1F535;  |      240       |

Table 3.3



##### Alarms and Notifications

| Status                       | Animation  | Color | HSL Color Code |
| ---------------------------- | :--------: | :---: | :------------: |
| No Wi-Fi Connection Detected | Quick Fade |   🔴   |       0        |
| No MQTT Connection Detected  | Quick Fade |   🟣   |      300       |
| Modbus Failure Detected      | Quick Fade |   🟠   |       60       |
| Device Located               | Quick Fade |   🟢   |      115       |

Table 3.4



## Connectors

ModbusBox has only one connector exposed, that is the **RJ45** connector used to connect the ModbusBox to the modbus slaves. The 24v needed for ModbusBox and provided by the slaves also comes through this same connector.

There are other connectors located in the ModbusBox PCB that may be used by developers when using the ModbusBox for with their own custom firmware.

> Details about this additional connectors will be added to this documentation in the future.



