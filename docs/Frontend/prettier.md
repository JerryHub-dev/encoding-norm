---
# 单独设置分组名称
group: Prettier
# 同时设置分组名称和顺序，order 越小越靠前，默认为 0
order: 3
---

# Prettier 介绍

[https://prettier.io/](https://prettier.io/)

```
npm install --save-dev --save-exact prettier

yarn add --dev --exact prettier

pnpm add -D prettier
```

### 创建 prettier 所需文件

在根目录下创建

- .prettierrc.js 配置文件
- .prettierignore 忽略文件

### 格式化参考规则

具体可参考 [官方配置文档](https://link.juejin.cn/?target=https%3A%2F%2Fprettier.io%2Fdocs%2Fen%2Foptions.html)

对应的美化效果，供参考----- [配置调试地址](https://link.juejin.cn/?target=https%3A%2F%2Fprettier.io%2Fplayground%2F%23N4Igxg9gdgLgprEAuEAzArlMMCW0AEAEnADYkQDqEATiQCYAUwA5tXHLlM-gLz4A6IABalyggDT5W7eHV74A5IKq06ghZIDOOEghjzUAQxKa4k6AFkI6UwHkAbnGriAvgEp8wflHwCff3119AEd0CHgABWoIAAdNABE4AFsIeS9-X0MkAEZxb19fBQAjAFoAJgUkMryMxTBKgGZ8-BdvZqD8Q2pogHcIroQE5NSeAA8eAD5R5uacVAYAQmkOHC43YDYYdGofKHQyFwBuNtr8AHoz-AAVW3jbJHx46AV9Gzh8akMoOggk-FWPgg6E52hx8Hs-nwLIYYEIAHSocg0fAMaGwuGfb6-BgeABU%2BGyAFEANQAdjccJgEAAyjBqKtmDiMXAYiRDGA4Awzvx%2BHCeXRiWccMxJIJBG4Tr5NtsfAAeOg4ez4MBszSaAByhiScB4CmIZEoNHoCnwuBguh4wAABgBNaydNj4ew4bRU6jg9BJIpOfAAEmAHr%2BLitLnwlmsdkc1Et4beDicLgmkoKss0dOgzAmAeWnGYcM0JBwHIY%2BAADJJsvgKVSAKoxGJOADChlMOPwxKkbBWXHzheL2WrEAAMhAek2W5yPC5ZWc09EuEnaiwu7m4UDNBQcLCGBJxfgAPwCEBH-APVMxL74NMATwtwGAkHI1AeSn40mvChciYkR5nmgvUATC0zS%2BLKySLvwMDZiucByK0UCQTO4EgZ4KLaLosASqcB5HnyIAob4DyCAsgjwShM4KvYEzHAhUAuCA4ggLEuDQJoyCgF0vT9GwUBsSgxg9IY15sYxRSfGAADWHDUheYAMsgdLoGYIDJN6dDAnQQ5fMw6CGMwcAAGI0EkMK5sgICGOgVIMcIMBJCQFBCFucD-uycDUoMW6Klu17mWAao2aspjUDAUR6SZyBGCYykAFaaKMABC4lSTA1JanAQ6rHAkXGKYjFxaM1IMroACKYTwDl0WMRe1DBeZRSGN6JA2TE9KwJudCwsgAAc5YgK1ECmBQnwxOZrUuU4jg2aE4RwFEsR8RZmglFA7AaTZbChDgbBhcwEVIFFeUgKYSQ4Ap1BKYx2hcKV5XZQduXKTAjUdV1VSMXShg6Ayja-PtKmaAArDZbxXI1fGHcp9hKQAkt8ejUmA9IxDAACC3y0re92Q1%2BQA)

在.prettierrc.js中写入以下内容：

```
//此处的规则供参考，其中多半其实都是默认值，可以根据个人习惯改写

module.exports = {
  printWidth: 80, //单行长度

  tabWidth: 2, //缩进长度

  useTabs: false, //使用空格代替tab缩进

  semi: true, // 句末使用分号

  singleQuote: true, //使用单引号

  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号

  jsxSingleQuote: true, // jsx中使用单引号

  trailingComma: 'all', //多行时尽可能打印尾随逗号

  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }

  jsxBracketSameLine: true, //多属性html标签的‘>’折行放置

  arrowParens: 'always', //单参数箭头函数参数周围使用圆括号-eg: (x) => x

  requirePragma: false, //无需顶部注释即可格式化

  insertPragma: false, //在已被preitter格式化的文件顶部加上标注

  proseWrap: 'preserve', // 针对散文 什么都做

  htmlWhitespaceSensitivity: 'ignore', //对HTML全局空白不敏感

  vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进

  endOfLine: 'lf', //结束行形式

  embeddedLanguageFormatting: 'auto', //对引用代码进行格式化

};
```

#### 1 - umi4 规则参考

- [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports)

- 一个使用TypeScript 语言服务 API 的功能使 Prettier 组织您的导入（即排序、组合和删除未使用的）的插件。这与在 VS Code 中使用“组织导入”操作相同。

- [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson)

- 一个 [Prettier](https://github.com/prettier/prettier) 的 package.json 插件，用于使用 [sort-package-json](https://github.com/keithamus/sort-package-json) 对文件的键进行排序。

```
{
  "printWidth": 80,	// 单行长度

  "singleQuote": true,	// 使用单引号v

  "trailingComma": "all",	// 多行时尽可能打印尾随逗号

  "proseWrap": "never",	// 针对散文 将每一段散文拆成一行

  // 让 Prettier 格式化它自己的.prettierrc文件
  "overrides": [{ "files": ".prettierrc", "options": { "parser": "json" } }],

  // 插件
  "plugins": ["prettier-plugin-organize-imports", "prettier-plugin-packagejson"]

}
```

### 优先级

_格式化规则还可以写在如下文件中(按优先级由高至低排列)：_

1. 项目的package.json文件中
2. .prettierrc.json或 .prettierrc.yml文件中

```
//格式示例
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

_3._ _.prettierrc.js\_\_或_ _prettier.config.cjs\_\_文件中_

```
//格式示例
module.exports = {
  trailingComma: 'es5',
  tabWidth: 4,
  semi: false,
  singleQuote: true,
};
```

除此之外还可以写在很多类型中，详见 preitter 官网，此处不赘述。

### 指定忽略

#### 1 - 注释忽略

加上 prettier-ignore 的注释来忽略某些代码的格式化。

```
// prettier-ignorev
```

#### 2 - 配置忽略文件

在 .prettierignore 中写入以下内容：

```
# --------------- umi V4 参考 -----------
node_modules
.umi
.umi-production


# ---------------	CCS 参考	-----------
**/*.md
**/*.svg
**/*.ejs
**/*.html
ccs_mobile/node-modules
ccs_mobile/platforms
ccs_mobile/plugins
ccs_mobile/www
styles/
package.json
.umi
.umi-production
.umi-test
/dist
.dockerignore
.DS_Store
.eslintignore
*.png
*.toml
docker
.editorconfig
Dockerfile*
.gitignore
.prettierignore
LICENSE
.eslintcache
*.lock
yarn-error.log
.history
CNAME
/build
/public
```

### 命令行格式化文档

#### （1）格式化全部文档

```
npx prettier --write .
//或
yarn prettier --write .
```

#### （2）格式化指定文档

```
npx prettier --write src/components/Button.js
//或
yarn prettier --write src/components/Button.js
```

#### （3）检查文档是否已格式化

```
npx prettier --check .
//或
yarn prettier --check .
//检查指定文件同上
```

### 利用编辑器插件进行格式化

[prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

在编辑器中搜索相应的 Prettier 安装，即可运用编辑器快捷键进行格式化。

VS Code Prettier - Code formatter

### 集成在 ESlint 中

ESlint 与 Prettier 可能会冲突，故需做如下设置：

```
//1. 安装 eslint-config-prettier 插件
npm i -D eslint-config-prettier
//2. 在eslint的配置文件中写入以下内容
 extends: ['plugin:prettier/recommended'], // 避免与 prettier 冲突
```

### 集成在 git 生命周期中

搭配 lint-staged 与 husky 完成

可参考 Prettier 文档将其配置到 lint-staged 中：[https://prettier.io/docs/en/install.html#git-hooks](https://prettier.io/docs/en/install.html#git-hooks)

```
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write"
    ]
  },
```

## 忽略文件

> 在.prettierignore

```
node_modules
.umi
Public/Cesium/
```
