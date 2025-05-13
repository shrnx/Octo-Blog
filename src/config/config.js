const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(VITE_APPWRITE_BUCKET_ID)
}

export default conf

// Now we can just use this instead of directly importing env's
// And this is also a production standard when using typescript