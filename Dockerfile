###
# This is both a test of Skate as a tool, as well as build-args for Docker
##
FROM studionone/node6:latest

# Use a different entrypoint for development vs production
ARG env=prod
ADD conf/start.$env.sh /start.sh
RUN chmod +x /start.sh

ADD code /app
WORKDIR /app
RUN npm install

EXPOSE 8080

ENTRYPOINT /start.sh
