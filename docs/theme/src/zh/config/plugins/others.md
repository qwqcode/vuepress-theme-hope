---
title: 其他插件选项
icon: ellipsis
order: -1
category:
  - 配置
tag:
  - 插件选项
  - 主题配置
---

## autoCatalog <Badge text="默认启用" />

控制 `vuepress-plugin-auto-catalog`，提供目录的自动生成。

默认不需要任何额外配置。如果你不需要此功能可设置为 `false`。

插件选项请参阅 <ProjectLink name="auto-catalog" path="/zh/config.html">auto catalog 插件文档</ProjectLink>。

## components

控制 `vuepress-plugin-components`，为 Markdown 提供一组组件。

可以在 Markdown 中使用的可用组件为:

- `"ArtPlayer"`
- `"Badge"`
- `"BiliBili"`
- `"CodePen"`
- `"FontIcon"`
- `"PDF"`
- `"Replit"`
- `"Share"`
- `"StackBlitz"`
- `"VPBanner"`
- `"VPCard"`
- `"VidStack"`
- `"SiteInfo"`
- `"XiGua"`

你可以将 `plugin.components.components` 设置为需要的组件数组，默认情况下为 `["Badge"]`。

同时，你可以设置 `plugin.components.rootComponents` 来启用一些根组件，例如 Notice。

插件选项请参阅 <ProjectLink name="components" path="/zh/config.html">components 插件文档</ProjectLink>。

## copyCode <Badge text="默认启用" />

控制 `vuepress-plugin-copy-code2`，提供代码复制按钮。

默认不需要任何额外配置。如果你不需要此功能可设置为 `false`。

插件选项请参阅 <ProjectLink name="copy-code2" path="/zh/config.html">copy-code2 插件文档</ProjectLink>。

## externalLinkIcon <Badge text="enabled by default" />

控制是否启用 `@vuepress/external-link-icon`，仅接受布尔值。

## git <Badge text="默认仅限构建模式" />

控制 `@vuepress/plugin-git`，通过 Git 提交历史提供文件信息。

默认情况下，为了提高开发服务器性能仅在构建模式下启用。你可以手动设置一个布尔值控制插件状态，可以设置插件选项。

插件选项请参阅 [git 插件文档][git-config]。

## nprogress <Badge text="默认启用" />

控制 `@vuepress/plugin-nprogress`，通过 `nprogress` 提供切换页面时的进度条。

默认情况下，主题会启用此插件，你可以设置 `false` 禁用它。

## prismjs <Badge text="默认启用" />

控制 `@vuepress/plugin-prismjs`，通过 PrismJS 提供代码块高亮。

默认情况下，主题会启用此插件，你可以设置 `false` 禁用它并自行高亮代码块。

### prismjs.light

- 类型: `PrismjsTheme`
- 默认值: `"one-light"`
- 详情: [界面 → 代码主题](../../guide/interface/code-theme.md)

日间模式使用的 Prism.js 主题

### prismjs.dark

- 类型: `PrismjsTheme`
- 默认值: `"one-dark"`
- 详情: [界面 → 代码主题](../../guide/interface/code-theme.md)

夜间模式使用的 Prism.js 主题

## photoSwipe <Badge text="默认启用" />

控制 `vuepress-plugin-photo-swipe`，提供图片浏览功能。

默认不需要任何额外配置。如果你不需要此功能可设置为 `false`。

插件选项请参阅 <ProjectLink name="photo-swipe" path="/zh/config.html">photo-swipe 插件文档</ProjectLink>。

## readingTime <Badge text="默认启用" />

控制 `vuepress-plugin-reading-time2`，为页面进行字数统计并生成预计的阅读时间。

### readingTime.wordPerMinute

- 类型: `number`
- 默认值: `300`

每分钟的阅读字数。

插件选项请参阅 <ProjectLink name="reading-time2" path="/zh/config.html">reading-time2 插件文档</ProjectLink>。

## seo <Badge text="默认启用" />

控制 `vuepress-plugin-seo2`，提供搜索引擎增强。

默认不需要任何额外配置。如果你不需要此功能可设置为 `false`。

插件选项请参阅 <ProjectLink name="seo2" path="/zh/config.html">seo2 插件文档</ProjectLink>。

## sitemap <Badge text="默认启用" />

控制 `vuepress-plugin-sitemap2`，为网站自动生成 Sitemap。

默认不需要任何额外配置。如果你不需要此功能可设置为 `false`。

插件选项请参阅 <ProjectLink name="sitemap2" path="/zh/config.html">sitemap2 插件文档</ProjectLink>。

[git-config]: https://vuejs.press/zh/reference/plugin/git.html
