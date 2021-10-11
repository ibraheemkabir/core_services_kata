#SSE - Core Services


## Question 1 - Consuiming API's

Whether it's building out refunds, chargebacks, or just a new product @ Okra. We use logic everyday to allow our customers build the tools to help them scale their businesses. Here you will need to build out the refund logic using the following endpoints:

+ `POST` to https://api.okra.ng/v2/mock-api/fetch-wallet {id}
+ `POST` to https://api.okra.ng/v2/mock-api/pay {from_id, to_id, amount}

### Requirements
+ Create a refund function that accepts the company refunding, the amount of the refund, and the customer they are refunding.
+ use the routes above to build out the refund logic.
+ when run the output should show the customer's wallet before an after. 

## Question 2 - Creating Logic
Consuming API's is something we do regualarly. Whether it's a banks API to give access or if it's a 3rd party tool to make our internal processes smoother. Your ability to consumer and create API routes is paramount to Okra. Below we have created a fake API to allow you to get started.

+ `POST` https://api.okra.ng/v2/mock-api/login {username, password}
+ `POST` https://api.okra.ng/v2/mock-api/refresh-wallet {wallet_id, variable: mockVariable} //pass in the mockVariable paramter as `variable`
+ `GET`  https://api.okra.ng/v2/mock-api/logout 

### Requirements
+ login using passed variables
+ keep store of user's info and wallet
+ refresh user's wallet and keep new value
+ logout and keep msg sent back
+ should ouptu [user's name, user's id, users wallet amount before refreshing as string,  users wallet amount after refrshing as string, logout message]


## Keep in Mind
+ Username and Password is okra_user, okra_pass
+ Pick 1 or both
+ Spend no more than 2 hours.
+ Code is modular and bug-free.