// JavaScript Document
$(document).ready(function ()
{	
		var captiontext = "TEXTYTEXT";
		var svar1 = "svar1";
		var svar2 = "svar2";
		var svar3 = "svar3";
		var svar4 = "svar4";
		var svar5 = "svar5";
		

				
	
				
            captions = {
                hjoerring: ["Hjørring Kommune",
				             captiontext,
							 "<img src='liv.png' />",
							 svar1,
							 svar2,
							 svar3,
							 svar4,
							 svar5
							 ],
				
                frederikshavn: ["Frederikshavn Kommune",
                  "Dear Prudence was written by John and Paul about Mia Farrow's sister, Prudence, "
                    + "when she wouldn't come out and play with Mia and the Beatles at a religious retreat "
                    + "in India."],
                john: ["John Lennon - Guitar and Vocals",
                  "In 1962, The Beatles won the Mersyside Newspaper's biggest band in Liverpool "
                    + "contest principally because they called in posing as different people and voted "
                    + "for themselves numerous times."],
                george: ["George Harrison - Lead Guitar and Vocals",
                 "The Beatles' last public concert was held in San Francisco's Candlestick "
                    + "Park on August 29, 1966."]
            };
	
	
	$('#dkMap').mapster({
	isSelectable : false,
	render_highlight : { altImage : 'danmarkskort-lys.jpg' },
    mapKey: 'title',
	fill : true, altImage : 'danmarkskort-lys.jpg',
	fillColor : '555fff',
	fillOpacity : 1,
	stroke : true,
	strokeColor : '000000',
	strokeWidth : 10,
	onMouseover: function(data) {
						$('body').append("<div id='infobox'>"
										+ "<div id='picture'></div>"
										+ "<div id='caption-header'></div>"
										+ "<div id='caption-text'></div>"
										+ "<div id='svar1'></div>"
										+ "<div id='svar2'></div>"
										+ "<div id='svar3'></div>"
										+ "<div id='svar4'></div>"
										+ "<div id='svar5'></div></div>");
						$('#caption-header').text(captions[data.key][0]);
                    	$('#caption-text').text(captions[data.key][1]);
						$('#picture').append(captions[data.key][2]);
						$('#svar1').text(captions[data.key][3]);
						$('#svar2').text(captions[data.key][4]);
						$('#svar3').text(captions[data.key][5]);
						$('#svar4').text(captions[data.key][6]);
						$('#svar5').text(captions[data.key][7]);
						$('#infobox').show();				
						//document.getElementById('infobox').innerHTML=data.key;

                },
	onMouseout: function(data) {
					$("#infobox").remove();
					
                },
	
	areas: [{
		key: "pop",
		toolTip:"This is Sparta"
	},
	{
		key: "frederikshavn",
	},
	{
		key: "bronderslev",
		toolTip:"Bronderslev",
	},
	{
		key: "aalborg",
		toolTip:"Aalborg",
	},
	{
		key: "jammerbugt",
		toolTip:"Jammerbugt",
	},
	{
		key: "thisted",
		toolTip:"Thisted",
	},
	{
		key: "mors",
		toolTip:"Morsø",
	},
	{
		key: "skive",
		toolTip:"Skive",
	},
	{
		key: "vesthimmerland",
		toolTip:"Skive",
	},
	{
		key: "rebild",
		toolTip:"Rebild",
	},
	{
		key: "mariagerfjord",
		toolTip:"Mariager Fjord",
	},
	{
		key: "lemvig",
		toolTip:"Lemvig",
	},
	{
		key: "struer",
		toolTip:"Struer",
	},
	{
		key: "holstebro",
		toolTip:"Holstebro",
	},
	{
		key: "viborg",
		toolTip:"Viborg",
	},
	{
		key: "randers",
		toolTip:"Randers",
	},
	{
		key: "norddjurs",
		toolTip:"Norddjurs",
	},
	{
		key: "syddjurs",
		toolTip:"Syddjurs",
	}]
});
});