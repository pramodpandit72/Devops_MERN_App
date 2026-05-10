#!/bin/bash

set -e

NAMESPACE="devops-mern"

echo "🧹 Cleaning Kubernetes resources..."

kubectl delete namespace $NAMESPACE --ignore-not-found

echo "🐳 Cleaning Docker containers..."

docker stop $(docker ps -aq) 2>/dev/null || true
docker rm $(docker ps -aq) 2>/dev/null || true

echo "🗑 Removing unused images..."
docker image prune -af

echo "🧽 Removing unused volumes..."
docker volume prune -f

echo "✅ Cleanup complete!"