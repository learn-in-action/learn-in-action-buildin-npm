import path from 'path'

export const dependences = []
export const chapters = [
  {
    title: '安装NPM(NodeJS)',
    steps: [
      {
        title:'打开NodeJS官网',
        desc: '<a href="https://nodejs.org/en/">NodeJS官网</a>',
        page: path.join(__dirname,'resources','openurl.html'), 
        validate: false,
      },
      {
        title:'下载NodeJS',
        desc: '点击下载并等待下载结束',
        page: path.join(__dirname,'resources','download.html'), 
        validate: false,
      },
      {
        title:'安装NodeJS',
        desc: '<a href="https://nodejs.org/en/">NodeJS官网</a>',
        page: path.join(__dirname,'resources','install.html'), 
        validate: 'npm -v',
      },
    ],
  },
]
