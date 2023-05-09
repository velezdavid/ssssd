# Imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código al directorio de trabajo
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación
CMD [ "npm", "start" ]



# # Etapa 1: Instalar dependencias de desarrollo y construir la aplicación
# FROM node:16-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --quiet --only=development
# COPY . .
# RUN npm run build

# # Etapa 2: Ejecutar pruebas
# FROM build AS test
# WORKDIR /app
# COPY . .
# RUN npm run test

# # Etapa 3: Crear imagen de producción
# FROM node:16-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --quiet --only=production
# COPY --from=build /app/dist ./dist
# EXPOSE 3000
# CMD ["node", "./dist/index.js"]