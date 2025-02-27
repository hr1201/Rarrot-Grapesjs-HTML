# Rarrot-Grapesjs-HTML

## 📝 特性

- 拖放界面，便于创建网页
- 预定义的组件和块，快速设计
- 可自定义的样式和行为
- 与`grapesjs-preset-webpage`集成，提供额外的组件

## 🖥️ GrapesJS配置

`<body>`部分，定义了一个`div`元素作为GrapesJS编辑器的容器。这个容器的ID为`gjs`，并通过内联样式设置了初始高度为0，以及隐藏了溢出的内容。

`<script>`部分，其中包含了一系列的JavaScript代码，用于初始化GrapesJS编辑器并配置其行为。通过`grapesjs.init`方法创建了一个编辑器实例，配置了一些基本的选项，如显示偏移、禁用卸载时的通知、指定容器、设置高度等。此外，还配置了存储管理器和样式管理器，定义了一系列的样式板块，如“General”、“Flex”、“Dimension”等，每个板块都包含了一组相关的CSS属性。

## 🛠 自定义组件
`config`是一个配置对象，其中包含了一系列的块（blocks），这些块是构建网页时可用的基本元素，如列、文本、链接、图片等。配置对象还包含了一些其他设置，如使用flexbox布局、类名前缀、是否添加基本样式等。将配置对象传给`addBaseBlock`，向编辑器添加这部分基础块。

通过`editor.BlockManager.add`方法，向编辑器的块管理器中添加了一些自定义的块，如顶部导航栏和案例卡片。这些块配置了标签、分类、选择行为和内容类型，以及用于在编辑器的块面板中显示的媒体（如SVG图标）。

## 📖 文档

[Rarrot的博客](https://www.rarrot.ren/articles/%E5%8D%9A%E5%AE%A2/%E7%94%A8GrapesJS%E6%90%AD%E5%BB%BA%E4%BD%8E%E4%BB%A3%E7%A0%81%E5%B9%B3%E5%8F%B0(%E4%B8%80).html)