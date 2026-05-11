# Build stage
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main"]

# --- DEPLOYMENT NOTE ---
# In production, I only need the compiled 'dist' and production-only dependencies.
# The 'CMD' above is optimized for performance and signal handling.
# When deploying to a cloud provider (e.g. AWS):
# 1. Ensure my CI/CD injects the .env variables (don't COPY the .env file).
# 2. The 'volumes' and 'command' in docker-compose.yml should be REMOVED.
# -----------------------