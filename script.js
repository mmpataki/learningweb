var projects = [
	{
		'title' : 'Greeting',
		'link': 'greeting/index.html',
		'date': '02-Feb-2017'
	},
	{
	 	'title' : 'Scientific Calculator',
		'link': 'calculator/index.html',
		'date': '07-Feb-2017'
	},
	{
    	  	'title': 'Weather App',
		'link': 'weatherapp/index.html',
		'date': '04-Feb-2017'
	},
	{
		'title': 'Font Lister',
		'link' : 'fontlister/index.html',
		'date' : '05-Feb-2017'
	},
	{
		'title': 'IA-1',
		'link': 'iapaper/ia1/index.html',
		'date': '01-Mar-2017'
	},
	{
		'title': 'chartjs',
		'link': 'mchartjs/index.html',
		'date': '28-Feb-2017'
	}
];
      

var colors = [
	"#1abc9c",
	"#873600",
	"#1c2833",
	"#3498db",
	"#154360",
	"#f39c12",
	"#145a32"
	];

window.onload = function() {
	
	var view = document.getElementById("projectList");

	for(var i=0; i<projects.length; i++) {
		
		var r = (((Math.random() * 1000) % colors.length) | 0);
		var w = (((Math.random() * 1000) % 300) | 0) + 100;
		var h = (((Math.random() * 1000) % 200) | 0) + 100;

		var str =
			"<a href='" + projects[i].link + "'>" +
			"	<div class='pitem' style='background-color: " + colors[r] + "; width: " + w + "; height: " + h + ";'>#" + (i + 1) + ". " +
					projects[i].title +
			"		<div class='dateitem'>" +
						projects[i].date +
			"		</div>" +
			"	</div>" +
			"</a>";
		
		view.innerHTML += str;
		
	}
	
	
}