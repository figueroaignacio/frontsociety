"use client";

// Components
import { PostCard } from "@/components/posts/post-card";

// Content
import { posts } from "#site/content";

export function LatestPosts() {
  const displayPosts = posts;

  return (
    <section className="py-10 flex flex-col gap-7">
      <h2 className="font-bold text-3xl fade">Latest Articles</h2>
      <div>
        {displayPosts?.length > 0 ? (
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {displayPosts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard
                    title={post.title}
                    date={post.date}
                    description={post.description ?? ""}
                    slug={post.slug}
                    tags={post.tags}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nothing to see yet</p>
        )}{" "}
      </div>
    </section>
  );
}
