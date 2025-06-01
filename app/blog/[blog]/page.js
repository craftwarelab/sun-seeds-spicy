"use client";
import { useParams, useRouter } from "next/navigation";
import blogsData from "../../Data/blogs.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function SingleBlogPage() {
  const params = useParams();
  const router = useRouter();
  const blogSlug = params.blog;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (blogSlug) {
      const found = blogsData.articles.find(
        (a) => a.slug === blogSlug
      );
      setArticle(found);
    }
  }, [blogSlug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e3f2d4]">
        <div className="text-gray-600 text-xl">Blog post not found.</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title} | Sun Seeds Blog</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.headImage} />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={`Sun Seeds, blog, ${article.title}, spices, superfoods, wellness, Sri Lanka`} />
      </Head>
      <div className="min-h-screen bg-[#e3f2d4] flex flex-col items-center py-12 px-4">
        <div className="max-w-3xl w-full bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <Image
            src={article.headImage}
            alt={article.title}
            width={600}
            height={350}
            className="rounded-lg object-cover mb-6 w-full h-64"
            priority
          />
          <h1 className="text-3xl font-bold text-[#7a9352] mb-4 text-center">{article.title}</h1>
          <p className="text-gray-600 text-lg mb-8 text-center">{article.excerpt}</p>
          <article className="prose prose-lg text-gray-800 w-full mb-8" style={{whiteSpace: "pre-line"}}>
            {article.content}
          </article>
          <button
            className="mt-4 text-[#7a9352] underline cursor-pointer"
            onClick={() => router.back()}
          >
            &larr; Back to Blogs
          </button>
        </div>
      </div>
    </>
  );
}