# wdriver
A simple WebDriver.io test automation framework

## Author
Julian Marks

## Introduction
This is a simple WebDriver.io (Selenium WebDriver-based) framework that includes some sample test cases.

## How to run the tests
<UL>
<LI>OPTION 1: <B><I>npx wdio run ./wdio.conf.js</I></B></LI>
<LI>OPTION 2 (*NIX-only): <B><I>./run_all_tests.sh</I></B></LI>
</UL>
The above command will run ALL tests within the .../test/specs folder. You can EXCLUDE tests by moving tests from the "specs" section to the "exclude" section like so:

```
specs: [
        './test/specs/**/*.js'
    ],

exclude: [
        './test/specs/skipme.js'
    ],
```

## Tech Stack information
- <B>JavaScript</B> = Programming language
- <B>WebDriver.io</B> = The test framework
- <B>Mocha</B> = Test runner
- <B>Chai</B> = Plugin for assertions

## Test cases implemented so far
<OL> 
<LI><B>Simple Login</B> = Logs in with valid credentials and then logs out
<LI><B>Sorting Tables</B> = Sorting a table via header fields
<LI><B>User Profiles Access</B> = Validating User Profiles can be accessed
<LI><B>Checkbox Functionality</B> = Clicking checkboxes a random amount of times
<LI><B>Dropdown Functionality</B> = Randomly selecting a dropdown option
</OL> 
