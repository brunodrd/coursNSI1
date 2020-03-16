**********************
Tri & fusion de tables
**********************

Tri d’une table en python
=========================

Lorsqu’on manipule des données en tables, il est fréquent de vouloir les
trier. Le langage python offre quelques possibilités de tri: méthode
``sort`` des tableaux, fonction ``sorted`` de la librairie standard
-*qui sera privilégiée ici*-.

Quels objets peuvent être comparés ?
------------------------------------

Python sait comparer évidemment des nombres et des chaines de
caractères, mais aussi des p-uplets. Voici quelques exemples:

.. code:: ipython3

    print("'abc' > 'aac': ", 'abc' > 'aac')
    print('(5,4) > (5,3): ', (5, 4) > (5, 3))
    print('(5,4,6) > (5,4,8): ', (5, 4, 6) > (5, 4, 8))
    print("(6, 'c') < (5, 'c'): ", (6, 'c') < (5, 'c'))
    print("(6, 'c') < (6, 'e'): ", (6, 'c') < (6, 'e'))


.. parsed-literal::

    'abc' > 'aac':  True
    (5,4) > (5,3):  True
    (5,4,6) > (5,4,8):  False
    (6, 'c') < (5, 'c'):  False
    (6, 'c') < (6, 'e'):  True
    

Qu’en est-il des dictionnaires?

.. code:: ipython3

    e1 = {'nom':'bob', 'age':20, 'domaine':'ia'}
    e2 = {'nom':'alice', 'age':23, 'domaine':'algorithmique'}
    print('e1 < e2: ', e1 < e2)


::


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-39-f4ee3bfa9ab9> in <module>()
          1 e1 = {'nom':'bob', 'age':20, 'domaine':'ia'}
          2 e2 = {'nom':'alice', 'age':23, 'domaine':'algorithmique'}
    ----> 3 print('e1 < e2: ', e1 < e2)
    

    TypeError: '<' not supported between instances of 'dict' and 'dict'


**Les p-uplets nommés implémentés en 1ère par des dictionnaires ne
peuvent pas être comparés**.

Comment utiliser la fonction ‘sorted’ de la librairie standard?
---------------------------------------------------------------

.. code:: ipython3

    help(sorted)


.. parsed-literal::

    Help on built-in function sorted in module builtins:
    
    sorted(iterable, /, \*, key=None, reverse=False)
        Return a new list containing all items from the iterable in ascending order.
        
        A custom key function can be supplied to customize the sort order, and the
        reverse flag can be set to request the result in descending order.
    
    

La fonction ``sorted`` prend en paramètre obligatoire un *itérable*,
comme un tableau par exemple, et renvoie un nouveau tableau trié par
**ordre croissant**.

Application directe
~~~~~~~~~~~~~~~~~~~

L’une des deux instructions suivantes provoque une erreur. Laquelle et
pourquoi?

.. code:: python

   t1 = sorted(8, 56, 9, 2, 15)
   t2 = sorted((8, 56, 9, 2, 15))

Que renvoie l’instruction correcte?

La fonction ‘sorted’ possède un paramètre optionnel ``key`` qui est
utile lorsque python ne sait pas comparer des objets comme les
dictionnaires. On affecte à ce paramètre le nom de la fonction chargée
d’indiquer la clé suivant laquelle on trie.

Exemple
^^^^^^^

Soit à ranger le tableau ``t`` suivant par ordre croissant d’âge:

.. code:: ipython3

    t = [{'nom':'bob', 'age':20, 'domaine':'IA'}, 
         {'nom':'alex', 'age':23, 'domaine':'web'}, 
         {'nom':'sara', 'age':21, 'domaine':'web'}, 
         {'nom':'alice', 'age':23, 'domaine':'algorithmique'},
         {'nom':'lisa', 'age':23, 'domaine':'robotique'}]
    
    #On définit une fonction qui retourne le critère de tri
    def suivant_age(e):
        return e['age']
    
    #On appelle 'sorted' en affectant à 'key' le nom de la fonction de tri
    t_trie = sorted(t, key=suivant_age)
    #Affichage
    for e in t_trie:
        print(e)


.. parsed-literal::

    {'nom': 'bob', 'age': 20, 'domaine': 'IA'}
    {'nom': 'sara', 'age': 21, 'domaine': 'web'}
    {'nom': 'alex', 'age': 23, 'domaine': 'web'}
    {'nom': 'alice', 'age': 23, 'domaine': 'algorithmique'}
    {'nom': 'lisa', 'age': 23, 'domaine': 'robotique'}
    

On peut vouloir rajouter un deuxième critère de tri, en cas d’égalité
par exemple. Il suffit alors de placer ce deuxième critère dans un tuple
(que python sait trier!) retourné par la fonction.

.. code:: ipython3

    t = [{'nom':'bob', 'age':20, 'domaine':'IA'}, 
         {'nom':'alex', 'age':23, 'domaine':'web'}, 
         {'nom':'sara', 'age':21, 'domaine':'web'}, 
         {'nom':'alice', 'age':23, 'domaine':'algorithmique'},
         {'nom':'lisa', 'age':23, 'domaine':'robotique'}]
    
    #On définit une fonction qui retourne le critère de tri
    def suivant_age_puis_nom(e):
        return (e['age'], e['nom'])
    
    #On appelle 'sorted' en affectant à 'key' le nom de la fonction de tri
    t_trie = sorted(t, key=suivant_age_puis_nom)
    #Affichage
    for e in t_trie:
        print(e)


.. parsed-literal::

    {'nom': 'bob', 'age': 20, 'domaine': 'IA'}
    {'nom': 'sara', 'age': 21, 'domaine': 'web'}
    {'nom': 'alex', 'age': 23, 'domaine': 'web'}
    {'nom': 'alice', 'age': 23, 'domaine': 'algorithmique'}
    {'nom': 'lisa', 'age': 23, 'domaine': 'robotique'}
    

La fonction ``sorted`` possède un dernier paramètre optionnel:
``reverse``. On lui donnera la valeur ``True`` si on veut un classement
décroissant.

Application directe
^^^^^^^^^^^^^^^^^^^

Modifier le code précédent pour trier ``t`` par domaine, puis par nom en
cas d’égalité.

.. code:: ipython3

    t = [{'nom':'bob', 'age':20, 'domaine':'IA'}, 
         {'nom':'alex', 'age':23, 'domaine':'web'}, 
         {'nom':'sara', 'age':21, 'domaine':'web'}, 
         {'nom':'alice', 'age':23, 'domaine':'algorithmique'},
         {'nom':'lisa', 'age':23, 'domaine':'robotique'}]
    
    def suivant_domaine_puis_nom(e):
        #######A compléter#########
    
    #Décommentez la ligne ci-dessous et complétez!  
    #t_trie = 
    
    #Affichage
    for e in t_trie:
        print(e)

Fusion
======

La cellule suivante prépare les tables de données utiles pour la suite.

.. code:: ipython3

    import csv
    
    #**********Préparation des tables de travail*************#
    #
    FILE1 = './data/note_g1.csv'
    FILE2 = './data/note_g2.csv'
    FILE3 = './data/note_TS2.csv'
    FILE4 = './data/Orientation.csv'
    
    def conversion(d):
        return {'Nom':d['Nom'],
               'Exercice 1':float(d['Exercice 1']),
               'Exercice 2':float(d['Exercice 2']),
               'Exercice 3':float(d['Exercice 3']),
               'Note':float(d['Note'])}
    #table de notes du groupe 1
    f1 = open(FILE1, newline='', encoding='utf8')
    t_1 = [dict(row) for row in csv.DictReader(f1, delimiter=';')]
    t_1 = [conversion(ligne) for ligne in t_1]
    
    #table de notes du groupe 2
    f2 = open(FILE2, newline='', encoding='utf8')
    t_2 = [dict(row) for row in csv.DictReader(f2, delimiter=';')]
    t_2 = [conversion(ligne) for ligne in t_2]
    
    #table de notes de la classe entière
    f3 = open(FILE3, newline='', encoding='utf8')
    t_3 = [dict(row) for row in csv.DictReader(f3, delimiter=';')]
    t_3 = [conversion(ligne) for ligne in t_3]
    
    #table des orientations post bac des élèves
    f4 = open(FILE4, newline='', encoding='utf8')
    t_4 = [dict(row) for row in csv.DictReader(f4, delimiter=';')]

Comment fusionner des tables ayant les mêmes attributs?
-------------------------------------------------------

Lorsque des tables possèdent les mêmes attributs, leur fusion ne pose
aucun problème. Par exemple, on souhaiterait fusionner les notes des
deux groupes d’une classe en une seule table.

.. code:: ipython3

    t_fin = t_1 + t_2
    print(len(t_1))
    print(len(t_2))
    print(len(t_fin))


.. parsed-literal::

    15
    15
    30
    

Comment fusionner des tables ayant des attributs différents?
------------------------------------------------------------

| On se limite au cas simple où les deux tables ont un attribut en
  commun. L’opération de fusion de table de données est appelée aussi
  **jointure**.
| On souhaite fusionner la table de notes des TS avec la table
  d’orientation. Les structures de ces tables sont les suivantes:

.. code:: ipython3

    #Affichage de la table des notes puis orientation
    for i in range(2):
        print(t_3[i])
    print('*******************************************************************************************')
    for i in range(2):
        print(t_4[i])


.. parsed-literal::

    {'Nom': 'Nayagom', 'Exercice 1': 2.5, 'Exercice 2': 2.0, 'Exercice 3': 5.0, 'Note': 9.5}
    {'Nom': 'Payet Nativel', 'Exercice 1': 3.0, 'Exercice 2': 3.5, 'Exercice 3': 2.0, 'Note': 8.5}
    *******************************************************************************************
    {'Nom': 'Metayer', 'Orientation': 'PACES', 'Lieu': 'Métropole'}
    {'Nom': 'Bravin', 'Orientation': 'Ecole de Commerce', 'Lieu': 'Réunion'}
    

Les deux tables partagent l’attribut ‘Nom’. L’algorithme de fusion est
le suivant:

*Pour chaque ligne de la table note, parcourir chaque ligne de la table
orientation. Si les attributs ‘Nom’ sont les mêmes, fusionner les lignes
et sauver le résultat*.

Ecrivons d’abord une fonction qui permet de fusionner deux lignes des
deux tables précédentes.

.. code:: ipython3

    def fusionner_lignes(e,o):
        """
        Retourne un dictionnaire, résultat de la fusion des deux lignes e et o;
        e: ligne de la table note (dictionnaire);
        o: ligne de la table orientation (dictionnaire);
        """
        return {'Nom':e['Nom'], 'Exercice 1':e['Exercice 1'], 'Exercice 2':e['Exercice 2'],
                'Exercice 3':e['Exercice 3'],
               'Note':e['Note'], 'Orientation':o['Orientation'], 'Lieu':o['Lieu']}

.. code:: ipython3

    fusionner_lignes({'Nom': 'Metayer', 'Exercice 1': 5.5, 'Exercice 2': 3.5, 'Exercice 3': 3.0, 'Note': 12.0},
                    {'Nom': 'Metayer', 'Orientation': 'PACES', 'Lieu': 'Métropole'})




.. parsed-literal::

    {'Exercice 1': 5.5,
     'Exercice 2': 3.5,
     'Exercice 3': 3.0,
     'Lieu': 'Métropole',
     'Nom': 'Metayer',
     'Note': 12.0,
     'Orientation': 'PACES'}



Une premier code possible pour la fusion des tables de note ``t_3`` et
d’orientation ``t_4`` utilise deux boucles ``for`` imbriquées ainsi que
la méthode ``append`` qui permet d’ajouter un élément à un tableau.

.. code:: ipython3

    def jointure1(t1, t2):
        """
        Retourne une table (tableau de dictionnaires) résultant de la fusion des deux tables t1 et t2.
        t1, t2: tables de données (tableaux de dictionnaires)
        """
        t_fin = []
        for eleve in t_3:
            for orientation in t_4:
                if eleve['Nom'] == orientation['Nom']:
                    t_fin.append(fusionner_lignes(eleve, orientation))
        return t_fin

.. code:: ipython3

    for ligne in jointure1(t_3, t_4):
        print(ligne)


.. parsed-literal::

    {'Nom': 'Rescourio', 'Exercice 1': 5.0, 'Exercice 2': 0.0, 'Exercice 3': 2.0, 'Note': 7.0, 'Orientation': 'PACES', 'Lieu': 'Réunion'}
    {'Nom': 'Dubard', 'Exercice 1': 5.0, 'Exercice 2': 4.5, 'Exercice 3': 4.0, 'Note': 13.5, 'Orientation': 'IUT', 'Lieu': 'Reunion'}
    {'Nom': 'Ribollet', 'Exercice 1': 3.0, 'Exercice 2': 3.5, 'Exercice 3': 5.0, 'Note': 11.5, 'Orientation': 'Licence STAPS', 'Lieu': 'Réunion'}
    {'Nom': 'Pajinadon', 'Exercice 1': 2.5, 'Exercice 2': 2.5, 'Exercice 3': 3.5, 'Note': 8.5, 'Orientation': 'ESIROI', 'Lieu': 'Réunion'}
    {'Nom': 'Catambara', 'Exercice 1': 3.0, 'Exercice 2': 0.5, 'Exercice 3': 3.5, 'Note': 7.0, 'Orientation': ' Licence Anglais', 'Lieu': 'Réunion'}
    {'Nom': 'Metayer', 'Exercice 1': 5.5, 'Exercice 2': 3.5, 'Exercice 3': 3.0, 'Note': 12.0, 'Orientation': 'PACES', 'Lieu': 'Métropole'}
    {'Nom': 'Salvado', 'Exercice 1': 5.5, 'Exercice 2': 5.5, 'Exercice 3': 6.0, 'Note': 17.0, 'Orientation': 'CPGE BCPST', 'Lieu': 'Réunion'}
    {'Nom': 'Bravin', 'Exercice 1': 3.0, 'Exercice 2': 1.5, 'Exercice 3': 3.5, 'Note': 8.0, 'Orientation': 'Ecole de Commerce', 'Lieu': 'Réunion'}
    {'Nom': 'Darnon', 'Exercice 1': 5.0, 'Exercice 2': 4.0, 'Exercice 3': 6.0, 'Note': 15.0, 'Orientation': 'CPGE BCPST', 'Lieu': 'Réunion'}
    

Une solution plus élégante qui utilise une compréhension de tableau (qui
permet de nous affranchir de la méthode ``append``) est donnée ci-après:

.. code:: ipython3

    def jointure2(t1, t2):
        """
        Retourne une table (tableau de dictionnaire) résultant de la fusion des deux tables t1 et t2.
        t1, t2: tables de données (tableaux de dictionnaires)
        """
        return [fusionner_lignes(eleve, orientation) for eleve in t1\
                for orientation in t2 if eleve['Nom'] == orientation['Nom']]

.. code:: ipython3

    for ligne in jointure2(t_3, t_4):
        print(ligne)


.. parsed-literal::

    {'Nom': 'Rescourio', 'Exercice 1': 5.0, 'Exercice 2': 0.0, 'Exercice 3': 2.0, 'Note': 7.0, 'Orientation': 'PACES', 'Lieu': 'Réunion'}
    {'Nom': 'Dubard', 'Exercice 1': 5.0, 'Exercice 2': 4.5, 'Exercice 3': 4.0, 'Note': 13.5, 'Orientation': 'IUT', 'Lieu': 'Reunion'}
    {'Nom': 'Ribollet', 'Exercice 1': 3.0, 'Exercice 2': 3.5, 'Exercice 3': 5.0, 'Note': 11.5, 'Orientation': 'Licence STAPS', 'Lieu': 'Réunion'}
    {'Nom': 'Pajinadon', 'Exercice 1': 2.5, 'Exercice 2': 2.5, 'Exercice 3': 3.5, 'Note': 8.5, 'Orientation': 'ESIROI', 'Lieu': 'Réunion'}
    {'Nom': 'Catambara', 'Exercice 1': 3.0, 'Exercice 2': 0.5, 'Exercice 3': 3.5, 'Note': 7.0, 'Orientation': ' Licence Anglais', 'Lieu': 'Réunion'}
    {'Nom': 'Metayer', 'Exercice 1': 5.5, 'Exercice 2': 3.5, 'Exercice 3': 3.0, 'Note': 12.0, 'Orientation': 'PACES', 'Lieu': 'Métropole'}
    {'Nom': 'Salvado', 'Exercice 1': 5.5, 'Exercice 2': 5.5, 'Exercice 3': 6.0, 'Note': 17.0, 'Orientation': 'CPGE BCPST', 'Lieu': 'Réunion'}
    {'Nom': 'Bravin', 'Exercice 1': 3.0, 'Exercice 2': 1.5, 'Exercice 3': 3.5, 'Note': 8.0, 'Orientation': 'Ecole de Commerce', 'Lieu': 'Réunion'}
    {'Nom': 'Darnon', 'Exercice 1': 5.0, 'Exercice 2': 4.0, 'Exercice 3': 6.0, 'Note': 15.0, 'Orientation': 'CPGE BCPST', 'Lieu': 'Réunion'}
    

Résumé
======

Python possède une fonction de tri ``sorted`` qui retourne un tableau
trié, par défaut par ordre croissant. Pour trier un tableau de
dictionnaires, on doit utiliser le paramètre ``key`` qui indique à la
fonction ``sorted`` le nom d’une fonction qui retournera un ou des
critères de tri.

Pour fusionner deux tables ayant les mêmes attributs on utilise
simplement la concaténation (+) de tableaux. Si on a un attribut en
commun, on utilise un algorithme adapté pour réaliser la jointure

--------------

B. DARID |licence|

.. |licence| image:: ../../img/licence.png
