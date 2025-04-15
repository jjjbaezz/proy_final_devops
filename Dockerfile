# Usa una imagen de nginx
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
