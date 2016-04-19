// custom directive
// Zooming

function zoomit() {

		var directive = {
			link: link
		}
		return directive;

		function link(scope, elem, attr) {
				var dragging = false;
				var lastX = 0;
				elem.on('mousedown', function(event) {
					console.log('event', event.pageX);
					lastX = event.PageX;
					event.preventDefault();
					dragging= true;

				});
				elem.on('mouseup', function() {
				console.log('event', event.pageX);

					dragging =false;
				});
				elem.on('mouseleave', function() {
					dragging= false;
				});
				elem.on('mousemove', function(event) {
					console.log(dragging)
					if(dragging) {
					console.log('move')
						var adjustment = null;
						if(event.pageX > lastX && elem.width() <300) {
							console.log('ok')
							adjustment = 1.1;
						} else if (elem.width() > 100){
							adjustment = 0.9;
						}

						if(adjustment) {
							console.log('in')
							elem.width(elem.width() *adjustment)
							elem.height(elem.height() *adjustment)

						}

						lastX = event.pageX;
					}
				})
			}
	}