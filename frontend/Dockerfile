FROM node:lts-alpine
WORKDIR /app/frontend
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules .
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
