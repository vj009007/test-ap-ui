import { CognitoUserPool, CognitoUserAttribute } from "amazon-cognito-identity-js";
import CryptoJS from "crypto-js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Configure Cognito User Pool
    const poolData = {
      UserPoolId: process.env.COGNITO_POOL_ID,
      ClientId: process.env.COGNITO_CLIENT_ID,
    };

    const userPool = new CognitoUserPool(poolData);

    // Set user attributes
    const attributeList = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
    ];

    // Generate SECRET_HASH
    const secretHash = CryptoJS.HmacSHA256(
      email + process.env.COGNITO_CLIENT_ID,
      process.env.COGNITO_CLIENT_SECRET
    ).toString(CryptoJS.enc.Hex);

    // Sign up user
    userPool.signUp(
      email,
      password,
      attributeList,
      [{ Name: "SECRET_HASH", Value: secretHash }],
      (err, result) => {
        if (err) {
console.log(err.message)
          res.status(400).json({ error: err.message });
        } else {
          res.status(200).json({
            message: `User ${result.user.getUsername()} has been registered. Please check your email for a verification code.`,
          });
        }
      }
    );
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

