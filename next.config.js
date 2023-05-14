/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports={
  ...nextConfig,
  env:{
    CLIENT_ID:process.env.GITHUB_ID,
GITHUB_SECRET:process.env.GITHUB_SECRET,
  }
}
// clientId: "0803f555e0a8af22f6c4",
// clientSecret: "889c445b21251309478bb01fdd4667ba5ddef7d2",
