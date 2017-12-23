export default function sendPageAnalytics(history, ga) {
  history.listen(location => {
    ga('set', 'page', location.pathname + location.search);
    ga('send', 'pageview');
  });
}
