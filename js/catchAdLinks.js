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
	if (!document.querySelectorAll("[id=\"InBucketOne\"],[id=\"InBucketTwo\"]")[0]) {
		if (document.querySelector("#abgc")) {
			var AdDiv = document.querySelector("#abgc").parentElement;

			function getAdData() {
				var AdData = {
					"AdURL": "",
					"AdImage": "",
					"AdText": ""
				};
				var Links = AdDiv.parentElement.querySelectorAll("a");
				for (var i = 0; i < Links.length; i++)
					if (getUrlParameter("adurl", Links[i].href)) {
						AdData.AdURL = getUrlParameter("adurl", Links[i].href);
						break;
					}
				var Images = AdDiv.parentElement.querySelectorAll("img[alt=\"Advertisement\"], img[class=\"img_ad\"]");
				for (var i = 0; i < Images.length; i++) {
					AdData.AdImage = Images[i].getAttribute("src");
					break;
				}
				var AdTexts = AdDiv.parentElement.querySelectorAll("table");
				if (AdTexts[0]) AdData.AdText = AdTexts[0].innerText;
				if (AdData.AdURL.length > 0) {
					console.log("AD (Type One) Data:");
					console.log(JSON.stringify(AdData, null, "\t"));
					return true;
				} else return false;
			};
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
				AdDiv.style.position = "relative";
				AdDiv.appendChild(BucketIt);
			} else setTimeout(function () {
				getAdvertisers();
			}, 2500);
		} else if (document.querySelector("div[id=\"adWrap\"]")) {
			var AdDiv = document.querySelector("div[id=\"adWrap\"]").parentElement;
			
			function getAdData() {
				var AdData = {
					"AdURL": "",
					"AdImage": "",
					"AdText": ""
				};
				var Links = AdDiv.parentElement.querySelectorAll("a[href~=\"void(0)\"]");
				for (var i = 0; i < Links.length; i++) {
					if (window.clickTag) AdData.AdURL = clickTag;
					break;
				}
				var Images = AdDiv.parentElement.querySelectorAll("a[href~=\"void(0)\"] > img");
				for (var i = 0; i < Images.length; i++) {
					AdData.AdImage = Images[i].getAttribute("src");
					break;
				}
				var AdTexts = AdDiv.parentElement.querySelectorAll("a[href~=\"void(0)\"]");
				if (AdTexts[0]) AdData.AdText = AdTexts[0].innerText;
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
				AdDiv.style.position = "relative";
				AdDiv.appendChild(BucketIt);
			} else setTimeout(function () {
				getAdvertisers();
			}, 2500);
		} else if (document.querySelector("iframe[name=\"hpif\"]")) {
			var AdDiv = document.querySelector("iframe[name=\"hpif\"]").parentElement;
			
			function getAdData() {
				var AdData = {
					"AdURL": "",
					"AdImage": "",
					"AdText": ""
				};
				var Links = AdDiv.parentElement.querySelectorAll("a[target=\"_blank\"]");
				for (var i = 0; i < Links.length; i++) {
					AdData.AdURL = Links[i].href;
					break;
				}
				var Images = AdDiv.parentElement.querySelectorAll("a[target=\"_blank\"] > img");
				for (var i = 0; i < Images.length; i++) {
					AdData.AdImage = Images[i].getAttribute("src");
					break;
				}
				var AdTexts = AdDiv.parentElement.querySelectorAll("table");
				if (AdTexts[0]) AdData.AdText = AdTexts[0].innerText;
				if (AdData.AdURL.length > 0) {
					console.log("AD (Type Two) Data:");
					console.log(JSON.stringify(AdData, null, "\t"));
					return true;
				} else return false;
			};
			if (getAdData()) {
				var BucketIt = document.createElement("button");
				BucketIt.style = "outline: none; z-index: 100; position: absolute; top: 1px; left: 1px; background: rgb(194, 240, 194); color: rgb(20, 82, 20); border: 1px solid rgb(51, 204, 51); border-bottom-right-radius: 7.5px; font-size: 10px; padding: 3px 5.5px;";
				BucketIt.setAttribute("id", "InBucketTwo");
				BucketIt.innerHTML = "BUCKET IT (Two)";
				BucketIt.onclick = function () {
					getAdData();
					BucketIt.innerHTML = "SUCCESSFULLY LOGGED TO CONSOLE (Two)";
					setTimeout(function () {
						BucketIt.innerHTML = "BUCKET IT (Two)";
					}, 2500);
				};
				AdDiv.style.position = "relative";
				AdDiv.appendChild(BucketIt);
			} else setTimeout(function () {
				getAdvertisers();
			}, 2500);
		}
	}
}
getAdvertisers();
