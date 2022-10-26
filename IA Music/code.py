import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score 

mc = pd.read_csv("music.csv")
X=mc.drop(columns=["genre"])
y=mc.drop(columns=["age","gender"])

X_train , X_test , y_train , y_test = train_test_split(X,y,test_size=0.2)

model = DecisionTreeClassifier()
model.fit(X_train,y_train)

predictions = model.predict(X_test)

scor=accuracy_score(y_test,predictions)

scor

# ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import joblib
mc = pd.read_csv("music.csv")
X=mc.drop(columns=["genre"])
y=mc.drop(columns=["age","gender"])



model = DecisionTreeClassifier()
model.fit(X,y)

joblib.dump(model,'patataMusicRecomander.joblib')

# predictions = model.predict([[1,1]])
# predictions

# ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

import joblib
model=joblib.load('patataMusicRecomander.joblib')
predictions = model.predict([[31,1]])
predictions

# //////////////////////////////////////////////////////////////////////////////////

import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn import tree

mc = pd.read_csv("music.csv")
X=mc.drop(columns=["genre"])
y=mc.drop(columns=["age","gender"])



model = DecisionTreeClassifier()
model.fit(X,y)
z=['Acoustic','Classical','Dance','HipHop','Jazz']


# export_graphviz(model, 'tree.dot', feature_names = FEATURE_NAMES)

tree.export_graphviz(model,'musicRecomanderGraph.dot',feature_names=['age','gender']
                     ,

                     label='all',
                     rounded=True,
                     filled=True,
                                          class_names=["1","2",'3'3'],

                    )

