// panel up/down icon

$('#collapseExample').on('shown.bs.collapse', function() {
    $(".servicedrop").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
  });

$('#collapseExample').on('hidden.bs.collapse', function() {
    $(".servicedrop").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
  });
  
  
// Search select option

$(document).ready(function() {
    $('.nm-src-status').select2();
});

$(".nm-src-count").select2({
    placeholder: "="
});

// Data popover

$(function () {
  $('[data-toggle="popover"]').popover()
});


// Multi select

 $(document).ready(function() {
	$('#nm-advier-activity').multiselect({
		buttonText: function(options, select) {
			return '';
		},
		buttonTitle: function(options, select) {
			var labels = [];
			options.each(function () {
				labels.push($(this).text());
			});
			return labels.join(' - ');
		},
		buttonContainer: '<div class="btn-group nm_multi_select" id="example-selectedClass-container"></div>',
		selectedClass: 'popopo'
	});
});
	


$(document).ready(function() {
    $('#teams').multiselect({
        templates: { 
            li: '<li><div class="checkbox"><label></label></div></li>'
        }
    });
    $('.multiselect-container div.checkbox').each(function (index) {

        var id = 'multiselect-' + index,
            $input = $(this).find('input');

        // Associate the label and the input
        $(this).find('label').attr('for', id);  
        $input.attr('id', id);

        // Remove the input from the label wrapper
        $input.detach();

        // Place the input back in before the label
        $input.prependTo($(this));

        $(this).click(function (e) {
            // Prevents the click from bubbling up and hiding the dropdown
            e.stopPropagation();
        });

    });
});


	
// Tooltip development

$('[rel=popover]').popover({
    html:true,
    placement:'left',
    content:function(){
        return $($(this).data('contentwrapper')).html();
    }
});

function myFunction() {
    $('[rel=popover]').popover('hide');
}




// Table fixed

 // (function($) {

 // $.fn.prepFixedHeader = function () {
  // return this.each( function() {
   // $(this).wrap('<div class="row fixed-table"><div class="table-content"></div></div>');
  // });
 // };

 // $.fn.fixedHeader = function () {
  // return this.each( function() {
   // var o = $(this),
       // nhead = o.closest('.fixed-table'),
       // $head = $('thead.header', o);
  
   // $(document.createElement('table'))
     // .addClass(o.attr('class')+' table-copy').removeClass('table-fixed-header')
     // .appendTo(nhead)
     // .html($head.clone().removeClass('header').addClass('header-copy header-fixed'));
   // var ww = [];
   // o.find('thead.header > tr:first > th').each(function (i, h){
     // ww.push($(h).width());
   // });
   // $.each(ww, function (i, w){
     // nhead.find('thead.header > tr > th:eq('+i+'), thead.header-copy > tr > th:eq('+i+')').css({width: w});
   // });

   // nhead.find('thead.header-copy').css({ margin:'0 auto',
     // width: o.width()});
  // });
 // };

 // })(jQuery);















