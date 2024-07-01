#!/bin/sh

# Start the React app
npm run build

# Start the Node server
node server.js &

# Serve the React app using serve
serve -s build
