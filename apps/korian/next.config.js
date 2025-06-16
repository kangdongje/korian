/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 빌드 중 ESLint 오류를 무시하고 계속 빌드합니다.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;