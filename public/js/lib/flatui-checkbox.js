/* =============================================================
 * flatui-checkbox.js v0.0.3
 * ============================================================ */
 
!function ($) {

 /* CHECKBOX PUBLIC CLASS DEFINITION
	* ============================== */

	var Checkbox = function (element, options) {
		this.init(element, options);
	}

	Checkbox.prototype = {
		
		constructor: Checkbox
		
	, init: function (element, options) {			 
			var $el = this.$element = $(element)
			
			this.options = $.extend({}, $.fn.checkbox.defaults, options);			 
			$el.before(this.options.template);		
			this.setState(); 
		}	 
	 
	, setState: function () {		 
			var $el = this.$element
				, $parent = $el.closest('.checkbox');
				
				$el.prop('disabled') && $parent.addClass('disabled');		
				$el.prop('checked') && $parent.addClass('checked');
		}	 
		
	, toggle: function () {		 
			var ch = 'checked'
				, $el = this.$element
				, $parent = $el.closest('.checkbox')
				, checked = $el.prop(ch)
				, e = $.Event('toggle')
			
			if ($el.prop('disabled') == false) {
				$parent.toggleClass(ch) && checked ? $el.removeAttr(ch) : $el.prop(ch, ch);
				$el.trigger(e).trigger('change'); 
			}
		}	 
		
	, setCheck: function (option) {		 
			var d = 'disabled'
				, ch = 'checked'
				, $el = this.$element
				, $parent = $el.closest('.checkbox')
				, checkAction = option == 'check' ? true : false
				, e = $.Event(option)
			
			$parent[checkAction ? 'addClass' : 'removeClass' ](ch) && checkAction ? $el.prop(ch, ch) : $el.removeAttr(ch);
			$el.trigger(e).trigger('change');				
		}	 
			
	}


 /* CHECKBOX PLUGIN DEFINITION
	* ======================== */

	var old = $.fn.checkbox

	$.fn.checkbox = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('checkbox')
				, options = $.extend({}, $.fn.checkbox.defaults, $this.data(), typeof option == 'object' && option);
			if (!data) $this.data('checkbox', (data = new Checkbox(this, options)));
			if (option == 'toggle') data.toggle()
			if (option == 'check' || option == 'uncheck') data.setCheck(option)
			else if (option) data.setState(); 
		});
	}
	
	$.fn.checkbox.defaults = {
		template: '<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>'
	}


 /* CHECKBOX NO CONFLICT
	* ================== */

	$.fn.checkbox.noConflict = function () {
		$.fn.checkbox = old;
		return this;
	}


 /* CHECKBOX DATA-API
	* =============== */

	$(document).on('click.checkbox.data-api', '[data-toggle^=checkbox], .checkbox', function (e) {
	  var $checkbox = $(e.target);
		if (e.target.tagName != "A") {			
			e && e.preventDefault() && e.stopPropagation();
			if (!$checkbox.hasClass('checkbox')) $checkbox = $checkbox.closest('.checkbox');
			$checkbox.find(':checkbox').checkbox('toggle');
		}
	});
	
	$(function () {
		$('[data-toggle="checkbox"]').each(function () {
			var $checkbox = $(this);
			$checkbox.checkbox();
		});
	});

}(window.jQuery);