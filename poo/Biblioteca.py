from Libro import Libro

class Biblioteca():
    def __init__(self):
        self.__Libros = []

    def Guardar_Libros(self):
        titulo = str(input())
        autor = str(input())
        anio_publicacion = str(input())
        estado = True
        self.__Libros.append(Libro(titulo,autor,anio_publicacion))

    def Buscar_Libro(self):
        print("A")

    def Prestar_Libro(self):
        if self.__estado is False:
            print("Libro prestado")
            self.set_estado(True)
        else:
            print("No disponible")
            self.set_estado(False)

    def Devolver_Libro(self):
        if self.__estado:
            print("Libro devuelto")
            self.set_estado(False)
        else:
            print("Sin libro para devolver")
            self.set_estado(True)
        
    def Ver_Lista(self):
        for i in self.__Libros:
            print(i.ver_libro())