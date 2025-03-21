---
title: 选项
icon: gears
---

## 插件选项

### level

- 类型: `1 | 2 | 3`
- 默认值: `3`

目录项级别的最大深度。

::: note 仅限内置目录组件

:::

### index

- 类型: `boolean`
- 默认值: `false`

目录是否显示索引

::: note 仅限内置目录组件

:::

### exclude

- 类型: `(RegExp | string)[]`
- 默认值: `[]`

不会自动生成的页面路径。

### frontmatter

- 类型: `(path: string) => Record<string, any>`
- 必填: 否

控制页面 Frontmatter。

### component

- 类型: `string`
- 必填: 否

使用的目录组件名称。

### locales

- 类型: `AutoCatalogLocaleConfig`

  ```ts
  interface AutoCatalogLocaleData {
    /**
     * 目录标题
     */
    title: string;

    /**
     * 空目录提示
     */
    empty: string;
  }

  interface AutoCatalogLocaleConfig {
    [localePath: string]: AutoCatalogLocaleData;
  }
  ```

- 必填: 否

目录组件国际化配置。

::: details 内置支持语言

- **简体中文** (zh-CN)
- **繁体中文** (zh-TW)
- **英文(美国)** (en-US)
- **德语** (de-DE)
- **德语(澳大利亚)** (de-AT)
- **俄语** (ru-RU)
- **乌克兰语** (uk-UA)
- **越南语** (vi-VN)
- **葡萄牙语(巴西)** (pt-BR)
- **波兰语** (pl-PL)
- **法语** (fr-FR)
- **西班牙语** (es-ES)
- **斯洛伐克** (sk-SK)
- **日语** (ja-JP)
- **土耳其语** (tr-TR)
- **韩语** (ko-KR)
- **芬兰语** (fi-FI)
- **印尼语** (id-ID)
- **荷兰语** (nl-NL)
- **印尼语** (id-ID)
- **荷兰语** (nl-NL)

:::

## 客户端选项

### defineAutoCatalogGetter

```ts
interface AutoCatalogInfo {
  /** 目录标题 */
  title: string;
  /** 目录顺序 */
  order?: number;
  /** 目录内容 */
  content?: Component;
}

type AutoCatalogInfoGetter = (
  meta: Record<string, unknown>,
) => AutoCatalogInfo | null;

const defineAutoCatalogGetter: (options: AutoCatalogInfoGetter) => void;
```

自定义如何从 meta 中提取目录信息。

## AutoCatalog 组件属性

### base

- 类型: `string`
- 默认值: `当前路由的基础路径`

目录基础路径

### level

- 类型: `1 | 2 | 3`
- 默认值: `3`

Catalog 的最大层级

### index

- 类型: `boolean`
- 默认值: `false`

是否在目录列表中显示索引

### hideHeading

- 类型: `boolean`
- 默认值: `false`

是否隐藏 `目录` 标题
