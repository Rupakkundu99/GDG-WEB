import { AppwriteDatabase, GDGCDatabase, BlogsCollection } from "@/config/appwrite";

export default async function TestAppwrite() {
  try {
    console.log("Testing Appwrite connection...");
    console.log("Database ID:", GDGCDatabase);
    console.log("Collection ID:", BlogsCollection);
    
    // Simple list without queries
    const response = await AppwriteDatabase.listDocuments(
      GDGCDatabase,
      BlogsCollection
    );
    
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Appwrite Test</h1>
        <p className="text-green-600">✅ Connection successful!</p>
        <p>Found {response.documents.length} documents</p>
        <pre className="bg-gray-100 p-4 mt-4 overflow-auto">
          {JSON.stringify(response, null, 2)}
        </pre>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Appwrite Test</h1>
        <p className="text-red-600">❌ Connection failed!</p>
        <pre className="bg-red-50 p-4 mt-4 overflow-auto text-xs">
          {JSON.stringify({
            message: error.message,
            code: error.code,
            type: error.type,
            response: error.response
          }, null, 2)}
        </pre>
      </div>
    );
  }
}