function check_email(email) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(email))
		return false;
	else
		return true;
}
jQuery(document).ready(function($) {
	Cufon.replace('#menu .l *');
	Cufon.replace('.news h2');
	Cufon.replace('.cufon');	
})