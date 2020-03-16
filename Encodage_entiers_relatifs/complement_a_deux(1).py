#!/usr/bin/env python
# coding: utf-8

# In[ ]:


def complement(b):
    """
    Retourne un tableau non vide d'entiers appartenant à {0,1} représentant
    le complément à deux du nombre binaire passé en paramètre.
    b: tableau d'entiers appartenant à {0,1} correspondant à la valeur 
    d'un nombre écrit en binaire.
    """
    N = len(b)
    c2 = [0] * N
    #Inversion des bits - complément à un
    for i in range(N):
        if b[i] == 0:
            c2[i] = 1
    #Votre code à partir d'ici
    #
    return c2

