---
title: 如何线上预览自己GitHub上的网页项目
date: 2024-08-11

tags:
  - tutorial
---

## 如何线上预览自己 GitHub 上的网页项目

这里的网页项目可以是自己创建的 Github 网页项目，也可以是 fork 过来的网页项目。
我在提交了移动端适配样式的 PR 以后，想线上预览网页效果，但因为 Vercel 有限制访问，Eunice 推荐我可以用 GitHub Pages 来预览网页。

### 使用步骤

1. 登陆到 GitHub，点击页面右上角的 "New" 按钮来创建一个新的仓库，repository name 是 `username.github.io`，因为我已经有这个仓库，所以提醒我已存在
   ![](/docs/imgs/git/20240811-review-repository-1.png)
2. 添加一个 `index.html` 文件作为网站的主页。 `index.html` 作为默认文件名是一个常见的 Web 开发惯例。
   可以在本地创建并推送这个文件，或者直接在 GitHub 网站上通过 "Add file" > "Create new file" 创建。
3. 配置 GitHub Pages
   进入 "Settings" ，找到 "Pages" 选项，在"Build and deployment" 的 "Branch" 部分，设置 build 所在的分支。因为我这里只有一个基础的 html 文件，所以选"main"。
   ![](/docs/imgs/git/20240811-review-repository-2.png)
   如果有经过一些 deploy 的配置，那么 在 main 分支有 push 后 CI 会把 build 后的静态资源 push 到 gh-pages 分支，以 girlspowertech 项目举例， 它的`deploy.yml` 包含以下 branch 配置 ：
   [deploy.yml](https://github.com/girlspowertech/girlspowertech.github.io/blob/main/.github/workflows/deploy.yml)

```yml
- name: Deploy to GitHub Pages
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        branch: gh-pages
        folder: ./dist
```

因此，它的 build 所在的分支是 gh-pages
!![](/docs/imgs/git/20240811-review-repository-3.png) 4. 访问 GitHub Pages 主页 (即步骤 2 的`index.html`) ，输入 url `https://username.github.io/`
![](/docs/imgs/git/20240811-review-repository-4.png)
如果是另外的项目页面，格式为 `https://username.github.io/repository/`。例如，我 fork 了`girlspowertech.github.io`这个项目仓库，那么在主页 url 后加上`girlspowertech.github.io`即可访问它的主页了~
![](/docs/imgs/git/20240811-review-repository-5.png)

### 参考链接：

[GitHub Pages 快速入门](https://docs.github.com/zh/pages/quickstart)
