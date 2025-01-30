# Название проекта

> **Краткое описание**: Это веб-приложение на React и TypeScript, структурированное по методологии Feature-Sliced Design (FSD). Оно использует Husky и lint-staged для pre-commit хуков, а также Prettier для форматирования кода. Версии проекта отслеживаются по принципам SemVer.

[![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/username/repo?label=version&sort=semver)](https://github.com/username/repo/tags)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Оглавление

1. [Обзор](#обзор)
2. [Архитектура (FSD)](#архитектура-fsd)
3. [Установка](#установка)
4. [Скрипты](#скрипты)
5. [Версионирование (SemVer)](#версионирование-semver)
6. [Pre-commit Hooks и форматирование](#pre-commit-hooks-и-форматирование)
    - [Husky](#husky)
    - [lint-staged](#lint-staged)
    - [Prettier](#prettier)
7. [Процесс разработки](#процесс-разработки)
8. [Контрибуция](#контрибуция)
9. [Лицензия](#лицензия)

---

## Обзор

Это React + TypeScript приложение, использующее **Feature-Sliced Design** для структурирования кода и обеспечивающее:

- **Husky** + **lint-staged** для проверки и авто-форматирования перед коммитами.
- **Prettier** для единообразного стиля кода.
- **Semantic Versioning** для контроля релизов через Git-теги.

---

## Архитектура (FSD)

[Feature-Sliced Design](https://feature-sliced.design/) помогает разбивать логику приложения на понятные слои и модули. Пример структуры:

- **app**: Глобальные настройки, роутинг.
- **entities**: Модели, бизнес-логика отдельных сущностей.
- **features**: Функциональные блоки (авторизация, поиск).
- **pages**: Конечные экраны (соединяют несколько features, widgets).
- **widgets**: Крупные UI-сборки (header, sidebar).
- **shared**: Переиспользуемые компоненты (UI-библиотеки, утилиты).

---

## Версионирование (SemVer)

Мы придерживаемся [Semantic Versioning](https://semver.org/). Это означает, что версия проекта формируется по схеме:

- **MAJOR** – Наличие ломающих изменений (breaking changes), которые несовместимы с предыдущими версиями.
- **MINOR** – Новые, обратимо совместимые фичи и улучшения.
- **PATCH** – Багфиксы и мелкие исправления, не влияющие на совместимость.

### Работа с версиями и Git-тегами

1. **Обновите** версию в `package.json` вручную **или** выполните:
    ```bash
    npm version patch

    ```
2. **Создаст** `Git-тег (vX.Y.Z) ` и позволит легче отслеживать релизы:
    ```bash
    git push origin main --tags
    ```

---

## Установка

1. **Клонировать репозиторий**:

    ```bash
    git clone https://github.com/username/repo.git

    ```

2. **Установить зависимости (через npm или yarn):**:
    ```bash
    yarn install
    ```
