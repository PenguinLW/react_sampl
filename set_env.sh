#in venv
. venv/bin/activate #. venv/bin/activate &&. nenv/bin/activate
#from venv python this project
python -m pip install --upgrade pip
pip install nodeenv
nodeenv nenv

. nenv/bin/activate

npm install npm npx node

npx create-react-app react_sampl

##cd react_sampl
##npm start index.js

#deactivate
#deactivate_node
