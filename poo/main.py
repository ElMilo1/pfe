from Biblioteca import Biblioteca
from Libro import Libro
libro1 = Libro("principito","josejose",2001)
libro2 = Libro("Harry potter","violeta parra",1859)
libro3 = Libro("como agua para chocolate","willy wonka",1992)

biblio = Biblioteca()
biblio.Guardar_Libros()
biblio.Ver_Lista()