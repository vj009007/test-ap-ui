import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// import { AmazonCognitoIdentityProvider } from "@next-auth/amazon-cognito-identity-provider";

export default NextAuth({
  // providers: [
  //   Providers.Credentials({
  //     id: "cognito",
  //     name: "Cognito",
  //     credentials: {
  //       email: { label: "Email", type: "email" },
  //       password: { label: "Password", type: "password" },
  //     },
  //     authorize: async (credentials) => {
  //       const provider = new AmazonCognitoIdentityProvider({
  //         clientId: process.env.COGNITO_CLIENT_ID,
  //         clientSecret: process.env.COGNITO_CLIENT_SECRET,
  //         poolId: process.env.COGNITO_POOL_ID,
  //       });

  //       try {
  //         const user = await provider.getUser(credentials);
  //         return Promise.resolve(user);
  //       } catch (error) {
  //         console.error(error);
  //         return Promise.resolve(null);
  //       }
  //     },
  //   }),
  // ],
});

