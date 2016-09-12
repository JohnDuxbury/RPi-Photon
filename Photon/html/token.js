<script>
var accessToken = "418187ae3a57bb4c368b038285c26293f3bb2b81";
var deviceID = "2c0044000947353138383138"
var url = "https://api.spark.io/v1/devices/" + deviceID + "/led";
function switchOn()
{
	$.post(url, {params: "on", access_token: accessToken });
}  

function switchOff()
{
	$.post(url, {params: "off", access_token: accessToken });
}  

</script>