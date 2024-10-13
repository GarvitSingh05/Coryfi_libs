const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const rootDir = path.resolve(__dirname);
const registerDir = path.join(rootDir, 'apps', 'register');
const packagesDir = path.join(rootDir, 'packages');
const deployDir = path.join(rootDir, 'apps', 'deploy-register');

// Create deploy directory
if (!fs.existsSync(deployDir)) {
  fs.mkdirSync(deployDir, { recursive: true });
}

// Copy register app files
execSync(`cp -R ${registerDir}/* ${deployDir}`);

// Copy necessary files from packages
const dbPackageDir = path.join(packagesDir, 'db');
if (fs.existsSync(dbPackageDir)) {
  const prismaDir = path.join(deployDir, 'prisma');
  if (!fs.existsSync(prismaDir)) {
    fs.mkdirSync(prismaDir);
  }
  execSync(`cp ${path.join(dbPackageDir, 'prisma', 'schema.prisma')} ${prismaDir}`);
}

// Create a new package.json for deployment
const packageJson = {
  name: "deploy-register",
  version: "1.0.0",
  scripts: {
    "build": "tsc",
    "start": "node dist/index.js",
    "postinstall": "prisma generate"
  },
  dependencies: {},
  devDependencies: {}
};

// Read the original package.json
const originalPackageJson = JSON.parse(fs.readFileSync(path.join(registerDir, 'package.json'), 'utf8'));

// Copy over the dependencies and devDependencies
packageJson.dependencies = { ...originalPackageJson.dependencies };
packageJson.devDependencies = { ...originalPackageJson.devDependencies };

// Add prisma client to dependencies
packageJson.dependencies['@prisma/client'] = 'latest';

// Write the new package.json
fs.writeFileSync(path.join(deployDir, 'package.json'), JSON.stringify(packageJson, null, 2));

console.log('Deployment package created successfully in apps/deploy-register!');