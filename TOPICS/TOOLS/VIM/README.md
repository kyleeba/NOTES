### Vim notes
- The command for saving is as follows:
  ```
  >> press Escape to enter normal mode
  :w
  ```
- The command for quitting is as follows:
  ```
  >> press Escape to enter normal mode
  :q
  ```
- We can combine commands as follows:
  ```
  >> press Escape to enter normal mode
  :wq
  ```
  This will save and quit in the same command

- The command for finding all occurences of a word in the file and replacing
  it is as follows:
  ```
  >> press Escape to enter normal mode
  :%s/foo/bar/g	Change each 'foo' to 'bar' in all the lines.
  ```
  An example:
  ```
  :%s/escape/ESCAPE/g --> This will replace all occurences of 'escape' with 
  'ESCAPE'
  ```
