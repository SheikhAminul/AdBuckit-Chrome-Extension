function isEmpty(Target) {
	if (Target.length > 0) return false;
	else return true;
}

function getUrlParameter(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getAdvertisers() {
	/* START: AD TYPE 1 */
	if (!document.querySelectorAll("[id=\"InBucketOne\"],[id=\"InBucketTwo\"],[id=\"InBucketThree\"],[id=\"InBucketFour\"]")[0]) {
		var AdBody = document.body;
		function getAdData() {
			var AdData = {
				"AdURL": "",
				"AdImage": "",
				"AdText": ""
			};
			
			var Links = AdBody.querySelectorAll("a");
			for (var i = 0; i < Links.length; i++) if (getUrlParameter("adurl", Links[i].href)) {
				AdData.AdURL = getUrlParameter("adurl", Links[i].href);
				break;
			}
			
			var Images = AdBody.querySelectorAll("img");
			for (var i = 0; i < Images.length; i++) if (Images[i].getAttribute("src")) {
				AdData.AdImage = Images[i].getAttribute("src");
				break;
			}
			
			if (AdData.AdURL.length > 0) {
				console.log("AD (Type One) Data:");
				console.log(JSON.stringify(AdData, null, "\t"));
				return true;
			} else return false;
		}
		if (getAdData()) {
			var BucketIt = document.createElement("button");
			BucketIt.style = "outline: none; z-index: 100; position: absolute; top: 1px; left: 1px; background: rgb(194, 240, 194); color: rgb(20, 82, 20); border: 1px solid rgb(51, 204, 51); border-bottom-right-radius: 7.5px; font-size: 10px; padding: 3px 5.5px;";
			BucketIt.setAttribute("id", "InBucketOne");
			BucketIt.innerHTML = "BUCKET IT (One)";
			BucketIt.onclick = function () {
				getAdData();
				BucketIt.innerHTML = "SUCCESSFULLY LOGGED TO CONSOLE (One)";
				setTimeout(function () {
					BucketIt.innerHTML = "BUCKET IT (One)";
				}, 2500);
			};
			AdBody.style.position = "relative";
			AdBody.appendChild(BucketIt);
		}
	}
	/* END: AD TYPE 1 */
	
	/* START: AD TYPE 2 */
	if (!document.querySelectorAll("[id=\"InBucketOne\"],[id=\"InBucketTwo\"],[id=\"InBucketThree\"],[id=\"InBucketFour\"]")[0] && window.clickTag) {
		var AdBody = document.body;
		function getAdData() {
			var AdData = {
				"AdURL": "",
				"AdImage": "",
				"AdText": ""
			};
			
			if (window.clickTag) AdData.AdURL = clickTag;
			
			var Images = AdBody.querySelectorAll("img");
			for (var i = 0; i < Images.length; i++) {
				AdData.AdImage = Images[i].getAttribute("src");
				break;
			}
			
			if (AdData.AdURL.length > 0) {
				console.log("AD (Type Three) Data:");
				console.log(JSON.stringify(AdData, null, "\t"));
				return true;
			} else return false;
		};
		if (getAdData()) {
			var BucketIt = document.createElement("button");
			BucketIt.style = "outline: none; z-index: 100; position: absolute; top: 1px; left: 1px; background: rgb(194, 240, 194); color: rgb(20, 82, 20); border: 1px solid rgb(51, 204, 51); border-bottom-right-radius: 7.5px; font-size: 10px; padding: 3px 5.5px;";
			BucketIt.setAttribute("id", "InBucketThree");
			BucketIt.innerHTML = "BUCKET IT (Three)";
			BucketIt.onclick = function () {
				getAdData();
				BucketIt.innerHTML = "SUCCESSFULLY LOGGED TO CONSOLE (Three)";
				setTimeout(function () {
					BucketIt.innerHTML = "BUCKET IT (Three)";
				}, 2500);
			};
			AdBody.style.position = "relative";
			AdBody.appendChild(BucketIt);
		} else setTimeout(function () {
			getAdvertisers();
		}, 2500);
	}
	/* END: AD TYPE 2 */
}
getAdvertisers();
