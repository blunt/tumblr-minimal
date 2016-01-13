$(document).ready(function() {
    // ---------------------------------------
    // GLOBAL VARIABLES
    // ---------------------------------------
    var body = $('body'),
        postLink = $('._postlink'),
        overlay = $('._overlay'),
        overlayPost = $('._overlaypost'),
        postType;

    // ---------------------------------------
    // POST SINGLE -- SHOW
    // ---------------------------------------
    function postSingleVisible(post) {
        var postId = post.parent().attr('data-id'),
            postContent = post.html(),
            postDetails = $('<div>').append(post.next('.post__more').html());
            
        postType = post.parent().attr('class').split(' ').pop();
        postDetails.find('.action-item').remove();

        overlayPost
            .addClass(postType + ' overlay__post--visible')
            .html(postContent + postDetails.html());
        overlay.addClass('overlay--visible');
        body.addClass('no-scroll');
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
    function postSingleHidden() {
        overlay.removeClass('overlay--visible');
        overlayPost.removeClass('overlay__post--visible');
        body.removeClass('no-scroll');

        $('._overlay').one('transitionend webkitTransitionEnd',
            function() {
                overlayPost.removeClass(postType);
                overlayPost.html(' ');
            }
        );
    }

    overlay.click(function() {
        postSingleHidden();
    }).children().click(function() {
        return false;
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // ESC key
            postSingleHidden(overlay);
        }
    });
});