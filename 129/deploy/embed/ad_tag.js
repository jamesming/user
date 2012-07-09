
							function RepublicProjectApp() {
							
							    var root = this;
							
							    var RepublicProjectAppInstance = {
							        setVars: function(d, click_macro, cache_buster) {
							            root.click_macro = click_macro;
							            root.cache_buster = cache_buster;
							            root.doc = d;
							            root.scriptrefs = root.doc.getElementsByTagName("script");
							            root.script_tag = root.scriptrefs[root.scriptrefs.length-1];
							        },
							        renderUnit: function() {
							            this.createFrontImage();
							            this.addEvent();
							        },
							        createFrontImage: function() {
							            var img = root.doc.createElement("img");
							            img.src = "http://dev.republicproject.com/user/129/deploy/userassets/iau.jpg";
							            img.width = 300;
							            img.height = 250;
							            img.setAttribute("id", "unit_image");
							            root.script_tag.parentNode.insertBefore(img, root.script_tag);
							            this.unit_image = root.doc.getElementById("unit_image");
							        },
							        addEvent: function() {
							            if (this.unit_image.attachEvent) { // IE
							    this.unit_image.attachEvent("on" + "click", function() {
							                    RepublicProjectAppInstance.loadIframe.call(this.unit_image);
							                });
							            } else { // Firefox & company
							                this.unit_image.addEventListener("click", this.loadIframe, false);
							            }
							            if (this.unit_image.attachEvent) { // IE
							                this.unit_image.attachEvent("on" + "mouseover", function() {
							                    RepublicProjectAppInstance.loadIframe.call(this.unit_image);
							                });
							            } else { //Firefox & company
							                this.unit_image.addEventListener("mouseover", this.loadIframe, false);
							            }
							        },
							        loadIframe: function() {
							            var node = document.getElementById("unit_image");
							            node.parentNode.removeChild(node);
							            var iframe = root.doc.createElement("iframe");
							            iframe.src = "http://dev.republicproject.com/mobile/app.html?id=129&unit=3&click_macro="+root.click_macro+"&cache_buster="+root.cache_buster;
							            iframe.frameborder = 0;
							            iframe.width = 300;
							            iframe.height = 250;
							            iframe.scrolling = "no";
							            iframe.style.borderWidth = 0;
							            root.script_tag.parentNode.insertBefore(iframe, root.script_tag);
							        }
							    };
							
							    return RepublicProjectAppInstance;
							
							}
									
		
		