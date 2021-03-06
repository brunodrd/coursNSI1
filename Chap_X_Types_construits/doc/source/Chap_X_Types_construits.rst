
********************
Les types construits
********************

Les tableaux - part. 2
======================

Itérer sur les éléments d’un tableau
------------------------------------

Dans la partie 1 on a vu qu’on pouvait accéder aux éléments d’un tableau
en itérant sur les index de celui-ci avec une syntaxe du type:
``for element in range(len(tableau)):``. Par exemple:

.. code:: python

   notes = [17, 14, 16]
   for i in range(len(notes)):
           print(notes[i])

On peut obtenir le même résultat en itérant sur les éléments. La syntaxe
est la suivante:

.. code:: python

   notes = [17, 14, 16]
   for note in notes:
       print(note)

.. note::
   Il est d’usage (*mais non obligatoire*) d’utiliser un nom au 
   pluriel pour le tableau et le même nom au singulier pour la variable de 
   boucle.

Construction de tableaux en compréhension
-----------------------------------------

| Supposons le problème suivant: construire un tableau des 10 premiers
  entiers naturels multiples de 9.
| On peut construire ce tableau comme dans la partie 1 (on dit aussi en
  extension):

.. code:: python

   t = [0, 9, 18, 27, ...]

C’est long et pas très élégant! Une deuxième solution serait d’utiliser
une boucle ``for``:

.. code:: python

   t = [0] * 10
   for i in range(10):
       t[i] = 9 * i

Python propose une syntaxe plus compacte pour réaliser cette opération.
Il s’agit de la construction par **compréhension** (on dit aussi en
intension):

.. code:: python

   t = [9 * i for i in range(10)]

**Plus généralement, au lieu de déclarer un tableau puis de le remplir
avec une boucle, on préfèrera une construction plus concise appelée
construction par compréhension, qui est de la forme:**

.. code:: python

   tableau = [expr(x) for x in sequence]

| ``expr(x)`` est une expression de la variable ``x`` qui parcourt tous
  les éléments de ``sequence`` (qui peut être un tableau, une chaine de
  caractère ou un des types qui seront vus dans les paragraphes
  ci-après).
| Modifions notre consigne de départ: parmi les 10 premiers entiers
  naturels multiples de 9, construire un tableau des entiers pairs
  uniquement. La construction par compréhension permet ici une écriture
  compacte:

.. code:: python

   t = [9 * i for i in range(10) if 9 * i % 2 == 0]

**La construction par compréhension permet d’ajouter une condition
booléenne**.

.. code:: ipython3

    t = [9 * i for i in range(20) if 9 * i % 2 == 0]
    print(t)


.. parsed-literal::

    [0, 18, 36, 54, 72, 90, 108, 126, 144, 162]
    

Complément: ajouter un élément à un tableau
-------------------------------------------

Le langage python autorise un traitement particulier sur un tableau:
pouvoir y ajouter un élément même si sa taille a déjà été fixée. La
syntaxe est la suivante:

.. code:: ipython3

    tab = [1, 2, 3]
    tab.append(5)
    print(tab)


.. parsed-literal::

    [1, 2, 3, 5]
    

**Dans la mesure du possible, on évitera le recours à la méthode
append**.

Les p-uplets
============

Construction et propriétés d’un p-uplet
---------------------------------------

En mathématique, un **p-uplet** est une collection ordonnée d’objets.
Python fournit un type adapté à la représentation des p-uplets: le type
``tuple``. On créé un tuple en écrivant les composantes du p-uplet
séparées par une virgule et de préférence entre parenthèses:

.. code:: python

   notes = ("Maxime", 17, 15, 16) 

Comme avec les tableaux, on peut obtenir la taille d’un tuple avec la
fonction native ``len`` et accéder au :math:`i^{ème}` élément avec la
notation utilisant des crochets:

.. code:: ipython3

    notes = ("Maxime", 17, 15, 16, 10)
    print("Taille du p-uplet: ", len(notes))
    print("Valeur du 3ème élément (index 2): ", notes[2])


.. parsed-literal::

    Taille du p-uplet:  5
    Valeur du 3ème élément (index 2):  15
    

**Contrairement aux tableaux les composantes d’un tuple ne sont pas
modifiables**. On dit que les tuples sont des objets immutables (ou non
mutables).

.. code:: ipython3

    notes[3] = 16.5


::


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-4-06e2d03882e0> in <module>()
    ----> 1 notes[3] = 16.5
    

    TypeError: 'tuple' object does not support item assignment


Parcourir un p-uplet
--------------------

Les méthodes de parcours rencontrées lors de la découverte des tableaux
sont toujours valables. On peut itérer sur les index ou sur les
éléments.

.. code:: ipython3

    print("****Relevé de notes ", "****")
    for note in notes:
        print(note)
    print("****Moyenne****")
    s = 0
    for i in range(1, len(notes)):
        s = s + notes[i]
    m = s / (len(notes) - 1)
    print(m)


.. parsed-literal::

    ****Relevé de notes  ****
    Maxime
    17
    15
    16
    10
    ****Moyenne****
    14.5
    

Les dictionnaires
=================

Construction et propriétés des dictionnaires
--------------------------------------------

Python possède une autre structure de données très importante: **le
dictionnaire**. Contrairement aux tableaux ou aux tuples, les valeurs ne
sont plus associées à des index forcément numériques mais à des **clés**
qui peuvent être des nombres, des chaines de caractères, des tuples. On
déclare un dictionnaire en plaçant ses paires clé-valeur entre accolades
et séparées par une virgule. La clé et la valeur étant séparées par le
caractère ``:``.

Exemple:

.. code:: python

   cyclones_reunion = {"fakir":(24, 4, 2018), "berguitta":(18, 1, 2018)}

On peut également construire un dictionnaire à partir d’un dictionnaire
vide:

.. code:: ipython3

    cyclones_reunion = {}
    cyclones_reunion["bejisa"] = (2, 1, 2014)
    cyclones_reunion["dumile"] = (3, 1, 2013)
    cyclones_reunion["dina"] = (22, 1, 2002)
    cyclones_reunion["gamede"] = (25, 2, 2007)
    print(cyclones_reunion)


.. parsed-literal::

    {'bejisa': (2, 1, 2014), 'dumile': (3, 1, 2013), 'dina': (22, 1, 2002), 'gamede': (25, 2, 2007)}
    

Le nombre d’entrées du dictionnaire est obtenu avec la fonction ``len``.

.. code:: ipython3

    len(cyclones_reunion)




.. parsed-literal::

    4



On accède à la **valeur** associée à une **clé** d’un dictionnaire ``d``
avec une construction du type ``d[clé]``. Si la clé n’existe pas, python
lèvera une exception **KeyError**.

.. code:: ipython3

    print(cyclones_reunion["dina"])


.. parsed-literal::

    (22, 1, 2002)
    

.. code:: ipython3

    print(cyclones_reunion["carlos"])


::


    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    <ipython-input-9-0306c0a2304c> in <module>()
    ----> 1 print(cyclones_reunion["carlos"])
    

    KeyError: 'carlos'


Enfin, **un dictionnaire n’est pas ordonné**. Les éléments ne sont pas
forcément afichés dans l’ordre de leur création.

Parcours d’un dictionnaire
--------------------------

L’appartenance à un dictionnaire se fait avec le mot clé ``in``. Ainsi:

.. code:: ipython3

    'dina' in cyclones_reunion




.. parsed-literal::

    True



.. code:: ipython3

    'carlos' in cyclones_reunion




.. parsed-literal::

    False



| Le parcours d’un dictionnaire ``d`` peut se faire en itérant avec une
  boucle ``for`` sur:
  
-  les clés

.. code:: python

   for cle in d:#équivalent à for cle in d.keys()
       ...

-  les valeurs

.. code:: python

   for val in d.values():
       ...

-  les couples (clé,valeur)

.. code:: python

   for cle,val in d.items():
       ...

Les p-uplets nommés
===================

Insuffisance des p-uplets
-------------------------

Etant donné le problème suivant: on souhaite stocker les informations
concernant des fichers image dans un p-uplet. Ce dernier aura pour
composante le nom du fichier, sa largeur en pixel, sa hauteur en pixel
et sa taille en kilo-octet. Par exemple, soit le fichier “dog.jpg” qui a
une largeur de 6720 pixels, une hauteur de 4480 pixels et dont la taille
est de 3319 ko. On peut le modéliser par un simple tuple:

.. code:: ipython3

    image = ("dog.jpg", 6720, 4480, 3319)

| Cependant cette solution n’est pas idéale. En effet, il faut se
  souvenir de l’ordre dans lequel les entiers ont été rentrés !
| **On évitera d’utiliser des p-uplets lorsque des ambiguités ou
  confusions sont possibles**.

Une solution possible
---------------------

| Pour contourner le problème soulevé précédemment, Python a une
  solution: les **p-uplets nommés**. Chaque composante du p-uplet se
  voit donner un nom !
| Python possède un type permettant de manipuler les p-uplets nommés:
  les ``namedtuple`` du module ``collections``. Cependant, et
  conformément au programme, en classe de :math:`1^{ère}` NSI, **on
  utilisera des dictionnaires pour implémenter des p-uplets nommés**. Le
  problème précédent peut être modélisé par:

.. code:: ipython3

    image = {'nom':'dog.jpg', 'larg':6720, 'haut':4480, 'taille':3319}
    print("Taille de l'image: ", image['nom'])
    print("Hauteur: ", image['haut'])


.. parsed-literal::

    Taille de l'image:  dog.jpg
    Hauteur:  4480
    

--------------

Résumé
======

Tableau
-------

On peut itérer directement sur les éléments d’un tableau avec la
construction du type ``for element in tableau:``. Pour remplir un
tableau on peut utiliser une construction par compréhension:

.. code:: python

   tableau = [expr(x) for x in sequence]

p-uplet
-------

Les p-uplets sont implémentés en python par le type ``tuple``. Il s’agit
d’un objet non mutable. La syntaxe pour construire un p-uplet ayant N
composantes, est:

.. code:: python

   mon_objet = (comp1, comp2, ..., compN)

| Les différentes composantes sont accessibles par indexation, comme
  pour un tableau: ``mon_objet[0]``, ``mob_objet[1]`` etc.
| Le parcours est identique à celui d’un tableau.

Dictionnaires
-------------

Un dictionnaire est une structure regroupant des paires “clé:valeur”. En
python, ces paires sont situées entre accolades et séparées par une
virgule.

.. code:: python

   image = {'nom':'dog.jpg', 'larg':6720, 'haut':4480, 'taille':3319}

On peut itérer sur les clés, les valeurs ou les paires clé,valeur avec
les méthodes ``keys()``, ``values()`` ou ``items()``.

p-uplets nommés
---------------

En python, les p-uplets nommés sont implémentés avec des dictionnaires.

--------------

B. DARID |licence|

.. |licence| image:: ../../img/Cc-by-nc_icon.svg.png
