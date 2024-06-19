#!/bin/sh
# Ensure that dependencies are up to date
npm install
# Run the development server
npm run dev
``

Make the script executable:

```sh
chmod +x entrypoint.sh
