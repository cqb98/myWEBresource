<script>
function getLocation()
{
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
  }
  else
  {
   str="Geolocation is not supported by this browser.";}
  }
}
function showPosition(position)
  {
   alert(123);
  lat=position.coords.latitude;
  lon=position.coords.longitude;
  latlon=new google.maps.LatLng(lat, lon)

  }

function showError(error)
  {
  	alert(456);
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      str="User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      str="Location information is unavailable."
      break;
    case error.TIMEOUT:
      str="The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      str="An unknown error occurred."
      break;
    }
  }
