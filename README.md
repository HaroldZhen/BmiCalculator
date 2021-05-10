# 簡單專案

## 操作方式

刪除git：`sudo rm -rf .git`

基本安裝：`npm run install`

輸出建立檔案：`npm run build`

發佈到GitHub Page：`npm run deploy`


### package.json

```
{
  "name": "ABCGO",//應用程式名稱
  ...
  "homepage": "https://xxxxx.github.io/ABCGO", //發佈的網址
  "dependencies": {
    "gh-pages": "^3.1.0",
    "recursive-copy": "^2.0.11"
  },
  "scripts": {
    "build": "node build.js",
    "deploy": "gh-pages -d build"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:xxxxxx/yyyyyyy.git" //GitHub地址
  }
}
```

### VSCODE Live Sass的設定
```
  "liveSassCompile.settings.formats": [
      {
          "format": "expanded",
          "extensionName": ".css",
          "savePath": "/src/style/css"
      }
  ],
```