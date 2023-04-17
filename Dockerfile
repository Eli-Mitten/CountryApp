# Usa una imagen base de Node.js
FROM node:18.12.1

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Compila la aplicación
RUN npm run build --prod

# Expone el puerto 4200
EXPOSE 4200

# Inicia la aplicación
CMD ["npm", "run", "start"]
