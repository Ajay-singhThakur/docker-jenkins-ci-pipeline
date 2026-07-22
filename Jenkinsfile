pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Repository already checked out by Jenkins.'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('app') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('app') {
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('app') {
                    sh '''
                        docker rmi -f devops-node-app:latest || true
                        docker build -t devops-node-app:latest .
                    '''
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker rm -f devops-container || true
                    docker run -d --name devops-container -p 3000:3000 devops-node-app:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}