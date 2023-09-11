# wdriver
A simple WebDriver.io test automation framework

# Introduction
This is a simple WebDriver.io (Selenium WebDriver-based) framework that includes some sample test cases.

# How to run the tests
npx wdio run ./wdio.conf.js

The above command will run ALL tests within the .../test/specs folder. You can EXCLUDE tests by moving tests from the "specs" section to the "exclude" section like so:
...
specs: [
        './test/specs/**/*.js'
    ],

exclude: [
        './test/specs/skipme.js'
    ],
...
...
