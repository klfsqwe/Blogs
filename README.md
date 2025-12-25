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
