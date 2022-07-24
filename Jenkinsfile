
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building docker image.'

              sh('docker build Dockerfile -t si3mshady/blockchain-uber-clone')
              

            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh("ls -lrth tf_deployments")
                sh("node --version")
                
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
            