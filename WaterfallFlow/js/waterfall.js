
$(window).on("load", function() {
    var dataJSON = {
        'data': [
            { 'src': '22.jpg' },
            { 'src': '23.jpg' }, 
            { 'src': '24.jpg' }, 
            { 'src': '25.jpg' }, 
            { 'src': '26.jpg' }, 
            { 'src': '27.jpg' }, 
            { 'src': '28.jpg' }, 
            { 'src': '29.jpg' }, 
            { 'src': '30.jpg' }
        ]
    };
	waterfall('#main','#main>.box');
	$(window).on("resize",function(){
		waterfall('#main','#main>.box');
	}).on("scroll",function(){
		if(isBottom('#main>.box')){
			 $.each( dataJSON.data, function( index, obj ){
                var $oPin = $('<div>').addClass('box').appendTo( $( "#main" ) );
                var $oBox = $('<div>').addClass('wrap').appendTo( $oPin );
                $('<img>').attr('src','img/' + obj['src']).appendTo($oBox);
            });
            waterfall('#main','#main>.box');
		}
	});
});

function isBottom(childBox){
	childBox = $(childBox);
	var lastTop = childBox.last().offset().top + Math.floor(childBox.last().height()/2);
	var scrollTop = $( window ).scrollTop();
	var winHei=$(window).height();
	return lastTop <= scrollTop + winHei;
}

function waterfall(parentBox, childBox) {
    parentBox = $(parentBox);
    childBox = $(childBox);
    childBox.css({
    	"position":"",
    	'top': "",
    	'left': ""
    })
    var _wid = childBox.outerWidth(true);
    var num = Math.floor($(window).width() / _wid);
    parentBox.css({
        'width': (_wid * num),
        'margin': '0 auto'
    });

    var arr = [];
    childBox.each(function(index, elem) {
        var _hei = childBox.eq(index).height(),
            _minHei = 0,
            _minHeiIndex = -1;
        if (index < num) {
            arr[index] = _hei;
        } else {
            _minHei = Math.min.apply(Math, arr);
            _minHeiIndex = $.inArray(_minHei, arr);
            $(elem).css({
                'position': 'absolute',
                'top': _minHei + 15,
                'left': childBox.eq(_minHeiIndex).position().left
            });
            arr[_minHeiIndex] += childBox.eq(index).height() + 15;
        }
    })
}
