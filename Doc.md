# 增加歸檔頁

以yaml格式為例。

## 年份歸檔

根目錄下創建：content\archives.md

```yaml
---
title: 年份歸檔
hidden: true
layout: archives
permalink: "/archives/"
---
```

## 分類歸檔

根目錄下創建：content\archives-category.md

```yaml
---
title: 分類歸檔
hidden: true
layout: archives-category
permalink: "/archives-category/"
---
```

## 標籤歸檔

根目錄下創建：content\archives\tag.md

```yaml
---
title: 標籤歸檔
hidden: true
layout: archives-tag
permalink: "/archives-tag/"
---
```

----------------------------------

# 安裝站內搜索

EarlGrey支援第二版的[InstantSearch.js](https://community.algolia.com/instantsearch.js/)，安裝流程如下：

## 增加搜索頁

根目錄下創建：content\search.md

```yaml
---
title: 搜索結果
hidden: true
layout: search
permalink: "/search/"
---
```

## 註冊Algolia帳號

[Algolia](https://www.algolia.com/)  
註冊完成後至側欄API Keys，取得Application ID、Search-Only API key、Index name(=專案索引名稱)，回到config.toml中添加以下選項：

```toml
[outputs]
home = ["html", "algolia"]

[outputFormats.algolia]
baseName = "algolia"
isPlainText = true
mediaType = "application/json"
notAlternative = true

[params.algolia]
appId = "用戶的application ID"
searchOnlyKey = "用戶的Search-Only API key"
indexName = "indices內的index名稱"
```

## 生成索引與設置

運行`hugo`，生成`list.algolia.json`，上傳至Indices。至Indicies → Configuration進行以下設置：

### Searchable attributes

選擇title、url、tag、category、content。

### Language

選擇Chinese與English。

### Hightlighting

- Attributes to highlight選擇category、content、tag、title。
- Hightlight prefix tag輸入`<span class="hit-highlight"`
- Hightlight postfix tag輸入`</span>`

### Snippeting

Attributes to snippet選擇content，數值代表搜尋結果摘錄的內文字數上限，可按照自己需要設置，主題示例網站的設置是80。
