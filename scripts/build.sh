#!/bin/bash

set -e  # stop on error

# ===== CONFIG =====
DOCKER_USERNAME="your-dockerhub-username"
BACKEND_IMAGE="$DOCKER_USERNAME/backend"
FRONTEND_IMAGE="$DOCKER_USERNAME/frontend"
TAG="latest"

echo "🚀 Building Docker images..."

# Build Backend
docker build -t $BACKEND_IMAGE:$TAG ./backend

# Build Frontend
docker build -t $FRONTEND_IMAGE:$TAG ./frontend

echo "✅ Build complete!"

# ===== PUSH (optional) =====
read -p "Do you want to push images to Docker Hub? (y/n): " choice

if [ "$choice" == "y" ]; then
  echo "🔐 Logging into Docker Hub..."
  docker login

  echo "📤 Pushing images..."
  docker push $BACKEND_IMAGE:$TAG
  docker push $FRONTEND_IMAGE:$TAG

  echo "✅ Push complete!"
else
  echo "⚠️ Skipping push"
fi