# Reporte de Ejecución del Pipeline

## Resumen

Este reporte detalla los pasos realizados para configurar y ejecutar el pipeline de CI/CD del proyecto Task API, siguiendo los requisitos del equipo backend de CodeCraft.

## Pasos

### 1. Gestión del Repositorio Git

- Inicialización del repositorio local de Git:

  ```bash
  git init
  git add README.md
  git commit -m "Commit inicial"
  ```

- Conexión del repositorio local con GitHub:

  ```bash
  git remote add origin <URL del repositorio en GitHub>
  git push -u origin main
  ```

### 2. Integración con Docker

- Creación del `Dockerfile` para contenerizar la aplicación Node.js:

  ```Dockerfile
  FROM node:16
  WORKDIR /usr/src/app
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 3000
  CMD ["npm", "start"]
  ```

- Construcción y prueba local de la imagen Docker:

  ```bash
  docker build -t task-api .
  docker run -p 3000:3000 task-api
  ```

### 3. Configuración de Jenkins

- Configuración de Jenkins para automatizar la clonación desde GitHub.
- Creación del pipeline en el Jenkinsfile con las siguientes etapas:

  ```groovy
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

  ```

## Problemas encontrados

- No se encontraron problemas significativos durante la configuración del pipeline.

## Resultados

- Pipeline ejecutado correctamente:
  - Instalación exitosa de dependencias.
  - Todas las pruebas unitarias pasaron satisfactoriamente.
  - Imagen Docker construida exitosamente.

_Capturas de pantalla o registros de las ejecuciones exitosas del pipeline se encuentran en carpeta Resultados._
