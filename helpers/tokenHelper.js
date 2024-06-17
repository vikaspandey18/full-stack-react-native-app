import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";

export const createtoken = (payload) => {
  const token = jwt.sign(payload, process.env.JSON_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

export const verifytoken = (token) => {
  const decode = jwt.verify(token, process.env.JSON_SECRET);
  return decode;
};

export const requiredSingIn = expressjwt({
  secret: process.env.JSON_SECRET,
  algorithms: ["HS256"],
});
