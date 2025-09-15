# js-functions-review

## Learning Target
- I am reviewing how to use functions including functions with parameters

## Success Criteria
- I can define functions using the function keyword 
- I can define functions that take one or more parameters
- I can use functions to break down larger problems into meaningful pieces (decomposition)


## Directions
1. Create ```index.html``` and use ! shortcut to add basic html doc tags
2. Set the ```<title>``` to *JS Functions Review* and add an ```<h1>``` that says the same
2. Create ```example1.js``` file and link to ```index.html``` using ```<script src="example1.js"></script>``` in the head section
3. Install Live Server
4. Add ```console.log("Example 1 script started");``` to the beginning of your script file and Go Live to verify it's setup correctly
6. Follow along with notes and examples
7. Complete the assignment below
8. Commit and push to turn in

## Example 1 Function Basics
1. Define and test a function that prints an ASCII cat face
    ```
     (\___/)
    ( =*.*= )
     (_/ \_)
    ``` 
2. Define and test a function that prints a fancy greeting to the user
   ```
   ***********************
   * Welcome, Joe!!! 
   ***********************
   ```

## Example 2 Using Functions for Problem Decomposition
Use functions to write a program that will prompt the user for a number and then print a "pyramid" of ```*``` with the given number of rows to the console as shown below.
```javascript
*
**
***
****
```
1. Create and link a new script named ```example2.js```
2. Define a function named ```printRow(num)``` that will print a row of ```*``` to the console. The parameter ```num``` specifies how many ```*``` to print.
3. Define a function function ```printPyramid(rows)``` that will print a "pyramid" of ```*``` to the console.
4. *BONUS* Make the pyramid symmetrical
    ```
       *
      ***
     *****
    *******
    ```
  

## Exercise
Use functions to write a program that prompts the user for the size of a square and uses the characters ```-``` and ```|``` to print a "square" to the console as shown below.
```
-----
|   |
|   |
|   |
-----
```
1. Create and link a new script named ```myscript.js```
2. Decompose the problem into smaller steps e.g. One function might print the top/bottom ```----``` while another prints ```|   |```
3. Write and test your solution
    - In the browser console settings, uncheck the box next to "Group similar messages in the console"
4. See if you can modify it to look more square when its printed

## Challenge
Use functions to write a program that prompts the user for a height and then draws an ASCII "Christmas tree" using ```o * ^ ~ +``` for the branches and decorations.
```
o*.
+*..o
o~^~*+~
~*~~^.~++
o~*~*o+^**+
``` 
- The chars that form each line should be random (See [Math.random()](https://www.w3schools.com/js/js_random.asp))
- Bonus if your tree is symmetrical
```
    o*.
   +*..o
  o~^~*+~
 ~*~~^.~++
o~*~*o+^**+
```
