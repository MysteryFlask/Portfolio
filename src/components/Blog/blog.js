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
      substackUrl: "mysteryflask.substack.com",
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
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who am I?
          </h1>
          <p style={{ marginBottom: "40px" }}>
              This is my Substack blog written almost entirely by ChatGPT and AI. All I do is think of the topics...
          </p>
          <div id="substack-feed-embed"></div>
        </div>
      </Container>
    </Container>
  );
}

export default Blog;
