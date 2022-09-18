FROM node:lts-alpine
WORKDIR /app/backend
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules .
COPY . .
EXPOSE 4000
CMD ["npm", "start"]