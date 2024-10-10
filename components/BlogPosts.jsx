import Link from "next/link";

  export default function BlogPosts({ posts }) {
    return (
        <div className="">

        <div className="p-4 sm:p-6 md:p-8 lg:p-16">
        <div>
            <h1 className="text-3xl font-bold text-foreground text-center">Blog Posts</h1>
        </div>

<div>
<PostLink posts={posts}/>
</div>

        </div>
      </div>
    )
  };

  export async function getStaticProps() {
    return {
      props: {
        posts,
      },
    };
  }



  export function PostLink({ posts }) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-cardBg border-l-4 border-primary rounded-r-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent"
          >
            <div className="p-5">
              <Link 
                href={`/posts/${post.id}`} 
                className="text-xl text-primary hover:text-accent underline underline-offset-2 font-semibold mb-3"
              >
                {post.title}
              </Link>
              <p className="text-foreground opacity-70 my-4 text-sm">
                Note: Click on the title to view the full post details.
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }
