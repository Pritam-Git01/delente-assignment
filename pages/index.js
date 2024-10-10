// import BlogPosts from "..//components/BlogPosts";
import localFont from "next/font/local";
import BlogPosts from "@/components/BlogPosts";
import posts from '../data/posts.json';




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});



const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
      <BlogPosts posts={posts}/>
    </div>
  );
}
