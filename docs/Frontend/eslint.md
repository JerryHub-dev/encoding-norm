---
# 单独设置分组名称
group: ESLint
# 同时设置分组名称和顺序，order 越小越靠前，默认为 0
order: 0
---

# ESLint 介绍

> ESLint 是一个用于在 JavaScript 代码中识别和修复问题的工具。它是一个静态代码分析工具，能够检测代码中的潜在问题，并提供规范化的代码风格。ESLint 的主要目标是帮助开发者编写一致、清晰且易于维护的代码。

以下是 ESLint 的一些主要特性和功能：

1. **静态分析：** ESLint 通过解析代码的抽象语法树（AST）来分析代码，而不是通过运行代码。这使得它能够检测到在运行时难以察觉的问题。

2. **可配置性：** ESLint 允许开发者根据项目的需要进行配置。你可以使用预定义的规则集，也可以创建自定义规则。配置文件通常是一个 `.eslintrc` 文件，其中包含了配置选项和规则。

3. **插件系统：** ESLint 允许用户编写和使用插件，以扩展其功能。插件可以包含额外的规则、预处理器等，从而使 ESLint 更适应不同类型的项目需求。

4. **规则：** ESLint 提供了一系列规则，用于检测代码中的问题，包括潜在的错误、代码风格问题和一些建议的最佳实践。

5. **自动修复：** ESLint 支持自动修复某些类型的问题。通过运行 `eslint --fix` 命令，它会尝试自动修复一些简单的问题，使得代码符合规则。

6. **广泛的社区支持：** ESLint 是一个受欢迎的工具，拥有庞大的社区支持。这意味着你可以从社区中获取插件、规则集和支持，以满足特定项目的需求。

使用 ESLint 有助于团队在整个代码库中保持一致的代码风格，提高代码质量，并在开发过程中捕获潜在的错误。通过将 ESLint 集成到开发工作流中，开发者可以在编码的早期阶段发现并纠正问题，从而降低维护成本。

[https://eslint.org/](https://eslint.org/)

```js
// eslint built-in rules
  // 不需要返回就用 forEach
  'array-callback-return': 2,
  // eqeq 可能导致潜在的类型转换问题
  eqeqeq: 2,
  'for-direction': 2,
  // 不加 hasOwnProperty 判断会多出原型链的内容
  'guard-for-in': 2,
  'no-async-promise-executor': 2,
  'no-case-declarations': 2,
  'no-debugger': 2,
  'no-delete-var': 2,
  'no-dupe-else-if': 2,
  'no-duplicate-case': 2,
  // eval（）可能导致潜在的安全问题
  'no-eval': 2,
  'no-ex-assign': 2,
  'no-global-assign': 2,
  'no-invalid-regexp': 2,
  // 没必要改 native 变量
  'no-native-reassign': 2,
  // 修改对象时，会影响原对象；但是有些场景就是有目的
  'no-param-reassign': 2,
  // return 值无意义，可能会理解为 resolve
  'no-promise-executor-return': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-shadow-restricted-names': 2,
  'no-sparse-arrays': 2,
  'no-unsafe-finally': 2,
  'no-unused-labels': 2,
  'no-useless-catch': 2,
  'no-useless-escape': 2,
  'no-var': 2,
  'no-with': 2,
  'require-yield': 2,
  'use-isnan': 2,
```


