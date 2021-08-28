#in venv
. venv/bin/activate
#from venv python this project
python -m pip install --upgrade pip
pip install nodeenv
nodeenv nenv

. nenv/bin/activate

#cd ..
npx create-react-app react_sampl

cd react_sampl
npm start index.js
#deactivate_node