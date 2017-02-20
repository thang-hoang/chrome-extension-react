export default function postHelper($html) {
  return {
    getThreadId: function getThreadId() {
      const threadId = $html.find("#threadtools_menu a[href*='t=']:eq(0)")
                                .attr('href').match(/t=(\d+)/);
      if (threadId !== null && threadId.length > 0) {
        return threadId[1];
      }
      return -1;
    },
    getPage: function getPage() {
      let page = 0;
      const $pageNav = $html.find('.pagenav');
      if ($pageNav.length === 0) {
        page = 1;
      } else {
        page = $pageNav.eq(0).find('tbody td.alt2 strong').text();
      }
      return page;
    },
    getLatestPost: function getLatestPost() {
      const lastpost = $html.find("table[id^='post']:last");
      const id = lastpost.attr('id').match(/(\d+)/)[1];

      const postNum = $html.find("table[id^='post']").length - 1;
      return {
        postNum,
        id,
      };
    },
    getPostId: function getPostId(num) {
      const lastpost = $html.find("table[id^='post']").eq(num);
      const id = lastpost.attr('id').match(/(\d+)/)[1];
      return id;
    },
  };
}