FROM node:18

WORKDIR /anewproj/load-balancing-two

COPY  package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]