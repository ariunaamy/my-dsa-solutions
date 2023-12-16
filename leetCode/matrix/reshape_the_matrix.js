/*Lettocde problem #566
 Reshape the Matrix
Easy
3.4K
400
Companies
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/

 
var matrixReshape = function(mat, r, c) {
    if(mat[0].length * mat.length !== r * c) return mat; 
    let result = [];
    let flatten = mat.flat();
    while (result.length<r){
        result.push(flatten.splice(0,c))
    }
    return result;
};

console.log(matrixReshape([[1,2],[3,4]], 1, 4)) //[[1,2,3,4]]
