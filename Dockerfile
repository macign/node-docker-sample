FROM node:15

COPY package*.json ./

RUN npm i

COPY . . 

RUN npm run build

WORKDIR ./dist

EXPOSE 3000

CMD node index.js