# 🐳 Docker Setup - PerfilApp

## Archivos Docker Creados

- **Dockerfile**: Build multi-etapa optimizado para producción
- **nginx.conf**: Configuración de Nginx con compresión y cache
- **.dockerignore**: Excluye archivos innecesarios del build
- **docker-compose.yml**: Orquestación simplificada
- **.env.example**: Template para variables de entorno

## 🚀 Comandos de Docker

### Opción 1: Docker Build Manual

```bash
# 1. Crear archivo .env con tu API key
cp .env.example .env
# Edita .env y agrega tu GEMINI_API_KEY

# 2. Construir la imagen
docker build -t perfilapp:latest --build-arg GEMINI_API_KEY=tu_api_key_aqui .

# 3. Ejecutar el contenedor
docker run -d -p 3004:80 --name perfilapp perfilapp:latest

# 4. Verificar que está corriendo
docker ps

# 5. Ver logs
docker logs perfilapp

# 6. Detener el contenedor
docker stop perfilapp

# 7. Eliminar el contenedor
docker rm perfilapp
```

### Opción 2: Docker Compose (Recomendado)

```bash
# 1. Crear archivo .env
cp .env.example .env
# Edita .env y agrega tu GEMINI_API_KEY

# 2. Levantar el servicio
docker-compose up -d

# 3. Ver logs
docker-compose logs -f

# 4. Detener el servicio
docker-compose down

# 5. Reconstruir y levantar
docker-compose up -d --build
```

## 📦 Acceso a la Aplicación

Una vez levantado el contenedor, accede a:
- **URL**: http://localhost:3000

## 🔧 Características del Dockerfile

### Build Multi-Etapa
- **Etapa 1 (builder)**: Instala dependencias y construye la app con Vite
- **Etapa 2 (producción)**: Usa Nginx para servir archivos estáticos

### Optimizaciones
- ✅ Imagen final ligera basada en Alpine Linux
- ✅ Compresión Gzip habilitada
- ✅ Cache de assets estáticos (1 año)
- ✅ Soporte para SPA routing
- ✅ Headers de seguridad configurados
- ✅ Variables de entorno en tiempo de build

## 🛠️ Comandos Útiles

```bash
# Ver imágenes
docker images

# Eliminar imagen
docker rmi perfilapp:latest

# Acceder al contenedor (debug)
docker exec -it perfilapp sh

# Ver uso de recursos
docker stats perfilapp

# Limpiar todo (cuidado!)
docker system prune -a
```

## 📝 Notas Importantes

1. **Variables de Entorno**: La API key de Gemini se configura durante el build, no en runtime
2. **Puerto**: El contenedor expone el puerto 80 internamente, mapeado a 3000 externamente
3. **Volúmenes**: No se usan volúmenes ya que es una app estática
4. **Producción**: Para despliegue en producción, considera usar secrets managers para la API key

## 🔐 Seguridad

- No commitees el archivo `.env` al repositorio
- Usa `.env.example` como template
- En producción, usa Docker secrets o variables de entorno del host
- Las API keys se embeben en el build (considera usar variables de runtime si es necesario)

## 📊 Tamaño de la Imagen

```bash
# Ver tamaño de la imagen
docker images perfilapp:latest

# Esperado: ~50-100MB (gracias a la imagen alpine de nginx)
```

## 🚢 Despliegue en Cloud

### Docker Hub
```bash
docker tag perfilapp:latest tuusuario/perfilapp:latest
docker push tuusuario/perfilapp:latest
```

### AWS ECR
```bash
aws ecr get-login-password --region region | docker login --username AWS --password-stdin account-id.dkr.ecr.region.amazonaws.com
docker tag perfilapp:latest account-id.dkr.ecr.region.amazonaws.com/perfilapp:latest
docker push account-id.dkr.ecr.region.amazonaws.com/perfilapp:latest
```

### Google Cloud Run / Azure Container Instances
Sigue la documentación específica de cada plataforma para deployment de contenedores.
