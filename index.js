const path = require('path')

module.exports = {
  title: '安装NPM(NodeJS)',
  dependences: [],
  chapters: [
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
          validate:  [            
            {
              cmd: 'node -v',
              errorMsg: 'node 没有正确安装', 
            },
            {
              cmd: 'npm -v',
              errorMsg: 'npm 没有正确安装', 
            }
          ],
        },
        {
          title:'NodeJS安装成功',
          desc: '',
          page: path.join(__dirname,'resources','success.html'), 
          validate: false,
        },
      ],
    },{
      title: '安装yarn',
      steps: [
        {
          title:'打开yarn官网',
          desc: '<a href="https://yarnpkg.com/zh-Hans/">yarn官网</a>',
          page: path.join(__dirname,'resources','openurl-yarn.html'), 
          validate: false,
        },
        {
          title:'下载yarn安装程序',
          desc: '<a href="https://yarnpkg.com/zh-Hans/docs/install">NodeJS官网</a>',
          page: path.join(__dirname,'resources','download-yarn.html'), 
          validate: false,
        },
        {
          title:'安装yarn',
          desc: '',
          page: path.join(__dirname,'resources','install-yarn.html'), 
          validate:  [            
            {
              cmd: 'yarn -v',
              errorMsg: 'yarn 没有正确安装', 
            },
          ],
        },
        {
          title:'yarn安装完成',
          desc: '',
          page: path.join(__dirname,'resources','success-yarn.html'), 
          validate: false,
        },
      ],
    },
  ]
}
