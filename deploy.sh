#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'


# if you are deploying to 
git remote set-url origin "https://amgithub07@github.com/amgithub07/v-mars.git"
git config -l | grep url
git push -f https://github.com/amgithub07/v-mars.git main:de-pages

cd -