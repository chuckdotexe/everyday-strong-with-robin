import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryBasePath = '/everyday-strong-with-robin';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? repositoryBasePath : '',
  assetPrefix: isGitHubPages ? repositoryBasePath : '',
};

export default nextConfig;
