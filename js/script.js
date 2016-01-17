$(document).ready(function() {
    // ---------------------------------------
    // GLOBAL VARIABLES
    // ---------------------------------------
    var body = $('body'),
        postLink = $('._postlink'),
        overlay = $('._overlay'),
        overlayPost = $('._overlaypost'),
        postType,
        hamburger = $('._hamburger'),
        nav_sitewide = $('._nav-sitewide'),
        nav_social = $('._nav-social');

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
            .addClass(postType + ' visible')
            .html(postContent + postDetails.html());
        overlay.addClass('visible');
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
        overlay.removeClass('visible');
        overlayPost.removeClass('visible');
        body.removeClass('no-scroll');

        $('._overlay').one('transitionend webkitTransitionEnd',
            function() {
                overlayPost.removeClass(postType);
                overlayPost.html(' ');
            }
        );
    }

    overlay.click(function() {
        if(body.hasClass('no-scroll')) {
            postSingleHidden();
        } else {
            menu(hamburger);
        }
    }).children().click(function() {
        return false;
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // ESC key
            postSingleHidden(overlay);
        }
    });

    // ---------------------------------------
    // MOBILE MENU (HAMBURGER)
    // ---------------------------------------
    function menu(menu) {
        menu.toggleClass('open');
        overlay.toggleClass('visible');
        nav_sitewide.toggleClass('visible');
        nav_social.toggleClass('visible');
    }

    hamburger.click(function() {
        menu($(this));
        return false;
    });
});