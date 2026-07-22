# stage 1 : install dependencies
FROM node:20-alpine As builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# stage 2 : production image
FROM node:20-alpine 
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["npm", "start"]