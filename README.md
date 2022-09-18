# full-stack-docker-demo

Demo full stack project with react front end and node backend with docker

## What you'll need

- Git
- Docker

# To run

1.  Checkout the master branch.

2.  Open a terminal in the top-level source code directory and run the following commands

    1. For development env
       % docker-compose -f "docker-compose.debug.yml" up -d --build

    2. For production env
       % docker-compose up

3.  Open in your browser
    1. React app at http://localhost:3000
    2. Node app at http://localhost:4000
