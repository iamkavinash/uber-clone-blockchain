
locals {
 aws_region = "us-west-2"
}

# Configure the AWS Provider
provider "aws" {
  region = local.aws_region
#   access_key = var.aws_access_key_id
#   secret_key = var.aws_secret_access_key
}


terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
    
    }
  }
}
