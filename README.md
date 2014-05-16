<h1>Bubble Foundry</h1>
<h2> Info </h2>
<p>Bubble Foundry is a REST API that queries the bubbles around the user by
specified parameter and lists them. </p>
<h2> Functions </h2>
<ul>
  <li>
  <h3>/bubbles</h3>
    <h4> Method: GET </h4>
    <p>
      Lists the bubbles around user given conditions <b>(distance, live status).</b>
    </p>
    <p>
      <b>Example Query: </b>
      <pre>
        <code>
          /bubble?localTime='05/13/2014 17:44'&userCoordinate=-73.940392, 40.680760
        </code>
      </pre>
    </p>
    <h4> Method: POST </h4>
    <p>
      Given bubble array, inserts them to DB.<br/>
      <b>Example Query: </b> /bubble
      <div>
        <b>Post Parameters:</b>
        <pre>
          <code>
            {
            	"bubbles": [
            	{
            		"loc": [-73.937575, 40.685367],
            		"startTime":"05/13/2014 13:00",
            		"endTime":"05/13/2014 18:30"
            	},
            	{
            		"loc": [-73.942950, 40.682332],
            		"startTime":"05/12/2014 14:00",
            		"endTime":"05/14/2014 21:30"
            	},
            	{
            		"loc": [-73.939753, 40.681356],
            		"startTime":"05/13/2014 13:12",
            		"endTime":"05/13/2014 23:04"
            	},
            	{
            		"loc": [-73.939866, 40.681016],
            		"startTime":"06/01/2013 13:00",
            		"endTime":"07/08/2013 18:30"
            	},
            	{
            		"loc": [-73.923247, 40.680646],
            		"startTime":"05/13/2014 02:30",
            		"endTime":"05/13/2014 09:30"
            	},
            	{
            		"loc": [-73.944104, 40.678335],
            		"startTime":"05/13/2014 13:01",
            		"endTime":"05/13/2014 18:28"
            	}]
            }
          </code>
        </pre>
      </div>
    </p>
  </h1>
</lu>
