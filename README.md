# DavidRHorton.com

## Description and Overview
Thank you for visiting the repository of my personal website!  This personal website is currently hosted using GitHub Pages and is available as a public repository.  Since this is a "static" website with no server side content, using GitHub Pages to host my site made the most sense.   It allowed me to have a repository as well as a simple way to host and manage the website.  This also allowed me to setup a build and deploy process using GitHub Actions.  I also wanted to share my development, build and deployment processes here as well.  Please feel free to drop me an e-mail (or pull request) for any feedback, improvements or any other thoughts as well.  I would love to hear from you!

## Tools, Packages and Languages Used
### Visual Studio Code
Visual Studio Code is used for the development and initial local build and testing of the website.  I'm also using the built-in Source Control functionality using Git.  I also take advantage of the built-in Bash and PowerShell terminals to run git and build commands.
### Gulp
To package up the site, its assets and dependencies, I use Gulp.  Gulp allows me to bundle the JavaScript files, CSS files and other assets into smaller, condensed files for publishing to GitHub Pages.  As I further develop and improve this site, I will continue to leverage Gulp's functionalities.
### Node Package Manager (NPM)
Various parts of the site rely on certain JavaScript modules.  Node Package Manager provides a great mechanism to import and easily manage certain units of functionality in a modularlized way.
### HTML/CSS/JavaScript
This site is built using HTML, CSS and JavaScript as a "static" site with no server-side content.  This makes the site easy to build, deploy and maintain.
### Git
The websites source code is maintained in a Git repository which allows for backup and a versioned history of changes.
### GitHub
GitHub is the online repository used to host the Git repository for this website.
### GitHub Pages
This is the chosen platform to host the website.  There is no need to manage and maintain a hosting server and there is no cost associated with static website hosting with a public repository.

## Site Development Lifecycle
1. Make changes to site locally in VS Code
2. Run Gulp command to build production version of site to test locally
3. Run git commit to commit changes to local Git repository.
4. Run git push to upload changes to remote repository
5. Custom GitHub action triggers after upload to run Gulp command against master branch to build and then deploy compiled and optimized site to the github pages branch (gh-pages).

## Links
- [Repo](https://github.com/daveops1/daveops-site "DavidRHorton.com Repo")
- [Live](https://davidrhorton.com "Live Site")
- [Bugs](https://github.com/daveops1/daveops-site/issues "Issues Page")

## Author

**David Horton**

- [GitHub Profile](https://github.com/daveops1 "David Horton")
- [Email](mailto:david@davidrhorton.com?subject=Hello)
- [Website](https://davidrhorton.com "Welcome")

## 🤝 Support

Contributions, issues, and feedback welcomed!