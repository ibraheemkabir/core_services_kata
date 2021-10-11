#SSE - Core Services, Troubleshooting
Troubleshooting is a big part of our engineering culture @ Okra. Whether it's helping teammates, reviewing PR's, recreating a client's issue, or fixing a pesky bug troubleshooting skills are essential to solving problems quickly. Here you will find a code example that is not throwing any errors but has an issue, The premise is this. At Okra the end user has control of who they share their data with so we only connect app's to the account the end user chooses therefore the app only has access to that account. 


You'll find a function responsible for connecting the app to the account the end user chooses but for some reason conected_accounts doesn't seem to connect the app. Troubleshoot and fix the issue so that when the function is run multiple times the app is connected to the account properly and only once.


##Output Requirements
+ Should be able to compile and output results.
+ App should be connected
+ App should not be connected multiple times (array should include the app only once) 
+ Code is modular and bug-free.
+ Should output all accounts, even those which aren't connected

##Test Cases