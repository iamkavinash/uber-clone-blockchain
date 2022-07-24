
pipeline {
    agent any

     parameters {
    string(name: 'DOCKER_IMAGE', defaultValue: 'si3mshady/blockchain-uber-clone')
  }

  	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}


    stages {
        stage('Build') {
            steps {
                echo 'Building docker image.'
              
              sh('echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin')
              sh('docker build . -t ${DOCKER_IMAGE}') // sudo chmod 777 /var/run/docker.sock
              sh('docker push  ${DOCKER_IMAGE}')

              sh('terraform plan')

            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh('cd tf_deployment/ && terraform plan')
               
                
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh('cd tf_deployment/ && terraform apply --auto-approve')
            }
        }
    }
}
            
    