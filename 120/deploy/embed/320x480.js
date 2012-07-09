
	var iframe = document.createElement("iframe");
	iframe.src = "http://dev.republicproject.com/mobile/app.html?id=120&unit=1";
	iframe.frameborder = 0;
	iframe.width = 320;
	iframe.height = 480;
	iframe.scrolling = "no";
	iframe.style.borderWidth = 0;
	var scriptrefs = document.getElementsByTagName("script");
	var ref = scriptrefs[scriptrefs.length-1];
	ref.parentNode.insertBefore(iframe, ref);
					