import BlogsCard from "@/components/Blogs/BlogsCard";
import { BlogsCollection } from "@/config/appwrite"; // ← Remove GDGCDatabase
import { rethink_sans800 } from "@/Fonts/Rethink";
import { ListCollectionData } from "@/Services/Appwrite";
import { Query } from "appwrite";
import React from "react";

export const metadata = {
  title: "Blogs",
  description: "This is the blogs page.",
  keywords: "Blogs, Blog, Blog Details, gdgc, GDGC, GDG, Nagpur, gcoen, GCOEN",
  author: 'GDGC GCOEN',
}

const BlogPage = async () => {
  try {
    const res = await ListCollectionData(
      BlogsCollection,  // ← Only 2 parameters now!
      [
        Query.equal("isPublished", true),
        Query.orderDesc("$createdAt"),
      ]
    );
    
    if (!res || res?.documents?.length === 0) {
      return (
        <div className="container mx-auto px-5 py-12">
          <p className={`${rethink_sans800.className} text-3xl md:text-4xl font-semibold mb-8`}>
            Blogs
          </p>
          <div className="text-center text-gray-600 p-8 border rounded-lg">
            No published blogs found.
          </div>
        </div>
      );
    }
    
    return (
      <div className="container mx-auto px-5 py-12">
        <div>
          <p className={`${rethink_sans800.className} text-3xl md:text-4xl font-semibold mb-8`}>
            Blogs
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-4 grid-cols-1">
          {res?.documents.map((blogs) => (
            <BlogsCard
              key={blogs.$id}
              id={blogs.$id}
              Title={blogs?.Title}
              PublishedDate={blogs.$createdAt}
              Description={blogs?.Description}
              Category={blogs?.Category}
              Keywords={blogs?.Keywords}
              FeaturedURL={blogs?.FeaturedURL}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Blog page error:", error);
    
    return (
      <div className="container mx-auto px-5 py-12">
        <p className={`${rethink_sans800.className} text-3xl md:text-4xl font-semibold mb-8`}>
          Blogs
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="font-bold text-red-800 mb-2">Error loading blogs</p>
          <p className="text-red-600 text-sm">{error?.message || "Unknown error"}</p>
        </div>
      </div>
    );
  }
};

export default BlogPage;
export const dynamic = "force-dynamic";
export const revalidate = 0;