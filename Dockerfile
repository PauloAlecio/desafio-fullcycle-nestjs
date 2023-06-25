FROM node:20-slim

WORKDIR /home/node/application

USER node


CMD [ "tail","-f","/dev/null" ]

