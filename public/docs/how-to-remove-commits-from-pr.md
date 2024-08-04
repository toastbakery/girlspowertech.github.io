---
title: 如何移除 PR 中多余的 commit ？
date: 2024-08-04

tags:
  - tutorial
---
在提交暗模式的 PR 时遇到这样一个问题，提交的 PR 包括了上一次的 commit，如何移除这些 commit？

1. 如果你是在其他分支开发的，先切换到该分支，如果是在 `main` 上进行开发，则不需要这一步操作。

   `git checkout your-branch`
  
3. 在 Github 的 Pull Request 中查看当前 PR 共包括几个 commit，替换下面命令中的 `n` 并执行（Github 中如果执行了 Sync fork，也会产生新的 commit 并且显示在 PR 中，但 VS Code 中不会有这些 commit，所以可能这样 `rebase` 的结果可能比你提交的 PR 开始的 commit 还要早一些）：

	  `git rebase -i HEAD~n`

3. 命令行中将会出现类似于以下的文本：
    ``` git
    pick 888a17a add pnpm setting in windows (#15)
    pick 472jkda add pnpm setting in windows
    pick 472bd9c add switch butoon
    pick 0369726 add dark theme change
    ……
    ```
    其中通过 Gihub PR 合并的 `commit` 会出现后面带井号和 PR 编号的标识，比如说我想移除第二个 commit，那么就将前面的 `pick` 修改为 `drop`。

4. 用以下命令强制提交修改：

    `git push origin HEAD:your-branch --force`

5. 这时候 Github 上的 PR 中的 commits 就会自动变成你移除后的样子了。
