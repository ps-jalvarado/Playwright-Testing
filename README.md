# Playwright-Testing

# Context:

    Playwright Version: 1.26.1
    Operating System: Mac OS (M1)
    Node.js version: 16.17.1
    Browser: Webkit (Headless)
    Extra: Using Docker Container

# Describe the bug

I would want to run webkit headless and go to a home depot product. However, when running playwright in a docker container it can never comeplete the `page.goto` step. On the other hand, when using it locally non-containerized it works without any issues. When using the container I can get messages involving `"Target Closed"` or `"Timout because 120000ms has exceeded"`

# Workaround Found
* When using the below snippet it does not work as described
```Javascript
const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"
});
```

* When using the below snippet it works. However, I would like to have the option of using custom user agents
```Javascript
const context = await browser.newContext({
    //userAgent: "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"
});
```

# To Reproduce
1. Build the dockerfile
    - `docker build -t playwright-testing .`
2. Start up the container
    - `docker run -it playwright-testing`
3. Run Program
    - `node index.js`

# Logs
* I have included the logs I received inside of the logs folder