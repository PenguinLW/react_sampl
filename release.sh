#git clone -o react_sampl https://github.com/Kovalsky95/react_sampl.git
#git config --global user.email "diana1997525@gmail.com"
#git config --global user.name "Kovalsky95"
#git config --global credential.helper cache
git config --global credential.helper "cache --timeout=3600"
#git config credential.helper store
#git config --unset credential.helper
git pull --all
git add .
git commit -m PenguinL
git push --set-upstream react_sampl master