sparkCoreNodeJS
===============

Application to talk to the spark-core board using nodeJS, the spark-io module and voodoospark. This Repository is directed towards the first technical prototype of my MFADT thesis at Parsons, The New School NYC.

###Talking to the spark core
__GET ACCESS TOKEN__</br>
The following command uses the spark-API to call the board and GET an acces token:

	curl https://api.spark.io/oauth/token -u spark:spark -d grant_type=password -d username=<EMAIL> -d password=<PASSWORD>

__Note:__ Replace <EMAIL> and <PASSWORD> with the email address and password you use  for login into [spark.io's WEB IDE](http://spark.io/build)


__HTTP REQUEST TO THE API__</br>
Use the following command to do an http request to the spark-cloud API:

	curl "https://api.spark.io/v1/devices/{DEVICE-ID}/endpoint?access_token={ACCESS-TOKEN}"

__Note:__ The ACCESS-TOKEN can be obtained with the previous curl command (mentioned before as GET ACCESS TOKEN) and the DEVICE-ID can be obtain either using the WEB IDE (going into the "core" button of the menu) or via command line in ubuntu with screen: 

	sudo screen /dev/ttyACM0 9600

After hiting enter you should be prompted into a blank terminal window. Just press:

	i

and you should see something like:

	your core id is: 55ff68064989495329092587

