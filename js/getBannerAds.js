$(function () {
    setTimeout(checkForBannerAds, 1000);
});



function checkForBannerAds() {
    
    console.log('******** Getting Banner Ads'); 

    $("a").each(function(){

        if (this.href.indexOf('googlead') != -1
            || this.href.indexOf('doubleclick') != -1
            || this.href.indexOf('adroll') != -1
            || this.href.indexOf('rubiconproject') != -1
            || this.href.indexOf('outbrain') != -1
            || this.href.indexOf('adzerk') != -1) {

        	showStatus($(this), 'checking');

            if(url = $(this).attr('href')) {
            	showStatus($(this), 'got url', url);
            } else {
            	showStatus($(this), 'no url');
            	return;
            }

			//First try to image within current div
			var image = $(this).find('img').first().attr('src');

			//Otherwise, try parent
			if(image == null) {
				image = $(this).parent().find('img').first().attr('src');
			}
			
            if(image 
                && image.indexOf('adbuck') == -1
                && image.indexOf('adchoices') == -1) {
            	showStatus($(this), 'got image', image);
            } else {
            	showStatus($(this), 'no image');
            	return;
            }


            var text = $(this).parent().find('#text1').text()+' '+$(this).parent().find('#text2').text();
            if(text != null) {
            	showStatus($(this), 'got text', text);
            }

            //console.log('URL: '+url);
            //console.log('Image: '+image);
            //console.log('Text: '+text);
            
            if(url && image) {
            	saveAd($(this), url, image, text, window.location.href);
            }
            

        }

    });

}
