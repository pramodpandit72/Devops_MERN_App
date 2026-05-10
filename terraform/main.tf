module "vpc" {
  source = "./modules/vpc"
}

module "ec2" {
  source          = "./modules/ec2"
  vpc_id          = module.vpc.vpc_id
  subnet_id       = module.vpc.public_subnet_id
  instance_type   = var.instance_type
  key_name        = "Devops-MERN-App"
}


/*
# Optional (advanced)
module "eks" {
  source = "./modules/eks"
  vpc_id = module.vpc.vpc_id
  subnet_ids = [module.vpc.public_subnet_id]
}
*/