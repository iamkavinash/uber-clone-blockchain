module "elliott_sandbox_vpc" {
   source               = "./vpc"
   vpc_cidr = var.vpc_cidr
   public_k8s_subnets =  [for i in range(4, 255, 2) : cidrsubnet(var.vpc_cidr, 10, i)]
   private_k8s_subnets = [for i in range(3, 255, 2) : cidrsubnet(var.vpc_cidr, 10, i)]
}
