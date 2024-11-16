# Используем официальный образ Node.js как базовый
FROM node:18-alpine as builder

# Устанавливаем глобально ember-cli
RUN npm install -g ember-cli

# Создаем директорию приложения
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Собираем приложение для production
RUN ember build --environment=production

# Используем nginx для раздачи статики
FROM nginx:alpine

# Копируем собранное приложение из предыдущего этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]