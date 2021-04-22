import sys
import os

try:
    moduleName = sys.argv[1]
except IndexError:
    raise SystemExit(f"Usage: {sys.argv[0]} is missing a arg for module name")

moduleDirectories = ["routes","models","utills","controllers","enums"] 

project_root = os.path.dirname(os.path.dirname(__file__))
path = f'{project_root}\\Modules\\{moduleName}'

os.mkdir(path)

for module in moduleDirectories:
    os.mkdir(f'{path}\\{module}')
    open(f"{path}\\{module}\\index.ts", "a")


