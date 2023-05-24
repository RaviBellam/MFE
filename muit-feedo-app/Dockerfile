# Use the official Node.js image as the base
FROM node:16

# Set the working directory inside the container
WORKDIR /muit-feedo-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port on which the React application will run
EXPOSE 3000

# Define the startup command
CMD ["npm", "start"]
