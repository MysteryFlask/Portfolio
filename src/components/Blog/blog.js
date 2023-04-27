import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/embeds/feed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div>
      <div id="substack-feed-embed"></div>

      <script>
        window.SubstackFeedWidget = {
          substackUrl: "mysteryflask.substack.com",
          posts: 3,
          colors: {
            primary: "#404040",
            secondary: "#808080",
            background: "#FFFFFF00",
          }
        };
      </script>

      <script src="https://substackapi.com/embeds/feed.js" async></script>
    </div>
  );
}

export default Blog;
