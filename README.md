# Aplicación de lista de tareas

Descargar con `.zip`

Enseguida correr el siguiente comando:

```
npm install
```

## **Abrir la consola:**
```
CTRL + SHIFT + `
```

## Acciones posibles en la consola: 

<br />

## Crear una tarea

```
node app crear -d nombre de la tarea
```
---
## Actualizar una tarea

<br />

### Completada
```
node app actualizar -d nombre de la tarea a actualizar -c true
```

### Por hacer
```
node app actualizar -d nombre de la tarea a actualizar -c false
```
---
## Listar las tareas

<br />

### Todas sin filtros
```
node app listar
```

### Solo las completadas

```
node app listar -c true
```
### Solo las no completadas

```
node app listar -c false
```
---
## Borrar una tarea

```
node app borrar -d tarea a borrar
```

<br />

# ARCYNTRAR 09/09/20