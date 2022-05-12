module.exports = function printPyramid(n, c="*") {

    for(var i=1;i<=n;i++){
        for(var space=n-i;space>=1;space--){
            process.stdout.write(" ");
        }
        for(var j=1;j<=i;j++){
            process.stdout.write(c);
        }

        for(var j=1;j<=i-1;j++){
            process.stdout.write(c);
        }
        console.log();
    }

};

/*
Expected output :

    *
   * *
  * * *
 * * * *
* * * * *

*/