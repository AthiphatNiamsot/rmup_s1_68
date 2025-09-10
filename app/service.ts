import * as crypto from "crypto";

const secretKey = process.env.SECRET_KEY ?? "default_secret_key";

const algorithm = "aes-256-ecb";


const makeKey = crypto.createHash("sha256")
  .update(secretKey)
  .digest()
  .subarray(0, 32);
const enableData = Buffer .from("1234567890");

export const encode = (data: string) => {
  const cipher = crypto.createCipheriv("aes-128-ecb", makeKey, null);
  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
};

export const decode = (data: string) => {
  const decipher = crypto.createDecipheriv("aes-128-ecb", makeKey, null);
  let decrypted = decipher.update(data, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};