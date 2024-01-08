---
# 单独设置分组名称
group: Husky
# 同时设置分组名称和顺序，order 越小越靠前，默认为 0
order: 0
---

## 前言

[Husky](https://github.com/typicode/husky)

Husky 是一个流行的开源工具，用于简化和自动化 Git 钩子（hooks）的使用。Git 钩子是在特定重要动作发生时触发的脚本，如提交（commit）、推送（push）和接收（receive）等。Husky 使得在现代 Web 开发工作流程中配置和管理这些钩子变得更加容易。

### 特点和用途

1. **自动化 Git 钩子**：Husky 可以自动化诸如 pre-commit、pre-push 等 Git 钩子的执行，以确保在提交或推送代码前运行特定的脚本或任务，例如代码格式化、单元测试、代码质量检查等。

2. **简化开发流程**：通过在项目中配置 Husky，你可以保证所有团队成员在执行 git 操作时都会遵循相同的规则，从而提高代码的一致性和质量。

3. **易于使用**：Husky 通过简单的配置文件（通常是 package.json 或专门的 .huskyrc 文件）来管理钩子，使得开发者能够轻松地添加和维护项目的钩子脚本。

4. **集成其他工具**：Husky 常与其他开发工具一起使用，如 lint-staged（用于在提交前执行 Lint 检查的特定文件）、Prettier（代码格式化工具）、ESLint（JavaScript 代码质量工具）等。

### 如何使用

使用 Husky 通常涉及以下几个步骤：

1. **安装 Husky**：通过 npm 或 yarn 等包管理工具将 Husky 添加到项目的依赖中。

   ```sh
   npm install husky --save-dev
   # or
   yarn add husky --dev
   ```

2. **配置钩子**：在 `package.json` 中添加 Husky 的配置，指定不同钩子要执行的命令。

   ```json
   {
     "husky": {
       "hooks": {
         "pre-commit": "npm test",
         "pre-push": "npm run lint",
         "..."
       }
     }
   }
   ```

3. **执行钩子**：一旦配置了钩子，当你执行 git 命令（如 `git commit` 或 `git push`）时，Husky 会自动执行相应的脚本。

### 注意事项

- **版本更新**：Husky 的不同版本之间在配置方式上可能有所区别。在写作本文时（2023年4月），Husky 已经有了多个主要版本，包括 v4 和 v5。每个版本的配置方法可能有所不同，因此在使用时应该注意查阅对应版本的文档。

- **权限问题**：在某些系统上，Husky 可能需要正确的文件权限才能正常工作。如果遇到权限问题，可以查阅 Husky 的文档和相关的 GitHub 讨论来解决。

- **项目使用**：Husky 配置应该与项目代码一起提交到版本控制系统中，以确保所有协作者都使用相同的钩子设置。

Husky 是现代前端开发工作流中非常受欢迎的工具，它通过在关键的 git 操作中插入自定义的自动化步骤，帮助开发团队维持代码质量和一致性。
