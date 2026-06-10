pipeline {
    agent any

    environment {
        IMAGE_NAME = "lalita15/devops-cicd-project"
        IMAGE_TAG  = "v${env.BUILD_NUMBER}"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME%:%IMAGE_TAG% ."
            }
        }

        stage('Check Docker Images') {
            steps {
                bat 'docker images'
            }
        }

        stage('Tag Image') {
            steps {
                bat "docker tag %IMAGE_NAME%:%IMAGE_TAG% %IMAGE_NAME%:latest"
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKERHUB_USERNAME',
                    passwordVariable: 'DOCKERHUB_PASSWORD'
                )]) {
                    bat 'echo %DOCKERHUB_PASSWORD%| docker login -u %DOCKERHUB_USERNAME% --password-stdin'
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                bat "docker push %IMAGE_NAME%:%IMAGE_TAG%"
                bat "docker push %IMAGE_NAME%:latest"
            }
        }
    }

    post {
        always {
            bat "docker rmi %IMAGE_NAME%:%IMAGE_TAG% || true"
            bat "docker rmi %IMAGE_NAME%:latest || true"
            bat 'docker image prune -f || true'
        }
        success {
            echo "Build ${env.BUILD_NUMBER} pushed successfully!"
        }
        failure {
            echo "Build ${env.BUILD_NUMBER} failed."
        }
    }
}