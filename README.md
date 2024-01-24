# Singleton-Connections-Backend

## Overview
This project simplifies the management of various database and messaging services by providing a set of singleton connection logic and container creation functions. It aims to streamline the process of connecting to and working with Redis, CosmosDB, ADLS Gen2, MongoDB, and Azure Service Bus.

## Features
- Singleton Connection Logic: Provides efficient and reusable connection logic for various services.

- Container Creation: Automates the creation of containers for CosmosDB and MongoDB.

- File System Initialization: Initializes ADLS Gen2 file system.

- Service Bus Integration: Includes connection logic and sender creation for Service Bus Queue and Topic.

- Redis Connection: Manages Redis client connections using a singleton pattern.


## Prerequisites
Node Version >= 14.x

## Installation

You can install the required dependencies using `npm`. Just run:

```
$ npm install
```

## Configuration
Before you run, you need to configure the connection parameters in the `config.js` file. Follow these steps:

1. Open the `config/config.js` file in your project.
2. Replace the placeholder values with your actual credentials and connection details.