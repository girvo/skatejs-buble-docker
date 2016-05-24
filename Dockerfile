###
# This is both a test of Skate as a tool, as well as build-args for Docker
##
FROM studionone/node6:latest

# Set NODE_ENV to production provided build-arg hasn't been set
ENV NODE_ENV=${env:-production}

# Use a different entrypoint for development vs production
ARG env=prod
ADD conf/start.$env.sh /start.sh
RUN chmod +x /start.sh

ADD code /app
WORKDIR /app
RUN npm install

EXPOSE 8080

ENV NODE_PATH /app/node_modules
ENTRYPOINT /start.sh
