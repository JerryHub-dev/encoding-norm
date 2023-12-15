---
# 单独设置分组名称
group: editorconfig
# 同时设置分组名称和顺序，order 越小越靠前，默认为 0
order: 10
---

# editorconfig 介绍

> EditorConfig 有助于为跨不同编辑器和 IDE 处理同一项目的多个开发人员保持一致的编码风格。EditorConfig 项目由用于定义编码样式的文件格式和文本编辑器插件集合组成，这些插件使编辑器能够读取文件格式并遵循定义的样式。EditorConfig 文件易于读取，并且与版本控制系统配合得很好。

[https://editorconfig.org/](https://editorconfig.org/)

```
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
