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
                NETLIFY_SITE_ID = '7eeaa501-f804-4793-80d4-938daa4deff1'
                NETLIFY_AUTH_TOKEN = credentials('netlify-token')
            }
            steps {
                echo 'Deploying to Netlify...'
                sh '''
                    export PATH=$PATH:$(npm config get prefix)/bin
                    npm install netlify-cli --prefix $HOME/.netlify
                    $HOME/.netlify/node_modules/.bin/netlify deploy --prod --dir=build --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN
                '''
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