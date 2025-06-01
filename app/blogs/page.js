"use client";
import blogsData from "../Data/blogs.json";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogsPage() {
  const router = useRouter();
  const articles = blogsData.articles;

  return (
    <div className="min-h-screen bg-[#e3f2d4] flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#7a9352] mb-8 text-center">
          Blog & Articles
        </h1>
        <div className="grid grid-cols-1 gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center items-center">
                <Image
                  src={article.headImage}
                  alt={article.title}
                  width={220}
                  height={160}
                  className="rounded-lg object-cover w-full h-40"
                />
              </div>
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h2 className="font-bold text-2xl mb-2 text-[#7a9352]">{article.title}</h2>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                </div>
                <button
                  className="bg-[#7a9352] cursor-pointer text-white font-bold py-2 px-6 rounded hover:bg-[#5a7a3a] transition self-start"
                  onClick={() => router.push(`/blog/${article.slug}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}