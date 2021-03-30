# in-class
These are the in-class files that I will be creating during my lectures. You can find the base files on the **main** branch and you can find the final version on the **demo** branch.

Fork my repo (click on the Fork icon in the upper right hand corner of this screen. 

This creates a copy of this repo in your own personal Gitbhub account space, and allows you to modify and make changes without impacting the main repo.

To get updates from the main repo (info340c-sp21/in-class) then you need to do the following once you clone it locally:

1. open the folder in the command line `cd in-class`
2. `git remote add upstream https://github.com/info340c-sp21/in-class.git`
3. Now run `git remote -v` to verify that the upstream has been added

Now you can get updates from the main repo at any time by using `git pull upstream main`

If you find any files using the outdated "master" language instead of the preferred "main" nomenclature, you can use the following command to fix it both locally and remote:

`git branch -m master main`

`git push -u origin main`
