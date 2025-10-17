# Use official Node.js image
FROM node:18-alpine
 
# Set working directory
WORKDIR /app
 
# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --only=production
 
# Copy app source code
COPY . .
 
# Expose port 80
EXPOSE 80
 
# Start the app
CMD ["npm", "start"]