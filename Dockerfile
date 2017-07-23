from ubuntu:latest

# Install dependencies
run apt-get update; apt-get -y dist-upgrade
run apt-get -y install build-essential apache2

# Add client files
add dist/ /var/www/html/

cmd ["apachectl", "-D", "FOREGROUND"]
