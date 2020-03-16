*****************
Tables de données
*****************

Les tableaux - part. 3
======================

Qu’est-ce qu’un tableau de tableaux?
------------------------------------

Les éléments d’un tableau peuvent être des entiers, des flottants, des
chaines de caractères, mais aussi … des tableaux! Ainsi, l’écriture
suivante est parfaitement valide:

.. code:: python

   t = [[1, 2, 3, 4], [5, 6, 7, 8]]

``t`` est un tableau composé de **deux** tableaux de **quatre** entiers.
Pour faciliter la compréhension, on aussi saisir ``t`` de la manière
suivante:

.. code:: python

   t = [[1, 2, 3, 4],
        [5, 6, 7, 8]]

| Cette présentation met bien en évidence une structure à **deux**
  lignes et **quatre** colonnes. Un tel tableau, dont les lignes ont la
  même taille, est appelé une **matrice**.
| Les tableaux de tableaux sont utilisées pour les manipulations des
  données tabulées (voir ci-dessous) ou des images.

Comment accéder aux éléments d’un tableau de tableaux?
------------------------------------------------------

| On peut envisager un accès indexé. Ce qui revient à dire que l’accès à
  un élément ``t[i][j]`` se fera grâce à deux index :math:`i` et
  :math:`j` qui représentent respectivement le numéro de la ligne et le
  numéro de la colonne.
| **Exemples**

.. code:: ipython3

    t = [[1, 2, 3, 4],
         [5, 6, 7, 8]]
    #Elément de la 2ème ligne, 3ème colonne --> i=1, j=2
    print(t[1][2])


.. parsed-literal::

    7
    

.. code:: ipython3

    #Modification de la valeur de la 1ere ligne, 4eme colonne --> i=0, j=3
    t[0][3] = 10
    print(t)


.. parsed-literal::

    [[1, 2, 3, 10], [5, 6, 7, 8]]
    

Exercice d’application directe
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Soit la matrice:

.. code:: python

   t = [[15, 17, 22],
        [17, 25, 27],
        [31, 33, 35]]

-  Que vaut ``t[1][2]``?
-  Que doit-on modifier pour avoir
   ``[[15, 17, 22], [17, 25, 45], [31, 33, 35]]``?

Comment construire un tableau de tableaux en compréhension?
-----------------------------------------------------------

Pour construire un tableau ``t`` ayant :math:`n` lignes et :math:`p`
colonnes initialisé avec des zéros par exemple, on peut procéder comme
suit:

.. code:: ipython3

    n = 3
    p = 4
    
    t = [[0]*p for i in range(n)]

.. note::
   L’instruction ``[0]*p`` est équivalente à ``[0] + [0] + ... + [0]`` 
   (p tableaux ``[0]``) soit ``[0, 0, ..., 0]`` composé de p zéros.

Exercice d’application directe
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Que vaut ``t`` après l’instruction ``t = [[i, i+1] for i in range(2)]``?

Organisation des données sous forme de tables
=============================================

Repères historiques
-------------------

|IBM|

.. container::

   By ArnoldReinhold - Own work, CC BY-SA 3.0, Link

Le compilateur fortran de l’\ **IBM OS/360** supportait dès 1972 des
données tabulées, au format *csv (comma-separated values)*.
`Source <https://en.wikipedia.org/wiki/Comma-separated_values>`__

.. |IBM| image:: ../../img/IBM360.jpg

Qu’est-ce qu’une table de données?
----------------------------------

Une table de données est un **arrangement de lignes et de colonnes**.
Les lignes ont divers synonymes: *enregistrement, p-uplet, vecteur,
etc.*. Il en est de même pour les colonnes: *champ, propriété, attribut,
etc.* L’organisation des données sous forme de table (on dit aussi *sous
forme tabulée*) est très répandue.

**Exemple**: Les résultats du bac général à la Réunion ces dernières
années. L’utilisation d’une table est très commode:

=========================================== ===== =========== ====== ======= ====== ==========
id_lycee                                    annee ville       taux_L taux_ES taux_S academie
=========================================== ===== =========== ====== ======= ====== ==========
LYCEE LECONTE DE LISLE                      2018  ST DENIS    97     98      92     LA REUNION
LYCEE BEL AIR (GENERAL ET TECHNO.)          2018  STE SUZANNE 92     81      95     LA REUNION
LYCEE PIERRE LAGOURGUE (GENERAL ET TECHNO.) 2018  LE TAMPON   95     94      96     LA REUNION
LYCEE MAHATMA GANDHI                        2018  ST ANDRE    88     84      85     LA REUNION
=========================================== ===== =========== ====== ======= ====== ==========

Dans l’exemple ci-dessus, chaque ligne (en dehors de la première)
représente les résultats d’un lycée. Les attributs de cette table sont
``id_lycee``, ``annee``, ``ville``, ``taux_L``, ``taux_ES``, ``taux_S``
et ``academie``.

Les données tabulées sont très importantes en informatique: on les
utilise dans de nombreux domaines (web, IA, calcul scientifique, etc.).

Quelle structure de données pour représenter une table ?
========================================================

Les données sont habituellement séparées des programmes qui les
traitent, dans un fichier texte. On utilise souvent des fichiers au
format **csv** (*comma separated values*). Chaque ligne de ce fichier
correspond à un enregistrement (*p-uplet*). Les différents champs
(*attributs*) étant séparés par un délimiteur (*virgule, point-virgule,
tabulation, etc.*). La librairie standard de python possède un module
adapté à la lecture (*et à l’écriture*) de ce type de fichiers: le
**module csv**.

Importation sous forme de tableau de tableaux
---------------------------------------------

On souhaite importer le fichier de résultats du bac général
``bac_L_ES_S.csv`` situé dans le dossier ``data``, sous la forme d’un
tableau de tableaux. Un code python typique est le suivant:

.. code:: ipython3

    import csv
    
    f = open('data/bac_L_ES_S.csv', newline='', encoding='utf8')
    table = [ligne for ligne in csv.reader(f, delimiter=';')]

Affichons les 5 premiers éléments de cette table:

.. code:: ipython3

    for i in range(5):
        print(table[i])


.. parsed-literal::

    ['id_lycee', 'annee', 'ville', 'taux_L', 'taux_ES', 'taux_S', 'academie']
    ['LYCEE MONTMAJOUR', '2012', 'ARLES', '95', '79', '96', 'AIX-MARSEILLE']
    ['LYCEE BRISTOL', '2017', 'CANNES', '84', '84', '75', 'NICE']
    ['LYCEE MARGUERITE DE NAVARRE', '2017', 'BOURGES', '89', '94', '91', 'ORLEANS-TOURS']
    ['LYCEE FULBERT', '2017', 'CHARTRES', '88', '88', '89', 'ORLEANS-TOURS']
    

| Cette première solution est simple à mettre en oeuvre, cependant elle
  souffre de deux défauts:
  
-  on doit mémoriser l’ordre des attributs;

-  la première ligne apparait comme une ligne de données, il va 
   falloir l’ignorer lors des traitements.

Exercice d’application directe
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Les résultats du lycée de Bois d’Olive en 2018 se trouvent à l’index
8262 de cette table. Afficher le taux de réussite au bac S.

.. code:: ipython3

    #Votre code

Importation sous forme de tableau de n-uplets nommés
----------------------------------------------------

Pour éviter les inconvénients précédents, on importe les données
tabulées sous forme de tableau de p-uplets nommés. Un code python
typique est le suivant:

.. code:: ipython3

    import csv
    
    f = open('data/bac_L_ES_S.csv', newline='', encoding='utf8')
    table = [dict(row) for row in csv.DictReader(f, delimiter=';')]

Les premiers éléments affichés confirment que l’on a bien un tableau de
dictionnaire:

.. code:: ipython3

    for i in range(5):
        print(table[i])


.. parsed-literal::

    {'id_lycee': 'LYCEE MONTMAJOUR', 'annee': '2012', 'ville': 'ARLES', 'taux_L': '95', 'taux_ES': '79', 'taux_S': '96', 'academie': 'AIX-MARSEILLE'}
    {'id_lycee': 'LYCEE BRISTOL', 'annee': '2017', 'ville': 'CANNES', 'taux_L': '84', 'taux_ES': '84', 'taux_S': '75', 'academie': 'NICE'}
    {'id_lycee': 'LYCEE MARGUERITE DE NAVARRE', 'annee': '2017', 'ville': 'BOURGES', 'taux_L': '89', 'taux_ES': '94', 'taux_S': '91', 'academie': 'ORLEANS-TOURS'}
    {'id_lycee': 'LYCEE FULBERT', 'annee': '2017', 'ville': 'CHARTRES', 'taux_L': '88', 'taux_ES': '88', 'taux_S': '89', 'academie': 'ORLEANS-TOURS'}
    {'id_lycee': 'LYCEE NOTRE DAME', 'annee': '2017', 'ville': 'CHARTRES', 'taux_L': '100', 'taux_ES': '97', 'taux_S': '96', 'academie': 'ORLEANS-TOURS'}
    

| On remarque que ce tableau ne contient plus la première ligne. Cette
  dernière a servi à fournir les clés du dictionnaire créé.
  
.. note::
   L’instruction ``dict`` du tableau construit en compréhension est 
   nécessaire avec les dernières versions de python, afin d’avoir des 
   éléments de type dictionnaire.

Exercice d’application directe
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Les résultats du lycée de Bois d’Olive en 2018 se trouvent cette fois ci
à l’index 8261 de cette table (*rappel: la 1ere ligne a servi pour créer
les clés du dictionnaire*). Afficher le taux de réussite au bac L.

.. code:: ipython3

    #Votre code

Résumé
======

-  Les tableaux peuvent contenir aussi des tableaux. Il est commode de
   les présenter sur plusieurs lignes. Un élément sera alors repéré par
   ``t[i][j]`` (i et j représentant la ligne et la colonne).
-  Une table de données est un arrangement de lignes et de colonnes. Les
   données sont souvent situées dans des fichiers csv. On peut les
   importer de deux manières:

.. code:: python

   import csv
   f = open(fichier, newline='', encoding='utf8')
   table = [ligne for ligne in csv.reader(f, delimiter=';')]

ou

.. code:: python

   import csv
   f = open(fichier, newline='', encoding='utf8')
   table = [dict(row) for row in csv.DictReader(f, delimiter=';')]

--------------

B. DARID |licence|

.. |licence| image:: ../../img/licence.png
