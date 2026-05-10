variable "aws_region" {
  default = "ap-south-1"
}

variable "project_name" {
  default = "devops-mern"
}

variable "instance_type" {
  default = "t3.micro"
}

variable "key_name" {
  description = "EC2 Key Pair"
  default     = "your-keypair-name"
}