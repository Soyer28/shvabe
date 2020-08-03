FROM node:12-alpine as builder

WORKDIR /app
COPY package.json /app/package.json
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
COPY . /app

EXPOSE 808
CMD ["node", "server.js"]

## Use a lighter version of Node as a parent image
#FROM mhart/alpine-node:8.11.4
## Set the working directory to /api
#WORKDIR /api
## copy package.json into the container at /api
#COPY package*.json /api/
## install dependencies
#RUN npm install
## Copy the current directory contents into the container at /api
#COPY . /api/
## Make port 80 available to the world outside this container
#EXPOSE 80
## Run the app when the container launches
#CMD ["node", "server.js"]

#FROM node:8.7.0-alpine
#
#RUN mkdir -p /app/shvabe-server
#
#WORKDIR /app/shvabe-server
#
#COPY package.json /app/shvabe-server
#
#COPY package.json /app/shvabe-server
#
#RUN npm install
#
#COPY . /app/shvabe-server
#
#CMD ["node", "server.js"]