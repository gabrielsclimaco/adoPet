# We will start with the official base image of Node
# This is because it comes with Node & NPM ready to go (almost)
FROM node

# Next, let's update NPM
# It's not pretty, but it works
# RUN npm --user root --unsafe-perm true install npm -g
# RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Now, our application will have a `package.json` that defines packages
# Let's go ahead and grab that so we can install some packages
# ADD package.json /tmp/package.json

# Then, we can move to the `/tmp` directory and install our packages
# WORKDIR /tmp
# RUN yarn

# Our packages are installed, but they aren't much use to us in `/tmp`
# Let's move them to our application directory
#   (creating it if it doesn't exist)
# RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# Now we'll change our working directory
# WORKDIR /opt/app

# And finally add all our files from our host machine
# ADD . /opt/app/

RUN mkdir app/
ADD package.json app/package.json
WORKDIR app/
RUN yarn
ADD . app/

# I'm also going to expose a port here, we'll use this later
EXPOSE 8081

# Finally, we'll run a command whenever we start this in a container
CMD ["yarn", "run", "dev"]
