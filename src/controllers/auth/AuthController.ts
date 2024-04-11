import {db} from "../../Data/database";
import { Request, Response } from "express";

interface LoginReqQuery {
    id: string,
    pw: string,
}

const AuthController = {
    login: async(req: Request & { query: LoginReqQuery }, res: Response) => {
        try {
            const { id, pw } = req.query;
            if (!id || !pw) return; //refator custom exception
            
            const test = await db.query(`SELECT username,password,salt,uuid FROM everytime.users WHERE username = @id and password = @pw;`, {
                id: id,
                pw: pw
            })
            res.send(test);
        } catch (e) {
            console.log(e);
        }
    },
    signUp: async() => {

    }
}

export default AuthController

