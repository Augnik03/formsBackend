# Backend Server Setup Instructions

This repository contains the backend server for the project FormsReplica. Follow the steps below to set up and run the server locally.

## Prerequisites

- Node.js and npm installed on your machine.
- TypeScript installed globally (`npm install -g typescript`).

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Augnik03/formsBackend.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd formBackend
   ```

3. Install the dependencies:

   ```bash
   npm i express body-parser 
   npm i --save-dev typescript @types/express @types/node ts-node nodemon
   npm i --save-dev @typex/cors
   ```

## Configuration

1. Create a `db.json` file in the src folder of the backend server.

2. Define the structure of the JSON file to store submissions. For example:

   ```json
   [

   ]
   ```
   Here it shows an empty array.
   This structure can be expanded based on your requirements for storing submissions.

## Running the Server

1. Start the backend server:

   ```bash
   npm run dev
   ```

   This command will start the server at the specified port (default is 3000).

## Testing the Endpoints

You can use tools like Postman or cURL to test the API endpoints provided by the server. Here are the available endpoints:

- `GET /ping`: Always returns true.
- `POST /submit`: Create a new submission with parameters "name", "email", "phone", "github_link", and "stopwatch_time".
- `GET /read?index=<index>`: Retrieve a submission by index.

## Additional Notes

- The backend server is configured to use a JSON file (`db.json`) as a database for storing submissions.
- Ensure that the JSON file is writable by the server process.
- You may need to adjust the port number if port 3000 is already in use on your system.

---
