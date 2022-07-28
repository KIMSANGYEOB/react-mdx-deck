const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const siteConfig = {
  name: `@sykim`,
  title: `Wooritech intra`,
  date: new Date().toLocaleDateString('ko', options),
  author: {
    url: `https://github.com/KIMSANGYEOB`,
  },
}

export default siteConfig
