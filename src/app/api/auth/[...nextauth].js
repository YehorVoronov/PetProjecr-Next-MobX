import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.LinkedIn({
      clientId: "86b5p9805jj4y3",
      clientSecret:"cgfKN0fredBmpIzT",
    }),
    Providers.GitHub({
      clientId: "2ce31350a13b8fff86be",
      clientSecret: " 2e2d19755029c88c94aa53ed8f9b1ecbe593934b",
    }),
    // Add other providers as needed
  ],

  // Configure session options
  session: {
    // Options
  },

  // Customize callbacks and functions
  callbacks: {
    // Callbacks
  },
};

export default NextAuth(options);
