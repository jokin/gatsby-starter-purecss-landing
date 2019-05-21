const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'pages',
    repo: 'https://github.com/jokin/gatsby-starter-purecss-landing',
  },
  () => {
    console.log('Deploy Complete!')
  }
)