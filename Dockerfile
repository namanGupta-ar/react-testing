FROM node:20-alpine

WORKDIR /app


COPY public/ ./public
COPY src/ ./src

COPY package*.json .
COPY jsconfig.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]
