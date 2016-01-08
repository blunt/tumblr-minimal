$(document).ready(function() {
	// ---------------------------------------
	// GLOBAL VARIABLES
	// ---------------------------------------
	var body = $('body'),
		postLink = $('._postlink'),
		overlay = $('._overlay'),
		overlayPost = $('._overlaypost'),
		overlayPostType;

	// ---------------------------------------
	// POST SINGLE -- SHOW
	// ---------------------------------------
	function postSingleVisible(post) {
		var postId = post.parent().attr('data-id'),
			postContent = post.html(),
			postDetails = $('<div>').append(post.next('.post__more').html());
			postDetails.find('.action-item').remove();
		postType = post.parent().attr('class').split(' ').pop();
		overlayPost.removeClass(overlayPostType).addClass(postType).html(postContent + postDetails.html());
		overlay.fadeIn('fast');
		overlayPost.addClass('overlay__post--visible');
		body.addClass('no-scroll');
		overlayPostType = postType;
	}

	postLink.click(function() {
		postSingleVisible($(this));
	});

	postLink.keyup(function (e) {
	    if (e.keyCode == 13) { // Enter key
	        postSingleVisible($(this));
	    }
	});

	// ---------------------------------------
	// POST SINGLE -- HIDE
	// ---------------------------------------
	function postSingleHidden(post) {
		post.fadeOut();
		overlayPost.removeClass('overlay__post--visible');
		body.removeClass('no-scroll');

	}

	overlay.click(function() {
		postSingleHidden($(this));
	}).children().click(function() {
		return false;
	});

	$(document).keyup(function (e) {
	    if (e.keyCode == 27) { // ESC key
	        postSingleHidden(overlay);
	    }
	});
});