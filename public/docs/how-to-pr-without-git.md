---
title: 如何不使用 git 提交改动？
date: 2024-08-01

tags:
  - tutorial
---

## 如何不使用 git 提交改动？

本教程用于帮助团队内无法使用 git 的成员上传自己的改动，常见于修改文档等场景，

下面将以两个例子展开说明如何不使用 git 命令提交自己的改动并提交 PR 到上游。

### 1. Prerequisites

1. 你有一台可访问 Github 的 PC
   - 国内访问较慢
2. 你有自己的 Github 账号
   - 在此注册 https://github.com/signup
3. 你已经在浏览器登陆了 Github

### 2. 提交 Profile

例子 1 是成员手动上传自己的 profile ，用于展示在团队首页。

#### 2.1 fork 自己的仓库

上游仓库 [girlspowertech.github.io](https://github.com/girlspowertech/girlspowertech.github.io) 是不允许直接修改的，我们需要 fork 一份到自己的仓库。

你可以点击右上角的 `Fork` 按钮，将它 fork 到自己的账号下。

![](/docs/imgs/1.png)

#### 2.2 去要修改的文件 / 目录

去自己 fork 的仓库，链接格式为 `<你的 Github ID/girlspowertech.github.io>` ，点击 `Go to file` ，输入查找你要修改的文件，点击进入。此处以在 `public/avatars` 上传头像为例：

![](/docs/imgs/2.png)

#### 2.3 去上传文件页面

现在已经到达你要上传头像的文件夹，点击 `Add file` -> `Upload files`

![](/docs/imgs/3.png)

#### 2.4 上传文件

为你上传的图片提前改好名字，点击或拖拽上传。

在 `Commit Changes` 中写好这次改动的信息，点击下方的按钮提交

![](/docs/imgs/9.png)

#### 2.5 更新自己的信息

至此完成了头像的上传，接下来修改存储成员信息的 JSON 文件。

回到第 `2.2` 步，找到 `workers.json` 文件点击进入。

![](/docs/imgs/4.png)

#### 2.6 进入编辑模式

点击右上角的铅笔按钮，进入编辑模式。

![](/docs/imgs/8.png)

#### 2.7 新增自己的信息

滑到文件最下方，填入符合[`JSON 格式`](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/JSON)的自己的信息（可以直接复制上一个成员的，但要注意补充一个半角逗号），点击 `Commit Changes` 提交。

![](/docs/imgs/7.png)

#### 2.8 回到仓库主页

回到自己 fork 的仓库主页，点击 `Contribute` -> `Open pull request`，提交 PR。

![](/docs/imgs/6.png)

#### 2.9 提交 PR

进入 `Comparing changes` 页面，在 `Add a title`中填写 PR 的标题，如果只有一个 commit 的话一般会自动填写标题，在有较多改动时，请补上简短的描述。

请注意页面右上角的分支一定是你刚刚修改的分支 （默认是 `main` ）

🍻 最后点击下方按钮提交 PR！一般 vercel 会马上在 comments 中提供一个可预览的链接帮助 preview

![](/docs/imgs/5.png)

### 3. 提交一篇新的文章

例子 2 是成员提交一篇新的文章到团队博客，基本方法于上传自己的头像类似，需要在 `public/docs/` 目录下新建一个 .md 文件。如果有图片，请上传在 `public/docs/imgs/` 目录下，然后在 md 文件中以 `/docs/imgs/:photo_name` 开头引用。

#### 3.1 了解 Markdown

请了解 [markdown](https://markdownlivepreview.com/) 格式然后使用该格式写文章

#### 3.2 写文章

1. 建议阅读[中西文混排](https://design.teambition.com/doc/mixed)
2. 图片勿过大，如大于 600kb 可先在 [tinypng](https://tinypng.com/) 进行压缩

### 4. Tips

1. 请时时关注你的仓库是否与上游仓库同步，如果未同步，点击下方 `Sync fork` 按钮拉取上游进行更新，如遇冲突将无法合并
  ![](/docs/imgs/sync.png)
