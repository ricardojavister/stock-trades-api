# stock-trades-api
Node.js Api to handle records for trades.

1. NodeJS: Stock Trades API
In this challenge, your task is to implement a simple REST API to manage a collection of stock trades.
Each trade is a JSON entry with the following keys:
• id: The unique trade ID. (Integer)
• type: The trade type, either 'buy' or 'sell'. (String)
• user_id: The unique user ID. (Integer):
• symbol: The stock symbol. (String)
• shares: The total number of shares traded. The traded shares value
is between 10 and 30 shares, inclusive. (Integer)
• price: The price of one share of stock at the time of the trade. (Integer)
• timestamp: The epoch time of the stock trade in milliseconds. (Integer)
Here is an example of a trade JSON object:
{
    "id": 1,
    "type": "buy",
    "user_id": 23,
    "symbol": "ABX",
    "shares": 30,
    "price": 134,
    "timestamp": 1531522701000
}

The model implementation is provided and read-only. It has a timestamp field of DateTime type, which must be serialized to/from JSON's timestamp of integer type.

The task is to implement the REST service that exposes
the /trades endpoint, which allows for managing the collection of trade records in the following way:

POST request to /trades:
• creates a new trade
• expects a JSON trade object without an id property as a body
payload. You can assume that the given object is always valid.
• adds the given trade object to the collection of trades and assigns a unique integer id to it. The first created trade must have id 1, the second one 2, and so on.
⚫ the response code is 201, and the response body is the created trade object
GET request to /trades:
⚫ return a collection of all trades
⚫ the response code is 200, and the response body is an array of all trades objects ordered by their ids in increasing order
⚫ optionally accepts query parameters type and user_id, for example /trades?type=buy&user_id=122. All these parameters are optional. In case they are present, only objects matching the parameters must be returned.
GET request to /trades/<id
• returns a trade with the given id
• if the matching trade exists, the response code is 200 and the response body is the matching trade object
• if there is no trade with the given id in the collection, the response code is 404 with the response body having the text ID not found.
DELETE, PUT, PATCH request to /trades/<id>:
⚫ the response code is 405 because the API does not allow deleting or modifying trades for any id value
You should complete the given project so that it passes all the test cases when running the provided unit tests. The project by default supports the use of the SQLite3 database.

You should complete the given project so that it passes all the test cases when running the provided unit tests. The project by default supports the use of the SQLite3 database.
