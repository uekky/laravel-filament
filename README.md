# Laravel Filament 学習用リポジトリ

このリポジトリは[Reffect「Filamentを使えばLaravelアプリケーションの管理画面が簡単に作成可能」](https://reffect.co.jp/laravel/laravel-filament)の記事を参考に、Laravel Filamentの基本的な使い方を学習するために作成したものです。

## 概要

Laravel Filamentは、Laravelで管理画面(Admin Panel)を簡単に作成できるパッケージです。このリポジトリでは以下の基本的な機能の実装方法を学習しています：

- 基本的なCRUD操作
- リレーションシップの扱い方
- フォームのカスタマイズ
- ファイルアップロード
- 日本語化対応

## 環境構築

### 必要要件
- PHP 8.1以上
- Composer
- Node.js & npm

### インストール手順

```bash 
# 1. リポジトリのクローン
git clone [このリポジトリのURL]
cd [リポジトリ名]


# 2. 依存パッケージのインストール
composer install
npm install

# 3. 環境変数の設定
cp .env.example .env
php artisan key:generate

# 4. データベースのマイグレーション
php artisan migrate

# 5. サーバーの起動
php artisan serve

# 6. Filamentの管理者ユーザー作成
php artisan filament:user

# 7. ストレージのシンボリックリンク作成
php artisan storage:link

# 別ターミナルでViteを起動
npm run dev
```

## 使用方法

1. ブラウザで http://localhost:8000/admin にアクセス
2. 作成した管理者アカウントでログイン
3. ダッシュボードから各機能を試用可能

## 学習内容

このリポジトリでは以下の内容を実装しています：

- カテゴリーとフレームワークのCRUD操作
- リレーションシップを活用したフォーム
- Rich Editorの実装
- ファイルアップロード機能
- 日本語化対応

## 参考

- [Filament公式ドキュメント](https://filamentphp.com/)
- [Reffect記事](https://reffect.co.jp/laravel/laravel-filament)

## 謝辞

Reffectの皆様には、いつも大変参考になる技術記事を提供していただき、心より感謝申し上げます。

## ライセンス

[MIT license](https://opensource.org/licenses/MIT)
