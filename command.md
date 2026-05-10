\# DevOps MERN App - Commands and Usage

This file lists the commands needed to run the app and operate the DevOps tooling.
Each section shows the folder to run from and the purpose of each command.

---

\#\# Prerequisites

\- Node.js 18+ and npm
\- Docker Desktop (for Docker and Kubernetes locally)
\- kubectl (for Kubernetes)
\- Terraform (for AWS infra)
\- Ansible (for server configuration)

---

\#\# Run the full app with Docker Compose

Folder: repo root

\- Command: `docker compose up --build`
	Use: Build and start MongoDB, backend, and frontend containers.

\- Command: `docker compose down`
	Use: Stop containers and remove the compose network.

\- Command: `docker compose down -v`
	Use: Stop containers and remove the MongoDB volume (data reset).

Access:
\- Frontend: http://localhost:3000
\- Backend: http://localhost:5000

---

\#\# Run backend locally (without Docker)

Folder: `backend/`

\- Command: `npm install`
	Use: Install backend dependencies.

\- Command: `npm run dev`
	Use: Start backend in dev mode with auto-reload (requires `MONGO_URI`).

\- Command: `npm start`
	Use: Start backend in production mode.

Required environment:
\- `MONGO_URI=mongodb://localhost:27017/devopsdb` (or MongoDB Atlas URI)

---

\#\# Run frontend locally (without Docker)

Folder: `frontend/`

\- Command: `npm install`
	Use: Install frontend dependencies.

\- Command: `npm run dev`
	Use: Start Vite dev server at http://localhost:5173 with `/api` proxy.

\- Command: `npm run build`
	Use: Create a production build in `dist/`.

\- Command: `npm run preview`
	Use: Preview the production build locally.

\- Command: `npm run lint`
	Use: Run ESLint checks for frontend code.

---

\#\# Docker image build and push

Folder: `scripts/`

\- Command: `./build.sh`
	Use: Build backend and frontend images, optional push to Docker Hub.
	Note: On Windows, run with Git Bash or WSL.

---

\#\# Kubernetes deploy

Folder: repo root

\- Command: `kubectl apply -f k8s/namespace.yaml`
	Use: Create the `devops-mern` namespace.

\- Command: `kubectl apply -f k8s/`
	Use: Deploy MongoDB, backend, and frontend resources.

\- Command: `kubectl get pods -n devops-mern`
	Use: Check pod status.

\- Command: `kubectl get svc -n devops-mern`
	Use: Check service endpoints.

\- Command: `./scripts/deploy.sh`
	Use: Apply all manifests and wait for pods to be ready.
	Note: On Windows, run with Git Bash or WSL.

---

\#\# Kubernetes cleanup

Folder: `scripts/`

\- Command: `./cleanup.sh`
	Use: Delete the `devops-mern` namespace and prune Docker resources.
	Note: This script stops and removes all Docker containers on the host.

---

\#\# Terraform (AWS infra)

Folder: `terraform/`

\- Command: `terraform init`
	Use: Initialize Terraform providers and modules.

\- Command: `terraform plan`
	Use: Preview infrastructure changes.

\- Command: `terraform apply`
	Use: Create or update AWS resources.

\- Command: `terraform destroy`
	Use: Tear down AWS resources created by Terraform.

---

\#\# Ansible (server config)

Folder: `ansible/`

\- Command: `ansible-playbook -i inventory.ini playbook.yml`
	Use: Configure target servers (Docker/Kubernetes setup).

---

\#\# Jenkins pipeline

Folder: `jenkins/`

\- Command: Configure Jenkins to use `Jenkinsfile`
	Use: Run CI/CD pipeline (build, test, image push, deploy).