---
id: manifest-file
title: Manifest File
sidebar_label: Manifest File
---

A key factor that makes ModbusBox flexible is its manifest file that is available to the user exposed in the file system. The firmware interacts with the manifest at the lowest level of abstraction allowing the user to define the registers, functions and other parameters of each slave that will be operated by ModbusBox. This makes it possible for ModbusBox to be able to operate with practically any type of device that supports the Modbus RTU communication protocol.

The manifest is a JSON formatted file that can be downloaded and uploaded from the **Web-UI**. It is possible to modify the registers and functions of each of the slaves included in ModbusBox by default as well as add new slaves following the instructions provided in the official documentation or using our [Manifest Editor](https://mbox.iotbits.net/docs/mbox.iotbits.net/manifest-editor) web app.

## Default Manifest File

Every ModbusBox is shipped with a default manifest file that will provide instruction to the firmware on how to operate each slave. 

### Currently Included  Slaves

List of slaves currently included in the official manifest file:

* Control Techniques - M200/300/400 Open Loop
* Danfoss - VLT® HVAC Drive FC 102
* ABB - ACS310
* Eastron - SDM230-Modbus

## Understanding the Manifest file

The manifest file is a **JSON** file with the `.mbox` extension. It contains an array of modbus slaves supported by the ModbusBox device, and a list of registers and functions of each slave. 

The manifest file serves as a map of the slaves that the ModbusBox will be able to read and control. The ModbusBox firmware includes the official manifest with all existing slaves at the time of compilation. This file can be edited manually in order to add new slaves, registers and their functions. In this documentation you will find all the necessary information to know how to add new slaves to the manifest file.

## Slaves

Each slave has the following properties:

| Property            | Description                                              |
| ------------------- | -------------------------------------------------------- |
| id                  | Slave identification number                              |
| type                | Slave type (supported types are **vfd** and **generic**) |
| device_manufacturer | Slave manufacturer company or brand                      |
| device_model        | Slave model by its manufacturer                          |
| supported_baudrates | List of the baudrates supported by the slave             |
| functions           | List of custom functions for the slave                   |
| regs16              | List of slave's 16-bits registers                        |
| regs32              | List of slave's 32-bits registers                        |

### 16-bits Registers

Each modbus slave contains a list of 16-bits registers. Each register has the following properties:

| Property   | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| address    | Register's address                                           |
| name       | Register's name                                              |
| info       | Register information                                         |
| short_name | Short name for the register                                  |
| enabled    | Whether the register is enabled (to be read) by default or not |
| size       | Register size in bits (16 bits)                              |
| dp         | Decimal place of the register value                          |
| table_size |                                                              |
| offset     |                                                              |

### 32-bits Registers

Each modbus slave contains a list of 32-bits registers. Each register has the following properties:

| Property   | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| address    | Register's address                                           |
| name       | Register's name                                              |
| info       | Register information                                         |
| short_name | Short name for the register                                  |
| enabled    | Whether the register is enabled (to be read) by default or not |
| size       | Register size in bits (32 bits)                              |
| dp         | Decimal place of the register value                          |
| table_size |                                                              |
| IEEE754    |                                                              |

## Functions

ModbusBox is able to control every slave attached by writing values on the slave registers defined on the manifest. To be able to write new values on those registers, **ModbusBox** implements the so-called **Functions** that allows the user to control the slave via the embedded Web-UI and MQTT by exposing those functions to the MQTT broker.

The user may create as many functions as it wants as long as they complies with the required parameters and has the following properties defined.

An slave function has the following properties:

| Property  | Description                                                  |
| --------- | ------------------------------------------------------------ |
| name      | The name of the function use internally as reference, most be unique and no spaces or special characters |
| label     | Prettified name or label for the function                    |
| reg_grp   | Group of register where the associated register belong to    |
| reg       | Register to be written by the function                       |
| threshold | Threshold to set a limit of execution of the function        |
| options   | List of possible values to be written to the register        |

## Function Option

A function option has the following properties:

| Property | Description                                                  |
| -------- | ------------------------------------------------------------ |
| name     | Option name                                                  |
| type     | Option type. Supported types are **fixed** and **input**. Use fixed type for an option with a fix value. Use input type for a value that will be entered by the user, ex: custom speed field. |
| label    | Prettified name or label for the option                      |
| override | Whether to ignore the function threshold or not              |
| value    | Value to be written by this option                           |

 