**OpenHab**
# start shell as root user
sudo bash

# install git - you can skip this if it's already installed
apt-get update
apt-get install git

# download, link and create config file
git clone -b openHAB https://github.com/openhab/openhabian.git /opt/openhabian
ln -s /opt/openhabian/openhabian-setup.sh /usr/local/bin/openhabian-config
cp /opt/openhabian/build-image/openhabian.conf /etc/openhabian.conf

openhabian-config unattended

nano /var/lib/openhab/uuid

nano /var/lib/openhab/openhabcloud/secret