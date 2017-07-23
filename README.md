# farfetch

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

    sudo npm install -g grunt-cli bower yo generator-karma generator-angular 
    npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt 
    npm install
    bower install

## Build & development

Run 

    grunt  

for building and 

    grunt serve

for preview.

## Run with Docker

    docker build -t farfetch:master .
    docker run -d -p 9000:80 farfetch:master

## Run with Python

    cd dist
    python -m SimpleHTTPServer 10000

## Testing

    webdriver-manager update (first time only)
    webdriver-manager start
    protractor e2e-farfetch.js