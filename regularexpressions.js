


/e/g = `match every single "e" inside of the search`
/e+/g = `match "e" if at least one "e"`
/ea?/g = `match "e" then "a" only if it follows "e"`
/ea*/g =  `match "e" and "a" is optional; but can match as many times as possible`
/.ea/g =  `match "e" and "a" and any other character`
/\w/g = `match any word characters`
/\W/g = `match everything but word characters`
/\s/g = `match any whitespace characters.`
/\S/g = `match everything but whitespace characters.` 
/^t/ 
/\w{4}/g = `any word with four digits in a row`

/[fc]at/g `match "f or "c" then "a" and "t" `
/[a-z]at/g `match "a" through "z" then "a" and "t" `
/(t|T)he/g `match lowercase "t" or uppercase "T" and then "he and "`

/(t|T){2, 3}he/g `match 2-2 lowercase "t" or uppercase "T"s and then "he and "`
/(e){2, 3}he/g `match 2-3 letter "e"`

/^T/g  `match "t" if its the first chracter of string.`
/^T/gm  `match "t" if its the first chracter of each line.`
/\.$/g  `match "." if its the last chracter of string.`
/\.$/gm  `match "." if its the last chracter of each line.`

`The fat cat ran down the street, It was searching for a mouse eat.`