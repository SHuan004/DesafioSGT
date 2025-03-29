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
        stage('Clean') {
            steps {
                echo "Limpiando entorno anterior..."
                bat 'rd /s /q node_modules' // Para Windows
                bat 'del package-lock.json'
                bat 'npm cache clean --force'
            }
        }
        stage('Build') {
            steps {
                echo "Instalando dependencias..."
                // Usar npm ci si tienes package-lock.json y quieres instalación más rápida
                bat 'npm ci || npm install'
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
