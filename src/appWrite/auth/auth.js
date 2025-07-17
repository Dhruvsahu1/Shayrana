import config from './../../config/config';
import { Client,Account,ID } from 'appwrite';

export class AuthService{
    client = new Client();
    account;
    
    constructor(){
        this.client
             .setEndpoint(config.appWriteUrl)
             .setProject(config.appWriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return userAccount;
            }
            else{
                return userAccount;
            }
        }catch(e){
            throw e;
        }
    }
    async login({email,password}){
        try{
            const session = await this.account.createEmailSession(email, password);
            return session;
        }catch(e){
            throw e;
        }
    }
    async getCurrUSer(){
        try{
            const user = await this.account.get();
            return user;
        }catch(e){
            throw e;
        }
        return null;
    }
    async logout(){
        try{
            const session = await this.account.deleteSessions();
            return session;
        }catch(e){
            throw e;
        }
    }
}

const authService = new AuthService();
export default authService();