var tumblrLink = $('a.post_info_link');

tumblrLink.on('click', function(event) {
  var href = $(event.target).attr('href');
  window.open(href);
  return false;
});
