# Minimal Tumblr Theme

## Local
- Ask/Submit Page
- Responsive
- Cross Browser/Device testing
- Pass over to @maximsiebert for review
- Resolve any issues from ^

## Dynamic
- @maximsiebert to come up with name/logo/favicon
- Add Tumblr base variables and blocks
- post--photoset
- post--panorama
- post--audio
- post--video
- Post Single
	- AJAX content from post URL
	- Update URL and browser history
	- Note details
	- Like/Reblog links
	- All post types listed above (ensure styling)
- post--link__url http conditional check (if this is even necessary?)
- Post every logical variation of existing posts (note: answer post with replies)
- Ridiculously long posts
- QA ^ and implement post fixes
- Infinite Scroll (pagination should appear in URL bar)
- Pass over to @maximsiebert for review
- Resolve any issues from ^
- Add custom variables for colour and font customization (just examples)

## Questions
1. How are we linking to CSS file from dynamic theme for production? Once launched?
2. At what point should this repo be made private?
3. Inline JS? Or external linking

## Design Notes
- ~~Post Single Page (should be shown on top of homepage - as an overlay – Overlay background fades in - Post fades in while sliding up subtly & fades out while sliding down)~~
- ~~There is no wrapper, just padding on the left / right of the browser, (thinking 60px, might change) - Since posts are going to be display inline-block, we’ll just add a max width to the posts, and let them flow across the page as they fit~~
- ~~Posts should be vertically aligned to the middle of each other, and centred in the browser like in PSD~~
- ~~Navigation is fixed, with no background~~
- ~~Text posts have padding of 20px all around~~
- ~~All posts should have margin of 20px all around, might make bigger once i can see in browser~~
- ~~Copyright / Social links should appear in the 60px padding around the page, have a look at this as an example – http://annywang.se/, ignore the current footer in the PSD, social links are also not portrayed in PSD~~
