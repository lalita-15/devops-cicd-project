pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t devops-cicd-project:v1 .'
            }
        }

        stage('Check Docker Images') {
            steps {
                bat 'docker images'
            }
        }

        stage('Tag Image') {
            steps {
                bat 'docker tag devops-cicd-project:v1 lalita15/devops-cicd-project:v1'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKERHUB_USERNAME',
                    passwordVariable: 'DOCKERHUB_PASSWORD'
                )]) {

                    bat '''
                    echo %DOCKERHUB_PASSWORD% | docker login -u %DOCKERHUB_USERNAME% --password-stdin
                    '''
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                bat 'docker push lalita15/devops-cicd-project:v1'
            }
        }
    }
}