const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const siteConfig = {
  name: `@sykim`,
  title: `NextJS MDX Deck`,
  date: new Date().toLocaleDateString('ko', options),
  author: {
    url: `https://twitter.com/whoisryosuke`,
  },
}

export default siteConfig
