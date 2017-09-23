FROM node

RUN npm install -g quasar-cli \
    && mkdir /app

ADD package.json app/package.json
WORKDIR /app
RUN yarn
ADD . /app

EXPOSE 8081

CMD quasar dev -p
