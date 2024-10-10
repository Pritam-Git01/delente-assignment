import ErrorComponent from '../../404';
import posts from '../../../data/posts.json';
import PostCard from '../../../components/PostCard';

export default function Page({ post }) {
  if (!post) {
    return <ErrorComponent />;
  }

  return (
    <div className="grid gap-4 p-16 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <PostCard post={post} />
    </div>
  );
}

export async function getStaticPaths() {
  // Ensure each post has an id and it's a string
  const paths = posts
    .filter(post => post.id != null)
    .map((post) => ({
      params: { postid: post.id.toString() },
    }));
  
  // console.log('Generated paths:', paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.id.toString() === params.postid);
  
  // if (!post) {
  //   console.log('Post not found for id:', params.postid);
  // } else {
  //   console.log('Found post:', post);
  // }

  return { props: { post: post || null } };
}