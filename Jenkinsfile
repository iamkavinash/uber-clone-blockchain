
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
            //   https://medium.com/fusionqa/how-to-run-jenkins-using-the-root-user-in-linux-centos-79d96749ca5a


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
            
            chown -R root:root /var/lib/jenkins chown -R root:root /var/cache/jenkins chown -R root:root /var/log/jenkins
