FROM node:15

WORKDIR D:\\APPLICATION\\propelio\\test

COPY package*.json ./

RUN npm i

COPY . . 

RUN npm run build

WORKDIR ./dist

EXPOSE 3000

CMD ["npm", "start"]