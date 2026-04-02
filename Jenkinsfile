pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Deploy') {
            environment {
                NETLIFY_SITE_ID = 'your-site-id-here'
                NETLIFY_AUTH_TOKEN = credentials('netlify-token')
            }
            steps {
                echo 'Deploying to Netlify...'
                sh 'npm install -g netlify-cli'
                sh 'netlify deploy --prod --dir=build --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN'
            }
        }

    }

    post {
        success {
            echo 'Pipeline succeeded! Site is live.'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}