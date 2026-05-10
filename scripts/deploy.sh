#!/bin/bash

set -e

NAMESPACE="devops-mern"

echo "🚀 Deploying to Kubernetes..."

# Create namespace if not exists
kubectl get namespace $NAMESPACE >/dev/null 2>&1 || \
kubectl create namespace $NAMESPACE

# Apply all manifests
kubectl apply -f k8s/

echo "⏳ Waiting for pods to be ready..."
kubectl wait --for=condition=ready pod --all -n $NAMESPACE --timeout=120s

echo "✅ Deployment successful!"

echo "📊 Resources:"
kubectl get pods -n $NAMESPACE
kubectl get svc -n $NAMESPACE