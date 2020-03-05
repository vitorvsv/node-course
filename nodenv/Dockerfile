FROM node
RUN apt-get update
RUN apt-get install build-essential libssl-dev curl -y
RUN curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o ~/install_nvm.sh
RUN bash ~/install_nvm.sh
RUN mkdir /app
USER node
WORKDIR /app
EXPOSE 3000

# You may also access the container and install the node version (with root user)
# nvm install stable
