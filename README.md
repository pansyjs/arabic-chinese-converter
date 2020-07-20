<h1 align="center">@pansy/arabic-chinese-converter</h1>

<h2 align="center">
Conversion between Chinese and Arabic numerals.
</h2>

[![NPM version](https://img.shields.io/npm/v/@pansy/arabic-chinese-converter.svg?style=flat)](https://npmjs.org/package/@pansy/arabic-chinese-converter)
[![NPM downloads](https://img.shields.io/npm/dm/@pansy/arabic-chinese-converter.svg?style=flat)](https://npmjs.org/package/@pansy/arabic-chinese-converter)

## 📦 安装

- npm 安装

```bash
npm install @pansy/arabic-chinese-converter --dev --save
```

- yarn 安装

```bash
yarn add @pansy/arabic-chinese-converter --dev
```

## 🔨 使用

```
import arabicChinese from '@pansy/arabic-chinese-converter';

const arabicChinese = new ArabicChinese();

console.log(arabicChinese.encode(1)); // 一
console.log(arabicChinese.decode('一)); // 1
```
