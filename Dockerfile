FROM nginx:1.27-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY index.html shop.html product.html checkout.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
