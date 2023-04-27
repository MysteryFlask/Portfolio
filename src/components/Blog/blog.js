import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";

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

  useEffect(() => {
    window.SubstackFeedWidget = {
      substackUrl: "mysteryflask.substack.com",
      posts: 3,
      colors: {
        primary: "#404040",
        secondary: "#808080",
        background: "#FFFFFF00",
      }
    };
  }, []);

  return (
    <Container fluid className="blog-main">
      <Particle />
      <Container>
        <div>
          <div id="substack-feed-embed"></div>
        </div>
      </Container>
    </Container>
  );
}

export default Blog;
