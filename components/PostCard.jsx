import Head from 'next/head';

export default function PostCard({ post }) {
  return (
    <>
    <Head>
        <title>{post.title} | Your Blog Name</title>
        <meta name="description" content={post.excerpt || post.content.substring(0, 160)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || post.content.substring(0, 160)} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://letsreachsuccess.com/`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div
      key={post.id}
      className="bg-gradient-to-br from-primary to-accent rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
    >
      <div className="p-6 bg-cardBg bg-opacity-90">
        <h2 className="text-2xl font-bold mb-3 text-foreground">{post.title}</h2>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-3">
            <span className="text-background font-bold">
              {post.author?.split(" ")[1] || post.author[0]}
            </span>
          </div>
          <span className="text-foreground font-semibold">{post.author}</span>
        </div>
        <p className="text-foreground opacity-80 mb-4">{post.content}</p>
        <p className="text-sm text-foreground opacity-60">
          Posted on {new Date().toLocaleDateString('en-US')}
        </p>
      </div>
    </div>
    </>

  )
}