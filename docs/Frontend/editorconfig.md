---
# 单独设置分组名称
group: editorconfig
# 同时设置分组名称和顺序，order 越小越靠前，默认为 0
order: 10
---

# editorconfig 介绍

> EditorConfig 有助于为跨不同编辑器和 IDE 处理同一项目的多个开发人员保持一致的编码风格。EditorConfig 项目由用于定义编码样式的文件格式和文本编辑器插件集合组成，这些插件使编辑器能够读取文件格式并遵循定义的样式。EditorConfig 文件易于读取，并且与版本控制系统配合得很好。

[https://editorconfig.org/](https://editorconfig.org/)

### 主要特性：

1. **跨编辑器和IDE工作**：EditorConfig 插件已经被许多流行的编辑器和IDE支持，如 Visual Studio Code, Sublime Text, Atom, IntelliJ IDEA, Vim, Emacs 等。

2. **简单的配置文件**：项目根目录中的 `.editorconfig` 文件用来定义编码风格。这个文件是可读性很高的，并且容易被理解和修改。

3. **支持多种属性**：EditorConfig 支持设置多种属性，包括但不限于缩进风格（空格或制表符），缩进大小，行尾字符，文件编码，以及是否在文件末尾保留一个空行。

### `.editorconfig` 文件示例：

```ini
# EditorConfig is awesome: https://EditorConfig.org

# 根目录标识，表明这是最顶层的 EditorConfig 配置文件，
# EditorConfig 插件会停止在当前路径继续寻找配置文件
root = true

# 匹配所有文件
[*]
charset = utf-8            # 文件编码
indent_style = space       # 缩进风格（space 或 tab）
indent_size = 4            # 缩进大小（通常是 2 或 4）
end_of_line = lf           # 行尾字符（lf、crlf 或 cr）
trim_trailing_whitespace = true # 删除行尾的空白字符
insert_final_newline = true    # 确保文件以一个空行结束

# 匹配特定文件类型
[*.md]
max_line_length = off
trim_trailing_whitespace = false

# 匹配特定文件
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```

当你在支持 EditorConfig 的编辑器中打开一个文件时，编辑器会查找当前文件所在目录及其所有父目录中的 `.editorconfig` 文件直到找到一个配置文件或到达根目录为止。然后，编辑器会应用找到的配置，确保文件的编码风格与项目中定义的一致。

如果你正在一个多人参与的项目中工作，或者你自己在不同的编辑器和IDE之间切换，EditorConfig 可以帮助你减少风格不一致的问题，使得代码看起来像是同一个人写的。

```bash
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```
