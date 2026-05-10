resource "aws_eks_cluster" "eks" {
  name     = "devops-mern-cluster"
  role_arn = "arn:aws:iam::YOUR_ACCOUNT_ID:role/eks-role"

  vpc_config {
    subnet_ids = var.subnet_ids
  }
}