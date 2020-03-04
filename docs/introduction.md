---
id: introduction
title: Introduction
sidebar_label: Introduction
---



## Introducing ModbusBox

In the middle of an era in which the IoT world has become very popular and it is increasingly necessary to monitor and control our devices from the Internet, we have developed ModbusBox, the best and most effective way to monitor and control virtually any equipment that communicates through Modbus RTU from any cloud platform that uses MQTT as its communication protocol.



## Device Overview

ModbusBox connects modbus slaves to the cloud. Its firmware, being in charge of reading all the slaves connected to it, not only does a great job polling data from modbus slaves and sending them to the cloud through MQTT, but also makes the process steady and easy to configure and monitor.

### Main Features

* Wi-Fi Ready
* Embedded Web-UI for easy installation and maintenance
* Uses a JSON file as manifest to easily add new modbus slaves



### Wi-Fi Ready

The device has a **IEEE 802.11** Wi-Fi interface that allows connecting to the the local network and therefore the internet. It also creates a Wi-Fi Access Point when in **Setup Mode** to allows direct connection to the device when the device its not yet configured to connect to a Wi-Fi Access Point. 

### Embedded Web-UI

A modern and intuitive Web-UI (Web User Interface) has been integrated into our device that makes both the initial configuration and the maintenance of the device very simple.

### Manifest File

A key factor that makes ModbusBox flexible is its manifest file that is available to the user exposed in the file system system. 

This manifest file is in **JSON** format and can be downloaded and uploaded from the **Web-UI**. It is possible to modify the registers and functions of each of the slaves included in ModbusBox by default as well as add new slaves following the instructions provided in the official documentation or using our [Manifest Editor](mbox.iotbits.net/manifest-editor) web app. 

## Current Limitations

As we have stated before, our ModbusBox only works with slaves that uses Modbus RTU as its communication protocol. Other communications protocol such as Modbus TCP will be added in further development of this product but at this time it only supports Modbus RTU. 