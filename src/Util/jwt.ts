import jwt from "jsonwebtoken";
const privateKey: string = process.env.RSA_PRIVATE_KEY || "private_key";

const jwtUtil = {
    getJWTtoken: async(payload: string) => {
        jwt.sign(
            payload,
            privateKey,
            {
                algorithm: 'HS256',
                expiresIn: '100d',
            }
        )
    },
    jwtTokenVerify: async(token: string) => {
        try {
            return jwt.verify(token, privateKey)
        } catch (e) {
            console.log(e);
        }
    },

}

export default jwtUtil;