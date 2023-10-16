class Libro():
    def __init__(self, titulo:str, autor:str, anio_publicacion:int):
        self.__titulo = titulo
        self.__autor = autor
        self.__anio_publicacion = anio_publicacion
        self.__disponible = bool(True)

    def set_titulo(self,titulo):
        self.__titulo = titulo

    def get_titulo(self):
        return self.__titulo
    
    def set_autor(self,autor):
        self.__autor = autor

    def get_autor(self):
        return self.__autor
    
    def set_anio_publicacion(self,anio_publicacion):
        self.__anio_publicacion = anio_publicacion

    def get_anio_publicacion(self):
        return self.__anio_publicacion
    
    def set_disponible(self,disponible):
        self.__disponible = disponible

    def get_disponible(self):
        return self.__disponible
    
    def ver_libro(self):
        print(f"Titulo: {self.get_titulo()}")
        print(f"Autor: {self.get_autor()}")
        print(f"Año de publicacion: {self.get_anio_publicacion()}")
        print(f"Estado: {self.get_disponible()}")