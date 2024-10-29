"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const BlogPostPreviewMain: FunctionComponent<{
  post: GetPostsResult["posts"][0];
}> = ({ post }) => {
  return (
    <div className="break-words">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-[16/9] relative">
          <Image
            alt={post.title}
            className="object-cover"
            src={post.image || "/images/placeholder.webp"}
            fill
          />
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
        <h2 className="font-sans font-semibold tracking-tighter text-white text-xl md:text-xl">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
      </div>
    </div>
  );
};

export const BlogPostsPreviewMain: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 lg:gap-10 md:grid-cols-2 md:my-5 my-5",
        className
      )}
    >
      {posts.map((post) => (
        <BlogPostPreviewMain key={post.id} post={post} />
      ))}
    </div>
  );
};
