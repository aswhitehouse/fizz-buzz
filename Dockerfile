# Use the official Node.js image as the base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy your JavaScript files to the working directory
COPY . .

# Run the tests
CMD ["npm", "test"]