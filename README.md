
code
Markdown
# 个人网站维护指南 (Blogs & Notes & Files)

本项目是一个基于 [Astro](https://astro.build) 构建的静态网站，部署于 Cloudflare Pages。
域名：[blogs.ssfrg.com](https://blogs.ssfrg.com)

## 🚀 核心功能

*   **Blog**: 长篇技术文章或生活随笔。
*   **Notes**: 碎片化思考或简短记录。
*   **Files**: 网盘资源汇总与分享。

---

## 📝 内容更新指南 (全流程网页操作)

所有的内容更新只需要在 GitHub 网页上新建或修改文件，Cloudflare 会自动完成部署（约 1-2 分钟生效）。

### 1. 发布新博客 (Blog)

1.  进入目录：`src/content/blog/`
2.  点击 **Add file** -> **Create new file**。
3.  文件名建议使用英文或数字，以 `.md` 结尾。例如：`learning-astro.md`。
4.  **复制并修改**以下模板作为文件开头：

```markdown
---
title: "文章标题"
description: "这里写文章的简短描述，会显示在列表页"
pubDate: 2025-01-01
heroImage: "/blog-placeholder-1.jpg" # 可选，如果没有图片可以删掉这一行
---

这里开始写正文内容...

## 二级标题
支持 **加粗**，[链接](https://google.com) 等 Markdown 语法。
2. 发布新笔记 (Note)
进入目录：src/content/notes/
点击 Add file -> Create new file。
文件名示例：quick-thought-01.md。
复制并修改以下模板：
code
Markdown
---
title: "笔记标题"
pubDate: 2025-01-01
---

这里直接写笔记内容。
笔记通常比较短，不需要描述字段和封面图。
3. 更新文件汇总 (Files)
进入文件：src/pages/files.astro
点击 ✏️ (编辑) 按钮。
找到代码顶部的 fileLinks 数组，按照格式添加或修改数据：
code
JavaScript
const fileLinks = [
  // ... 原有数据 ...
  { 
    name: "新资源名称", 
    url: "https://pan.baidu.com/s/xxxx", 
    desc: "提取码: 8888" 
  },
];
点击 Commit changes 保存即可。
📂 项目结构说明
src/content/blog/: 存放博客 Markdown 文件。
src/content/notes/: 存放笔记 Markdown 文件。
src/pages/files.astro: 文件汇总页面的代码和数据。
src/layouts/: 网站的整体布局（包含动态背景配置）。
astro.config.mjs: 网站的配置文件。
⚠️ 注意事项
图片上传：如果你需要在文章中插入图片，目前最简单的方法是使用外部图床链接（如 Imgur, SM.MS），直接用 ![](图片链接) 语法插入。
构建失败：如果网站没有更新，请去 Cloudflare Pages 后台查看 Logs。通常是因为 Markdown 顶部的 --- 格式写错了（比如日期格式不对）。
code
Code
