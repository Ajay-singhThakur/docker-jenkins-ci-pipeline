pipeline {
    agent any
    environment {
        IMAGE_NAME = "devops-node-app"
        CONTAINER_NAME = "devops-container"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('checkout') {
            steps {
                checkout scm
            }
        }

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
                        docker rmi -f ${IMAGE_NAME}:latest || true
                        docker build -t ${IMAGE_NAME}:latest .
                    '''
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker rm -f ${CONTAINER_NAME} || true
                    docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${IMAGE_NAME}:latest
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