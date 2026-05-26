const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const nextDir = path.join(__dirname, '.next');

console.log('🗑️  Clearing .next cache...');
if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log('✓ Cache cleared!');
} else {
  console.log('✓ No cache to clear');
}

console.log('\n🚀 Starting dev server...\n');
execSync('npm run dev', { stdio: 'inherit' });
