FROM node:12-alpine as build

WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

## Use a lighter version of Node as a parent image
#FROM mhart/alpine-node:8.11.4
## Set the working directory to /client
#WORKDIR /client
## copy package.json into the container at /client
#COPY package*.json /client/
## install dependencies
#RUN npm install
## Copy the current directory contents into the container at /client
#COPY . /client/
## Make port 3000 available to the world outside this container
#EXPOSE 3000
## Run the app when the container launches
#CMD ["npm", "start"]

#FROM node:8.7.0-alpine
#
#RUN mkdir -p /app/shvabe-client
#
#WORKDIR /app/shvabe-client
#
#COPY package.json /app/shvabe-client
#
#COPY package.json /app/shvabe-client
#
#RUN npm install
#
#COPY . /app/shvabe-client
#
#CMD ["npm", "start"]


# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
#FROM node:10
#
## A directory within the virtualized Docker environment
## Becomes more relevant when using Docker Compose later
#WORKDIR /usr/src/app
#
## Copies package.json and package-lock.json to Docker environment
#COPY package*.json ./
#
## Installs all node packages
#RUN npm install
#
## Copies everything over to Docker environment
#COPY . .
#
## Uses port which is used by the actual application
#EXPOSE 8080
#
## Finally runs the application
#CMD [ "npm", "start" ]