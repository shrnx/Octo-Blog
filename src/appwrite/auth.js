import conf from "../conf/conf.js"

import { Client, Account, ID } from "appwrite";

// Now we are code improving
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
        // This is why we didn't set earlier, after writing .setEndpoint and project we did to save resources
    }

    // Since we dont want dependency like Appwrite, we will modify the code further
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // Call another method that if registered successfuly then login also
                return this.login((email, password));
            } else {
                return userAccount
            }
        } catch(error) {
            throw error;
        }
    }
    // So now if someday we decided to change to firebase or supabase we can simply just change the constructor and thoda sa 
    // async createAccount

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
            // Now just go to createAccount method and redirect to login
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error", error);
        }

        return null;
        // Let's say we got an error despite tryNcatch then return null
    }

    async logout() {
        try {
            await this.account.deleteSession('current');
        } catch(error) {
            console.log("Appwrite Service :: logout :: error", error);
        }
    }

    async logoutAll() {
        try {
            await this.account.deleteSessions();
        } catch(error) {
            console.log("Appwrite Service :: logout :: error", error);
        }
    }
}

const AuthService = new AuthService();
// What we want is when this object is called, those client and account should run(constructor)
// Now this object we can use AuthService.login/.logout etc.....

export default AuthService;
// Here we made a class, and to use this we need to make an object through this class, so that we can use all the methods
// So why not make an object here then export it


// Now this whole is a future proof code
// And I can also make this code snippet save somewhere.