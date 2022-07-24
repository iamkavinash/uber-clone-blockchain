
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh("terraform --version && mkdir tf_deployments || true ")
                sh('node --version')
                shell(''''
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash &&
                . ~/.nvm/nvm.sh &&
                nvm install --lts
                ''')

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
            