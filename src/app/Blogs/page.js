import { BlogsCollection } from "@/config/appwrite"; 
import { rethink_sans800 } from "@/Fonts/Rethink";
import { ListCollectionData } from "@/Services/Appwrite";
import { Query } from "appwrite";
import React from "react";
// Ensure this path matches your file name exactly
import UniversalCard from "@/components/Utility/UniversalCard";

export const metadata = {
  title: "Blogs",
  description: "This is the blogs page.",
  keywords: "Blogs, Blog, Blog Details, gdgc, GDGC, GDG, Nagpur, gcoen, GCOEN",
  author: 'GDGC GCOEN',
}

const BlogPage = async () => {
  try {
    const res = await ListCollectionData(
      BlogsCollection,
      [
        Query.equal("isPublished", true),
        Query.orderDesc("$createdAt"),
      ]
    );
    
    // ERROR / EMPTY STATE
    if (!res || res?.documents?.length === 0) {
      return (
        <div className="container mx-auto px-5 py-12 pt-32">
          {/* Simple Left Aligned Header */}
          <div className="mb-12">
            <h1 className={`${rethink_sans800.className} text-4xl md:text-6xl font-black text-black mb-2`}>
              Latest Blogs
            </h1>
          </div>
          
          <div className="text-center text-gray-600 p-8 border-2 border-dashed border-black rounded-3xl bg-gray-50">
            No published blogs found.
          </div>
        </div>
      );
    }
    
    // SUCCESS STATE
    return (
      <div className="container mx-auto px-5 py-12 pt-32">
        
        {/* HEADER SECTION - Left Aligned & Simple */}
        <div className="mb-16">
          <h1 className={`${rethink_sans800.className} text-4xl md:text-6xl font-black text-black mb-4`}>
            Latest Blogs
          </h1>
          <p className="text-gray-600 font-medium text-lg max-w-2xl">
            Explore insights and stories from our community.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid gap-x-8 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {res?.documents.map((blog) => (
            <UniversalCard
              key={blog.$id}
              title={blog.Title}
              date={blog.$createdAt}
              imageSrc={blog.FeaturedURL}
              link={`/Blogs/${blog.$id}`}
              label="Read more"
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Blog page error:", error);
    
    return (
      <div className="container mx-auto px-5 py-12 pt-32">
        <h1 className={`${rethink_sans800.className} text-4xl md:text-6xl font-black text-black mb-8`}>
          Blogs
        </h1>
        <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6">
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