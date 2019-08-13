This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

学习mobx 状态管理的demo

## create-react-app 配置装饰器
1. 安装依赖 npm install --save-dev babel-plugin-transform-decorators-legacy
2. 然后在package.json 中添加 
```
"babel": {
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ]
  ],
  "presets": [
    "react-app"
  ]
},

```

## mobx 参考文章
（https://www.jianshu.com/p/bea658a8b721）