var url = window.location.pathname;
$('.basket-navbar__nav a[href="'+url+'"]').parent().addClass('is--active');

$('button[data-btn="view-pass"]').on("click", function () {
	var type = $('input[data-input="password"]').attr('type') == "password" ? "text" : 'password';
	var title = $(this).attr('title') == "Показать пароль" ? "Скрыть пароль" : 'Показать пароль';
    $(this).prop('title', title);
    $('input[data-input="password"]').prop('type', type);
    $(this).toggleClass("is--visible"); 
}); 