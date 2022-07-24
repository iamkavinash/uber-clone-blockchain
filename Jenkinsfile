
pipeline {
    agent any
     parameters {
    string(name: 'DOCKER_IMAGE', defaultValue: 'si3mshady/blockchain-uber-clone')
  }

    stages {
        stage('Build') {
            steps {
                echo 'Building docker image.'

              sh('docker build . -t ${DOCKER_IMAGE}')
              sh('docker push  ${DOCKER_IMAGE}')


            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
               
                
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
            