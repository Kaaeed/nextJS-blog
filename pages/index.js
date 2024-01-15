import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  const { featuredPosts } = props;

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts: featuredPosts,
    },
  };
}

export default HomePage;
