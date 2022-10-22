## REACT TASK

### The task is to create a page with the following layout using React and Typescript


![image 1](https://user-images.githubusercontent.com/47687566/197349057-821deffb-05e2-4056-a53a-e387b50eb716.png)


## Requirements:

- The website should be responsive and built with ReactJS functional 
components and Typescript
- Data should be downloaded asynchronously 
- Changing the number of elements in the json file should change the 
number of elements on the page
- The code should be placed in any repository along with instructions 
on how to run the project.
- [Nice to have] Unit test



### Next.js 

I used API routes provide as a solution to build own API with Next.js.
Any file inside the folder pages/api is mapped to /api/\*.
To read more about API Routes in next.js
Check the link to the [Link ](https://nextjs.org/docs/api-routes/introduction)


## MUI

I used Material UI.
Material-UI is simply a library that allows you to import and use different components to create a user interface in our React applications.

## The readFileSync() method

When you need to read the content of a file using NodeJS, you can use the built-in fs module which contains readFile() and readFileSync() methods.

The **readFileSync()** method will read the content of a file synchronously, so your JavaScript code execution will be stopped until the method is finished.

The **readFileSync()** method accepts two parameters:

- path (mandatory) - which is the relative path to the file you want to read (string type)
- options(optional) - the encoding format of the file content to read with (string or object type)

The readFileSync() method accepts two parameters:
```bash
fs.readFileSync("./data.txt", "utf8");
```

## Run Locally

Clone the project

```bash
https://github.com/CarolinaFledgling/task-chooosen.git
```

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
