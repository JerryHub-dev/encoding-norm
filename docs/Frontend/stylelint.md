---
# 单独设置分组名称
group: Stylelint
# 同时设置分组名称和顺序，order 越小越靠前，默认为 0
order: 1
---

# Stylelint 说明

[https://stylelint.io/](https://stylelint.io/)

stylelint 是一个用于检查 CSS 代码是否符合指定规范的工具，类似于 ESLint 用于 JavaScript 的代码检查。它可以帮助团队确保在项目中使用一致的 CSS 编码风格，提高代码质量和可维护性。以下是关于 stylelint 的一些重要信息：

安装和配置： stylelint 可以通过 npm 安装，并且通常作为开发依赖项安装到项目中。配置文件通常以 .stylelintrc 或 stylelint.config.js 的形式存在，用于指定检查规则和配置项。

bash
Copy code
npm install stylelint --save-dev
规则和插件： stylelint 提供了大量的内置规则，用于检查 CSS 代码中的各种问题，如缩进、空格、命名规范等。你还可以使用插件来扩展 stylelint 的功能，以满足项目特定的需求。

命令行工具： stylelint 可以通过命令行运行，对整个项目或指定文件进行代码检查。例如：

bash
Copy code
npx stylelint "\*_/_.css"
编辑器集成： 许多常用的代码编辑器（如 VSCode、Sublime Text、Atom 等）都提供了 stylelint 的插件，这样在编写代码时就可以即时获得 linting 提示。

自定义规则： 除了使用内置规则外，你还可以根据项目的需求定义自己的规则。这有助于确保团队遵循项目特定的 CSS 编码规范。

自动修复： stylelint 提供了一些规则自动修复的功能，可以通过运行 stylelint --fix 命令来尝试修复一些简单的问题，使得代码符合规范。

社区支持： stylelint 拥有一个庞大的社区，因此你可以从社区中获取支持、学习最佳实践，并找到解决方案。

集成到构建工具： stylelint 可以轻松集成到项目的构建工具中，例如 webpack、gulp 等，以便在构建过程中执行代码检查。

总体而言，stylelint 是一个强大的工具，可以帮助开发团队保持一致的 CSS 代码风格，提高代码质量和可维护性。通过使用它，你可以在项目中轻松地实施和维护一致的 CSS 编码规范。

```ts
/**
 * rules migrate from @umijs/fabric/dist/stylelint.js
 * @see https://github.com/umijs/fabric/blob/master/src/stylelint.ts
 */
module.exports = {
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('../../../compiled/stylelint-config-prettier'),
    require.resolve('../../../compiled/stylelint-config-css-modules'),
  ],
  plugins: [
    require.resolve(
      '../../../compiled/stylelint-declaration-block-no-ignored-properties',
    ),
  ],
  rules: {
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'font-family-no-missing-generic-family-keyword': null, // iconfont
    'plugin/declaration-block-no-ignored-properties': true,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // webcomponent
    'selector-type-no-unknown': null,
    'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*(-[a-z0-9]+)*|[a-z][a-zA-Z0-9]+)$',
      {
        message: 'Expected class selector to be kebab-case or lowerCamelCase',
      },
    ],
    // to avoid conflicts with less option { math: always }
    // ref: https://github.com/less/less-docs/blob/c8b9d33b0b4ec5fe59a4bbda11db202545741228/content/usage/less-options.md#math
    'color-function-notation': null,
    // disallowed set single font-family as PingFangSC
    // in most cases, this font-family rule is copied unconsciously from Sketch
    // and it will cause an unexpected font rendering on the devices that have no PingFangSC font
    'declaration-property-value-disallowed-list': [
      {
        'font-family':
          '/^(\'|")?PingFangSC(-(Regular|Medium|Semibold|Bold))?\\1$/',
      },
      {
        message:
          'Unexpected value for property "font-family", which will cause some devices to render the wrong font, please delete this "font-family" css rule, see also: https://github.com/umijs/umi/pull/11001',
      },
    ],
  },
  customSyntax: require.resolve('../../../compiled/postcss-less'),
  ignoreFiles: ['node_modules'],
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      customSyntax: require.resolve('@stylelint/postcss-css-in-js'),
    },
  ],
};
```

## 忽略文件

> 在 .stylelintignore(推荐) / 也可以在 package.json 中配置

```
Public/Cesium/
```
