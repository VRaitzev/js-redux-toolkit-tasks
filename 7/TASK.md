# Механизм Entity Adapter

Доработайте приложение так, чтобы оно работало с _Entity Adapter_.

Чтобы выполнить задание, выполните следюущие шаги.

## src/slices

Шаг 1. Реализуйте необходимые слайсы:

- _usersSlice.js_ — слайс пользователей
- _postsSlice.js_ — слайс постов
- _commentsSlice.js_ — слайс комментариев

Шаг 2. Добавьте редьюсеры с помощью механизма _Entity Adapter_:

- Редьюсеры для добавления одного комментария и нескольких комментариев.
- Редьюсеры для добавления одного поста, нескольких постов, а также для обновления поста.
- Редьюсер для добавления нескольких пользователей.

Шаг 3. Добавьте необходимые селекторы.

## src/slices/index.js

Шаг 4. Сконфигурируйте хранилище, добавив слайсы.
