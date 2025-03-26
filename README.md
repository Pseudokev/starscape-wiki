# Starscape Wiki
This is the public repository for the starscape wiki site.

# How to contribute

The wiki's articles are written in YAML file format. When the website is built, the compiler reads these YAML files and generates the corresponding HTML files and paths. If you do not know how to write YAML, look it up its not hard, it's basically just JSON. Resulting page URLs are based off of the YAML file's path relative to the `pages` folder, so for example, the article `src/content/pages/resources/korrelite.yml` would get the URL `pseudokev.github.io/starscape-wiki/resources/korrelite`.

## **Method 1: Live preview (difficult)**
If you want to write an article and be able to preview what it looks like as you edit, you can clone this repository, write your article, then build and run the website on your machine. This requires a few things. This method also applies if you know web development and want to contribute to the website's appearance and functionality.

1. If you do not have it, download and isntall node.js [here](https://nodejs.org/en/download/).
2. Donwload Microsoft Visual Studio Code, it's where you will edit the files.
3. Clone this repository to your machine and open it in visual studio code.
4. Open a command line and navigate to the repository's directory by typing `cd path/to/folder`. You can get the path to the folder by opening it in file explorer and copying it from the bar next to the search bar.
5. Type `npm install`, this will install the sites dependencies. If this command does not work, or says `npm` is not a recognized command, try running the command bar as an administrator, repeating step 4 and 5.
6. To make sure everything has run correctly, type `npm run dev`. This should compile the website and give you a `localhost` URL. paste this URL into your browser and it should show the website. Localhost means it is only visible to your machine, and sending this URL to others will not let them see it. To stop the preview, simply enter `q` into the command line.

You can now write articles! Articles are located in `src/content/pages`. Once your article is written with the correct format, you should be able to preview it by directly typing its URL directly into your browser, or it should be accessible by typing the article title into the search bar on the website.

To submit your additions or changes to the official wiki, 

## **Method 2: No preview (easy)**
If you don't want to go through all the steps of live previewing you can simply grab one of the templates provided and write the article in a basic text editor like notepad or notepad++, However Visual Studio Code with the YAML extension is recommended as it will highlight syntax errors for you and looks nicer.

To submit your article, just contact pseudokev for now i guess and send him the file.