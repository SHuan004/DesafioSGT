pipeline {
    agent any
    environment {
        NODE_VERSION = '18'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo "Instalando dependencias..."
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo "Ejecutando pruebas..."
                bat 'npm test'
            }
        }
        stage('Docker Build') {
            steps {
                echo "Construyendo imagen Docker..."
                bat 'docker build -t mi-app:latest .'
            }
        }
    }
    post {
        success {
            echo "✅ Pipeline completado con éxito"
        }
        failure {
            echo "❌ El pipeline ha fallado"
        }
    }
}
