FROM node:14-alpine
ENV NODE_ENV development
WORKDIR /app
COPY package.json .