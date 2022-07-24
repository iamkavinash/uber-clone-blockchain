
locals {
 aws_region = "us-west-2"
}

# Configure the AWS Provider
provider "aws" {
  region = local.aws_region
}

provider "hashicorp" {

}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 2.19.0"
    }
  }
}
