// Define Application name
def APPNAME = "freecodecamp-mfe"

// Define which branch build and deploy need to run in the below array

def branchfilter = ['dev', 'prod']

if (!branchfilter.contains(env.BRANCH_NAME)) {
    println 'Now is not the time to run the pipeline.'
    println 'Exiting without running subsequent stages.'
    println env.BRANCH_NAME
    currentBuild.result = 'SUCCESS'
    return
}

//Define branch specific var
if (env.BRANCH_NAME == 'dev') {
    DEPLOY_ENV = 'DEV'
    LOGICAL_ENV = 'dev'
    IS_BUILD = true
    IS_DEPLOY = true
    IS_APP_DEPLOY = true
    IS_API_DEPLOY = true
    ENABLE_CACHE = false
}

// NOTE: main/prod is not supported yet
if (env.BRANCH_NAME == 'prod') {
    DEPLOY_ENV = 'PROD'
    LOGICAL_ENV = 'prod'
    IS_BUILD = true
    IS_DEPLOY = true 
    IS_APP_DEPLOY = true
    IS_API_DEPLOY = true  
    ENABLE_CACHE = true   
}

pipeline {
    agent {
        label 'tc-ecs-agent-large'
    }
    
    environment {
        CI_AUTH0_URL = credentials('CI_AUTH0_URL')
        CI_AUTH0_CLIENTID = credentials('CI_AUTH0_CLIENTID')
        CI_AUTH0_CLIENTSECRET = credentials('CI_AUTH0_CLIENTSECRET')
        CI_AUTH0_AUDIENCE = credentials('CI_AUTH0_AUDIENCE')
      }
    
    options { skipDefaultCheckout() }

    stages
    {
        stage('checkout')
        {
            steps {
            //cheking out code
            checkout scm
                script {
                    giturltoken = scm.getUserRemoteConfigs()[0].getUrl().tokenize('/')
                    env.TC_GIT_ORG = giturltoken.get(giturltoken.size()-2)
                    env.TC_REPONAME = scm.getUserRemoteConfigs()[0].getUrl().tokenize('/').last().split("\\.")[0]
                    env.TC_GIT_COMMIT_MSG = sh (script: 'git log -1 --pretty=%B ${GIT_COMMIT}', returnStdout: true).trim()
                    env.TC_GIT_AUTHOR = sh (script: 'git log -1 --pretty=%an ${GIT_COMMIT}', returnStdout: true).trim()
                    env.TC_GIT_HASH = sh (script: 'git log -1 --pretty=%h ${GIT_COMMIT}', returnStdout: true).trim()
                    if (sh(script: "git log -1 --pretty=%B | fgrep -ie '[skip ci]' -e '[ci skip]'", returnStatus: true) == 0) {
                        currentBuild.result = 'NOT_BUILT'
                        error 'Aborting because commit message contains [skip ci]'
                    }                  
                }
            }

        }
        stage('pre-req install')
        {
            steps {
                //Installing required pre-req software
                sh '''
                    #!/bin/bash
                    apt update -y
                    apt install awscli jq curl sudo -y
                    curl https://get.docker.com/ > dockerinstall && chmod 777 dockerinstall && ./dockerinstall
                    git clone --branch dev-jenkins https://github.com/topcoder-platform/tc-deploy-scripts ../buildscript
                    cp ./../buildscript/master_deploy.sh .
                    cp ./../buildscript/buildenv.sh .
                    cp ./../buildscript/awsconfiguration.sh . 
                    curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
                    apt -y install nodejs
                '''
            }
        }
        stage('fetching configuration')
        {
            steps {
                //fetching pre-req
                sh """
                #!/bin/bash
                ./awsconfiguration.sh ${DEPLOY_ENV}
                echo "Fetching deployvar"
                ./buildenv.sh -e ${DEPLOY_ENV} -b ${LOGICAL_ENV}-${APPNAME}-deployvarj
                mv buildenvvar deployenvvar
                mv buildenvvarg deployenvvarg
                echo "Fetching Buildvar"
                ./buildenv.sh -e ${DEPLOY_ENV} -b ${LOGICAL_ENV}-${APPNAME}-buildvar
                aws s3 cp s3://tc-platform-${LOGICAL_ENV}/securitymanager/${LOGICAL_ENV}-freecodecamp.env ./.env
                """
                load 'awsenvconfg'
                load 'deployenvvarg'
                load 'buildenvvarg'
            }
        }
        stage('build application')
        {
            //Building Application
            when { expression { IS_BUILD } }
            steps {
                // Doing Build
                sh """
                    #!/bin/bash
                    node --version
                    npm --version
                    git config --global url."https://git@".insteadOf git://
                    npm ci
                    npm run build
                    ls -lath
                """
            }
        }
        stage('appdeploy')    
        {
            //Deploying app
            when { expression { IS_APP_DEPLOY } }
            steps {
                //Doing Deployment
                echo "Deploying application"
                //input(message: 'Hello World!', ok: 'Submit')
                sh """
                #!/bin/bash
                #./master_deploy.sh -d CFRONT -e $DEPLOY_ENV -c $ENABLE_CACHE
                gatsby-plugin-s3 deploy
                """         
            }
        }
        stage('apideploy')    
        {
            //Deploying app
            when { expression { IS_API_DEPLOY } }
            steps {
                //Doing Deployment
                echo "Deploying Api"
                // input(message: 'Hello World!', ok: 'Submit')
                sh """
                #!/bin/bash
                sed -i '/node_modules/d' ./.dockerignore
                docker build -f docker/api/ECSDockerfile -t $APPNAME-api:latest .
                ./master_deploy.sh -d ECS -e $DEPLOY_ENV -t latest -s ${LOGICAL_ENV}-${APPNAME}-appvar -i ${APPNAME}-api                
                """         
            }
        }      
    }

}
