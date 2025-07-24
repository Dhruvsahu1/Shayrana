import config from '../config/config'
import { Client , ID,Databases,Storage, Query } from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(config.appWriteDatabaseId, config.appWriteCollectionId,slug,{
                title: title,
                slug: slug,
                content: content,
                featuredImage: featuredImage,
                status: status,
                userId: userId
            })
        }catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(config.appWriteDatabaseId, config.appWriteCollectionId,slug,{
                title: title,
                content: content,
                featuredImage: featuredImage,
                status: status,
                
            })
        }catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(config.appWriteDatabaseId, config.appWriteCollectionId,slug)

            return true;

        }catch(e){
            console.error('Error deleting post:', e);
            throw e;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(config.appWriteDatabaseId, config.appWriteCollectionId,slug)

        }catch(e){
            console.error('Error fetching post:', e);
            throw e;
        }
    }
    
    async getPosts(queries = [Query.equal('status','equal')]){
        try{
            return await this.databases.listDocuments(config.appWriteDatabaseId, config.appWriteCollectionId, queries);
        }catch(e){
            console.error('Error fetching posts:', e);
            throw e;
        }
    }

    async uploadFile(file){
        try{
            const fileId = ID.unique();
            const response = await this.bucket.createFile(config.appWriteBucketId, fileId, file);
            return response;
        }catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(config.appWriteBucketId, fileId);
            return true;

        }catch(e){
            console.error('Error deleting file:', e);
            throw e;
        }
    }

    async getFilePreview(fileId){
        try{
            return await this.bucket.getFilePreview(config.appWriteBucketId, fileId);

        }catch(e){
            console.error('Error fetching file:', e);
            throw e;
        }
    }
}

const service = new Service();
export default service;