FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better Docker layer caching)
COPY package*.json ./
RUN npm ci

# Copy application source
COPY . .

# Generate Prisma client and build the Next.js app
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["npm", "start"]
