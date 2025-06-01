import conf from '../conf.js'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try
        {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                })
        } catch (error)
        {
            throw error;
        }
    }

    // we can update post based on document id which means slug
    async updatePost(slug, { title, content, featuredImage, status }) {
        try
        {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                })
        } catch (error)
        {
            throw error;
        }
    }

    async deletePost(slug) {
        try
        {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error)
        {
            throw error;
            return false;
        }
    }

    // retrive single document or post
    async getPost(slug) {
        try
        {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error)
        {
            throw error;
            return false;
        }
    }

    // retrive all document which status is active
    async getPosts(queries = [Query.equal("status", "active")]) {
        try
        {
            return await this.databases.listDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error)
        {
            throw error;
        }
    }

    //  file upload service

    async uploadFile(file) {
        try
        {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error)
        {
            throw error;
            return false;
        }
    }

    async deleteFile(fileId) {
        try
        {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error)
        {
            throw error;
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service