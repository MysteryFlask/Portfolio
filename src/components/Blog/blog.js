import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import Particle from "../Particle";

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
      substackUrl: "pandorasykes.substack.com",
      posts: 12,
      colors: {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
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
