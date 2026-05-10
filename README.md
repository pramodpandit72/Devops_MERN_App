# 🚀 DevOps MERN App (End-to-End CI/CD on AWS + Kubernetes)

A **full-stack MERN (MongoDB, Express, React, Node.js)** application integrated with a complete **DevOps pipeline** using Docker, Kubernetes, Terraform, GitHub Actions, SonarQube, Nexus, and Jenkins.

This project demonstrates **real-world DevOps practices** including containerization, CI/CD automation, infrastructure as code, and cloud deployment.

---

# 📌 Project Overview

This is a **Task Manager (Todo App)** built using the MERN stack and deployed using modern DevOps tools.

### 🎯 Key Goals

* Build a simple full-stack application
* Apply DevOps tools in a real workflow
* Automate build, test, and deployment
* Deploy on AWS infrastructure

---

# 🧱 Architecture

```
User → React Frontend → Node.js Backend → MongoDB

CI/CD Flow:
GitHub → GitHub Actions → SonarQube → Docker Build →
Docker Hub / Nexus → Kubernetes → AWS (EC2 / EKS)

Infra:
Terraform → AWS Resources
Ansible → Server Configuration
```

---

# 🛠 Tech Stack

## 👨‍💻 Application

* Frontend: React (Vite)
* Backend: Node.js + Express
* Database: MongoDB (Atlas / Container)

## ⚙️ DevOps Tools

* Docker (Containerization)
* Kubernetes (Orchestration)
* GitHub Actions (CI/CD)
* Jenkins (Optional CI/CD)
* SonarQube (Code Quality)
* Nexus (Artifact Repository)
* Terraform (Infrastructure as Code)
* Ansible (Configuration Management)
* AWS (Cloud Deployment)

---

# 📂 Project Structure

```
devops-mern-app/
├── frontend/        # React App
├── backend/         # Node.js API
├── k8s/             # Kubernetes manifests
├── terraform/       # AWS Infrastructure
├── ansible/         # Server configuration
├── scripts/         # Automation scripts
├── .github/         # GitHub Actions CI/CD
├── jenkins/         # Jenkins pipeline
├── sonar/           # SonarQube config
├── nexus/           # Nexus setup docs
```

---

# ⚡ Features

* ✅ Full CRUD Todo App
* ✅ REST API with Express
* ✅ MongoDB integration
* ✅ Dockerized frontend & backend
* ✅ Kubernetes deployment
* ✅ CI/CD pipeline with GitHub Actions
* ✅ Code quality checks with SonarQube
* ✅ Infrastructure provisioning with Terraform
* ✅ Optional Jenkins pipeline

---

# 🐳 Run Locally (Docker Compose)

### 1️⃣ Clone Repo

```bash
git clone https://github.com/your-username/devops-mern-app.git
cd devops-mern-app
```

### 2️⃣ Run Containers

```bash
docker-compose up --build
```

### 3️⃣ Access App

* Frontend: http://localhost:3000
* Backend: http://localhost:5000

---

# ☸️ Kubernetes Deployment

### Apply manifests:

```bash
kubectl apply -f k8s/
```

### Check resources:

```bash
kubectl get pods
kubectl get svc
```

---

# ⚙️ CI/CD Pipeline (GitHub Actions)

Pipeline automates:

* Install dependencies
* Run SonarQube analysis
* Build Docker images
* Push images to Docker Hub
* Deploy to Kubernetes

---

# ☁️ Terraform (AWS Infrastructure)

### Initialize Terraform

```bash
cd terraform
terraform init
```

### Apply Infrastructure

```bash
terraform apply
```

---

# ⚙️ Ansible

Used to:

* Install Docker
* Configure servers
* Setup Kubernetes

---

# 📦 Nexus

Used as:

* Artifact repository
* Docker image storage (optional instead of Docker Hub)

---

# 🧪 SonarQube

* Static code analysis
* Code quality checks
* Quality gates

---

# 🔐 Environment Variables

Create `.env` in backend:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
```

---

# 📜 Scripts

```bash
./scripts/build.sh    # Build Docker images
./scripts/deploy.sh   # Deploy to Kubernetes
./scripts/cleanup.sh  # Clean resources
```

---

# 🧠 Learning Outcomes

* CI/CD pipeline design
* Docker & container lifecycle
* Kubernetes deployments
* Infrastructure as Code (Terraform)
* Configuration management (Ansible)
* DevSecOps with SonarQube
* Artifact management (Nexus)

---

# 💼 Interview Explanation

> “I built a full-stack MERN application and implemented an end-to-end DevOps pipeline using GitHub Actions, Docker, Kubernetes, Terraform, and AWS. I integrated SonarQube for code quality and Nexus for artifact management, enabling automated build and deployment workflows.”

---

# 🚀 Future Improvements

* 🔹 Add authentication (JWT)
* 🔹 Add monitoring (Prometheus + Grafana)
* 🔹 Add logging (ELK Stack)
* 🔹 Enable HTTPS (Ingress + Cert Manager)
* 🔹 Use Helm charts

---

# 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

# 📄 License

This project is open-source and available under the MIT License.

---

# ⭐ Show Your Support

If you found this helpful, give it a ⭐ on GitHub!
