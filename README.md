# Rarrot-Grapesjs-HTML

此代码用于构建一个基于GrapesJS的网页编辑器界面。GrapesJS是一个开源的网页编辑器，允许用户通过拖放界面来构建网页。这个文档包含了所有必要的设置和配置，以便使用GrapesJS及其预设来创建一个可视化的网页编辑器。

引入了GrapesJS的CSS和JavaScript文件，以及一个特定的GrapesJS预设`grapesjs-preset-webpage`的CSS和JavaScript文件。这个预设提供了一套额外的组件和配置，使得创建网页更加方便。此外，还定义了一些基本的样式，确保编辑器能够充满整个浏览器窗口。

在`<body>`部分，定义了一个`div`元素作为GrapesJS编辑器的容器。这个容器的ID为`gjs`，并通过内联样式设置了初始高度为0，以及隐藏了溢出的内容。

在`<script>`部分，其中包含了一系列的JavaScript代码，用于初始化GrapesJS编辑器并配置其行为。通过`grapesjs.init`方法创建了一个编辑器实例，配置了一些基本的选项，如显示偏移、禁用卸载时的通知、指定容器、设置高度等。此外，还配置了存储管理器和样式管理器，定义了一系列的样式板块，如“General”、“Flex”、“Dimension”等，每个板块都包含了一组相关的CSS属性。

然后，定义了一个配置对象[`config`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fd%3A%2F%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0%2Fgrapesjs%2FRarrot-grapesjs-html%2Findex.html%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A75%2C%22character%22%3A12%7D%5D "index.html")，其中包含了一系列的块（blocks），这些块是构建网页时可用的基本元素，如列、文本、链接、图片等。配置对象还包含了一些其他设置，如使用flexbox布局、类名前缀、是否添加基本样式等。通过调用[`addBaseBlock`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fd%3A%2F%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0%2Fgrapesjs%2FRarrot-grapesjs-html%2Findex.html%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A29%2C%22character%22%3A15%7D%5D "index.html")、[`addNavBar`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fd%3A%2F%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0%2Fgrapesjs%2FRarrot-grapesjs-html%2Findex.html%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A26%2C%22character%22%3A15%7D%5D "index.html")、[`addCaseCard`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fd%3A%2F%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0%2Fgrapesjs%2FRarrot-grapesjs-html%2Findex.html%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A27%2C%22character%22%3A15%7D%5D "index.html")和[`addColumn`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fd%3A%2F%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0%2Fgrapesjs%2FRarrot-grapesjs-html%2Findex.html%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A28%2C%22character%22%3A15%7D%5D "index.html")这些自定义函数，向编辑器添加了一些自定义组件。

最后，通过[`editor.BlockManager.add`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fd%3A%2F%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0%2Fgrapesjs%2FRarrot-grapesjs-html%2Findex.html%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A31%2C%22character%22%3A10%7D%5D "index.html")方法，向编辑器的块管理器中添加了一些自定义的块，如顶部导航栏和案例卡片。这些块配置了标签、分类、选择行为和内容类型，以及用于在编辑器的块面板中显示的媒体（如SVG图标）。
