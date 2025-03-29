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
        // Se omite la etapa de Deploy para no arrancar el servidor en Jenkins.
        /*
        stage('Deploy') {
            steps {
                echo "Desplegando aplicación..."
                bat 'npm start'
            }
        }
        */
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
