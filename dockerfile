FROM ubuntu:22.04

# Install node16
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

WORKDIR /Playwright-Testing
COPY ./ /Playwright-Testing

RUN npm install
RUN npx playwright install-deps webkit