pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/lalita-15/devops-cicd-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t devops-project:v1 .'
            }
        }

        stage('Check Docker Images') {
            steps {
                bat 'docker images'
            }
        }
    }
}