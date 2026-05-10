# 📦 Nexus Repository Setup (DevOps MERN Project)

## 🔹 What is Nexus?

Nexus is an artifact repository used to store:
- Docker images
- Build artifacts
- Dependencies

---

## 🔹 Why Use Nexus?

- Central artifact storage
- Version control for builds
- Faster CI/CD pipelines

---

## 🔹 Setup Steps

### 1. Run Nexus using Docker

```bash
docker run -d -p 8081:8081 --name nexus sonatype/nexus3