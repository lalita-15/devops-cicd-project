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
    }
}