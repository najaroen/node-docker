FROM node:15.1.0-alpine3.10
WORKDIR /nodeapp
COPY app /nodeapp
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]